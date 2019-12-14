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

/***/ "./src/blocks sync recursive \\.(jpe?g|gif|png|svg|ico)":
/*!***************************************************!*\
  !*** ./src/blocks sync \.(jpe?g|gif|png|svg|ico) ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./chat/images/chat-icon.png\": \"./src/blocks/chat/images/chat-icon.png\",\n\t\"./header/images/menu-icon.png\": \"./src/blocks/header/images/menu-icon.png\",\n\t\"./header/images/pc-icon.png\": \"./src/blocks/header/images/pc-icon.png\",\n\t\"./header/images/phone-icon.png\": \"./src/blocks/header/images/phone-icon.png\",\n\t\"./header/images/tablet-icon.png\": \"./src/blocks/header/images/tablet-icon.png\",\n\t\"./menu/images/menu-close-icon.png\": \"./src/blocks/menu/images/menu-close-icon.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/blocks sync recursive \\\\.(jpe?g|gif|png|svg|ico)\";\n\n//# sourceURL=webpack:///./src/blocks_sync_\\.(jpe?");

/***/ }),

/***/ "./src/blocks sync recursive \\.(less|css)":
/*!**************************************!*\
  !*** ./src/blocks sync \.(less|css) ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./chat/chat.less\": \"./src/blocks/chat/chat.less\",\n\t\"./content/content.less\": \"./src/blocks/content/content.less\",\n\t\"./header/header.less\": \"./src/blocks/header/header.less\",\n\t\"./main/main.less\": \"./src/blocks/main/main.less\",\n\t\"./menu/menu.less\": \"./src/blocks/menu/menu.less\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/blocks sync recursive \\\\.(less|css)\";\n\n//# sourceURL=webpack:///./src/blocks_sync_\\.(less%7Ccss)?");

/***/ }),

/***/ "./src/blocks/chat/chat.less":
/*!***********************************!*\
  !*** ./src/blocks/chat/chat.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/chat/chat.less?");

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

/***/ "./src/blocks/content/content.less":
/*!*****************************************!*\
  !*** ./src/blocks/content/content.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/content/content.less?");

/***/ }),

/***/ "./src/blocks/header/header.less":
/*!***************************************!*\
  !*** ./src/blocks/header/header.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/header/header.less?");

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

/***/ "./src/blocks/main/main.less":
/*!***********************************!*\
  !*** ./src/blocks/main/main.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/main/main.less?");

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

/***/ "./src/blocks/menu/menu.less":
/*!***********************************!*\
  !*** ./src/blocks/menu/menu.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/menu/menu.less?");

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

/***/ "./src/static/styles sync recursive \\.(less|css)":
/*!*********************************************!*\
  !*** ./src/static/styles sync \.(less|css) ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./foundation.less\": \"./src/static/styles/foundation.less\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/static/styles sync recursive \\\\.(less|css)\";\n\n//# sourceURL=webpack:///./src/static/styles_sync_\\.(less%7Ccss)?");

/***/ }),

/***/ "./src/static/styles/foundation.less":
/*!*******************************************!*\
  !*** ./src/static/styles/foundation.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/static/styles/foundation.less?");

/***/ }),

/***/ "./src/statics.js":
/*!************************!*\
  !*** ./src/statics.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cache = {};\n\nfunction importAll(r) {\n  r.keys().forEach(function (key) {\n    cache[key] = r(key);\n  });\n}\n\nimportAll(__webpack_require__(\"./src/blocks sync recursive \\\\.(jpe?g|gif|png|svg|ico)\")); // images\n\nimportAll(__webpack_require__(\"./src/static/images sync recursive \\\\.(jpe?g|gif|png|svg|ico)\")); // images\n\nimportAll(__webpack_require__(\"./src/static/styles sync recursive \\\\.(less|css)\")); // styles\n\nimportAll(__webpack_require__(\"./src/blocks sync recursive \\\\.(less|css)\")); // styles\n\n//# sourceURL=webpack:///./src/statics.js?");

/***/ })

/******/ });