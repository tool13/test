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

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _js_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/video */ \"./src/js/video.js\");\n/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/form */ \"./src/js/form.js\");\n// scss\r\n\r\n\r\n//js\r\n\r\n(0,_js_video__WEBPACK_IMPORTED_MODULE_1__.videoActions)();\r\n\r\n\r\n(0,_js_form__WEBPACK_IMPORTED_MODULE_2__.formActions)();\r\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formActions\": () => (/* binding */ formActions)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./src/js/validate.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/js/popup.js\");\n/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.js */ \"./src/js/video.js\");\n\r\n\r\n\r\n\r\nfunction formActions() {\r\n    const form = document.querySelector('.js-form');\r\n    const emailInput = form.querySelector('.js-input');\r\n    const tip = form.querySelector('.js-error');\r\n    \r\n    emailInput.addEventListener('input', () => {\r\n        tip.textContent = '';\r\n    })\r\n    \r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if ((0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(emailInput) === true) {\r\n            (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.hidePopup)();\r\n            _video_js__WEBPACK_IMPORTED_MODULE_2__.video.play();\r\n        } else {\r\n            tip.textContent = (0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(emailInput);\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://test/./src/js/form.js?");

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showPopup\": () => (/* binding */ showPopup),\n/* harmony export */   \"hidePopup\": () => (/* binding */ hidePopup)\n/* harmony export */ });\nconst popup = document.querySelector('.js-popup');\r\n\r\nfunction showPopup() {\r\n    popup.classList.add('visible');\r\n}\r\n\r\nfunction hidePopup() {\r\n    popup.classList.remove('visible');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test/./src/js/popup.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startTimer\": () => (/* binding */ startTimer),\n/* harmony export */   \"stopTimer\": () => (/* binding */ stopTimer)\n/* harmony export */ });\nconst timeLimit = 5000;\r\nconst second = 1000;\r\nlet timerId;\r\nlet timer = 0;\r\n\r\n\r\n\r\nfunction startTimer(actions) {\r\n    setTimeout(function checkTime() {\r\n        if (timer >= timeLimit) {\r\n            stopTimer();\r\n            actions();\r\n        }\r\n        timer += second;\r\n        timerId = setTimeout(checkTime, second);\r\n    }, second);\r\n}\r\n\r\nfunction stopTimer() {\r\n    clearTimeout(timerId);\r\n}\n\n//# sourceURL=webpack://test/./src/js/timer.js?");

/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst regEmail = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input) {\r\n    if (input.value.trim() === '') {\r\n        return input.dataset.empty;\r\n    }\r\n    if (!regEmail.test(input.value)) {\r\n        return input.dataset.wrong;\r\n    }\r\n    return true;\r\n}\n\n//# sourceURL=webpack://test/./src/js/validate.js?");

/***/ }),

/***/ "./src/js/video.js":
/*!*************************!*\
  !*** ./src/js/video.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"video\": () => (/* binding */ video),\n/* harmony export */   \"videoActions\": () => (/* binding */ videoActions)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/js/timer.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/js/popup.js\");\nconst video = document.querySelector('.js-video');\r\nconst buttonPlay = document.querySelector('.js-play');\r\nconst videoOverlay = document.querySelector('.js-overlay');\r\n\r\n\r\n\r\n\r\nconst startTimerWithActions = _timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer.bind(null, runLimitActions);\r\n\r\nfunction runLimitActions() {\r\n    video.removeEventListener('play', startTimerWithActions);\r\n    video.removeEventListener('pause', _timer_js__WEBPACK_IMPORTED_MODULE_0__.stopTimer);\r\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.showPopup)();\r\n    if (document.fullscreenElement === video) {\r\n        document.exitFullscreen();\r\n    }\r\n    video.pause();\r\n}\r\n\r\nfunction videoActions() {\r\n    video.addEventListener('play', startTimerWithActions);\r\n    video.addEventListener('pause', _timer_js__WEBPACK_IMPORTED_MODULE_0__.stopTimer);\r\n    \r\n    buttonPlay.addEventListener('click', () => {\r\n        buttonPlay.remove();\r\n        videoOverlay.classList.add('hidden');\r\n        video.play();\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test/./src/js/video.js?");

/***/ })

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;