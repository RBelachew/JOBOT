import unittest
from flask import Flask, json
from server import app
from server import delete_user_from_db

class LoginRegisterTestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_login_admin_success(self):
        response = self.app.post('/login', data=json.dumps({"userName": "samuel", "Password": "1"}),
                                 content_type='application/json')
        data = json.loads(response.data)
        self.assertTrue(data['success'])
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Admin login success')

    def test_login_failure(self):
        response = self.app.post('/login', data=json.dumps({"userName": "nonexistent", "Password": "wrongpassword"}),
                                 content_type='application/json')
        data = json.loads(response.data)
        self.assertFalse(data['success'])
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Username or password incorrect')

    def test_register_success(self):
        response = self.app.post('/register', data=json.dumps({"user_name": "newuser", "password": "newpassword"}),
                                 content_type='application/json')
        data = json.loads(response.data)
        self.assertTrue(data['success'])
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Your new user is created')
        delete_user_from_db("newuser","newpassword")


    def test_register_invalid(self):
        response = self.app.post('/register', data=json.dumps({"user_name": "", "password": ""}),
                                 content_type='application/json')
        data = json.loads(response.data)
        self.assertFalse(data['success'])
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Invalid username or password')

    def test_register_existing_user(self):
        response = self.app.post('/register', data=json.dumps({"user_name": "test", "password": "test"}),
                                 content_type='application/json')
        data = json.loads(response.data)
        self.assertFalse(data['success'])
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'User name already exists')


if __name__ == '__main__':
    unittest.main()
