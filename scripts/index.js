/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/Chat/Chat.js":
/*!*********************************!*\
  !*** ./src/blocks/Chat/Chat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Chat =\n/*#__PURE__*/\nfunction () {\n  function Chat() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n    _classCallCheck(this, Chat);\n\n    this.state = state;\n\n    this._init();\n\n    this._addListeners();\n\n    this._applyVisibility();\n  }\n\n  _createClass(Chat, [{\n    key: \"_applyElementVisibility\",\n    value: function _applyElementVisibility(element) {\n      element.classList.add(\"\".concat(element.classList[0], \"_state_\").concat(this.state ? 'open' : 'closed'));\n      element.classList.remove(\"\".concat(element.classList[0], \"_state_\").concat(this.state ? 'closed' : 'open'));\n    }\n  }, {\n    key: \"_applyVisibility\",\n    value: function _applyVisibility() {\n      this._applyElementVisibility(this.controlButton);\n\n      this._applyElementVisibility(this.body);\n    }\n  }, {\n    key: \"_toggleVisibility\",\n    value: function _toggleVisibility() {\n      this.state = !this.state;\n\n      this._applyVisibility();\n    }\n  }, {\n    key: \"_handleClick\",\n    value: function _handleClick() {\n      this._toggleVisibility();\n    }\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _document$getElements = document.getElementsByClassName('chat');\n\n      var _document$getElements2 = _slicedToArray(_document$getElements, 1);\n\n      this.chat = _document$getElements2[0];\n\n      var _this$chat$getElement = this.chat.getElementsByClassName('chat__control-button');\n\n      var _this$chat$getElement2 = _slicedToArray(_this$chat$getElement, 1);\n\n      this.controlButton = _this$chat$getElement2[0];\n\n      var _this$chat$getElement3 = this.chat.getElementsByClassName('chat__body');\n\n      var _this$chat$getElement4 = _slicedToArray(_this$chat$getElement3, 1);\n\n      this.body = _this$chat$getElement4[0];\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      this.controlButton.addEventListener('click', this._handleClick.bind(this));\n    }\n  }]);\n\n  return Chat;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\n//# sourceURL=webpack:///./src/blocks/Chat/Chat.js?");

/***/ }),

/***/ "./src/blocks/Menu/Menu.js":
/*!*********************************!*\
  !*** ./src/blocks/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/Smoothscroll */ \"./src/scripts/Smoothscroll.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Menu =\n/*#__PURE__*/\nfunction () {\n  function Menu() {\n    var visibility = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    var openButton = arguments.length > 1 ? arguments[1] : undefined;\n\n    _classCallCheck(this, Menu);\n\n    this.openButton = openButton;\n    this.visibility = visibility;\n\n    this._init();\n\n    this._addListeners();\n\n    this._applyVisibility();\n  }\n\n  _createClass(Menu, [{\n    key: \"_applyVisibility\",\n    value: function _applyVisibility() {\n      this.menu.classList[this.visibility ? 'remove' : 'add']('menu_state_hidden');\n      this.menu.classList[this.visibility ? 'add' : 'remove']('menu_state_open');\n    }\n  }, {\n    key: \"_toggleVisibility\",\n    value: function _toggleVisibility() {\n      this.visibility = !this.visibility;\n\n      this._applyVisibility();\n    }\n  }, {\n    key: \"_handleClick\",\n    value: function _handleClick() {\n      this._toggleVisibility();\n    }\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _document$getElements = document.getElementsByClassName('menu');\n\n      var _document$getElements2 = _slicedToArray(_document$getElements, 1);\n\n      this.menu = _document$getElements2[0];\n\n      var _this$menu$getElement = this.menu.getElementsByClassName('menu__close-button');\n\n      var _this$menu$getElement2 = _slicedToArray(_this$menu$getElement, 1);\n\n      this.closeButton = _this$menu$getElement2[0];\n      var smoothscroll = new _scripts_Smoothscroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.menu);\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      this.openButton.addEventListener('click', this._handleClick.bind(this));\n      this.closeButton.addEventListener('click', this._handleClick.bind(this));\n    }\n  }]);\n\n  return Menu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/blocks/Menu/Menu.js?");

/***/ }),

/***/ "./src/scripts/Smoothscroll.js":
/*!*************************************!*\
  !*** ./src/scripts/Smoothscroll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Smoothscroll =\n/*#__PURE__*/\nfunction () {\n  function Smoothscroll(element) {\n    _classCallCheck(this, Smoothscroll);\n\n    this.element = element;\n    this.isScrolling = false;\n\n    this._init();\n  }\n\n  _createClass(Smoothscroll, [{\n    key: \"_animateScroll\",\n    value: function _animateScroll(value, duration) {\n      var _this = this;\n\n      function animate(from, to, callback, finalCallback) {\n        var start = performance.now();\n        var timer = setInterval(tick, 16);\n\n        function tick() {\n          var now = performance.now();\n          var progress = (now - start) / duration;\n          if (progress > 1) progress = 1;\n          callback(from + (to - from) * progress);\n\n          if (progress === 1) {\n            clearInterval(timer);\n            finalCallback();\n          }\n        }\n      }\n\n      this.isScrolling = true;\n      var currentScroll = this.element.scrollTop;\n      var necessaryScroll = currentScroll + value;\n      if (necessaryScroll < 0) necessaryScroll = 0;\n      animate(currentScroll, necessaryScroll, function (scroll) {\n        _this.element.scrollTop = scroll;\n      }, function () {\n        _this.isScrolling = false;\n      });\n    }\n  }, {\n    key: \"_handleScroll\",\n    value: function _handleScroll(event) {\n      event.preventDefault();\n      if (this.isScrolling) return;\n\n      if (event.deltaY < 0) {\n        this._animateScroll(-400, 500);\n      }\n\n      if (event.deltaY > 0) {\n        this._animateScroll(400, 500);\n      }\n    }\n  }, {\n    key: \"_handleTouchstart\",\n    value: function _handleTouchstart(eventStart) {\n      var startPosition = eventStart.touches[0].screenY;\n      var lastMovePosition = startPosition;\n\n      function handleTouchmove(eventMove) {\n        eventMove.preventDefault();\n        lastMovePosition = eventMove.touches[0].screenY;\n      }\n\n      function handleTouchend() {\n        this.element.removeEventListener('touchmove', handleTouchmove);\n        var distance = startPosition - lastMovePosition;\n\n        if (distance > 50 || distance < -50) {\n          if (this.isScrolling) return;\n\n          if (distance < 0) {\n            this._animateScroll(-400, 500);\n          }\n\n          if (distance > 0) {\n            this._animateScroll(400, 500);\n          }\n        }\n      }\n\n      this.element.addEventListener('touchmove', handleTouchmove.bind(this));\n      this.element.addEventListener('touchend', handleTouchend.bind(this), {\n        once: true\n      });\n    }\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      this._addListeners();\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      this.element.addEventListener('wheel', this._handleScroll.bind(this));\n      this.element.addEventListener('touchstart', this._handleTouchstart.bind(this));\n    }\n  }]);\n\n  return Smoothscroll;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Smoothscroll);\n\n//# sourceURL=webpack:///./src/scripts/Smoothscroll.js?");

/***/ }),

/***/ "./src/views/index/index.js":
/*!**********************************!*\
  !*** ./src/views/index/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/Menu/Menu */ \"./src/blocks/Menu/Menu.js\");\n/* harmony import */ var _blocks_Chat_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/Chat/Chat */ \"./src/blocks/Chat/Chat.js\");\n\n\n\nfunction init() {\n  var menu = new _blocks_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"](false, document.getElementById('menu-open-button'));\n  var chat = new _blocks_Chat_Chat__WEBPACK_IMPORTED_MODULE_1__[\"default\"](false);\n}\n\ndocument.addEventListener('DOMContentLoaded', init);\n\n//# sourceURL=webpack:///./src/views/index/index.js?");

/***/ })

/******/ });