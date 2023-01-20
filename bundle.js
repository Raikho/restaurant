/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/samosa_platter.jpg */ "./src/assets/samosa_platter.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --darkBlue: #0f172a;\n    --teal: #0d9488;\n    --lime: #65a30d;\n    --offwhite: #f1f5f9;\n    --offwhiteAlpha: #f1f5f988;\n    --gray: #64748b;\n    --darkGray: #1f2937;\n}\n\nbody {\n    background-color: var(--darkBlue);\n    color: var(--darkGray);\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 10vh 85vh 5vh;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.tab {\n    width: 80px;\n    padding: 5px;\n\n    color: var(--offwhite);\n    font-family: arial;\n    font-weight: 400;\n    text-align: center;\n\n    border: 2px solid #0c4a6e33;\n    border-radius: 5px;\n}\n\n.tab[data-selected=\"false\"] {color: var(--offwhiteAlpha);}\n.tab[data-selected=\"true\"] {background-color: var(--lime);}\n.tab[data-selected=\"false\"]:hover {\n    background-color:  var(--teal);\n    color: var(--offwhite);\n}\n.tab:active {backdrop-filter: brightness(2.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: min(500px, 80vw);\n    height: 70vh;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: 240px;\n    text-align: center;\n\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: 150px;\n    height: 100px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.title {\n    width: 360px;\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n\n.subtitle {\n    width: 240px;\n    font-family: georgia;\n    font-size: 32px;\n    font-weight: 700;\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: var(--gray);\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,0BAA0B;IAC1B,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,sBAAsB;IACtB,oBAAoB;IACpB,eAAe;IACf,gBAAgB;;IAEhB,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,aAAa;IACb,iCAAiC;AACrC;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;;IAElB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA,6BAA6B,2BAA2B,CAAC;AACzD,4BAA4B,6BAA6B,CAAC;AAC1D;IACI,8BAA8B;IAC9B,sBAAsB;AAC1B;AACA,aAAa,iCAAiC,CAAC;;AAE/C,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,yDAAoD;IACpD,kCAAkC;IAClC,sBAAsB;;IAEtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;;IAE7B,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA,qBAAqB,WAAW,CAAC;AACjC,2BAA2B,6BAA6B,CAAC;AACzD;IACI,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,kBAAkB;;IAElB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC;;;mBAGe;IACf,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA,cAAc,gBAAgB,CAAC;AAC/B;IACI,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC;;;;mCAI+B;AACnC;AACA,uBAAuB,sBAAsB,CAAC;AAC9C,2BAA2B,0BAA0B,EAAE,eAAe,CAAC;AACvE,yBAAyB,wBAAwB,EAAE,eAAe,CAAC;AACnE,wBAAwB,uBAAuB,EAAE,eAAe,CAAC;AACjE;IACI,yBAAyB;IACzB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,+DAA+D;IAC/D,2BAA2B;IAC3B,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,gBAAgB;AACpB;;AAEA,UAAU,eAAe;;AAEzB;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA,IAAI,gBAAgB,CAAC;AACrB,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB","sourcesContent":[":root {\n    --darkBlue: #0f172a;\n    --teal: #0d9488;\n    --lime: #65a30d;\n    --offwhite: #f1f5f9;\n    --offwhiteAlpha: #f1f5f988;\n    --gray: #64748b;\n    --darkGray: #1f2937;\n}\n\nbody {\n    background-color: var(--darkBlue);\n    color: var(--darkGray);\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 10vh 85vh 5vh;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.tab {\n    width: 80px;\n    padding: 5px;\n\n    color: var(--offwhite);\n    font-family: arial;\n    font-weight: 400;\n    text-align: center;\n\n    border: 2px solid #0c4a6e33;\n    border-radius: 5px;\n}\n\n.tab[data-selected=\"false\"] {color: var(--offwhiteAlpha);}\n.tab[data-selected=\"true\"] {background-color: var(--lime);}\n.tab[data-selected=\"false\"]:hover {\n    background-color:  var(--teal);\n    color: var(--offwhite);\n}\n.tab:active {backdrop-filter: brightness(2.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(\"./assets/samosa_platter.jpg\");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: min(500px, 80vw);\n    height: 70vh;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: 240px;\n    text-align: center;\n\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: 150px;\n    height: 100px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.title {\n    width: 360px;\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n\n.subtitle {\n    width: 240px;\n    font-family: georgia;\n    font-size: 32px;\n    font-weight: 700;\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: var(--gray);\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getContactContent)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");
/* harmony import */ var _assets_managerProfile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/managerProfile.png */ "./src/assets/managerProfile.png");
/* harmony import */ var _assets_chefProfile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/chefProfile.png */ "./src/assets/chefProfile.png");
/* harmony import */ var _assets_waiterProfile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/waiterProfile.png */ "./src/assets/waiterProfile.png");





function getContactContent() {
    console.log('Importing contact  stuff...');

    const content = [];

    // Title
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'title'], 'Contact Us'));

    // Manager
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createContact('Ms. Manager', 'Manager', '555-555-551', 'managerEmail@domain.com', _assets_managerProfile_png__WEBPACK_IMPORTED_MODULE_1__));

    // Chef
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createContact('Ms. Chef', 'Chef', '555-555-552', 'chefEmail@domain.com', _assets_chefProfile_png__WEBPACK_IMPORTED_MODULE_2__));

    // Waiter
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createContact('Mr. Waiter', 'Waiter', '555-555-553', 'waiterEmail@domain.com', _assets_waiterProfile_png__WEBPACK_IMPORTED_MODULE_3__));

    return content;
}

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "element": () => (/* binding */ element)
/* harmony export */ });
// import samosa from './assets/samosa.jpg';

const element = {
    create: function(type, classes, text) {
        let out = document.createElement(type);
        for (let c of classes)
            out.classList.add(c);
        out.textContent = text;
        return out;
    },
    createItem: function(name, desc, price, picUrl) {
        let div = this.create('div', ['card', 'item']);
        let subDiv = this.create('div', ['itemName'], name);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['desc'], desc);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['price'], price);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['pic']);
        subDiv.style.backgroundImage = "url('" + picUrl + "')";

        div.appendChild(subDiv);
        return div;
    },
    createContact: function(name, position, number, email, picUrl) {
        let div = this.create('div', ['card', 'contact']);
        let subDiv = this.create('div', ['contactName'], name);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactPosition'], position);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactNumber'], number);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactEmail'], email);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactPicture']);
        subDiv.style.backgroundImage = "url('" + picUrl + "')";
        div.appendChild(subDiv);
        return div;
    },
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHomeContent)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");


function getHomeContent() {
    console.log('Importing home stuff...');

    const content = [];

    // Title
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'title'], 'Samosa Hut'));

    // Description
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'smaller'], "Samosa Hut is home to the world's best Samosas. Hand crafted with the freshest ingredients, you won't find better Samosas anywhere else!"));

    // Hours
    let div = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card'], '');
    let subDiv = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['heading'], 'Hours');
    div.appendChild(subDiv);
    let hoursList = [
        'Sunday: 12am - 4pm',
        'Monday: 10am - 8pm',
        'Teusday: 10am - 8pm',
        'Wednesday: 10am - 8pm',
        'Thursday: 10am - 8pm',
        'Friday: 10am - 10pm',
        'Saturday: 10am - 10pm',
    ];
    for (let i of hoursList)
        div.appendChild(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('li', [], i));
    content.push(div);

    // Location
    div = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card']);
    subDiv = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['heading'], 'Location');
    div.appendChild(subDiv);
    subDiv = _element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', [], '9000 Central Ave, Manhattan, New York');
    div.appendChild(subDiv);

    content.push(div);

    return content;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMenuContent)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");
/* harmony import */ var _assets_samosa_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/samosa.jpg */ "./src/assets/samosa.jpg");
/* harmony import */ var _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/naan.jpg */ "./src/assets/naan.jpg");
/* harmony import */ var _assets_chai_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/chai.jpg */ "./src/assets/chai.jpg");





function getMenuContent() {
    console.log('Importing menu stuff...');

    const content = [];

    // Title
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'title'], 'Menu'));

    // Main Dishes
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'subtitle'], 'Main Dishes'));
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createItem('Samosa', 'Filled with potatoes and herbs inside of a cripsy crust','$5', _assets_samosa_jpg__WEBPACK_IMPORTED_MODULE_1__));

    // Sides
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'subtitle'], 'Sides'));
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createItem('Naan', 'Savory flatbread','$2', _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_2__));

    // Beverages
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.create('div', ['card', 'subtitle'], 'Beverages'));
    content.push(_element_js__WEBPACK_IMPORTED_MODULE_0__.element.createItem('Chai', 'A spiced black tea','$4', _assets_chai_jpg__WEBPACK_IMPORTED_MODULE_3__));

    return content;
}

/***/ }),

/***/ "./src/assets/chai.jpg":
/*!*****************************!*\
  !*** ./src/assets/chai.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chai.jpg";

/***/ }),

/***/ "./src/assets/chefProfile.png":
/*!************************************!*\
  !*** ./src/assets/chefProfile.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chefProfile.png";

/***/ }),

/***/ "./src/assets/managerProfile.png":
/*!***************************************!*\
  !*** ./src/assets/managerProfile.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "managerProfile.png";

/***/ }),

/***/ "./src/assets/naan.jpg":
/*!*****************************!*\
  !*** ./src/assets/naan.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "naan.jpg";

/***/ }),

/***/ "./src/assets/samosa.jpg":
/*!*******************************!*\
  !*** ./src/assets/samosa.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "samosa.jpg";

/***/ }),

/***/ "./src/assets/samosa_platter.jpg":
/*!***************************************!*\
  !*** ./src/assets/samosa_platter.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "samosa_platter.jpg";

/***/ }),

/***/ "./src/assets/waiterProfile.png":
/*!**************************************!*\
  !*** ./src/assets/waiterProfile.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "waiterProfile.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






const tabs = {
    home: {id: 'home'},
    menu: {id: 'menu'},
    contact: {id: 'contact'},
};

for (let [key, tab] of Object.entries(tabs)) {
    // Setup nodes
    tab.node = document.getElementById(tab.id);
    // Setup event listeners
    tab.node.addEventListener('click', () => {
        tab.node.dataset.selected = 'true';
        // Unselect other tabs
        Object.entries(tabs).forEach(([key, value]) => {
            if (tab.id != value.id) {
                value.node.dataset.selected = 'false';
            }
        });
        clearContent();
        addContent(tab);
    });
}

const content = {};
content.node = document.getElementById('content');

function clearContent() {
    while (content.node.hasChildNodes())
        content.node.removeChild(content.node.firstChild);
}

function addContent(tab) {
    for (let element of tab.content)
        content.node.appendChild(element);
}


tabs.home.content = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
tabs.menu.content = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
tabs.contact.content = (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();


// INIT
clearContent();
addContent(tabs.home);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCO0FBQ0E7QUFDTTs7O0FBRzdDO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsV0FBVztBQUN0QixjQUFjLGNBQWM7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG9CQUFvQixvREFBYztBQUNsQyxvQkFBb0Isb0RBQWM7QUFDbEMsdUJBQXVCLHVEQUFpQjs7O0FBR3hDO0FBQ0E7QUFDQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2Ftb3NhX3BsYXR0ZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWRhcmtCbHVlOiAjMGYxNzJhO1xcbiAgICAtLXRlYWw6ICMwZDk0ODg7XFxuICAgIC0tbGltZTogIzY1YTMwZDtcXG4gICAgLS1vZmZ3aGl0ZTogI2YxZjVmOTtcXG4gICAgLS1vZmZ3aGl0ZUFscGhhOiAjZjFmNWY5ODg7XFxuICAgIC0tZ3JheTogIzY0NzQ4YjtcXG4gICAgLS1kYXJrR3JheTogIzFmMjkzNztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtCbHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmF5KTtcXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWE7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg1dmggNXZoO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVG9wID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFiIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYzRhNmUzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFiW2RhdGEtc2VsZWN0ZWQ9XFxcImZhbHNlXFxcIl0ge2NvbG9yOiB2YXIoLS1vZmZ3aGl0ZUFscGhhKTt9XFxuLnRhYltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUpO31cXG4udGFiW2RhdGEtc2VsZWN0ZWQ9XFxcImZhbHNlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGVhbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxufVxcbi50YWI6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMi4yNSk7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNYWluID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQubWFpbiB7XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDgwdncpO1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4ICMwMDAzOztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHt3aWR0aDogMjBweDt9XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAjMDAwMzs7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwgMmZyLCA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaXRlbU5hbWUgaXRlbU5hbWVcXFwiXFxuICAgICAgICBcXFwiZGVzYyBkZXNjXFxcIlxcbiAgICAgICAgXFxcInByaWNlIHBpY1xcXCI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLml0ZW0+Lml0ZW1OYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBpdGVtTmFtZTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG4uaXRlbT4uZGVzYyB7XFxuICAgIGdyaWQtYXJlYTogZGVzYztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uaXRlbT4ucHJpY2Uge2dyaWQtYXJlYTogcHJpY2U7fVxcbi5pdGVtPi5waWMge1xcbiAgICBncmlkLWFyZWE6IHBpYztcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiY29udGFjdE5hbWUgY29udGFjdFBpY3R1cmVcXFwiXFxuICAgICAgICBcXFwiY29udGFjdFBvc2l0aW9uIGNvbnRhY3RQaWN0dXJlXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3ROdW1iZXIgY29udGFjdE51bWJlclxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0RW1haWwgY29udGFjdEVtYWlsXFxcIjtcXG59XFxuLmNvbnRhY3Q+LmNvbnRhY3ROYW1lIHtncmlkLWFyZWE6IGNvbnRhY3ROYW1lO31cXG4uY29udGFjdD4uY29udGFjdFBvc2l0aW9uIHtncmlkLWFyZWE6IGNvbnRhY3RQb3NpdGlvbjsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdE51bWJlciB7Z3JpZC1hcmVhOiBjb250YWN0TnVtYmVyOyBmb250LXNpemU6IDE2cHg7fVxcbi5jb250YWN0Pi5jb250YWN0RW1haWwge2dyaWQtYXJlYTogY29udGFjdEVtYWlsOyBmb250LXNpemU6IDE2cHg7fVxcbi5jb250YWN0Pi5jb250YWN0UGljdHVyZSB7XFxuICAgIGdyaWQtYXJlYTogY29udGFjdFBpY3R1cmU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL3NyYy9hc3NldHMvbWFuYWdlclByb2ZpbGUucG5nXFxcIik7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxuXFxufVxcblxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgZm9udC1mYW1pbHk6IGdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgZm9udC1mYW1pbHk6IGdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNtYWxsZXIge2ZvbnQtc2l6ZTogMThweH1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxubGkge2xpc3Qtc3R5bGU6IG5vbmU7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEZvb3RlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVzs7SUFFWCxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7O0FBRXRFO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCOztJQUVsQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBLDZCQUE2QiwyQkFBMkIsQ0FBQztBQUN6RCw0QkFBNEIsNkJBQTZCLENBQUM7QUFDMUQ7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCO0FBQ0EsYUFBYSxpQ0FBaUMsQ0FBQzs7QUFFL0Msc0VBQXNFO0FBQ3RFLHNFQUFzRTs7QUFFdEU7SUFDSSx5REFBb0Q7SUFDcEQsa0NBQWtDO0lBQ2xDLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBLHFCQUFxQixXQUFXLENBQUM7QUFDakMsMkJBQTJCLDZCQUE2QixDQUFDO0FBQ3pEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakM7OzttQkFHZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBLGNBQWMsZ0JBQWdCLENBQUM7QUFDL0I7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQzs7OzttQ0FJK0I7QUFDbkM7QUFDQSx1QkFBdUIsc0JBQXNCLENBQUM7QUFDOUMsMkJBQTJCLDBCQUEwQixFQUFFLGVBQWUsQ0FBQztBQUN2RSx5QkFBeUIsd0JBQXdCLEVBQUUsZUFBZSxDQUFDO0FBQ25FLHdCQUF3Qix1QkFBdUIsRUFBRSxlQUFlLENBQUM7QUFDakU7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0RBQStEO0lBQy9ELDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEsVUFBVSxlQUFlOztBQUV6QjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixzRUFBc0U7QUFDdEUsc0VBQXNFOztBQUV0RTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1COztJQUVuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWRhcmtCbHVlOiAjMGYxNzJhO1xcbiAgICAtLXRlYWw6ICMwZDk0ODg7XFxuICAgIC0tbGltZTogIzY1YTMwZDtcXG4gICAgLS1vZmZ3aGl0ZTogI2YxZjVmOTtcXG4gICAgLS1vZmZ3aGl0ZUFscGhhOiAjZjFmNWY5ODg7XFxuICAgIC0tZ3JheTogIzY0NzQ4YjtcXG4gICAgLS1kYXJrR3JheTogIzFmMjkzNztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtCbHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmF5KTtcXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWE7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg1dmggNXZoO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVG9wID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFiIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYzRhNmUzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFiW2RhdGEtc2VsZWN0ZWQ9XFxcImZhbHNlXFxcIl0ge2NvbG9yOiB2YXIoLS1vZmZ3aGl0ZUFscGhhKTt9XFxuLnRhYltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbWUpO31cXG4udGFiW2RhdGEtc2VsZWN0ZWQ9XFxcImZhbHNlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGVhbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxufVxcbi50YWI6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMi4yNSk7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNYWluID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3NhbW9zYV9wbGF0dGVyLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQubWFpbiB7XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDgwdncpO1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4ICMwMDAzOztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHt3aWR0aDogMjBweDt9XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAjMDAwMzs7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwgMmZyLCA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaXRlbU5hbWUgaXRlbU5hbWVcXFwiXFxuICAgICAgICBcXFwiZGVzYyBkZXNjXFxcIlxcbiAgICAgICAgXFxcInByaWNlIHBpY1xcXCI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLml0ZW0+Lml0ZW1OYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBpdGVtTmFtZTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG4uaXRlbT4uZGVzYyB7XFxuICAgIGdyaWQtYXJlYTogZGVzYztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uaXRlbT4ucHJpY2Uge2dyaWQtYXJlYTogcHJpY2U7fVxcbi5pdGVtPi5waWMge1xcbiAgICBncmlkLWFyZWE6IHBpYztcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiY29udGFjdE5hbWUgY29udGFjdFBpY3R1cmVcXFwiXFxuICAgICAgICBcXFwiY29udGFjdFBvc2l0aW9uIGNvbnRhY3RQaWN0dXJlXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3ROdW1iZXIgY29udGFjdE51bWJlclxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0RW1haWwgY29udGFjdEVtYWlsXFxcIjtcXG59XFxuLmNvbnRhY3Q+LmNvbnRhY3ROYW1lIHtncmlkLWFyZWE6IGNvbnRhY3ROYW1lO31cXG4uY29udGFjdD4uY29udGFjdFBvc2l0aW9uIHtncmlkLWFyZWE6IGNvbnRhY3RQb3NpdGlvbjsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdE51bWJlciB7Z3JpZC1hcmVhOiBjb250YWN0TnVtYmVyOyBmb250LXNpemU6IDE2cHg7fVxcbi5jb250YWN0Pi5jb250YWN0RW1haWwge2dyaWQtYXJlYTogY29udGFjdEVtYWlsOyBmb250LXNpemU6IDE2cHg7fVxcbi5jb250YWN0Pi5jb250YWN0UGljdHVyZSB7XFxuICAgIGdyaWQtYXJlYTogY29udGFjdFBpY3R1cmU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL3NyYy9hc3NldHMvbWFuYWdlclByb2ZpbGUucG5nXFxcIik7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxuXFxufVxcblxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgZm9udC1mYW1pbHk6IGdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgZm9udC1mYW1pbHk6IGdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnNtYWxsZXIge2ZvbnQtc2l6ZTogMThweH1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxubGkge2xpc3Qtc3R5bGU6IG5vbmU7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEZvb3RlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7ZWxlbWVudH0gZnJvbSAnLi9lbGVtZW50LmpzJztcbmltcG9ydCBtYW5hZ2VySW1nIGZyb20gJy4vYXNzZXRzL21hbmFnZXJQcm9maWxlLnBuZyc7XG5pbXBvcnQgY2hlZkltZyBmcm9tICcuL2Fzc2V0cy9jaGVmUHJvZmlsZS5wbmcnO1xuaW1wb3J0IHdhaXRlckltZyBmcm9tICcuL2Fzc2V0cy93YWl0ZXJQcm9maWxlLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbnRhY3RDb250ZW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdJbXBvcnRpbmcgY29udGFjdCAgc3R1ZmYuLi4nKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcblxuICAgIC8vIFRpdGxlXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAndGl0bGUnXSwgJ0NvbnRhY3QgVXMnKSk7XG5cbiAgICAvLyBNYW5hZ2VyXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlQ29udGFjdCgnTXMuIE1hbmFnZXInLCAnTWFuYWdlcicsICc1NTUtNTU1LTU1MScsICdtYW5hZ2VyRW1haWxAZG9tYWluLmNvbScsIG1hbmFnZXJJbWcpKTtcblxuICAgIC8vIENoZWZcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGVDb250YWN0KCdNcy4gQ2hlZicsICdDaGVmJywgJzU1NS01NTUtNTUyJywgJ2NoZWZFbWFpbEBkb21haW4uY29tJywgY2hlZkltZykpO1xuXG4gICAgLy8gV2FpdGVyXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlQ29udGFjdCgnTXIuIFdhaXRlcicsICdXYWl0ZXInLCAnNTU1LTU1NS01NTMnLCAnd2FpdGVyRW1haWxAZG9tYWluLmNvbScsIHdhaXRlckltZykpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiLy8gaW1wb3J0IHNhbW9zYSBmcm9tICcuL2Fzc2V0cy9zYW1vc2EuanBnJztcblxuY29uc3QgZWxlbWVudCA9IHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKHR5cGUsIGNsYXNzZXMsIHRleHQpIHtcbiAgICAgICAgbGV0IG91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGZvciAobGV0IGMgb2YgY2xhc3NlcylcbiAgICAgICAgICAgIG91dC5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICBvdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG4gICAgY3JlYXRlSXRlbTogZnVuY3Rpb24obmFtZSwgZGVzYywgcHJpY2UsIHBpY1VybCkge1xuICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdpdGVtJ10pO1xuICAgICAgICBsZXQgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnaXRlbU5hbWUnXSwgbmFtZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydkZXNjJ10sIGRlc2MpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsncHJpY2UnXSwgcHJpY2UpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsncGljJ10pO1xuICAgICAgICBzdWJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgcGljVXJsICsgXCInKVwiO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH0sXG4gICAgY3JlYXRlQ29udGFjdDogZnVuY3Rpb24obmFtZSwgcG9zaXRpb24sIG51bWJlciwgZW1haWwsIHBpY1VybCkge1xuICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdjb250YWN0J10pO1xuICAgICAgICBsZXQgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdE5hbWUnXSwgbmFtZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjb250YWN0UG9zaXRpb24nXSwgcG9zaXRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdE51bWJlciddLCBudW1iZXIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdEVtYWlsJ10sIGVtYWlsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NvbnRhY3RQaWN0dXJlJ10pO1xuICAgICAgICBzdWJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgcGljVXJsICsgXCInKVwiO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9LFxufVxuXG5leHBvcnQge2VsZW1lbnR9IiwiaW1wb3J0IHtlbGVtZW50fSBmcm9tICcuL2VsZW1lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb21lQ29udGVudCgpIHtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIGhvbWUgc3R1ZmYuLi4nKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcblxuICAgIC8vIFRpdGxlXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAndGl0bGUnXSwgJ1NhbW9zYSBIdXQnKSk7XG5cbiAgICAvLyBEZXNjcmlwdGlvblxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3NtYWxsZXInXSwgXCJTYW1vc2EgSHV0IGlzIGhvbWUgdG8gdGhlIHdvcmxkJ3MgYmVzdCBTYW1vc2FzLiBIYW5kIGNyYWZ0ZWQgd2l0aCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMsIHlvdSB3b24ndCBmaW5kIGJldHRlciBTYW1vc2FzIGFueXdoZXJlIGVsc2UhXCIpKTtcblxuICAgIC8vIEhvdXJzXG4gICAgbGV0IGRpdiA9IGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnXSwgJycpO1xuICAgIGxldCBzdWJEaXYgPSBlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydoZWFkaW5nJ10sICdIb3VycycpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgIGxldCBob3Vyc0xpc3QgPSBbXG4gICAgICAgICdTdW5kYXk6IDEyYW0gLSA0cG0nLFxuICAgICAgICAnTW9uZGF5OiAxMGFtIC0gOHBtJyxcbiAgICAgICAgJ1RldXNkYXk6IDEwYW0gLSA4cG0nLFxuICAgICAgICAnV2VkbmVzZGF5OiAxMGFtIC0gOHBtJyxcbiAgICAgICAgJ1RodXJzZGF5OiAxMGFtIC0gOHBtJyxcbiAgICAgICAgJ0ZyaWRheTogMTBhbSAtIDEwcG0nLFxuICAgICAgICAnU2F0dXJkYXk6IDEwYW0gLSAxMHBtJyxcbiAgICBdO1xuICAgIGZvciAobGV0IGkgb2YgaG91cnNMaXN0KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudC5jcmVhdGUoJ2xpJywgW10sIGkpKTtcbiAgICBjb250ZW50LnB1c2goZGl2KTtcblxuICAgIC8vIExvY2F0aW9uXG4gICAgZGl2ID0gZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCddKTtcbiAgICBzdWJEaXYgPSBlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydoZWFkaW5nJ10sICdMb2NhdGlvbicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgIHN1YkRpdiA9IGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbXSwgJzkwMDAgQ2VudHJhbCBBdmUsIE1hbmhhdHRhbiwgTmV3IFlvcmsnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcblxuICAgIGNvbnRlbnQucHVzaChkaXYpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiaW1wb3J0IHtlbGVtZW50fSBmcm9tICcuL2VsZW1lbnQuanMnO1xuaW1wb3J0IHNhbW9zYUltZyBmcm9tICcuL2Fzc2V0cy9zYW1vc2EuanBnJztcbmltcG9ydCBuYWFuSW1nIGZyb20gJy4vYXNzZXRzL25hYW4uanBnJztcbmltcG9ydCBjaGFpSW1nIGZyb20gJy4vYXNzZXRzL2NoYWkuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWVudUNvbnRlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ0ltcG9ydGluZyBtZW51IHN0dWZmLi4uJyk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW107XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3RpdGxlJ10sICdNZW51JykpO1xuXG4gICAgLy8gTWFpbiBEaXNoZXNcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdzdWJ0aXRsZSddLCAnTWFpbiBEaXNoZXMnKSk7XG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlSXRlbSgnU2Ftb3NhJywgJ0ZpbGxlZCB3aXRoIHBvdGF0b2VzIGFuZCBoZXJicyBpbnNpZGUgb2YgYSBjcmlwc3kgY3J1c3QnLCckNScsIHNhbW9zYUltZykpO1xuXG4gICAgLy8gU2lkZXNcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdzdWJ0aXRsZSddLCAnU2lkZXMnKSk7XG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlSXRlbSgnTmFhbicsICdTYXZvcnkgZmxhdGJyZWFkJywnJDInLCBuYWFuSW1nKSk7XG5cbiAgICAvLyBCZXZlcmFnZXNcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdzdWJ0aXRsZSddLCAnQmV2ZXJhZ2VzJykpO1xuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZUl0ZW0oJ0NoYWknLCAnQSBzcGljZWQgYmxhY2sgdGVhJywnJDQnLCBjaGFpSW1nKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXRIb21lQ29udGVudCBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGdldE1lbnVDb250ZW50IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgZ2V0Q29udGFjdENvbnRlbnQgZnJvbSAnLi9jb250YWN0LmpzJztcblxuXG5jb25zdCB0YWJzID0ge1xuICAgIGhvbWU6IHtpZDogJ2hvbWUnfSxcbiAgICBtZW51OiB7aWQ6ICdtZW51J30sXG4gICAgY29udGFjdDoge2lkOiAnY29udGFjdCd9LFxufTtcblxuZm9yIChsZXQgW2tleSwgdGFiXSBvZiBPYmplY3QuZW50cmllcyh0YWJzKSkge1xuICAgIC8vIFNldHVwIG5vZGVzXG4gICAgdGFiLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWIuaWQpO1xuICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRhYi5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YWIubm9kZS5kYXRhc2V0LnNlbGVjdGVkID0gJ3RydWUnO1xuICAgICAgICAvLyBVbnNlbGVjdCBvdGhlciB0YWJzXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRhYnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhYi5pZCAhPSB2YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLm5vZGUuZGF0YXNldC5zZWxlY3RlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgYWRkQ29udGVudCh0YWIpO1xuICAgIH0pO1xufVxuXG5jb25zdCBjb250ZW50ID0ge307XG5jb250ZW50Lm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQubm9kZS5oYXNDaGlsZE5vZGVzKCkpXG4gICAgICAgIGNvbnRlbnQubm9kZS5yZW1vdmVDaGlsZChjb250ZW50Lm5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbnRlbnQodGFiKSB7XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiB0YWIuY29udGVudClcbiAgICAgICAgY29udGVudC5ub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5cbnRhYnMuaG9tZS5jb250ZW50ID0gZ2V0SG9tZUNvbnRlbnQoKTtcbnRhYnMubWVudS5jb250ZW50ID0gZ2V0TWVudUNvbnRlbnQoKTtcbnRhYnMuY29udGFjdC5jb250ZW50ID0gZ2V0Q29udGFjdENvbnRlbnQoKTtcblxuXG4vLyBJTklUXG5jbGVhckNvbnRlbnQoKTtcbmFkZENvbnRlbnQodGFicy5ob21lKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=