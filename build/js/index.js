webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normalize_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);


'use strict';

window.onload = function () {
    
    var linkToTop = document.querySelector('.link-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            linkToTop.style.opacity = 1;
        } else {
            linkToTop.style.opacity = 0;
        }
    });
}



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);