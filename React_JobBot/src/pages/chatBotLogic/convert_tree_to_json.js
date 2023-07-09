var jobTypes;
var successfulEnding;
var selfJobSearch;
var goodBy2;
var displayingAdaptedJobs;
var isAdditionalJobs;
var enterEmail;
var areas = {
  title: "",
  text: "In which areas are you interested?",
  options: ["South", "North", "Central"],
  children: [
    {
      title: "user selected areas",
      text: "Excellent, we will consider priority for these areas",
      children: [
        (jobTypes = {
          title: "next question",
          text: "Select a job type",
          options: ["Full time", "Part time"],
          children: [
            {
              title: "jobs scanning",
              text: "Just a moment please, I'm looking for relevant jobs for you",
              children: [
                {
                  title: "display appropriate jobs",
                  text: "Please select appropriate jobs",
                  children: [
                    {
                      title: "user selected 'Nothing fits' or up to 2 jobs",
                      text: "Would you like to see jobs with an accurate match?",
                      options: ["Yes", "No"],
                      children: [
                        {
                          title: "user refused to an accurate match",
                          text: "Why don't you want offers anymore?",
                          children: [
                            (selfJobSearch = {
                              title: "send to self job search",
                              text: "Ok, you have an opportunity to self job search from our jobs pool",
                              children: [
                                (goodBy2 = {
                                  title: "goodbye",
                                  text: "It was a pleasure to assist you. Thank you! \u{1F600}",
                                }),
                              ],
                            }),
                          ],
                        },
                        {
                          title: "user agreed to an accurate match",
                          text: "Type your experience and education in the selected field",
                          children: [
                            {
                              //
                              title: "user typed his experience and education",
                              text: "Select additional accuracy levels (Multiple choice)",
                              options: [
                                "Experience level",
                                "Desired city",
                                "Job title",
                                "Other",
                              ],
                              children: [
                                (displayingAdaptedJobs = {
                                  title:
                                    "user selected 'Other' level of accuracy",
                                  text: "Just a moment please, I'm looking for more precise jobs for you",
                                  children: [
                                    {
                                      title: "JOBOT search more precise jobs",
                                      text: "Please select appropriate jobs",
                                      children: [
                                        {
                                          ...selfJobSearch,
                                          title: "user selected 'Nothing fits",
                                        },
                                        (successfulEnding = {
                                          title: "user selected at least 1 job",
                                          text: "Wonderful \u{1F600} How would you like to continue? (Multiple choice)",
                                          options: [
                                            "Display my choices again",
                                            "Email them to me",
                                            "Just keep going",
                                          ],
                                          children: [
                                            (isAdditionalJobs = {
                                              title: "self job search",
                                              text: "Are you interested in viewing additional jobs in our web?",
                                              options: ["Yes", "No"],
                                              children: [
                                                {
                                                  ...selfJobSearch,
                                                  title:
                                                    "user selected 'yes' for viewing additional jobs",
                                                },
                                                {
                                                  ...goodBy2,
                                                  title:
                                                    "user selected 'no' for viewing additional jobs",
                                                },
                                              ],
                                            }),
                                            {
                                              title:
                                                "user selected 'display choices'",
                                              text: "There are your selected jobs",
                                              children: [isAdditionalJobs],
                                            },
                                            (enterEmail = {
                                              title: "user selected 'email me'",
                                              text: "Please enter an email",
                                              children: [
                                                {
                                                  title: "user sended an email",
                                                  text: "The jobs were sent",
                                                  children: [isAdditionalJobs],
                                                },
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                  ],
                                }),
                                {
                                  title: "user selected city accuracy",
                                  text: "Select cities in your chosen regions",
                                  children: [
                                    {
                                      ...displayingAdaptedJobs,
                                      title: "user selected cities",
                                    },
                                  ],
                                },
                                {
                                  title:
                                    "user selected experience level accuracy",
                                  text: "Select an experience level",
                                  options: [
                                    "Intern",
                                    "Junior",
                                    "Senior",
                                    "Other",
                                  ],
                                  children: [
                                    {
                                      ...displayingAdaptedJobs,
                                      title:
                                        "user selected an experience level",
                                    },
                                  ],
                                },
                                {
                                  title: "user selected job title accuracy",
                                  text: "Enter a job title",
                                  children: [
                                    {
                                      ...displayingAdaptedJobs,
                                      title: "user inserted a job title",
                                    },
                                  ],
                                },
                              ],
                            }, //
                          ],
                        },
                      ],
                    },
                    {
                      ...successfulEnding,
                      title: "user selected 3 or more jobs",
                    },
                  ],
                },
              ],
            },
          ],
        }),
      ],
    },
    // {...jobTypes,title:"user selected 'all areas'"}
  ],
};

var goodBy1;
var specificCompany;
var chatFlow = {
  title: "greeting",
  text: "Hello, nice to meet you, I am JOBOT. I am here to help you find your dream job!",
  children: [
    {
      title: "field",
      text: "Select a field for job",
      options: [
        "Engineering",
        "Marketing",
        "Human Resources",
        "Healthcare",
        "Arts & Design",
        "Finance & Accounting",
        "Other",
      ],
      children: [
        {
          title: "user selected 'other' field",
          text: "Sorry, there is not a job to offer you. Would you like us to save the chat details for future services?",
          options: ["Yes", "No"],
          children: [
            (goodBy1 = {
              title: "user agreed to save his details",
              text: "Thank you for visiting our site. \u{1F600}",
            }),
            { ...goodBy1, title: "user refused to save his details" },
          ],
        },
        {
          title: "user selected fields",
          text: "Select a job title at this field (Multiple jobs)",
          options: [
            {
              Healthcare: [
                "Medical Assistant",
                "Health representative",
                "Production Scientist",
                "Other",
              ],
              Marketing: [
                "Product Marketing",
                "Data Analyst",
                "Marketing Designer",
                "Other",
              ],
              "Arts & Design": [
                "Designer",
                "Chip Design Architect",
                "Front End Developer",
                "Other",
              ],
              "Human Resources": [
                "Digital Key Account",
                "Global HR Planning & Operations",
                "Talent Acquisition Specialist",
                "Other",
              ],
              "Finance & Accounting": [
                "VP Finance",
                "Business Development",
                "Finance Controller",
                "Other",
              ],
              Engineering: [
                "QA Engineer",
                "Network Engineer",
                "Software Engineer",
                "Other",
              ],
            },
          ],
          children: [
            (specificCompany = {
              title: "user selected job titles",
              text: "Great! Do you have any specific companies that you would like to work at? (Multiple companies)",
              options: [
                {
                  Healthcare: [
                    "Diageo",
                    "Edwards Lifesciences",
                    "AstraZeneca",
                    "Pfizer",
                    "I'm open to any company",
                  ],
                  Marketing: [
                    "Eybna Technologies",
                    "InspHire",
                    "Seperia",
                    "Google",
                    "I'm open to any company",
                  ],
                  "Arts & Design": [
                    "Mobileye",
                    "InspHire",
                    "Oski Technology",
                    "Palo Alto Networks",
                    "I'm open to any company",
                  ],
                  "Human Resources": [
                    "JobInfo",
                    "ASM Global",
                    "Adidas",
                    "Solaredge",
                    "I'm open to any company",
                  ],
                  "Finance & Accounting": [
                    "Deloitte",
                    "Mobileye",
                    "Barclays",
                    "Adidas",
                    "I'm open to any company",
                  ],
                  Engineering: [
                    "Google",
                    "Deloitte",
                    "SQLink",
                    "Check Point Software Technologies Ltd.",
                    "I'm open to any company",
                  ],
                },
              ],
              children: [
                {
                  title: "user selected companies",
                  text: "Excellent, we will consider priority for these companies",
                  children: [{ ...areas, title: "next question" }],
                },
                // {...areas,title: "user selected 'all companies'"}
              ],
            }),
          ],
        },
      ],
    },
  ],
};

export default chatFlow;
