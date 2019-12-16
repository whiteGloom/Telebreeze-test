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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/statics.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=static/favicons/[name].[ext]!./src/static/favicons/favicon.ico":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=static/favicons/[name].[ext]!./src/static/favicons/favicon.ico ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/favicons/favicon.ico\");\n\n//# sourceURL=webpack:///./src/static/favicons/favicon.ico?./node_modules/file-loader/dist/cjs.js?name=static/favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./src sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=static/favicons/[name].[ext]!./ \\/static\\/favicons\\/.+\\.(svg|png|ico|xml)$":
/*!***************************************************************************************************************************************!*\
  !*** ./src sync !./node_modules/file-loader/dist/cjs.js?name=static/favicons/[name].[ext] \/static\/favicons\/.+\.(svg|png|ico|xml)$ ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./static/favicons/favicon.ico\": \"./node_modules/file-loader/dist/cjs.js?name=static/favicons/[name].[ext]!./src/static/favicons/favicon.ico\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=static/favicons/[name].[ext]!./ \\\\/static\\\\/favicons\\\\/.+\\\\.(svg|png|ico|xml)$\";\n\n//# sourceURL=webpack:///./node_modules/file-loader/dist/cjs.js?./src_sync_");

/***/ }),

/***/ "./src/blocks sync recursive \\.(jpe?g|gif|png|svg|ico)":
/*!***************************************************!*\
  !*** ./src/blocks sync \.(jpe?g|gif|png|svg|ico) ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./chat/images/chat-icon.png\": \"./src/blocks/chat/images/chat-icon.png\",\n\t\"./header/images/menu-icon.png\": \"./src/blocks/header/images/menu-icon.png\",\n\t\"./header/images/pc-icon.png\": \"./src/blocks/header/images/pc-icon.png\",\n\t\"./header/images/phone-icon.png\": \"./src/blocks/header/images/phone-icon.png\",\n\t\"./header/images/tablet-icon.png\": \"./src/blocks/header/images/tablet-icon.png\",\n\t\"./menu/images/menu-close-icon.png\": \"./src/blocks/menu/images/menu-close-icon.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/blocks sync recursive \\\\.(jpe?g|gif|png|svg|ico)\";\n\n//# sourceURL=webpack:///./src/blocks_sync_\\.(jpe?");

/***/ }),

/***/ "./src/blocks/chat/images/chat-icon.png":
/*!**********************************************!*\
  !*** ./src/blocks/chat/images/chat-icon.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/chat-icon.png\");\n\n//# sourceURL=webpack:///./src/blocks/chat/images/chat-icon.png?");

/***/ }),

/***/ "./src/blocks/header/images/menu-icon.png":
/*!************************************************!*\
  !*** ./src/blocks/header/images/menu-icon.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/menu-icon.png\");\n\n//# sourceURL=webpack:///./src/blocks/header/images/menu-icon.png?");

/***/ }),

/***/ "./src/blocks/header/images/pc-icon.png":
/*!**********************************************!*\
  !*** ./src/blocks/header/images/pc-icon.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/pc-icon.png\");\n\n//# sourceURL=webpack:///./src/blocks/header/images/pc-icon.png?");

/***/ }),

/***/ "./src/blocks/header/images/phone-icon.png":
/*!*************************************************!*\
  !*** ./src/blocks/header/images/phone-icon.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/phone-icon.png\");\n\n//# sourceURL=webpack:///./src/blocks/header/images/phone-icon.png?");

/***/ }),

/***/ "./src/blocks/header/images/tablet-icon.png":
/*!**************************************************!*\
  !*** ./src/blocks/header/images/tablet-icon.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/tablet-icon.png\");\n\n//# sourceURL=webpack:///./src/blocks/header/images/tablet-icon.png?");

/***/ }),

/***/ "./src/blocks/menu/images/menu-close-icon.png":
/*!****************************************************!*\
  !*** ./src/blocks/menu/images/menu-close-icon.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/menu-close-icon.png\");\n\n//# sourceURL=webpack:///./src/blocks/menu/images/menu-close-icon.png?");

/***/ }),

/***/ "./src/favicons.js":
/*!*************************!*\
  !*** ./src/favicons.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var faviconsContext = __webpack_require__(\"./src sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=static/favicons/[name].[ext]!./ \\\\/static\\\\/favicons\\\\/.+\\\\.(svg|png|ico|xml)$\");\n\nfaviconsContext.keys().forEach(faviconsContext);\n\n//# sourceURL=webpack:///./src/favicons.js?");

/***/ }),

/***/ "./src/static/images sync recursive \\.(jpe?g|gif|png|svg|ico)":
/*!**********************************************************!*\
  !*** ./src/static/images sync \.(jpe?g|gif|png|svg|ico) ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./some.jpeg\": \"./src/static/images/some.jpeg\",\n\t\"./some1.jpg\": \"./src/static/images/some1.jpg\",\n\t\"./some2.jpg\": \"./src/static/images/some2.jpg\",\n\t\"./some3.jpg\": \"./src/static/images/some3.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/static/images sync recursive \\\\.(jpe?g|gif|png|svg|ico)\";\n\n//# sourceURL=webpack:///./src/static/images_sync_\\.(jpe?");

/***/ }),

/***/ "./src/static/images/some.jpeg":
/*!*************************************!*\
  !*** ./src/static/images/some.jpeg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/some.jpeg\");\n\n//# sourceURL=webpack:///./src/static/images/some.jpeg?");

/***/ }),

/***/ "./src/static/images/some1.jpg":
/*!*************************************!*\
  !*** ./src/static/images/some1.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/some1.jpg\");\n\n//# sourceURL=webpack:///./src/static/images/some1.jpg?");

/***/ }),

/***/ "./src/static/images/some2.jpg":
/*!*************************************!*\
  !*** ./src/static/images/some2.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/some2.jpg\");\n\n//# sourceURL=webpack:///./src/static/images/some2.jpg?");

/***/ }),

/***/ "./src/static/images/some3.jpg":
/*!*************************************!*\
  !*** ./src/static/images/some3.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/images/some3.jpg\");\n\n//# sourceURL=webpack:///./src/static/images/some3.jpg?");

/***/ }),

/***/ "./src/statics.js":
/*!************************!*\
  !*** ./src/statics.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _favicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favicons */ \"./src/favicons.js\");\n/* harmony import */ var _favicons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_favicons__WEBPACK_IMPORTED_MODULE_0__);\n\nvar cache = {};\n\nfunction importAll(r) {\n  r.keys().forEach(function (key) {\n    cache[key] = r(key);\n  });\n}\n\nimportAll(__webpack_require__(\"./src/blocks sync recursive \\\\.(jpe?g|gif|png|svg|ico)\")); // images\n\nimportAll(__webpack_require__(\"./src/static/images sync recursive \\\\.(jpe?g|gif|png|svg|ico)\")); // images\n\n//# sourceURL=webpack:///./src/statics.js?");

/***/ })

/******/ });