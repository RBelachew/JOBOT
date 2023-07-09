import unittest
from server import is_company_eligible as ICE, filter_jobs_company as FJC

OTHER_LIST_ENGINEER = ["qa engineer", "network engineer", "software engineer"]


class CompanyFilterTestCase(unittest.TestCase):
    def setUp(self):
        # Define test data
        self.documents = [
            {"_id": 1, "job": "Software Engineer", "company": "Google", "city": "Netanya",
             "description": "Job description 1"},
            {"_id": 2, "job": "ML Engineer", "company": "Microsoft", "city": "Netanya",
             "description": "Job description 2"},
            {"_id": 3, "job": "Software Engineer", "company": "Adidas", "city": "Netanya",
             "description": "Job description 3"},
            {"_id": 4, "job": "Medical Assistant", "company": "Healthcare Solutions", "city": "Tel Aviv",
             "description": "Job description 4"},
            {"_id": 5, "job": "Marketing Designer", "company": "Adidas", "city": "Tel Aviv",
             "description": "Job description 5"},
            {"_id": 6, "job": "QA Engineer", "company": "Deloitte", "city": "Tel Aviv",
             "description": "Job description 6"},
        ]
        self.cities = ["Netanya", "Tel Aviv"]
        self.other_list = OTHER_LIST_ENGINEER

    def test_is_company_eligible_true(self):
        titles = ["Software Engineer", "QA Engineer"]
        companies = ["Google", "Deloitte"]

        document = {"_id": 1, "job": "Software Engineer", "company": "Google", "city": "Netanya",
                    "description": "Job description 1"}

        result = ICE(document, titles, companies, self.cities, self.other_list)
        self.assertTrue(result)

    def test_is_company_eligible_other_true(self):
        document = {"_id": 2, "job": "ML Engineer", "company": "Microsoft", "city": "Netanya",
                    "description": "Job description 2"}
        titles = ["Other"]
        companies = ["Microsoft"]

        result = ICE(document, titles, companies, self.cities, self.other_list)
        self.assertTrue(result)

    def test_is_company_eligible_false(self):
        titles = ["Software Engineer", "QA Engineer"]
        companies = ["Google", "Deloitte"]

        document = {"_id": 3, "job": "Software Engineer", "company": "Adidas", "city": "Netanya",
                    "description": "Job description 3"}

        result = ICE(document, titles, companies, self.cities, self.other_list)
        self.assertFalse(result)

    def test_filter_jobs_company(self):
        list_jobs = []
        titles = ["Software Engineer", "QA Engineer", "Other"]
        companies = ["Google", "Deloitte", "Microsoft"]

        result = FJC(self.documents, list_jobs, titles, companies, self.cities, self.other_list,[])
        expected_result = [
            {"_id": 1, "job": "Software Engineer", "company": "Google", "city": "Netanya",
             "description": "Job description 1"},
            {"_id": 2, "job": "ML Engineer", "company": "Microsoft", "city": "Netanya",
             "description": "Job description 2"},
            {"_id": 6, "job": "QA Engineer", "company": "Deloitte", "city": "Tel Aviv",
             "description": "Job description 6"}
        ]
        self.assertEqual(result, expected_result)


if __name__ == '__main__':
    unittest.main()
