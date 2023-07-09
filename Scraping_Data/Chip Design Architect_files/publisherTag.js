/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 244:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EventType = exports.Event = void 0;

var EventLogger = /*#__PURE__*/function () {
  function EventLogger() {
    _classCallCheck(this, EventLogger);

    this.events = [];
  }

  _createClass(EventLogger, [{
    key: "logEvent",
    value: function logEvent(event) {
      this.events.push(event);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.logEvent(new Event(EventType.DEBUG, message));
    }
  }, {
    key: "info",
    value: function info(message) {
      this.logEvent(new Event(EventType.INFO, message));
    }
  }, {
    key: "warn",
    value: function warn(message) {
      this.logEvent(new Event(EventType.WARN, message));
    }
  }, {
    key: "error",
    value: function error(message) {
      this.logEvent(new Event(EventType.ERROR, message));
    }
  }]);

  return EventLogger;
}();

exports.default = EventLogger;

var Event = /*#__PURE__*/_createClass(function Event(eventType, message) {
  _classCallCheck(this, Event);

  this.eventType = EventType[eventType];
  this.message = message;
});

exports.Event = Event;
var EventType;

(function (EventType) {
  EventType[EventType["DEBUG"] = 0] = "DEBUG";
  EventType[EventType["INFO"] = 1] = "INFO";
  EventType[EventType["WARN"] = 2] = "WARN";
  EventType[EventType["ERROR"] = 3] = "ERROR";
})(EventType = exports.EventType || (exports.EventType = {}));

/***/ }),

/***/ 210:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var fetchUtils_1 = __webpack_require__(2061);

var constants_1 = __webpack_require__(7504);

var TagObject_1 = __importDefault(__webpack_require__(5650));

var publisherFunctions_1 = __webpack_require__(2604); // This is needed for async await generated code by babel-plugin-transform-async-to-generator.
// Otherwise, it'll throw 'Uncaught ReferenceError: regeneratorRuntime is not defined' when calling the functions


__webpack_require__(5666);

var IndeedCreativeTagObject = /*#__PURE__*/function (_TagObject_1$default) {
  _inherits(IndeedCreativeTagObject, _TagObject_1$default);

  var _super = _createSuper(IndeedCreativeTagObject);

  function IndeedCreativeTagObject() {
    var _this;

    _classCallCheck(this, IndeedCreativeTagObject);

    _this = _super.call(this, "https://pres.indeed.com", fetchUtils_1.fetchParamsBrandedLogging, fetchUtils_1.fetchOptionsBrandedLogging);
    _this.loggingEndpoint = 'ita/v1/logs/brandedAd';
    _this.logCreativeSeen = _this.logFunc(_this.loggingEndpoint, {
      logtype: 'imp'
    });
    _this.logCreativeClosed = _this.logFunc(_this.loggingEndpoint, {
      logtype: 'closed'
    });
    _this.logCreativeClick = _this.logFunc(_this.loggingEndpoint, {
      logtype: 'clk'
    });
    _this.logHiddenCreative = _this.logFunc(_this.loggingEndpoint, {
      logtype: 'imp',
      logLabel: 'hiddenITABrandedAd'
    });
    return _this;
  }

  _createClass(IndeedCreativeTagObject, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      var creativeTags = Array.from(document.body.querySelectorAll("[data-tag-type='creative'][data-load-status=".concat(constants_1.NOTLOADED, "]")));
      creativeTags.forEach(function (creativeTagElement) {
        return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var creativeKey, fetchParamsString;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                creativeTagElement.dataset.loadStatus = constants_1.LOADING; // Check if experiment hiddenITABrandedAd is active

                if (!(creativeTagElement.dataset.isHidden === 'true')) {
                  _context.next = 7;
                  break;
                }

                this.registerElementForSeenCheck(creativeTagElement);
                creativeTagElement.dataset.loadStatus = constants_1.NOTLOADED;
                this.checkForElementsInViewport();
                _context.next = 11;
                break;

              case 7:
                // Create the fetchParamsString
                creativeKey = creativeTagElement.dataset.creativeKey;
                fetchParamsString = (0, fetchUtils_1.createFetchParamsString)(creativeTagElement, fetchUtils_1.fetchParamsBranded); // Do fetch call to presentation server

                _context.next = 11;
                return this.fetchFromPresentationWebapp(creativeTagElement, fetchParamsString, creativeKey);

              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      });
    }
    /**
     * Do fetch to presentation-webapp server
     *
     * @param {HTMLElement} creativeTag Creative tag div that needs creative HTML
     * @param {string[]} fetchParamsString Stringified parameters for fetch
     * @param {string} creativeKey Optional parameter that specifies a creative key
     */

  }, {
    key: "fetchFromPresentationWebapp",
    value: function fetchFromPresentationWebapp(creativeTag, fetchParamsString, creativeKey) {
      var _this3 = this;

      if (creativeKey === undefined) {
        throw new Error('Creative key is undefined');
      }

      var fetchURL = this.getPresentationWebappFetchURL("ita/v1/creative/".concat(creativeKey, "/"), fetchParamsString);
      var pubTag = creativeTag.closest('[data-tag-type=publisher]');
      var syntheticEvent = (0, publisherFunctions_1.createIndeedAdNotLoadEvent)();
      return fetch(fetchURL).then(function (response) {
        _this3.logger.debug(response);

        if (!response.ok) {
          throw new Error("Response isn't in the range 200-299: ".concat(response.status));
        }

        return response.text();
      }).then(function (creativeHTMLString) {
        if (creativeHTMLString.length === 0) {
          // If response is empty
          creativeTag.dataset.tagReason = constants_1.NO_CREATIVE_RETURNED;

          _this3.logger.info(constants_1.NO_CREATIVE_RETURNED);
        } else {
          // We have a response
          _this3.logger.debug(creativeHTMLString);

          if (creativeTag.dataset.flowPage === 'glassdoor' && creativeTag.dataset.flowType === 'brand-spotlight') {
            // Create iframe for Brand Spotlight
            _this3.addIframeToDOM(creativeTag, creativeHTMLString, creativeKey, fetchURL);
          } else {
            _this3.addCreativeToDOM(creativeTag, creativeHTMLString);

            _this3.setDataAttribute(creativeTag, 'creative-variant-id');

            _this3.setDataAttribute(creativeTag, 'format');

            _this3.attachLoggingHandlers(creativeTag);

            _this3.checkForElementsInViewport();

            creativeTag.dataset.loadStatus = constants_1.LOADED;
          }

          syntheticEvent = (0, publisherFunctions_1.createIndeedAdLoadEvent)();
        }
      }).catch(function (error) {
        creativeTag.dataset.loadStatus = constants_1.NOTLOADED;
        var networkError = new Error("A network failure or something prevented the request from completing: ".concat(error));

        _this3.logger.error(networkError);

        throw networkError;
      }).finally(function () {
        pubTag === null || pubTag === void 0 ? void 0 : pubTag.dispatchEvent(syntheticEvent);
      });
    }
  }, {
    key: "addIframeToDOM",
    value: function addIframeToDOM(creativeTag, creativeString, creativeKey, fetchURL) {
      var flowType = creativeTag.dataset.flowType;
      var dimensions = new Map();
      dimensions.set(flowType, {
        width: '300',
        height: '250'
      });
      var theIframe = document.createElement('iframe'); // Here we add html escaping double quotes with text.replace() in order to have srcdoc working

      var iframeSrcDoc = "<script>let creativeKeyFromDAT= '".concat(creativeKey, "'</script>") + creativeString; // If the parent page has loaded then set the iframe src

      if (window.__IPT__.windowLoaded) {
        theIframe.srcdoc = iframeSrcDoc;
        theIframe.src = fetchURL;
      } else {
        // The parent page has not loaded, so wait for the load event to set the src to prevent blocking parent page load
        window.addEventListener('load', function () {
          theIframe.srcdoc = iframeSrcDoc;
          theIframe.src = fetchURL;
        }, false);
      }

      theIframe.setAttribute('width', dimensions.get(flowType).width);
      theIframe.setAttribute('height', dimensions.get(flowType).height);
      theIframe.setAttribute('title', 'Third party creative content');
      theIframe.setAttribute('frameborder', '0');
      theIframe.setAttribute('scrolling', 'no');
      creativeTag.appendChild(theIframe);
    }
    /**
     * Look if element's children has data-xxx.
     * And if it has, adding it to element's dataset.
     *
     * @param {HTMLElement} element Element to add new value to
     * @param {string} fieldName Data attribute name to search for and pull the value from
     */

  }, {
    key: "setDataAttribute",
    value: function setDataAttribute(element, fieldName) {
      var articleEl = element.querySelector("[data-".concat(fieldName, "]"));

      if (articleEl) {
        var camelFieldName = fieldName.replace(/-([a-z]?)/g, function (m, g) {
          return g.toUpperCase();
        });
        var fieldValue = articleEl.dataset[camelFieldName];

        if (fieldValue && !element.dataset[camelFieldName]) {
          element.dataset[camelFieldName] = fieldValue;
        }
      }
    }
  }, {
    key: "attachLoggingHandlers",
    value: function attachLoggingHandlers(creativeElement) {
      var closeButton = creativeElement.querySelector("button[aria-label='Close']"); // Register element to check for seen event

      this.registerElementForSeenCheck(creativeElement); // Close button handler

      closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', this.creativeCloseHandler.bind(this), false); // Creative click handler

      creativeElement.addEventListener('click', this.creativeClickHandler.bind(this), false);
    }
  }, {
    key: "creativeClickHandler",
    value: function creativeClickHandler(event) {
      var target = event.target;
      var creativeTagElement = target.closest('[data-tag-type="creative"]');

      if (creativeTagElement) {
        this.logCreativeClick(creativeTagElement);
      }
    }
  }, {
    key: "creativeCloseHandler",
    value: function creativeCloseHandler(event) {
      var target = event.target;
      var creativeTagElement = target.closest('[data-tag-type="creative"]');

      if (creativeTagElement) {
        this.logCreativeClosed(creativeTagElement);
        var closeButton = creativeTagElement.querySelector("button[aria-label='Close']");

        if (closeButton) {
          closeButton.removeEventListener('click', this.creativeCloseHandler.bind(this), false);
        }

        creativeTagElement.removeEventListener('click', this.creativeClickHandler.bind(this), false);
        this.unregisterElementForSeenCheck(creativeTagElement);
        this.removeCreative(creativeTagElement);
      }

      event.stopPropagation();
    }
  }, {
    key: "removeCreative",
    value: function removeCreative(creativeTagElement) {
      creativeTagElement.remove();
    }
  }, {
    key: "onSuccessSeen",
    value: function onSuccessSeen(element) {
      if (element.dataset.isHidden === 'true') {
        this.logHiddenCreative(element);
      } else {
        this.logCreativeSeen(element);
      }
    }
  }]);

  return IndeedCreativeTagObject;
}(TagObject_1.default);

exports.default = IndeedCreativeTagObject;

/***/ }),

/***/ 1087:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var EventLogger_1 = __importDefault(__webpack_require__(244));

var typesAndInterfaces_1 = __webpack_require__(9388);

var publisherFunctions_1 = __webpack_require__(2604);

var setTagReason_1 = __webpack_require__(1345);

var constants_1 = __webpack_require__(7504);

var createCreativeTag_1 = __webpack_require__(3236);

var fetchUtils_1 = __webpack_require__(2061); // This is needed for async await generated code by babel-plugin-transform-async-to-generator.
// Otherwise, it'll throw 'Uncaught ReferenceError: regeneratorRuntime is not defined' when calling the functions


__webpack_require__(5666);

var IndeedPublisherTagObject = /*#__PURE__*/function () {
  function IndeedPublisherTagObject() {
    _classCallCheck(this, IndeedPublisherTagObject);

    this._windowLoaded = false;
    this.logger = new EventLogger_1.default();
  }

  _createClass(IndeedPublisherTagObject, [{
    key: "windowLoaded",
    get: function get() {
      return this._windowLoaded;
    },
    set: function set(value) {
      this._windowLoaded = value;
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.getPublisherTags().forEach(function (publisherTag) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(publisherTag.tags.length > 0)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.getCreatives(publisherTag);

              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      });
    }
  }, {
    key: "getCreatives",
    value: function getCreatives(publisherTag) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var tags, params, arrayOfResults;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              tags = publisherTag.tags; // Check to see if the url has the forcedAdId param

              params = new URLSearchParams(document.location.search.substring(1));
              (0, publisherFunctions_1.setForcedId)(tags, params); // Do asynchronous requests to ITAD and save publisher tags and promises in a map

              this.fetchFromITAD(publisherTag);
              _context2.prev = 4;
              _context2.next = 7;
              return Promise.all(publisherTag.responseMap.values());

            case 7:
              arrayOfResults = _context2.sent;
              // Find the creativeKeys from the resolved promises and put it on the publisher tag as data attribute
              arrayOfResults.forEach(function (creativeResponse, index) {
                // Checking for empty response from ITAD
                if (Object.keys(creativeResponse).length > 0) {
                  (0, publisherFunctions_1.trackCreativeKey)(creativeResponse, tags[index], publisherTag.creativeSet);
                } else {
                  (0, setTagReason_1.setTagReason)(tags[index], constants_1.EMPTY_RESPONSE);
                  tags[index].dispatchEvent((0, publisherFunctions_1.createIndeedAdNotLoadEvent)());
                }
              }); // Create the creative tag and creative script to insert into the DOM

              tags.forEach(function (pubTag) {
                var creativeData = pubTag.dataset.creativeData;
                var hasUniqueCreativeKey = !pubTag.dataset.creativeKeyDuplicate;

                if (hasUniqueCreativeKey && creativeData) {
                  (0, createCreativeTag_1.createCreativeTag)(pubTag, JSON.parse(creativeData), pubTag.dataset.forcedAdId);
                }
              });
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              throw _context2.t0;

            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[4, 12]]);
      }));
    }
  }, {
    key: "fetchFromITAD",
    value: function fetchFromITAD(publisherTag) {
      publisherTag.tags.forEach(function (element) {
        (0, fetchUtils_1.checkForFlowPageAndFlowType)(element);
        element.dataset.loadStatus = constants_1.LOADING;
        var fetchParams = (0, fetchUtils_1.createFetchParamsString)(element, fetchUtils_1.fetchParamsITAD);
        publisherTag.responseMap.set(element, (0, fetchUtils_1.fetchToITAD)(fetchParams, element.dataset.forcedAdId).catch(function (e) {
          element.dispatchEvent((0, publisherFunctions_1.createIndeedAdNotLoadEvent)());
          throw e;
        }));
      });
    }
  }, {
    key: "getPublisherTags",
    value: function getPublisherTags() {
      return Object.values(typesAndInterfaces_1.FlowType).map(function (flowType) {
        var tags = Array.from(document.body.querySelectorAll("[data-tag-type='publisher']:not([data-load-status])[data-flow-type=".concat(flowType, "]")));
        return {
          flowType: flowType,
          tags: tags,
          responseMap: new Map(),
          creativeSet: new Set()
        };
      }).filter(function (collection) {
        return collection.tags.length > 0;
      });
    }
  }, {
    key: "hasPublisherTags",
    value: function hasPublisherTags() {
      return this.getPublisherTags().length > 0;
    }
  }]);

  return IndeedPublisherTagObject;
}();

exports.default = IndeedPublisherTagObject;

/***/ }),

/***/ 5650:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var fetchUtils_1 = __webpack_require__(2061);

var EventLogger_1 = __importDefault(__webpack_require__(244));

var TagObject = /*#__PURE__*/function () {
  function TagObject(presentationWebappBaseURL, loggingParamsObject, loggingFetchOptions) {
    _classCallCheck(this, TagObject);

    this.elementsToCheck = [];
    this.ticking = false;
    this.presentationWebappBaseURL = presentationWebappBaseURL || '';
    this.pixelServerBaseURL = "https://pxl.indeed.com" || 0;
    this.loggingParamsObject = loggingParamsObject;
    this.loggingFetchOptions = loggingFetchOptions;
    this.logger = new EventLogger_1.default();
  }

  _createClass(TagObject, [{
    key: "setTicking",
    value: function setTicking(val) {
      this.ticking = val;
    }
  }, {
    key: "isTicking",
    value: function isTicking() {
      return this.ticking;
    }
  }, {
    key: "getElementsToCheck",
    value: function getElementsToCheck() {
      return this.elementsToCheck;
    }
  }, {
    key: "getPresentationWebappFetchURL",
    value: function getPresentationWebappFetchURL(creativeEndpoint, paramsString) {
      return "".concat(this.presentationWebappBaseURL, "/").concat(creativeEndpoint, "?").concat(paramsString);
    }
  }, {
    key: "getPixelServerFetchURL",
    value: function getPixelServerFetchURL(loggingEndpoint, paramsString) {
      return "".concat(this.pixelServerBaseURL, "/").concat(loggingEndpoint, "?").concat(paramsString);
    }
  }, {
    key: "addCreativeToDOM",
    value: function addCreativeToDOM(element, responseString) {
      var rangeFragment = document.createRange().createContextualFragment(responseString);
      element.appendChild(rangeFragment);
    }
    /**
     * Returns a function to log the event specified by the logObject
     *
     * @param {string} loggingEndpoint the complete url before the parameters (same for all branded)
     *      i.e. 'https://pxl.indeed.com/ita/v1/logs/brandedAd'
     * @param {object} logObject? optional, to be used for creating params string for branded logging
     *      i.e. { logtype: 'clk' } OR { logtype: 'imp', logLabel: 'hiddenITABrandedAd' }
     * @returns {function}
     */

  }, {
    key: "logFunc",
    value: function logFunc(loggingEndpoint, logObject) {
      var _this = this;

      return function (elem) {
        var paramsString = (0, fetchUtils_1.createFetchParamsString)(elem, _this.loggingParamsObject, logObject);

        var fetchURL = _this.getPixelServerFetchURL(loggingEndpoint, paramsString);

        fetch(fetchURL, _this.loggingFetchOptions).catch(function (error) {
          return _this.logger.error("Error, ".concat(error, ", encountered when trying to log."));
        });
      };
    }
    /**
     * Checks if the element is in the viewport
     *
     * @param {HTMLElement} element Element to check if completely in the viewport
     * @returns {boolean} True if completely in viewport, false otherwise
     */

  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(element) {
      var boundingRect = element.getBoundingClientRect();
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return boundingRect.top >= 0 && boundingRect.left >= 0 && boundingRect.bottom <= viewportHeight && boundingRect.right <= viewportWidth;
    }
    /**
     * Check if the creative is in the viewport then logs the seen event
     */

  }, {
    key: "checkForElementsInViewport",
    value: function checkForElementsInViewport() {
      var _this2 = this;

      if (this.elementsToCheck.length > 0) {
        this.elementsToCheck.forEach(function (element) {
          if (_this2.isElementInViewport(element)) {
            _this2.onSuccessSeen(element);

            _this2.unregisterElementForSeenCheck(element);
          }
        });
      }
    }
    /**
     * Adds a new creative to the elementsToCheck array in the specified tag object
     *
     * @param {HTMLElement} element Element to be registered for seen check and added to elementsToCheck array
     */

  }, {
    key: "registerElementForSeenCheck",
    value: function registerElementForSeenCheck(element) {
      this.elementsToCheck.push(element);
    }
    /**
     * Removes a seen creative from the elementsToCheck array in the specified tag object
     *
     * @param {HTMLElement} element Element to be unregistered for seen check and removed from elementsToCheck array
     */

  }, {
    key: "unregisterElementForSeenCheck",
    value: function unregisterElementForSeenCheck(element) {
      this.elementsToCheck = this.elementsToCheck.filter(function (elem) {
        return elem !== element;
      });
    }
  }]);

  return TagObject;
}();

exports.default = TagObject;

/***/ }),

/***/ 7504:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SCROLL_DEBOUNCER_TIMEOUT = exports.NOTLOADED = exports.LOADING = exports.LOADED = exports.NO_CREATIVE_RETURNED = exports.FOUND_NO_SPONSORED_JOB_TAGS = exports.FOUND_NO_PUBLISHER_TAGS = exports.FOUND_NO_BEESWAX_EBA_TAGS = exports.COULD_NOT_CREATE_CREATIVE_TAG = exports.EMPTY_CREATIVE_DATA = exports.EMPTY_RESPONSE = void 0;
exports.EMPTY_RESPONSE = 'Empty response from ITAD';
exports.EMPTY_CREATIVE_DATA = 'Empty creative tag data';
exports.COULD_NOT_CREATE_CREATIVE_TAG = 'Could not create creative tag';
exports.FOUND_NO_BEESWAX_EBA_TAGS = 'Found no Beeswax EBA tags to process';
exports.FOUND_NO_PUBLISHER_TAGS = 'Found no publisher tags to process';
exports.FOUND_NO_SPONSORED_JOB_TAGS = 'Found no sponsored job tags to process';
exports.NO_CREATIVE_RETURNED = 'No creative returned';
exports.LOADED = 'loaded';
exports.LOADING = 'loading';
exports.NOTLOADED = 'notloaded';
exports.SCROLL_DEBOUNCER_TIMEOUT = 50;

/***/ }),

/***/ 3236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createCreativeTag = void 0;

var constants_1 = __webpack_require__(7504);

function createCreativeTag(publisherTag, json, forcedAdIdNum) {
  // Create the creative tag and set its params
  var creativeTag = document.createElement('div');
  creativeTag.dataset.tagType = json.tagType;
  creativeTag.dataset.creativeKey = json.creativeKey;
  creativeTag.dataset.fccKey = json.fccKey;
  creativeTag.dataset.flowPage = json.flowPage;
  creativeTag.dataset.flowType = json.flowType;
  creativeTag.dataset.trigger = json.trigger;
  creativeTag.dataset.elmntType = json.elmntType;
  creativeTag.dataset.logLabel = json.logLabel;
  creativeTag.dataset.mobtk = json.mobtk;
  creativeTag.dataset.adtype = json.adtype;
  creativeTag.dataset.loadStatus = constants_1.NOTLOADED;
  var pubTagDataSet = publisherTag.dataset;

  if (pubTagDataSet.isHidden) {
    creativeTag.dataset.isHidden = pubTagDataSet.isHidden;
  }

  if (forcedAdIdNum) {
    creativeTag.dataset.forcedAdId = forcedAdIdNum;
  }

  if (pubTagDataSet.gdCtk) {
    creativeTag.dataset.gdCtk = pubTagDataSet.gdCtk;
  }

  publisherTag.appendChild(creativeTag); // Create the creative script

  var creativeScript = document.createElement('script');
  creativeScript.async = true;
  creativeScript.src = json.creativeScriptSrc;
  publisherTag.appendChild(creativeScript);
  publisherTag.dataset.loadStatus = constants_1.LOADED;
}

exports.createCreativeTag = createCreativeTag;

/***/ }),

/***/ 2061:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fetchOptionsSponsoredJobLogging = exports.fetchParamsSponsoredJobLogging = exports.fetchParamsSponsoredJob = exports.fetchOptionsBeeswaxEBALogging = exports.fetchParamsBeeswaxEBALogging = exports.fetchParamsBeeswaxEBA = exports.fetchOptionsBrandedLogging = exports.fetchParamsBrandedLogging = exports.fetchParamsBranded = exports.fetchParamsITAD = exports.checkForFlowPageAndFlowType = exports.createFetchParamsString = exports.fetchToITAD = void 0;

function fetchToITAD(fetchParamsString, forcedAdIdNum) {
  var fetchURL;

  if (forcedAdIdNum) {
    fetchURL = "".concat("https://itad.indeed.com/ita/v1/publisher", "/").concat(forcedAdIdNum, "?").concat(fetchParamsString);
  } else {
    fetchURL = "".concat("https://itad.indeed.com/ita/v1/publisher", "?").concat(fetchParamsString);
  }

  return fetch(fetchURL, {
    credentials: 'include'
  }).then(function (response) {
    if (!response.ok) {
      throw new Error("Response status is ".concat(response.status));
    }

    return response.json();
  }).then(function (json) {
    return json;
  }).catch(function (error) {
    throw new Error("A network failure or something prevented the request from completing: ".concat(error));
  });
}

exports.fetchToITAD = fetchToITAD;
/**
 * Creates a string of parameters to append to the fetch url
 *
 * @param {HTMLElement} tagElement
 * @param { FetchParamsBranded | FetchParamsBrandedLogging | FetchParamsSponsoredJob | FetchParamsSponsoredJobLogging } paramsObject
 *  object with the attribute in the HTML element as the key and the desired url param name as the value
 *      i.e. same attribute name and param name: { flowPage: 'flowpage', flowType: 'flowType }
 *       OR  different attribute name and param name: { dspAdId: 'adId', dspUserId: 'userId', dspEventId: 'eventId' }
 * @param {object} logObject? optional, to be used for creating params string for branded logging
 *      i.e. { logtype: 'clk' } OR { logtype: 'imp', logLabel: 'hiddenITABrandedAd' }
 * @returns {string} that looks like "flowPage=mobapptrackersavedbottom&flowType=inline"
 */

function createFetchParamsString(tagElement, paramsObject, logObject) {
  var tagDataSet = tagElement.dataset;
  var paramsAndValues = {};
  var paramsAndValuesKeys;
  var paramKeys = Object.keys(paramsObject);
  var validParamsArray = paramKeys.filter(function (param) {
    return tagDataSet[param];
  });

  if (logObject) {
    validParamsArray.forEach(function (param) {
      paramsAndValues[param] = "".concat(tagDataSet[param]);
    });
    paramsAndValues = Object.assign(paramsAndValues, logObject);
    paramsAndValuesKeys = Object.keys(paramsAndValues);
    return paramsAndValuesKeys.map(function (param) {
      return "".concat(paramsObject[param] || param, "=").concat(paramsAndValues[param]);
    }).join('&');
  } else {
    return validParamsArray.map(function (param) {
      return "".concat(paramsObject[param], "=").concat(tagDataSet[param]);
    }).join('&');
  }
}

exports.createFetchParamsString = createFetchParamsString;

function checkForFlowPageAndFlowType(element) {
  if (!(element.dataset.flowPage && element.dataset.flowType)) {
    throw new Error('No data-flow-page or data-flow-type was detected');
  }
}

exports.checkForFlowPageAndFlowType = checkForFlowPageAndFlowType;
exports.fetchParamsITAD = {
  flowPage: 'flowPage',
  flowType: 'flowType',
  gdCtk: 'gdCtk',
  prforceGroups: 'prforceGroups'
};
exports.fetchParamsBranded = {
  flowPage: 'flowPage',
  flowType: 'flowType'
};
exports.fetchParamsBrandedLogging = {
  adtype: 'adtype',
  creativeKey: 'creativeKey',
  creativeVariantId: 'creativeVariantId',
  format: 'format',
  elmntType: 'elmntType',
  fccKey: 'fccKey',
  flowPage: 'flowPage',
  flowType: 'flowType',
  gdCtk: 'gdCtk',
  logLabel: 'logLabel',
  mobtk: 'mobtk',
  trigger: 'trigger'
};
exports.fetchOptionsBrandedLogging = {
  method: 'POST',
  credentials: 'include'
};
exports.fetchParamsBeeswaxEBA = {
  width: 'width',
  height: 'height',
  dspAdId: 'dspAdId',
  dspEventId: 'eventId',
  dspUserId: 'userId',
  dspDomain: 'domain'
};
exports.fetchParamsBeeswaxEBALogging = {
  dspAdId: 'dspAdId',
  dspDomain: 'domain',
  dspEventId: 'dspEventId',
  fccKey: 'fccKey',
  creativeKey: 'creativeKey',
  redirectUrl: 'redirectUrl',
  dspUserId: 'dspUserId'
};
exports.fetchOptionsBeeswaxEBALogging = {
  credentials: 'include'
};
exports.fetchParamsSponsoredJob = {
  creativeId: 'creative_id',
  width: 'width',
  height: 'height',
  dspAdId: 'adId',
  dspEventId: 'eventId',
  dspUserId: 'userId',
  dspDomain: 'domain',
  dspAppName: 'appName',
  dspSiteName: 'siteName',
  dspPage: 'page',
  forcedJobKey: 'forcedJobKey',
  dspCampaignId: 'campaignId',
  indeedUserId: 'indeedUserId'
};
exports.fetchParamsSponsoredJobLogging = {
  dspAdId: 'dspAdId',
  dspUserId: 'dspUserId',
  dspEventId: 'dspEventId',
  jobKey: 'jobKey',
  templateName: 'templateName',
  advertiserKey: 'advertiserKey'
};
exports.fetchOptionsSponsoredJobLogging = {
  credentials: 'include'
};

/***/ }),

/***/ 1348:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getForcedAdId = void 0;

function getForcedAdId(params) {
  var forcedAdId = params.get('forcedAdId');

  if (forcedAdId) {
    var forcedAdIdNum = parseInt(forcedAdId, 10);

    if (isNaN(forcedAdIdNum)) {
      forcedAdId = null;
    } else {
      forcedAdId = forcedAdIdNum.toString();
    }
  }

  return forcedAdId;
}

exports.getForcedAdId = getForcedAdId;

/***/ }),

/***/ 2604:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createIndeedAdNotLoadEvent = exports.createIndeedAdLoadEvent = exports.trackCreativeKey = exports.setForcedId = exports.addPrforceGroupsData = void 0;

var constants_1 = __webpack_require__(7504);

var getForcedAdId_1 = __webpack_require__(1348);

function addPrforceGroupsData(params) {
  var prforceGroups = params.get('prforceGroups');

  if (prforceGroups && validatePrforceGroups(prforceGroups)) {
    var pubTagArray = Array.from(document.body.querySelectorAll("[data-tag-type='publisher']:not([data-load-status])"));
    pubTagArray.forEach(function (tag) {
      tag.dataset.prforceGroups = prforceGroups;
    });
  }
}

exports.addPrforceGroupsData = addPrforceGroupsData;

function setForcedId(pubTagArray, param) {
  var forcedAdId = (0, getForcedAdId_1.getForcedAdId)(param);

  if (forcedAdId) {
    pubTagArray[0].dataset.forcedAdId = forcedAdId;
  }
}

exports.setForcedId = setForcedId;

function trackCreativeKey(jsonObj, pubTag, creativeKeySet) {
  var creativeKey = jsonObj.creativeKey;
  pubTag.dataset.creativeKey = creativeKey; // Keep track of unique creativeKeys

  if (creativeKeySet.has(creativeKey)) {
    pubTag.dataset.creativeKeyDuplicate = 'true';
    pubTag.dataset.loadStatus = constants_1.NOTLOADED;
    pubTag.dispatchEvent(createIndeedAdNotLoadEvent());
  } else {
    creativeKeySet.add(creativeKey);
    pubTag.dataset.creativeData = JSON.stringify(jsonObj);
  }
}

exports.trackCreativeKey = trackCreativeKey;

function createIndeedAdLoadEvent() {
  return new CustomEvent('indeedAdLoaded');
}

exports.createIndeedAdLoadEvent = createIndeedAdLoadEvent;

function createIndeedAdNotLoadEvent() {
  return new CustomEvent('indeedAdNotLoaded');
}

exports.createIndeedAdNotLoadEvent = createIndeedAdNotLoadEvent;

function validatePrforceGroups(prforceGroups) {
  var groups = prforceGroups.split(','); // validates that each group ends with a number that is -1 or greater

  var validGroupRegEx = /(\D+\-1$)|[^\-\d](\d+$)/;
  return groups.every(function (group) {
    return validGroupRegEx.test(group);
  });
}

/***/ }),

/***/ 1345:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setTagReason = void 0;

var constants_1 = __webpack_require__(7504);

function setTagReason(publisherTag, reason) {
  publisherTag.dataset.tagReason = reason;
  publisherTag.dataset.loadStatus = constants_1.NOTLOADED;
}

exports.setTagReason = setTagReason;

/***/ }),

/***/ 4416:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var constants_1 = __webpack_require__(7504);

function startPublisher() {
  var IPT = window.__IPT__;

  if (IPT.hasPublisherTags()) {
    IPT.start();
  } else {
    IPT.logger.warn(constants_1.FOUND_NO_PUBLISHER_TAGS);
  }
}

exports.default = startPublisher;

/***/ }),

/***/ 3913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var startPublisher_1 = __importDefault(__webpack_require__(4416));

var IndeedCreativeTagObject_1 = __importDefault(__webpack_require__(210));

var IndeedPublisherTagObject_1 = __importDefault(__webpack_require__(1087));

var constants_1 = __webpack_require__(7504); // Create __IPT__ and __ICT__ objects if they haven't been created before,
// and only add event listeners once


if (!(window.__IPT__ && window.__ICT__.start)) {
  window.__IPT__ = new IndeedPublisherTagObject_1.default();
  window.__ICT__ = new IndeedCreativeTagObject_1.default();
  window.addEventListener('load', function () {
    window.__IPT__.windowLoaded = true;
  }, false); // Add scroll listener to detect if creative has been seen

  document.addEventListener('scroll', function () {
    var ICT = window.__ICT__;

    if (!ICT.isTicking()) {
      window.setTimeout(function () {
        ICT.checkForElementsInViewport();
        ICT.setTicking(false);
      }, constants_1.SCROLL_DEBOUNCER_TIMEOUT);
      ICT.setTicking(true);
    }
  }); // Listen for postMessage from Brand Spotlight creative

  window.addEventListener('message', function (event) {
    var ICT = window.__ICT__;
    var origin;
    var presentationEndpoint = ({"NODE_ENV":"production"}).PRESENTATION_WEBAPP_ENDPOINT;

    if (presentationEndpoint) {
      var presentationURL = new URL(presentationEndpoint);
      origin = presentationURL.origin;
    }

    if ((event.origin === origin || event.origin === window.location.origin) && event.data && event.data.creativeKey && typeof event.data.event === 'string') {
      var theMessage = event.data.event;
      var creativeKey = event.data.creativeKey;
      var creativeVariantId = event.data.creativeVariantId;
      var format = event.data.format;
      var targetCreativeTagElement = document.querySelector("[data-tag-type=\"creative\"][data-creative-key=\"".concat(creativeKey, "\"][data-flow-type=\"brand-spotlight\"]"));

      if (targetCreativeTagElement) {
        if (theMessage === 'click') {
          ICT.logCreativeClick(targetCreativeTagElement);
        }

        if (theMessage === 'close') {
          ICT.logCreativeClosed(targetCreativeTagElement);
          ICT.unregisterElementForSeenCheck(targetCreativeTagElement);
          targetCreativeTagElement.remove();
        }

        if (theMessage === 'creative-rendered') {
          if (creativeVariantId) {
            targetCreativeTagElement.dataset.creativeVariantId = creativeVariantId;
          }

          if (format) {
            targetCreativeTagElement.dataset.format = format;
          }

          ICT.registerElementForSeenCheck(targetCreativeTagElement);
          ICT.checkForElementsInViewport();
          targetCreativeTagElement.dataset.loadStatus = constants_1.LOADED;
        }
      }
    }
  }, false);
}

(0, startPublisher_1.default)();

/***/ }),

/***/ 9388:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FlowType = void 0;
var FlowType;

(function (FlowType) {
  FlowType["INLINE"] = "inline";
  FlowType["BRAND_SPOTLIGHT"] = "brand-spotlight";
  FlowType["COMPANY_SPOTLIGHT"] = "company-spotlight";
  FlowType["HOMEPAGE_HIGHLIGHT"] = "homepage-highlight";
})(FlowType = exports.FlowType || (exports.FlowType = {}));

/***/ }),

/***/ 5666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(3913);
/******/ })()
;
//# sourceMappingURL=publisherTag.js.map