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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: darkslategray;\n    color: #1f2937;\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 2fr 27fr 1fr;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: bottom;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.container.header>.tab {\n    width: 80px;\n    padding: 5px;\n    border: 2px solid #0c4a6e;\n    border-radius: 5px;\n    text-align: center;\n}\n\n.tab[data-selected=\"true\"] {background-color: goldenrod;}\n.tab[data-selected=\"false\"]:hover {background-color:  #ffffff33;}\n.tab:active {backdrop-filter: brightness(1.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: 500px;\n    height: 700px;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: 240px;\n    text-align: center;\n\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: 150px;\n    height: 100px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.title {\n    width: 360px;\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n\n.subtitle {\n    width: 240px;\n    font-family: georgia;\n    font-size: 32px;\n    font-weight: 700;\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: top;\n    background-size: cover;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: black;\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,gBAAgB;;IAEhB,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,aAAa;IACb,gCAAgC;AACpC;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,wDAAwD;IACxD,2BAA2B;IAC3B,sBAAsB;;IAEtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,4BAA4B,2BAA2B,CAAC;AACxD,mCAAmC,4BAA4B,CAAC;AAChE,aAAa,iCAAiC,CAAC;;AAE/C,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,yDAAoD;IACpD,kCAAkC;IAClC,sBAAsB;;IAEtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;;IAE7B,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA,qBAAqB,WAAW,CAAC;AACjC,2BAA2B,6BAA6B,CAAC;AACzD;IACI,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,kBAAkB;;IAElB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC;;;mBAGe;IACf,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA,cAAc,gBAAgB,CAAC;AAC/B;IACI,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC;;;;mCAI+B;AACnC;AACA,uBAAuB,sBAAsB,CAAC;AAC9C,2BAA2B,0BAA0B,EAAE,eAAe,CAAC;AACvE,yBAAyB,wBAAwB,EAAE,eAAe,CAAC;AACnE,wBAAwB,uBAAuB,EAAE,eAAe,CAAC;AACjE;IACI,yBAAyB;IACzB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,+DAA+D;IAC/D,2BAA2B;IAC3B,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,gBAAgB;AACpB;;AAEA,UAAU,eAAe;;AAEzB;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA,IAAI,gBAAgB,CAAC;AACrB,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,wDAAwD;IACxD,wBAAwB;IACxB,sBAAsB;;IAEtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB","sourcesContent":["body {\n    background-color: darkslategray;\n    color: #1f2937;\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 2fr 27fr 1fr;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: bottom;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.container.header>.tab {\n    width: 80px;\n    padding: 5px;\n    border: 2px solid #0c4a6e;\n    border-radius: 5px;\n    text-align: center;\n}\n\n.tab[data-selected=\"true\"] {background-color: goldenrod;}\n.tab[data-selected=\"false\"]:hover {background-color:  #ffffff33;}\n.tab:active {backdrop-filter: brightness(1.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(\"./assets/samosa_platter.jpg\");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: 500px;\n    height: 700px;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: 240px;\n    text-align: center;\n\n    border-radius: 15px;\n    box-shadow: 4px 4px 8px #0003;;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: 150px;\n    height: 100px;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.title {\n    width: 360px;\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n\n.subtitle {\n    width: 240px;\n    font-family: georgia;\n    font-size: 32px;\n    font-weight: 700;\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    /* background-image: url(\"../dist/vintage_paper.jpg\"); */\n    background-position: top;\n    background-size: cover;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: black;\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCO0FBQ0E7QUFDTTs7O0FBRzdDO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsV0FBVztBQUN0QixjQUFjLGNBQWM7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG9CQUFvQixvREFBYztBQUNsQyxvQkFBb0Isb0RBQWM7QUFDbEMsdUJBQXVCLHVEQUFpQjs7O0FBR3hDO0FBQ0E7QUFDQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2Ftb3NhX3BsYXR0ZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIGNvbG9yOiAjMWYyOTM3O1xcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCAwO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyN2ZyIDFmcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFRvcCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIuaGVhZGVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9kaXN0L3ZpbnRhZ2VfcGFwZXIuanBnXFxcIik7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lci5oZWFkZXI+LnRhYiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYzRhNmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFiW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSB7YmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO31cXG4udGFiW2RhdGEtc2VsZWN0ZWQ9XFxcImZhbHNlXFxcIl06aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICAjZmZmZmZmMzM7fVxcbi50YWI6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMS4yNSk7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNYWluID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQubWFpbiB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjMztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggIzAwMDM7O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge3dpZHRoOiAyMHB4O31cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDt9XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY2O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjNjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4ICMwMDAzOztcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyLCAyZnIsIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJpdGVtTmFtZSBpdGVtTmFtZVxcXCJcXG4gICAgICAgIFxcXCJkZXNjIGRlc2NcXFwiXFxuICAgICAgICBcXFwicHJpY2UgcGljXFxcIjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uaXRlbT4uaXRlbU5hbWUge1xcbiAgICBncmlkLWFyZWE6IGl0ZW1OYW1lO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcbi5pdGVtPi5kZXNjIHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5pdGVtPi5wcmljZSB7Z3JpZC1hcmVhOiBwcmljZTt9XFxuLml0ZW0+LnBpYyB7XFxuICAgIGdyaWQtYXJlYTogcGljO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxufVxcblxcbi5jb250YWN0IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJjb250YWN0TmFtZSBjb250YWN0UGljdHVyZVxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0UG9zaXRpb24gY29udGFjdFBpY3R1cmVcXFwiXFxuICAgICAgICBcXFwiY29udGFjdE51bWJlciBjb250YWN0TnVtYmVyXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3RFbWFpbCBjb250YWN0RW1haWxcXFwiO1xcbn1cXG4uY29udGFjdD4uY29udGFjdE5hbWUge2dyaWQtYXJlYTogY29udGFjdE5hbWU7fVxcbi5jb250YWN0Pi5jb250YWN0UG9zaXRpb24ge2dyaWQtYXJlYTogY29udGFjdFBvc2l0aW9uOyBmb250LXNpemU6IDE2cHg7fVxcbi5jb250YWN0Pi5jb250YWN0TnVtYmVyIHtncmlkLWFyZWE6IGNvbnRhY3ROdW1iZXI7IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RFbWFpbCB7Z3JpZC1hcmVhOiBjb250YWN0RW1haWw7IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RQaWN0dXJlIHtcXG4gICAgZ3JpZC1hcmVhOiBjb250YWN0UGljdHVyZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL2Fzc2V0cy9tYW5hZ2VyUHJvZmlsZS5wbmdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG5cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBmb250LWZhbWlseTogZ2VvcmdpYTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBmb250LWZhbWlseTogZ2VvcmdpYTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc21hbGxlciB7Zm9udC1zaXplOiAxOHB4fVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5saSB7bGlzdC1zdHlsZTogbm9uZTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRm9vdGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIuZm9vdGVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9kaXN0L3ZpbnRhZ2VfcGFwZXIuanBnXFxcIik7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcbmEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXOztJQUVYLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUEsc0VBQXNFO0FBQ3RFLHNFQUFzRTs7QUFFdEU7SUFDSSx3REFBd0Q7SUFDeEQsMkJBQTJCO0lBQzNCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSw0QkFBNEIsMkJBQTJCLENBQUM7QUFDeEQsbUNBQW1DLDRCQUE0QixDQUFDO0FBQ2hFLGFBQWEsaUNBQWlDLENBQUM7O0FBRS9DLHNFQUFzRTtBQUN0RSxzRUFBc0U7O0FBRXRFO0lBQ0kseURBQW9EO0lBQ3BELGtDQUFrQztJQUNsQyxzQkFBc0I7O0lBRXRCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7O0lBRWxCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCOztJQUU3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQSxxQkFBcUIsV0FBVyxDQUFDO0FBQ2pDLDJCQUEyQiw2QkFBNkIsQ0FBQztBQUN6RDtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDOzs7bUJBR2U7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQSxjQUFjLGdCQUFnQixDQUFDO0FBQy9CO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkM7Ozs7bUNBSStCO0FBQ25DO0FBQ0EsdUJBQXVCLHNCQUFzQixDQUFDO0FBQzlDLDJCQUEyQiwwQkFBMEIsRUFBRSxlQUFlLENBQUM7QUFDdkUseUJBQXlCLHdCQUF3QixFQUFFLGVBQWUsQ0FBQztBQUNuRSx3QkFBd0IsdUJBQXVCLEVBQUUsZUFBZSxDQUFDO0FBQ2pFO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLCtEQUErRDtJQUMvRCwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVUsZUFBZTs7QUFFekI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBLElBQUksZ0JBQWdCLENBQUM7QUFDckIsc0VBQXNFO0FBQ3RFLHNFQUFzRTs7QUFFdEU7SUFDSSx3REFBd0Q7SUFDeEQsd0JBQXdCO0lBQ3hCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7O0lBRW5CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgY29sb3I6ICMxZjI5Mzc7XFxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDI3ZnIgMWZyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVG9wID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5oZWFkZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Rpc3QvdmludGFnZV9wYXBlci5qcGdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyLmhlYWRlcj4udGFiIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBjNGE2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YWJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7fVxcbi50YWJbZGF0YS1zZWxlY3RlZD1cXFwiZmFsc2VcXFwiXTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmYzMzt9XFxuLnRhYjphY3RpdmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygxLjI1KTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1haW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIubWFpbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvc2Ftb3NhX3BsYXR0ZXIuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC5tYWluIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAjMDAwMzs7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7d2lkdGg6IDIwcHg7fVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M2O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggIzAwMDM7O1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIsIDJmciwgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcIml0ZW1OYW1lIGl0ZW1OYW1lXFxcIlxcbiAgICAgICAgXFxcImRlc2MgZGVzY1xcXCJcXG4gICAgICAgIFxcXCJwcmljZSBwaWNcXFwiO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5pdGVtPi5pdGVtTmFtZSB7XFxuICAgIGdyaWQtYXJlYTogaXRlbU5hbWU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuLml0ZW0+LmRlc2Mge1xcbiAgICBncmlkLWFyZWE6IGRlc2M7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLml0ZW0+LnByaWNlIHtncmlkLWFyZWE6IHByaWNlO31cXG4uaXRlbT4ucGljIHtcXG4gICAgZ3JpZC1hcmVhOiBwaWM7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImNvbnRhY3ROYW1lIGNvbnRhY3RQaWN0dXJlXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3RQb3NpdGlvbiBjb250YWN0UGljdHVyZVxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0TnVtYmVyIGNvbnRhY3ROdW1iZXJcXFwiXFxuICAgICAgICBcXFwiY29udGFjdEVtYWlsIGNvbnRhY3RFbWFpbFxcXCI7XFxufVxcbi5jb250YWN0Pi5jb250YWN0TmFtZSB7Z3JpZC1hcmVhOiBjb250YWN0TmFtZTt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RQb3NpdGlvbiB7Z3JpZC1hcmVhOiBjb250YWN0UG9zaXRpb247IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3ROdW1iZXIge2dyaWQtYXJlYTogY29udGFjdE51bWJlcjsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdEVtYWlsIHtncmlkLWFyZWE6IGNvbnRhY3RFbWFpbDsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdFBpY3R1cmUge1xcbiAgICBncmlkLWFyZWE6IGNvbnRhY3RQaWN0dXJlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9zcmMvYXNzZXRzL21hbmFnZXJQcm9maWxlLnBuZ1xcXCIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcblxcbn1cXG5cXG4udGl0bGUge1xcbiAgICB3aWR0aDogMzYwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBnZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBnZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5zbWFsbGVyIHtmb250LXNpemU6IDE4cHh9XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmxpIHtsaXN0LXN0eWxlOiBub25lO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGb290ZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5mb290ZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Rpc3QvdmludGFnZV9wYXBlci5qcGdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2VsZW1lbnR9IGZyb20gJy4vZWxlbWVudC5qcyc7XG5pbXBvcnQgbWFuYWdlckltZyBmcm9tICcuL2Fzc2V0cy9tYW5hZ2VyUHJvZmlsZS5wbmcnO1xuaW1wb3J0IGNoZWZJbWcgZnJvbSAnLi9hc3NldHMvY2hlZlByb2ZpbGUucG5nJztcbmltcG9ydCB3YWl0ZXJJbWcgZnJvbSAnLi9hc3NldHMvd2FpdGVyUHJvZmlsZS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb250YWN0Q29udGVudCgpIHtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIGNvbnRhY3QgIHN0dWZmLi4uJyk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW107XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3RpdGxlJ10sICdDb250YWN0IFVzJykpO1xuXG4gICAgLy8gTWFuYWdlclxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZUNvbnRhY3QoJ01zLiBNYW5hZ2VyJywgJ01hbmFnZXInLCAnNTU1LTU1NS01NTEnLCAnbWFuYWdlckVtYWlsQGRvbWFpbi5jb20nLCBtYW5hZ2VySW1nKSk7XG5cbiAgICAvLyBDaGVmXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlQ29udGFjdCgnTXMuIENoZWYnLCAnQ2hlZicsICc1NTUtNTU1LTU1MicsICdjaGVmRW1haWxAZG9tYWluLmNvbScsIGNoZWZJbWcpKTtcblxuICAgIC8vIFdhaXRlclxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZUNvbnRhY3QoJ01yLiBXYWl0ZXInLCAnV2FpdGVyJywgJzU1NS01NTUtNTUzJywgJ3dhaXRlckVtYWlsQGRvbWFpbi5jb20nLCB3YWl0ZXJJbWcpKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufSIsIi8vIGltcG9ydCBzYW1vc2EgZnJvbSAnLi9hc3NldHMvc2Ftb3NhLmpwZyc7XG5cbmNvbnN0IGVsZW1lbnQgPSB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbih0eXBlLCBjbGFzc2VzLCB0ZXh0KSB7XG4gICAgICAgIGxldCBvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBmb3IgKGxldCBjIG9mIGNsYXNzZXMpXG4gICAgICAgICAgICBvdXQuY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgb3V0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9LFxuICAgIGNyZWF0ZUl0ZW06IGZ1bmN0aW9uKG5hbWUsIGRlc2MsIHByaWNlLCBwaWNVcmwpIHtcbiAgICAgICAgbGV0IGRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAnaXRlbSddKTtcbiAgICAgICAgbGV0IHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2l0ZW1OYW1lJ10sIG5hbWUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnZGVzYyddLCBkZXNjKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ3ByaWNlJ10sIHByaWNlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ3BpYyddKTtcbiAgICAgICAgc3ViRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIHBpY1VybCArIFwiJylcIjtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9LFxuICAgIGNyZWF0ZUNvbnRhY3Q6IGZ1bmN0aW9uKG5hbWUsIHBvc2l0aW9uLCBudW1iZXIsIGVtYWlsLCBwaWNVcmwpIHtcbiAgICAgICAgbGV0IGRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAnY29udGFjdCddKTtcbiAgICAgICAgbGV0IHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NvbnRhY3ROYW1lJ10sIG5hbWUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdFBvc2l0aW9uJ10sIHBvc2l0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NvbnRhY3ROdW1iZXInXSwgbnVtYmVyKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NvbnRhY3RFbWFpbCddLCBlbWFpbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjb250YWN0UGljdHVyZSddKTtcbiAgICAgICAgc3ViRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIHBpY1VybCArIFwiJylcIjtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfSxcbn1cblxuZXhwb3J0IHtlbGVtZW50fSIsImltcG9ydCB7ZWxlbWVudH0gZnJvbSAnLi9lbGVtZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SG9tZUNvbnRlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ0ltcG9ydGluZyBob21lIHN0dWZmLi4uJyk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW107XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3RpdGxlJ10sICdTYW1vc2EgSHV0JykpO1xuXG4gICAgLy8gRGVzY3JpcHRpb25cbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICdzbWFsbGVyJ10sIFwiU2Ftb3NhIEh1dCBpcyBob21lIHRvIHRoZSB3b3JsZCdzIGJlc3QgU2Ftb3Nhcy4gSGFuZCBjcmFmdGVkIHdpdGggdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzLCB5b3Ugd29uJ3QgZmluZCBiZXR0ZXIgU2Ftb3NhcyBhbnl3aGVyZSBlbHNlIVwiKSk7XG5cbiAgICAvLyBIb3Vyc1xuICAgIGxldCBkaXYgPSBlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJ10sICcnKTtcbiAgICBsZXQgc3ViRGl2ID0gZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnaGVhZGluZyddLCAnSG91cnMnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICBsZXQgaG91cnNMaXN0ID0gW1xuICAgICAgICAnU3VuZGF5OiAxMmFtIC0gNHBtJyxcbiAgICAgICAgJ01vbmRheTogMTBhbSAtIDhwbScsXG4gICAgICAgICdUZXVzZGF5OiAxMGFtIC0gOHBtJyxcbiAgICAgICAgJ1dlZG5lc2RheTogMTBhbSAtIDhwbScsXG4gICAgICAgICdUaHVyc2RheTogMTBhbSAtIDhwbScsXG4gICAgICAgICdGcmlkYXk6IDEwYW0gLSAxMHBtJyxcbiAgICAgICAgJ1NhdHVyZGF5OiAxMGFtIC0gMTBwbScsXG4gICAgXTtcbiAgICBmb3IgKGxldCBpIG9mIGhvdXJzTGlzdClcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVsZW1lbnQuY3JlYXRlKCdsaScsIFtdLCBpKSk7XG4gICAgY29udGVudC5wdXNoKGRpdik7XG5cbiAgICAvLyBMb2NhdGlvblxuICAgIGRpdiA9IGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnXSk7XG4gICAgc3ViRGl2ID0gZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnaGVhZGluZyddLCAnTG9jYXRpb24nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICBzdWJEaXYgPSBlbGVtZW50LmNyZWF0ZSgnZGl2JywgW10sICc5MDAwIENlbnRyYWwgQXZlLCBNYW5oYXR0YW4sIE5ldyBZb3JrJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG5cbiAgICBjb250ZW50LnB1c2goZGl2KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufSIsImltcG9ydCB7ZWxlbWVudH0gZnJvbSAnLi9lbGVtZW50LmpzJztcbmltcG9ydCBzYW1vc2FJbWcgZnJvbSAnLi9hc3NldHMvc2Ftb3NhLmpwZyc7XG5pbXBvcnQgbmFhbkltZyBmcm9tICcuL2Fzc2V0cy9uYWFuLmpwZyc7XG5pbXBvcnQgY2hhaUltZyBmcm9tICcuL2Fzc2V0cy9jaGFpLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lbnVDb250ZW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdJbXBvcnRpbmcgbWVudSBzdHVmZi4uLicpO1xuXG4gICAgY29uc3QgY29udGVudCA9IFtdO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICd0aXRsZSddLCAnTWVudScpKTtcblxuICAgIC8vIE1haW4gRGlzaGVzXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAnc3VidGl0bGUnXSwgJ01haW4gRGlzaGVzJykpO1xuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZUl0ZW0oJ1NhbW9zYScsICdGaWxsZWQgd2l0aCBwb3RhdG9lcyBhbmQgaGVyYnMgaW5zaWRlIG9mIGEgY3JpcHN5IGNydXN0JywnJDUnLCBzYW1vc2FJbWcpKTtcblxuICAgIC8vIFNpZGVzXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAnc3VidGl0bGUnXSwgJ1NpZGVzJykpO1xuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZUl0ZW0oJ05hYW4nLCAnU2F2b3J5IGZsYXRicmVhZCcsJyQyJywgbmFhbkltZykpO1xuXG4gICAgLy8gQmV2ZXJhZ2VzXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAnc3VidGl0bGUnXSwgJ0JldmVyYWdlcycpKTtcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGVJdGVtKCdDaGFpJywgJ0Egc3BpY2VkIGJsYWNrIHRlYScsJyQ0JywgY2hhaUltZykpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0SG9tZUNvbnRlbnQgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBnZXRNZW51Q29udGVudCBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGdldENvbnRhY3RDb250ZW50IGZyb20gJy4vY29udGFjdC5qcyc7XG5cblxuY29uc3QgdGFicyA9IHtcbiAgICBob21lOiB7aWQ6ICdob21lJ30sXG4gICAgbWVudToge2lkOiAnbWVudSd9LFxuICAgIGNvbnRhY3Q6IHtpZDogJ2NvbnRhY3QnfSxcbn07XG5cbmZvciAobGV0IFtrZXksIHRhYl0gb2YgT2JqZWN0LmVudHJpZXModGFicykpIHtcbiAgICAvLyBTZXR1cCBub2Rlc1xuICAgIHRhYi5ub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiLmlkKTtcbiAgICAvLyBTZXR1cCBldmVudCBsaXN0ZW5lcnNcbiAgICB0YWIubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFiLm5vZGUuZGF0YXNldC5zZWxlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgLy8gVW5zZWxlY3Qgb3RoZXIgdGFic1xuICAgICAgICBPYmplY3QuZW50cmllcyh0YWJzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWIuaWQgIT0gdmFsdWUuaWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5ub2RlLmRhdGFzZXQuc2VsZWN0ZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGFkZENvbnRlbnQodGFiKTtcbiAgICB9KTtcbn1cblxuY29uc3QgY29udGVudCA9IHt9O1xuY29udGVudC5ub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50Lm5vZGUuaGFzQ2hpbGROb2RlcygpKVxuICAgICAgICBjb250ZW50Lm5vZGUucmVtb3ZlQ2hpbGQoY29udGVudC5ub2RlLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBhZGRDb250ZW50KHRhYikge1xuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgdGFiLmNvbnRlbnQpXG4gICAgICAgIGNvbnRlbnQubm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuXG50YWJzLmhvbWUuY29udGVudCA9IGdldEhvbWVDb250ZW50KCk7XG50YWJzLm1lbnUuY29udGVudCA9IGdldE1lbnVDb250ZW50KCk7XG50YWJzLmNvbnRhY3QuY29udGVudCA9IGdldENvbnRhY3RDb250ZW50KCk7XG5cblxuLy8gSU5JVFxuY2xlYXJDb250ZW50KCk7XG5hZGRDb250ZW50KHRhYnMuaG9tZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9