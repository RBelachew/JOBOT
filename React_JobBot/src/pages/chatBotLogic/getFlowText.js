import chatFlow from "./convert_tree_to_json";
import axios from "axios";

export class FetchText {
  constructor() {
    this.registrationDetails = {};
    this.head = {};
    this.selected = {};
    this.historyChat = [];
    this.jobs = [];
    this.selectedJobs = [];
    this.countNotFits = 0;
    this.isFeedback = 0;
    this.accuracyNode = {};
    this.accuracyOptions = [];
    this.isJobAccuracy = 0;
    this.isRequirements = 0;
    this.savedInDB = {};
  }

  //load the decision tree for using of chat bot
  intialHead() {
    try {
      this.head = require("./decisionTree.json");
    } catch (error) {
      this.head = chatFlow;
      axios
        .post("/write-json", this.head, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error(error.response.data.error);
        });
    }
  }

  //the node of JOBOT text
  setNextResponse(node) {
    this.head = node;
  }

  getNextResponse() {
    return this.head;
  }

  //the selected features of client
  setSelected(selected) {
    this.selected = selected;
  }

  getSelected() {
    return this.selected;
  }

  setHistoryChat(historyChat) {
    this.historyChat = historyChat;
  }

  getHistoryChat() {
    return this.historyChat;
  }
  setJobs(jobs) {
    this.jobs = jobs;
  }

  getJobs() {
    return this.jobs;
  }
  setSelectedJobs(selectedJobs) {
    this.selectedJobs = selectedJobs;
  }

  getSelectedJobs() {
    return this.selectedJobs;
  }

  //count the times client clicked 'Nothing fits'
  incCountNotFits(countNotFits) {
    this.countNotFits = countNotFits + 1;
  }

  getCountNotFits() {
    return this.countNotFits;
  }

  //flag that the client writes feedback
  setIsFeedback(val) {
    this.isFeedback = val;
  }

  getIsFeedback() {
    return this.isFeedback;
  }
  //the node in tree that client choose which accuracies he want to get
  setAccuracyNode(accuracyNode) {
    this.accuracyNode = accuracyNode;
  }

  getAccuracyNode() {
    return this.accuracyNode;
  }
  //save the accuracy options that client choose to get
  setAccuracyOptions(accuracyOptions) {
    this.accuracyOptions = accuracyOptions;
  }

  getAccuracyOptions() {
    return this.accuracyOptions;
  }
  //flag that client get accuracy job match
  setIsJobAccuracy(isJobAccuracy) {
    this.isJobAccuracy = isJobAccuracy;
  }

  getIsJobAccuracy() {
    return this.isJobAccuracy;
  }

  //flag that the client writes education and experiance
  setIsRequirements(isRequirements) {
    this.isRequirements = isRequirements;
  }

  getIsRequirements() {
    return this.isRequirements;
  }

  setRegistrationDetails(registrationDetails) {
    this.registrationDetails = registrationDetails;
  }
  getRegistrationDetails() {
    return this.registrationDetails;
  }
  setSavedInDB(savedInDB) {
    this.savedInDB = savedInDB;
  }
  getSavedInDB() {
    return this.savedInDB;
  }
}

var dec_tree = new FetchText();
dec_tree.intialHead();

export default dec_tree;
