from bs4 import BeautifulSoup
import json
import requests
from pymongo import MongoClient

# Define job categories and their corresponding filenames
JOB_CATEGORIES = {
    'marketing_full_time': ['marketing_full_time1', 'marketing_full_time2', 'marketing_full_time3'],
    'marketing_junior': ['marketing_junior1', 'marketing_junior2'],
    'marketing_senior': ['marketing_senior1', 'marketing_senior2', 'marketing_senior3'],
    'healthcare_full_time': ['healthcare_full_time1', 'healthcare_full_time2', 'healthcare_full_time3'],
    'healthcare_junior': ['healthcare_junior'],
    'healthcare_senior': ['healthcare_senior1', 'healthcare_senior2', 'healthcare_senior3'],
    'humanresources_full_time': ['humanresources_full_time1', 'humanresources_full_time2'],
    'humanresources_senior': ['humanresources_senior1', 'humanresources_senior2'],
    'design_full_time': ['design_full_time1', 'design_full_time2', 'design_full_time3'],
    'design_senior': ['design_senior1', 'design_senior2', 'design_senior3'],
    'engineer_full_time': ['engineer_full_time1', 'engineer_full_time2', 'engineer_full_time3'],
    'engineer_junior': ['engineer_junior1', 'engineer_junior2', 'engineer_junior3'],
    'engineer_senior': ['engineer_senior1', 'engineer_senior2', 'engineer_senior3'],
    'finance_full_time': ['finance_full_time1', 'finance_full_time2', 'finance_full_time3'],
    'finance_junior': ['finance_junior1', 'finance_junior2'],
    'finance_senior': ['finance_senior1', 'finance_senior2', 'finance_senior3']
}

# Additional job categories
ADDITIONAL_JOBS = {
    'job_marketing': ["Product Marketing", "Data Analyst", "Marketing Designer"],
    'job_healthcare': ["Medical Assistant", "Health representative", "Production Scientist"],
    'job_humanresources': ["Digital Key Account", "Global HR Planning & Operations", "Talent Acquisition Specialist"],
    'job_design': ["Designer", "Chip Design Architect", "Front End Developer"],
    'job_engineer': ["QA Engineer", "Network Engineer", "Software Engineer"],
    'job_finance': ["VP Finance", "Business Development", "Finance Controller"]
}


def scrap(name):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/50.0.2661.102 Safari/537.36'}
    # Read file
    file = name + ".html"
    with open(file, "r", encoding="utf-8") as f:
        html = f.read()

    # Parse the HTML with BeautifulSoup
    soup = BeautifulSoup(html, "html.parser")

    divs1 = soup.find_all("div", class_="d-flex flex-column pl-sm css-3g3psg css-1of6cnp e1rrn5ka4")
    divs2 = soup.find_all("div", class_="d-flex flex-column css-x75kgh e1rrn5ka3")
    # Initialize an empty list to store the data
    data = []

    # Iterate over each div
    for div1, div2 in zip(divs1, divs2):
        # Try to find an 'a' tag with class "css-l2wjgv e1n63ojh0 jobLink"
        try:
            company_a = div1.find("a", class_="css-l2wjgv e1n63ojh0 jobLink")
            company = company_a.text
        except:
            company = ""

        # Try to find an 'a' tag with class "css-nodxsq jobLink css-1rd3saf eigr9kq3"
        try:
            job_a = div1.find("a", class_="jobLink css-1rd3saf eigr9kq3")
            if job_a is None:
                job_a = div1.find("a", class_="css-nodxsq jobLink css-1rd3saf eigr9kq3")
                if job_a is None:
                    job_a = div1.find("a", class_="jobLink css-1rd3saf eigr9kq2")
            job = job_a.text
        except:
            job = ""

        # Try to find a 'span' tag with class "css-3g3psg pr-xxsm css-iii9i8 e1rrn5ka0"
        try:
            city_span = div1.find("span", class_="css-3g3psg pr-xxsm css-iii9i8 e1rrn5ka0")
            city = city_span.text
        except:
            city = ""

        try:
            date_d = div1.find("div", class_="d-flex align-items-end pl-std css-1vfumx3")
            date = date_d.text
        except:
            date = ""

        try:
            rating_span = div2.find("span", class_="css-2lqh28 e1cjmv6j1")
            rating = rating_span.text
        except:
            rating = ""

        a = div1.find('a')
        href = a['href']
        response2 = requests.get(href, headers=headers)
        if response2.status_code == 200:
            so = BeautifulSoup(response2.content, 'html.parser')
            try:
                desc = so.find_all("div", class_="css-1lkoiaj e1eh6fgm1")
                description = desc[0].text
            except:
                description = ""
            try:
                site_div = so.find_all("div", class_="css-0 e1h54cx80")
                apply = site_div[0].text
                if apply == "Apply on employer site":
                    # site = site_div[0].find("a", class_="gd-ui-button applyButton e1ulk49s0 css-5xi56s evpplnh0")
                    site = site_div[0].find("a", class_="gd-ui-button d-flex align-items-center css-oojfh0 e1ulk49s0 "
                                                        "job-view-1rp50a3 evpplnh1")
                    link = "https://www.glassdoor.com" + site['href']
                else:
                    link = ""
            except:
                link = ""
        else:
            print(f"Request was not successful. Status code: {response2.status_code}")
            description = ""
            link = ""

        # Append the data to the list
        data.append(
            {"company": company, "job": job, "city": city, "date": date, "rating": rating, "link": link,
             "description": description})

    # Open data.json and write the data
    js = name + ".json"
    with open(js, "w") as file:
        json.dump(data, file)


def merge_json_files(filess, output_file):
    result = []
    for fi in filess:
        with open(fi, 'r') as ff:
            dataa = json.load(ff)
            result.append(dataa)

    with open(output_file, 'w') as fff:
        json.dump(result, fff)


def insert_db(collec, file):
    cluster = MongoClient("mongodb+srv://samuelmemmi:1234@cluster0.e4sf8mm.mongodb.net/?retryWrites=true"
                          "&w=majority")
    db = cluster["chatbot"]
    collection = db[collec]
    file = file + ".json"
    with open(file, 'r') as ffff:
        da = json.load(ffff)
        data_len = len(da)
        if data_len < 4:
            for i in range(data_len):
                collection.insert_many(da[i])
        else:
            collection.insert_many(da)


def delete_duplicate_db():
    cluster = MongoClient("mongodb+srv://samuelmemmi:1234@cluster0.e4sf8mm.mongodb.net/?retryWrites=true"
                          "&w=majority")
    db = cluster["chatbot"]

    # List all collections in the database
    collections = db.list_collection_names()

    # Iterate over each collection
    for collection_name in collections:
        collection = db[collection_name]

        # Use aggregation to find and delete duplicates
        pipeline = [
            {
                '$group': {
                    '_id': {
                        'company': '$company',
                        'job': '$job',
                        'city': '$city'
                    },
                    'duplicates': {'$addToSet': '$_id'},
                    'count': {'$sum': 1}
                }
            },
            {
                '$match': {
                    'count': {'$gt': 1}
                }
            },
            {
                '$project': {
                    'duplicates': 1
                }
            }
        ]

        duplicate_groups = list(collection.aggregate(pipeline))

        # Delete the duplicate documents
        for group in duplicate_groups:
            duplicate_id = group['duplicates'][0]  # Get the ID of the first document
            collection.delete_one({'_id': duplicate_id})

        print(f'Duplicate deleted successfully in collection: {collection_name}')

    print('Duplicates deletion process completed.')


# Function to perform scraping
def scrape_jobs(job_list):
    for job in job_list:
        scrap(job)


# Function to merge JSON files
def merge_files(file_list, output_filename):
    merge_json_files(file_list, output_filename)


# Function to insert into the database
def insert_into_db(job_category, db_namee):
    insert_db(job_category, db_namee)


if __name__ == "__main__":
    # Scraping and merging files for each job category
    for category, files in JOB_CATEGORIES.items():
        scrape_jobs(files)
        merge_files([f + '.json' for f in files], category + '.json')
        insert_into_db(category, category)

    full_time_keys = [key for key, value in JOB_CATEGORIES.items() if 'full_time' in key]

    i = 0

    # Scraping, merging, and inserting for additional job categories
    for db_name, jobs in ADDITIONAL_JOBS.items():
        scrape_jobs(jobs)
        merge_files([j + '.json' for j in jobs], db_name + '.json')
        insert_into_db(full_time_keys[i], db_name)
        i += 1
