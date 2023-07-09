import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import dec_tree from "./getFlowText.js"
import FieldOptions from "./components/Options/FieldOptions";
import Approval from "./components/Options/Approval";
import JobTitles from "./components/Options/JobTitles";
import Companies from "./components/Options/Companies";
import Areas from "./components/Options/Areas";
import JobTypes from "./components/Options/JobTypes";
import Jobs from "./components/Options/Jobs";
import DisplayEmail from "./components/Options/DisplayEmail";
import DisplaySelectedJobs from "./components/Options/DisplaySelectedJobs";
import AccuracyLevels from "./components/Options/AccuracyLevels";
import MoreInfo from "./components/Options/MoreInfo";
import ExperienceLevel from "./components/Options/ExperienceLevel";
import Cities from "./components/Options/Cities";
import Email from "./components/Options/Email";
import JobTitleTyping from "./components/Options/JobTitleTyping";
import MyCustomChatMessage from "./MyCustomChatMessage";
import ErrorMessages from "./components/Options/ErrorMessages";

const config = {
  botName: "JOBOT",
  initialMessages: [
    createChatBotMessage(dec_tree.getNextResponse().text),
    createChatBotMessage(dec_tree.getNextResponse().children[0].text, {
      widget: "fieldOptions",
      delay:2000
    }),
  ],

  widgets: [
    {
      widgetName: "fieldOptions",
      widgetFunc: (props) => <FieldOptions {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "approval",
      widgetFunc: (props) => <Approval {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "jobTitles",
      widgetFunc: (props) => <JobTitles {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "companies",
      widgetFunc: (props) => <Companies {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "areas",
      widgetFunc: (props) => <Areas {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "jobTypes",
      widgetFunc: (props) => <JobTypes {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "jobs",
      widgetFunc: (props) => <Jobs {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "displayEmail",
      widgetFunc: (props) => <DisplayEmail {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "displaySelectedJobs",
      widgetFunc: (props) => <DisplaySelectedJobs {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "accuracyLevel",
      widgetFunc: (props) => <AccuracyLevels {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "moreInfo",
      widgetFunc: (props) => <MoreInfo {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "experienceLevel",
      widgetFunc: (props) => <ExperienceLevel {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "cities",
      widgetFunc: (props) => <Cities {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "email",
      widgetFunc: (props) => <Email {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "jobTitleTyping",
      widgetFunc: (props) => <JobTitleTyping {...props} />,
      props: {
        node:dec_tree
      }
    },
    {
      widgetName: "errorMessages",
      widgetFunc: (props) => <ErrorMessages {...props} />,
      props: {
        node:dec_tree
      }
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  customComponents: {
    botAvatar:(props) => <MyCustomChatMessage {...props} />
  },
};

export default config;

