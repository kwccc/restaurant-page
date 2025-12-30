/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _noel_edmonds_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noel-edmonds.jpg */ \"./src/noel-edmonds.jpg\");\n\n\nconst heading = document.createElement(\"h1\");\nheading.textContent = \"About\";\n\nconst description = document.createElement(\"p\");\ndescription.textContent =\n  \"The Fat Pig was opened back in 2010 by legendary chef Noel Edmonds to herald the new age of fantastic cuisine and innovative cooking to delight your tastebuds.\";\n\nconst noelPic = document.createElement(\"img\");\nnoelPic.src = _noel_edmonds_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\nconst about = document.createElement(\"div\");\nabout.appendChild(heading)\nabout.appendChild(description);\nabout.appendChild(noelPic);\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/front.js"
/*!**********************!*\
  !*** ./src/front.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   frontPage: () => (/* binding */ frontPage)\n/* harmony export */ });\n/* harmony import */ var _salle_restaurant_nuit_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salle-restaurant-nuit.jpg */ \"./src/salle-restaurant-nuit.jpg\");\n\n\nconst heading = document.createElement('h1')\nheading.textContent = 'The Fat Pig'\n\nconst description = document.createElement('p')\ndescription.textContent = 'This is the hottest new restaurant in town guaranteed to satisfy your hunger!'\n\nconst image = document.createElement('img')\nimage.src = _salle_restaurant_nuit_jpg__WEBPACK_IMPORTED_MODULE_0__\n\nconst frontPage = document.createElement('div')\nfrontPage.appendChild(heading)\nfrontPage.appendChild(image)\nfrontPage.appendChild(description)\n\n//# sourceURL=webpack://restaurant-page/./src/front.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _front__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front */ \"./src/front.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n// import restaurantImage from \"./salle-restaurant-nuit.jpg\";\n\nconst content = document.getElementById(\"content\");\ncontent.appendChild(_front__WEBPACK_IMPORTED_MODULE_0__.frontPage);\n\nconst homeButton = document.getElementById(\"home\");\nhomeButton.addEventListener(\"click\", () => {\n  content.innerHTML = \"\";\n  content.appendChild(_front__WEBPACK_IMPORTED_MODULE_0__.frontPage);\n});\n\nconst menuButton = document.getElementById(\"menu\");\nmenuButton.addEventListener(\"click\", () => {\n  content.innerHTML = \"\";\n  content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_1__.menu);\n});\n\nconst aboutButton = document.getElementById(\"about\");\naboutButton.addEventListener(\"click\", () => {\n  content.innerHTML = \"\";\n  content.appendChild(_about__WEBPACK_IMPORTED_MODULE_2__.about);\n});\n\nconsole.log(\"script is running\");\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst heading = document.createElement('h1')\nheading.textContent = 'Menu'\n\nconst starter = document.createElement('p')\nstarter.textContent = 'Pea Soup'\n\nconst main = document.createElement('p')\nmain.textContent = 'Roast Swede'\n\nconst dessert = document.createElement('p')\ndessert.textContent = 'Ice Cream'\n\nconst menu = document.createElement('div')\nmenu.appendChild(heading)\nmenu.appendChild(starter)\nmenu.appendChild(main)\nmenu.appendChild(dessert)\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/noel-edmonds.jpg"
/*!******************************!*\
  !*** ./src/noel-edmonds.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6e0f29db36f8ea04854f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/noel-edmonds.jpg?\n}");

/***/ },

/***/ "./src/salle-restaurant-nuit.jpg"
/*!***************************************!*\
  !*** ./src/salle-restaurant-nuit.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bb5744f14ca8de97ea20.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/salle-restaurant-nuit.jpg?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;