import axios from "axios";
import emailjs from "@emailjs/browser";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  //function calling server to store chat details in DB
  saveHistoryInDB = (node) => {
    node.getSelected()["displayed jobs"] &&
      delete node.getSelected()["displayed jobs"];

    const current = new Date();

    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    //summarize all data into history object
    var history = {
      ...node.getSavedInDB(),
      "client details": node.getRegistrationDetails(),
      field: node.getSelected().field,
      "conversation content": node.getHistoryChat(),
      "displayed jobs": node.getSavedInDB()["displayed jobs"]
        ? node.getSavedInDB()["displayed jobs"]
        : "-",
      "selected jobs": node.getSavedInDB()["selected jobs"]
        ? node.getSavedInDB()["selected jobs"]
        : "-",
      "experiance & education": node.getSelected()["job Requirements"]
        ? node.getSelected()["job Requirements"]
        : "-",
      "feedback on termination": node.getSavedInDB()["feedback on termination"]
        ? node.getSavedInDB()["feedback on termination"]
        : "-",
      "selected features": node.getSelected(),
      date: date,
    };
    node.setSavedInDB(history);

    //call server to save the history data
    axios
      .post(
        "/clienthistory",
        {
          history: history,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
        console.log("save data in DB ", history);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  };

  // if there is an error in server display error message
  errorMessages = (node, errorMessage) => {
    const message = this.createChatBotMessage(errorMessage, {
      widget: "errorMessages",
    });
    this.addMessageToState(message, node);
  };

  //finish the chat with option of self job search
  selfSearch = (node, Freetxt) => {
    //display link to self job search page
    var txt1 = node.getNextResponse().children[0].text;
    const message1 = this.createChatBotMessage(txt1, {
      widget: "moreInfo",
    });
    this.addMessageToState(message1, node);

    //goodbye
    var txt2 = node.getNextResponse().children[0].children[0].text;
    const message2 = this.createChatBotMessage(txt2);

    //set history
    if (
      typeof Freetxt === "object" &&
      Freetxt !== null &&
      (Freetxt.flag === "noJobs" || Freetxt.flag === "feedback")
    ) {
      //adding the bot messages into the end of history
      var newHistoryArray = node.getHistoryChat();
      var lastBotHistory = newHistoryArray.pop();
      lastBotHistory.bot.push(txt1, txt2);
      var updatedBotHistory = { bot: lastBotHistory.bot };
      node.setHistoryChat([...newHistoryArray, updatedBotHistory]);
    } else {
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: [Freetxt] },
        { bot: [txt1, txt2] },
      ]);
    }

    node.setIsFeedback(0);
    this.addMessageToState(message2, node);
    this.saveHistoryInDB(node);
  };

  //display bot response after client's feedback
  responseToFeedback = (node, feedback, JOBOTresponse) => {
    const message = this.createChatBotMessage(JOBOTresponse);
    this.addMessageToState(message, node);
    //store the messages and the selected answers
    node.setHistoryChat([
      ...node.getHistoryChat(),
      { user: [feedback] },
      { bot: [JOBOTresponse] },
    ]);
    node.setSelected({ ...node.getSelected(), feedback: feedback });
  };

  handleField = (node, opt) => {
    //go to the job titles question
    var txt = node.getNextResponse().children[0].children[1].text;
    const message = this.createChatBotMessage(txt, {
      widget: "jobTitles",
    });

    //store the bot messages and the selected answers
    node.setSelected({ ...node.getSelected(), field: opt });
    node.setHistoryChat([
      ...node.getHistoryChat(),
      {
        bot: [
          node.getNextResponse().text,
          node.getNextResponse().children[0].text,
        ],
      },
      { user: [opt] },
      { bot: [txt] },
    ]);
    //go to the next node in the decision tree
    node.setNextResponse(node.getNextResponse().children[0].children[1]);
    this.addMessageToState(message, node);
  };

  handleOtherField = (node, opt) => {
    //go to the next question
    var txt = node.getNextResponse().children[0].children[0].text;
    const message = this.createChatBotMessage(txt, {
      widget: "approval",
    });
    //store the messages and the selected answers
    node.setSelected({ ...node.getSelected(), field: opt });
    node.setHistoryChat([
      ...node.getHistoryChat(),
      {
        bot: [
          node.getNextResponse().text,
          node.getNextResponse().children[0].text,
        ],
      },
      { user: [opt] },
      { bot: [txt] },
    ]);
    //go to the next node in the decision tree
    node.setNextResponse(node.getNextResponse().children[0].children[0]);
    this.addMessageToState(message, node);
  };

  handleApproval(node, opt) {
    //case of user selected 'other' field
    if (node.getNextResponse().title === "user selected 'other' field") {
      //finish the chat with link to 'about' page
      var txt = node.getNextResponse().children[0].text;
      const message = this.createChatBotMessage(txt, {
        widget: "moreInfo",
      });

      //store the messages and the selected answers
      node.setSelected({ ...node.getSelected(), approval: opt });
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: [opt] },
        { bot: [txt] },
      ]);
      this.addMessageToState(message, node);
      //save history only if user agreed
      if (opt === "Yes") {
        this.saveHistoryInDB(node);
      }
    }
    //case of asking for self job search
    else if (node.getNextResponse().title.includes("self job search")) {
      if (opt === "Yes") {
        this.selfSearch(node, opt);
      } else {
        //finish chat without displaying link for 'self job search'
        var txt = node.getNextResponse().children[1].text;
        const message = this.createChatBotMessage(txt);
        node.setHistoryChat([
          ...node.getHistoryChat(),
          { user: [opt] },
          { bot: [txt] },
        ]);
        this.addMessageToState(message, node);
        this.saveHistoryInDB(node);
      }
    }
    //case of asking for accurate match
    else if (
      node.getNextResponse().title ===
      "user selected 'Nothing fits' or up to 2 jobs"
    ) {
      //user want an accurate match
      if (opt === "Yes") {
        node.setHistoryChat([...node.getHistoryChat(), { user: [opt] }]);
        //convert the message box to visible for typing education and experiance
        document.documentElement.style.setProperty(
          "--button-visibility",
          "visible"
        );
        this.requirementsWidget(node);
      } else {
        //user did not want an accurate match
        var txt = node.getNextResponse().children[0].text;
        const message = this.createChatBotMessage(txt);
        node.setHistoryChat([
          ...node.getHistoryChat(),
          { user: [opt] },
          { bot: [txt] },
        ]);
        node.setIsFeedback(1);
        node.setNextResponse(node.getNextResponse().children[0]);
        this.addMessageToState(message, node);
        //convert the message box to visible for typing feedback
        document.documentElement.style.setProperty(
          "--button-visibility",
          "visible"
        );
      }
    }
  }

  handleJobTitle = (node, opts) => {
    var txt = node.getNextResponse().children[0].text;
    const message = this.createChatBotMessage(txt, {
      widget: "companies",
    });
    //store the messages and the selected answers
    node.setSelected({ ...node.getSelected(), JobTitles: opts });
    node.setHistoryChat([
      ...node.getHistoryChat(),
      { user: opts },
      { bot: [txt] },
    ]);
    //go to next node of the decision tree
    node.setNextResponse(node.getNextResponse().children[0]);
    this.addMessageToState(message, node);
  };

  handleCompany = (node, opts) => {
    var txt1 = node.getNextResponse().children[0].text;
    const message1 = this.createChatBotMessage(txt1);
    this.addMessageToState(message1, node);

    var txt2 = node.getNextResponse().children[0].children[0].text;
    const message2 = this.createChatBotMessage(txt2, {
      widget: "areas",
    });
    //store the messages and the selected answers
    node.setSelected({ ...node.getSelected(), companies: opts });
    node.setHistoryChat([
      ...node.getHistoryChat(),
      { user: opts },
      { bot: [txt1, txt2] },
    ]);
    //go to next node of the decision tree
    node.setNextResponse(node.getNextResponse().children[0].children[0]);
    this.addMessageToState(message2, node);
  };

  handleArea(node, opts) {
    var txt1 = node.getNextResponse().children[0].text;
    const message1 = this.createChatBotMessage(txt1);
    this.addMessageToState(message1, node);

    var txt2 = node.getNextResponse().children[0].children[0].text;
    const message2 = this.createChatBotMessage(txt2, {
      widget: "jobTypes",
    });
    node.setSelected({ ...node.getSelected(), areas: opts });
    node.setHistoryChat([
      ...node.getHistoryChat(),
      { user: opts },
      { bot: [txt1, txt2] },
    ]);
    node.setNextResponse(node.getNextResponse().children[0].children[0]);
    this.addMessageToState(message2, node);
  }

  handleJobType(node, opts) {
    //asking to wait
    var txt1 = node.getNextResponse().children[0].text;
    const message1 = this.createChatBotMessage(txt1);
    this.addMessageToState(message1, node);

    //server calculating jobs...
    node.setSelected({ ...node.getSelected(), "job Types": opts });
    //set the selected features of client
    var responses = {
      ...node.getSelected(),
      "client details": node.getRegistrationDetails(),
    };

    axios
      .post(
        "/getfirstjobs",
        {
          responses: responses,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          console.log(
            "Server returned matching jobs:",
            response.data.list_jobs
          );
          //save the jobs that the server found for displaying client
          node.setJobs(response.data.list_jobs);
          //store the jobs in the variable which will be saved in db
          if (node.getSavedInDB()["displayed jobs"]) {
            node.setSavedInDB({
              ...node.getSavedInDB(),
              "displayed jobs": node
                .getSavedInDB()
                ["displayed jobs"].concat(node.getJobs()),
            });
          } else {
            node.setSavedInDB({
              ...node.getSavedInDB(),
              "displayed jobs": node.getJobs(),
            });
          }

          //continute
          if (response.data.list_jobs.length !== 0) {
            var txt2 = node.getNextResponse().children[0].children[0].text;
            const message2 = this.createChatBotMessage(txt2, {
              widget: "jobs",
            });

            node.setHistoryChat([
              ...node.getHistoryChat(),
              { user: opts },
              { bot: [txt1, txt2] },
            ]);
            node.setSelected({
              ...node.getSelected(),
              "displayed jobs": response.data.list_jobs,
            });
            node.setNextResponse(
              node.getNextResponse().children[0].children[0]
            );
            this.addMessageToState(message2, node);
          } else {
            var txt2 = "No jobs found";
            const message2 = this.createChatBotMessage(txt2);
            node.setHistoryChat([
              ...node.getHistoryChat(),
              { user: opts },
              { bot: [txt1, txt2] },
            ]);
            node.setNextResponse(
              node.getNextResponse().children[0].children[0]
            );
            this.addMessageToState(message2, node);
            //continute to accuracy phase

            node.incCountNotFits(node.getCountNotFits());
            this.handleJob(node, ["No jobs"]);
          }
        } else {
          console.log("Error getting matching jobs: ", response.data.message);
        }
      })
      .catch((err) => {
        this.errorMessages(node, err.message);
        console.log("Error getting matching jobs: ", err.message);
      });
  }

  handleJob(node, opts) {
    var isJobs = 1;
    if (opts[0] === "No jobs") {
      opts[0] = "Nothing fits";
      isJobs = 0;
    }
    if (opts[0] === "Nothing fits") {
      if (node.getCountNotFits() === 1) {
        var txt = node.getNextResponse().children[0].text;
        const message = this.createChatBotMessage(txt, {
          widget: "approval",
        });
        this.addMessageToState(message, node);

        //adding the bot message into the end of history
        if (isJobs === 1) {
          //check if it is a case that user selected 1 or 2 jobs in the first matching jobs
          if (node.getSelectedJobs().length > 0) {
            opts = node.getSelectedJobs();
            node.setHistoryChat([
              ...node.getHistoryChat(),
              { user: opts },
              { bot: [txt] },
            ]);
          } else {
            node.setHistoryChat([
              ...node.getHistoryChat(),
              { user: opts },
              { bot: [txt] },
            ]);
          }
        } else {
          var newHistoryArray = node.getHistoryChat();
          var lastBotHistory = newHistoryArray.pop();
          lastBotHistory.bot.push(txt);
          var updatedBotHistory = { bot: lastBotHistory.bot };
          node.setHistoryChat([...newHistoryArray, updatedBotHistory]);
        }
        node.setNextResponse(node.getNextResponse().children[0]);
      } else if (node.getCountNotFits() === 2) {
        if (isJobs === 1) {
          this.selfSearch(node, opts[0]);
        } else {
          this.selfSearch(node, { flag: "noJobs" });
        }
      }
      //client selected up to 2 jobs before the first jobs round
    } else if (opts.length <= 2 && node.getIsJobAccuracy() === 0) {
      var txt = node.getNextResponse().children[0].text;
      const message = this.createChatBotMessage(txt, {
        widget: "approval",
      });
      this.addMessageToState(message, node);
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: opts },
        { bot: [txt] },
      ]);
      node.setNextResponse(node.getNextResponse().children[0]);
      //client selected 3 or more jobs
    } else {
      txt = node.getNextResponse().children[1].text;
      const message = this.createChatBotMessage(txt, {
        widget: "displayEmail",
      });
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: opts },
        { bot: [txt] },
      ]);
      node.setNextResponse(node.getNextResponse().children[1]);
      this.addMessageToState(message, node);
    }
  }

  handleDisplayEmail(node, opts) {
    //user selected 'Just keep going'
    if (opts[0] === "Just keep going") {
      var txt = node.getNextResponse().children[0].text;
      const message = this.createChatBotMessage(txt, {
        widget: "approval",
      });
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: opts },
        { bot: [txt] },
      ]);
      node.setNextResponse(node.getNextResponse().children[0]);
      this.addMessageToState(message, node);
    }
    //user selected 'Display choices'
    else if (opts.length === 1 && opts.includes("Display my choices again")) {
      var txt1 = node.getNextResponse().children[1].text;
      const message1 = this.createChatBotMessage(txt1, {
        widget: "displaySelectedJobs",
      });
      this.addMessageToState(message1, node);
      var txt2 = node.getNextResponse().children[1].children[0].text;
      const message2 = this.createChatBotMessage(txt2, {
        widget: "approval",
      });
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: opts },
        { bot: [txt1, txt2] },
      ]);
      node.setNextResponse(node.getNextResponse().children[1].children[0]);
      this.addMessageToState(message2, node);
    }
    //user selected 'Email them to me'
    else if (opts.length === 1 && opts.includes("Email them to me")) {
      var txt = node.getNextResponse().children[2].text;
      const message = this.createChatBotMessage(txt, {
        widget: "email",
      });
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: opts },
        { bot: [txt] },
      ]);
      node.setNextResponse(node.getNextResponse().children[2]);
      this.addMessageToState(message, node);
    }
    //user selected 'Display choices and Email them to me'
    else {
      var txt1 = node.getNextResponse().children[1].text;
      const message1 = this.createChatBotMessage(txt1, {
        widget: "displaySelectedJobs",
      });
      this.addMessageToState(message1, node);

      var txt2 = node.getNextResponse().children[2].text;
      const message2 = this.createChatBotMessage(txt2, {
        widget: "email",
      });
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: opts },
        { bot: [txt1, txt2] },
      ]);
      node.setNextResponse(node.getNextResponse().children[2]);
      this.addMessageToState(message2, node);
    }
  }

  //return only the jobs that client selected during the chat with JOBOT
  filterObjectsById(objects, selectedObjects) {
    let filteredObjects = [];
    objects.map((obj) => {
      if (selectedObjects.includes(obj._id)) {
        filteredObjects.push(obj);
      }
    });
    return filteredObjects;
  }

  dataForEmail(node) {
    const displayedJobs = node.getSavedInDB()["displayed jobs"];
    const selectedJobs = node.getSavedInDB()["selected jobs"];
    const selectedJobsDetails = this.filterObjectsById(
      displayedJobs,
      selectedJobs
    );
    //build the message we want to send to client email
    const message = selectedJobsDetails
      .map((job) => {
        let details = "";

        if (job.job) {
          details += `Job: ${job.job}\n`;
        }

        if (job.company) {
          details += `Company: ${job.company}\n`;
        }

        if (job.city) {
          details += `City: ${job.city}\n`;
        }

        if (job.link) {
          details += `Link for apply: ${job.link.substring(0, 25)}${
            job.link.length > 25 ? "..." : ""
          }\n`;
        }

        if (job.rating) {
          details += `Rating: ${job.rating} stars\n`;
        }

        if (job.date) {
          details += `Elapsed time since update: ${job.date}\n`;
        }

        return details;
      })
      .join("\n\n");

    return message;
  }

  nextBotMessagesAfterEmail = (node, email, txt1) => {
    const message1 = this.createChatBotMessage(txt1);
    this.addMessageToState(message1, node);

    var txt2 = node.getNextResponse().children[0].children[0].text;
    const message2 = this.createChatBotMessage(txt2, {
      widget: "approval",
    });
    node.setHistoryChat([
      ...node.getHistoryChat(),
      { user: [email] },
      { bot: [txt1, txt2] },
    ]);
    node.setNextResponse(node.getNextResponse().children[0].children[0]);
    this.addMessageToState(message2, node);
  };

  handleEmail(node, email) {
    if (email === "") {
      var txt = node.getNextResponse().children[0].children[0].text;
      const message = this.createChatBotMessage(txt, {
        widget: "approval",
      });
      node.setHistoryChat([
        ...node.getHistoryChat(),
        { user: email },
        { bot: [txt] },
      ]);
      node.setNextResponse(node.getNextResponse().children[0].children[0]);
      this.addMessageToState(message, node);
    } else {
      const Emailmessage = this.dataForEmail(node);
      const data = {
        to_name: node.getRegistrationDetails().userName,
        from_name: "JOBOT",
        to_email: email,
        message: Emailmessage,
      };
      emailjs
        .send("service_0sya75j", "template_fkjypxk", data, "zH-UqP85Fm0Jcaud3")
        .then(
          (result) => {
            console.log("Sended");
            console.log(result.text);
            this.nextBotMessagesAfterEmail(
              node,
              email,
              node.getNextResponse().children[0].text
            );
          },
          (error) => {
            console.log("NOT Sended");
            console.log(error.text);
            const txt1 = "Apologies, the email could not be sent.";
            this.nextBotMessagesAfterEmail(node, email, txt1);
          }
        );
    }
  }

  handleAccuracyLevel(node, opts) {
    //reset the node in the decision tree
    var tempNodeObject = { ...node.getAccuracyNode() };
    node.setNextResponse(tempNodeObject);

    // go to the question regarding to the accuracy level
    if (opts.includes("Experience level")) {
      this.experienceWidget(node);
    } else if (opts.includes("Desired city")) {
      this.cityWidget(node);
    } else if (opts.includes("Job title")) {
      this.jobTitleTypingWidget(node);
    } else {
      console.log("server match");
      this.accurateJobsWidget(node);
    }
  }

  experienceWidget(node) {
    var txt = node.getNextResponse().children[2].text;
    const message = this.createChatBotMessage(txt, {
      widget: "experienceLevel",
    });
    node.setHistoryChat([...node.getHistoryChat(), { bot: [txt] }]);
    node.setNextResponse(node.getNextResponse().children[2]);
    this.addMessageToState(message, node);
  }

  handleExperienceLevel(node, opts) {
    if (opts[0] !== "Other") {
      node.setIsJobAccuracy(1);
    }
    node.setSelected({ ...node.getSelected(), "experience level": opts });
    node.setHistoryChat([...node.getHistoryChat(), { user: opts }]);
    //remove 'Experience level' from the selected accuracy levels and handle additional widgets of accuracy levels
    node.setAccuracyOptions(
      node
        .getAccuracyOptions()
        .filter((selectedOption) => selectedOption !== "Experience level")
    );
    this.handleAccuracyLevel(node, node.getAccuracyOptions());
  }

  cityWidget(node) {
    //display all cities in the selected areas
    var txt = node.getNextResponse().children[1].text;
    const message = this.createChatBotMessage(txt, {
      widget: "cities",
    });
    node.setHistoryChat([...node.getHistoryChat(), { bot: [txt] }]);
    node.setNextResponse(node.getNextResponse().children[1]);
    this.addMessageToState(message, node);
  }

  handleCities(node, opts) {
    if (opts[0] !== "Other") {
      node.setIsJobAccuracy(1);
    }
    node.setSelected({ ...node.getSelected(), cities: opts });
    node.setHistoryChat([...node.getHistoryChat(), { user: opts }]);
    //remove 'Desired city' from the selected accuracy levels and handle additional widgets of accuracy levels
    node.setAccuracyOptions(
      node
        .getAccuracyOptions()
        .filter((selectedOption) => selectedOption !== "Desired city")
    );
    this.handleAccuracyLevel(node, node.getAccuracyOptions());
  }

  requirementsWidget(node) {
    var txt = node.getNextResponse().children[1].text;
    const message = this.createChatBotMessage(txt);
    node.setHistoryChat([...node.getHistoryChat(), { bot: [txt] }]);
    node.setNextResponse(node.getNextResponse().children[1]);
    node.setIsRequirements(1);
    this.addMessageToState(message, node);
  }

  handleRequirements(node, msg) {
    document.documentElement.style.setProperty("--button-visibility", "hidden");
    //typing about job requirements is stopped
    node.setIsRequirements(0);
    //flag that the client need job accuracy
    node.setIsJobAccuracy(1);

    node.setSelected({ ...node.getSelected(), "job Requirements": msg });
    node.setHistoryChat([...node.getHistoryChat(), { user: [msg] }]);
    var txt = node.getNextResponse().children[0].text;
    const message = this.createChatBotMessage(txt, {
      widget: "accuracyLevel",
    });
    node.setHistoryChat([...node.getHistoryChat(), { bot: [txt] }]);
    node.setNextResponse(node.getNextResponse().children[0]);
    this.addMessageToState(message, node);
  }

  jobTitleTypingWidget(node) {
    var txt = node.getNextResponse().children[3].text;
    const message = this.createChatBotMessage(txt, {
      widget: "jobTitleTyping",
    });
    node.setHistoryChat([...node.getHistoryChat(), { bot: [txt] }]);
    node.setNextResponse(node.getNextResponse().children[3]);
    this.addMessageToState(message, node);
  }
  handleJobTitleTyping(node, msg) {
    //flag that the client need job accuracy
    node.setIsJobAccuracy(1);

    if (msg !== "") {
      node.setSelected({ ...node.getSelected(), "additional job title": msg });
    }
    node.setHistoryChat([...node.getHistoryChat(), { user: [msg] }]);
    //remove 'Job title' from the selected accuracy levels and handle additional widgets of accuracy levels
    node.setAccuracyOptions(
      node
        .getAccuracyOptions()
        .filter((selectedOption) => selectedOption !== "Job title")
    );
    this.handleAccuracyLevel(node, node.getAccuracyOptions());
  }

  accurateJobsWidget(node) {
    //asking to wait
    var txt1 = node.getNextResponse().children[0].text;
    const message1 = this.createChatBotMessage(txt1);
    this.addMessageToState(message1, node);

    //server calculating jobs...
    var responses = {
      ...node.getSelected(),
      "client details": node.getRegistrationDetails(),
    };
    axios
      .post(
        "/getsecondjobs",
        {
          responses: responses,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )

      .then((response) => {
        if (response.data.success) {
          console.log(
            "Server returned matching jobs:",
            response.data.list_jobs
          );
          node.setJobs(response.data.list_jobs);
          if (node.getSavedInDB()["displayed jobs"]) {
            node.setSavedInDB({
              ...node.getSavedInDB(),
              "displayed jobs": node
                .getSavedInDB()
                ["displayed jobs"].concat(node.getJobs()),
            });
          } else {
            node.setSavedInDB({
              ...node.getSavedInDB(),
              "displayed jobs": node.getJobs(),
            });
          }

          //continute
          if (response.data.list_jobs.length !== 0) {
            if (response.data.list_jobs.length > 1) {
              var txt2 = `With all the information you provided me, I find for you these top ${response.data.list_jobs.length} jobs`;
              const message2 = this.createChatBotMessage(txt2);
              this.addMessageToState(message2, node);
            }
            var txt3 = node.getNextResponse().children[0].children[0].text;
            const message3 = this.createChatBotMessage(txt3, {
              widget: "jobs",
            });
            if (response.data.list_jobs.length > 1) {
              node.setHistoryChat([
                ...node.getHistoryChat(),
                { bot: [txt1, txt2, txt3] },
              ]);
            } else {
              node.setHistoryChat([
                ...node.getHistoryChat(),
                { bot: [txt1, txt3] },
              ]);
            }
            node.setNextResponse(
              node.getNextResponse().children[0].children[0]
            );
            this.addMessageToState(message3, node);
          } else {
            var txt2 = "No jobs found";
            const message2 = this.createChatBotMessage(txt2);
            node.setHistoryChat([
              ...node.getHistoryChat(),
              { bot: [txt1, txt2] },
            ]);
            node.setNextResponse(
              node.getNextResponse().children[0].children[0]
            );
            this.addMessageToState(message2, node);

            //continute to accuracy phase
            node.incCountNotFits(node.getCountNotFits());
            this.handleJob(node, ["No jobs"]);
          }
        } else {
          console.log("Error getting matching jobs: ", response.data.message);
        }
      })
      .catch((err) => {
        this.errorMessages(node, err.message);
        console.log("Error getting matching jobs: ", err.message);
      });
  }

  addMessageToState = (message, node) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        messages: [...prevState.messages, message],
        head: node,
      };
    });
  };
}

export default ActionProvider;
