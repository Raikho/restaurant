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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --darkBlue: #0f172a;\n    --teal: #0d9488;\n    --lime: #65a30d;\n    --offwhite: #f1f5f9;\n    --offwhiteAlpha: #f1f5f988;\n    --gray: #64748b;\n    --darkGray: #1f2937;\n}\n\nbody {\n    background-color: var(--darkBlue);\n    color: var(--darkGray);\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 10vh 85vh 5vh;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.tab {\n    width: 80px;\n    padding: 5px;\n\n    color: var(--offwhite);\n    font-family: arial;\n    font-weight: 400;\n    text-align: center;\n\n    border: 2px solid #0c4a6e33;\n    border-radius: 5px;\n    transition: 0.2s;\n}\n\n.tab[data-selected=\"false\"] {color: var(--offwhiteAlpha);}\n.tab[data-selected=\"true\"] {background-color: var(--lime);}\n.tab[data-selected=\"false\"]:hover {\n    background-color:  var(--teal);\n    color: var(--offwhite);\n}\n.tab:active {backdrop-filter: brightness(2.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: min(500px, 80vw);\n    height: 70vh;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 4px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: min(240px, 40vw);\n    text-align: center;\n\n    border-radius: 4px;\n    box-shadow: 4px 4px 8px #0003;\n}\n.title {\n    width: min(360px, 60vw);\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n.subtitle {\n    width: min(240px, 40vw);\n    height: 20px;\n    font-family: georgia;\n    font-size: 28px;\n    font-weight: 700;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: min(150px, 30vw);\n    height: min(100px, 20vw);\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: var(--gray);\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --darkBlue: #0f172a;\n    --teal: #0d9488;\n    --lime: #65a30d;\n    --offwhite: #f1f5f9;\n    --offwhiteAlpha: #f1f5f988;\n    --gray: #64748b;\n    --darkGray: #1f2937;\n}\n\nbody {\n    background-color: var(--darkBlue);\n    color: var(--darkGray);\n    font-family: Cambria;\n    font-size: 20px;\n    font-weight: 700;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    display: grid;\n    grid-template-rows: 10vh 85vh 5vh;\n}\n\n/* ============================== Top ============================== */\n/* ================================================================= */\n\n.container.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.tab {\n    width: 80px;\n    padding: 5px;\n\n    color: var(--offwhite);\n    font-family: arial;\n    font-weight: 400;\n    text-align: center;\n\n    border: 2px solid #0c4a6e33;\n    border-radius: 5px;\n    transition: 0.2s;\n}\n\n.tab[data-selected=\"false\"] {color: var(--offwhiteAlpha);}\n.tab[data-selected=\"true\"] {background-color: var(--lime);}\n.tab[data-selected=\"false\"]:hover {\n    background-color:  var(--teal);\n    color: var(--offwhite);\n}\n.tab:active {backdrop-filter: brightness(2.25);}\n\n/* ============================== Main ============================= */\n/* ================================================================= */\n\n.container.main {\n    background-image: url(\"./assets/samosa_platter.jpg\");\n    background-position: center center;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content.main {\n    width: min(500px, 80vw);\n    height: 70vh;\n    overflow-y: scroll;\n\n    background-color: #ccc3;\n    border-radius: 4px;\n    box-shadow: 4px 4px 8px #0003;;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}\n\n::-webkit-scrollbar {width: 20px;}\n::-webkit-scrollbar-track {background-color: transparent;}\n::-webkit-scrollbar-thumb {\n    background-color: #fff6;\n    border-radius: 20px;\n    border: 7px solid transparent;\n    background-clip: content-box;\n}\n\n.card {\n    background-color: #ccc6;\n    padding: 20px;\n    width: min(240px, 40vw);\n    text-align: center;\n\n    border-radius: 4px;\n    box-shadow: 4px 4px 8px #0003;\n}\n.title {\n    width: min(360px, 60vw);\n    font-family: georgia;\n    font-size: 48px;\n    font-weight: 1000;\n}\n.subtitle {\n    width: min(240px, 40vw);\n    height: 20px;\n    font-family: georgia;\n    font-size: 28px;\n    font-weight: 700;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.item {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr, 2fr, 4fr;\n    grid-template-areas:\n        \"itemName itemName\"\n        \"desc desc\"\n        \"price pic\";\n    gap: 10px;\n    text-align: left;\n}\n.item>.itemName {\n    grid-area: itemName;\n    font-size: 32px;\n}\n.item>.desc {\n    grid-area: desc;\n    font-size: 18px;\n}\n.item>.price {grid-area: price;}\n.item>.pic {\n    grid-area: pic;\n    justify-self: end;\n    width: min(150px, 30vw);\n    height: min(100px, 20vw);\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    box-shadow: 4px 4px 4px #0003;\n}\n\n.contact {\n    text-align: left;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr 1fr 1fr;\n    grid-template-areas:\n        \"contactName contactPicture\"\n        \"contactPosition contactPicture\"\n        \"contactNumber contactNumber\"\n        \"contactEmail contactEmail\";\n}\n.contact>.contactName {grid-area: contactName;}\n.contact>.contactPosition {grid-area: contactPosition; font-size: 16px;}\n.contact>.contactNumber {grid-area: contactNumber; font-size: 16px;}\n.contact>.contactEmail {grid-area: contactEmail; font-size: 16px;}\n.contact>.contactPicture {\n    grid-area: contactPicture;\n    justify-self: end;\n    width: 80px;\n    height: 80px;\n    /* background-image: url(\"../src/assets/managerProfile.png\"); */\n    background-position: center;\n    background-size: cover;\n    border-radius: 80px;\n    box-shadow: 4px 4px 4px #0003;\n\n}\n\n.smaller {font-size: 18px}\n\n.heading {\n    font-size: 32px;\n    text-align: left;\n}\n\nli {list-style: none;}\n/* ============================= Footer ============================ */\n/* ================================================================= */\n\n.container.footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 20px;\n}\na {\n    color: var(--gray);\n    font-size: 12px;\n    font-weight: 400;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0I7QUFDQTtBQUNNOzs7QUFHN0M7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxXQUFXO0FBQ3RCLGNBQWMsY0FBYztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esb0JBQW9CLG9EQUFjO0FBQ2xDLG9CQUFvQixvREFBYztBQUNsQyx1QkFBdUIsdURBQWlCOzs7QUFHeEM7QUFDQTtBQUNBLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9lbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zYW1vc2FfcGxhdHRlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tZGFya0JsdWU6ICMwZjE3MmE7XFxuICAgIC0tdGVhbDogIzBkOTQ4ODtcXG4gICAgLS1saW1lOiAjNjVhMzBkO1xcbiAgICAtLW9mZndoaXRlOiAjZjFmNWY5O1xcbiAgICAtLW9mZndoaXRlQWxwaGE6ICNmMWY1Zjk4ODtcXG4gICAgLS1ncmF5OiAjNjQ3NDhiO1xcbiAgICAtLWRhcmtHcmF5OiAjMWYyOTM3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0JsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya0dyYXkpO1xcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCAwO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODV2aCA1dmg7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBUb3AgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi50YWIge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBjNGE2ZTMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50YWJbZGF0YS1zZWxlY3RlZD1cXFwiZmFsc2VcXFwiXSB7Y29sb3I6IHZhcigtLW9mZndoaXRlQWxwaGEpO31cXG4udGFiW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZSk7fVxcbi50YWJbZGF0YS1zZWxlY3RlZD1cXFwiZmFsc2VcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZWFsKTtcXG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG59XFxuLnRhYjphY3RpdmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyLjI1KTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1haW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIubWFpbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC5tYWluIHtcXG4gICAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjMztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCAjMDAwMzs7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7d2lkdGg6IDIwcHg7fVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M2O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogbWluKDI0MHB4LCA0MHZ3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4ICMwMDAzO1xcbn1cXG4udGl0bGUge1xcbiAgICB3aWR0aDogbWluKDM2MHB4LCA2MHZ3KTtcXG4gICAgZm9udC1mYW1pbHk6IGdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufVxcbi5zdWJ0aXRsZSB7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDQwdncpO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBnZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIsIDJmciwgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcIml0ZW1OYW1lIGl0ZW1OYW1lXFxcIlxcbiAgICAgICAgXFxcImRlc2MgZGVzY1xcXCJcXG4gICAgICAgIFxcXCJwcmljZSBwaWNcXFwiO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5pdGVtPi5pdGVtTmFtZSB7XFxuICAgIGdyaWQtYXJlYTogaXRlbU5hbWU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuLml0ZW0+LmRlc2Mge1xcbiAgICBncmlkLWFyZWE6IGRlc2M7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLml0ZW0+LnByaWNlIHtncmlkLWFyZWE6IHByaWNlO31cXG4uaXRlbT4ucGljIHtcXG4gICAgZ3JpZC1hcmVhOiBwaWM7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogbWluKDE1MHB4LCAzMHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwcHgsIDIwdncpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxufVxcblxcbi5jb250YWN0IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJjb250YWN0TmFtZSBjb250YWN0UGljdHVyZVxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0UG9zaXRpb24gY29udGFjdFBpY3R1cmVcXFwiXFxuICAgICAgICBcXFwiY29udGFjdE51bWJlciBjb250YWN0TnVtYmVyXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3RFbWFpbCBjb250YWN0RW1haWxcXFwiO1xcbn1cXG4uY29udGFjdD4uY29udGFjdE5hbWUge2dyaWQtYXJlYTogY29udGFjdE5hbWU7fVxcbi5jb250YWN0Pi5jb250YWN0UG9zaXRpb24ge2dyaWQtYXJlYTogY29udGFjdFBvc2l0aW9uOyBmb250LXNpemU6IDE2cHg7fVxcbi5jb250YWN0Pi5jb250YWN0TnVtYmVyIHtncmlkLWFyZWE6IGNvbnRhY3ROdW1iZXI7IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RFbWFpbCB7Z3JpZC1hcmVhOiBjb250YWN0RW1haWw7IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RQaWN0dXJlIHtcXG4gICAgZ3JpZC1hcmVhOiBjb250YWN0UGljdHVyZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL2Fzc2V0cy9tYW5hZ2VyUHJvZmlsZS5wbmdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG5cXG59XFxuXFxuLnNtYWxsZXIge2ZvbnQtc2l6ZTogMThweH1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxubGkge2xpc3Qtc3R5bGU6IG5vbmU7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEZvb3RlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uY29udGFpbmVyLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7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SSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjs7SUFFbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kYXJrQmx1ZTogIzBmMTcyYTtcXG4gICAgLS10ZWFsOiAjMGQ5NDg4O1xcbiAgICAtLWxpbWU6ICM2NWEzMGQ7XFxuICAgIC0tb2Zmd2hpdGU6ICNmMWY1Zjk7XFxuICAgIC0tb2Zmd2hpdGVBbHBoYTogI2YxZjVmOTg4O1xcbiAgICAtLWdyYXk6ICM2NDc0OGI7XFxuICAgIC0tZGFya0dyYXk6ICMxZjI5Mzc7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JheSk7XFxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NXZoIDV2aDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFRvcCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMGM0YTZlMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRhYltkYXRhLXNlbGVjdGVkPVxcXCJmYWxzZVxcXCJdIHtjb2xvcjogdmFyKC0tb2Zmd2hpdGVBbHBoYSk7fVxcbi50YWJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lKTt9XFxuLnRhYltkYXRhLXNlbGVjdGVkPVxcXCJmYWxzZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRlYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbn1cXG4udGFiOmFjdGl2ZSB7YmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDIuMjUpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTWFpbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lci5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9zYW1vc2FfcGxhdHRlci5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50Lm1haW4ge1xcbiAgICB3aWR0aDogbWluKDUwMHB4LCA4MHZ3KTtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MzO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4ICMwMDAzOztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHt3aWR0aDogMjBweDt9XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDQwdncpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggIzAwMDM7XFxufVxcbi50aXRsZSB7XFxuICAgIHdpZHRoOiBtaW4oMzYwcHgsIDYwdncpO1xcbiAgICBmb250LWZhbWlseTogZ2VvcmdpYTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG59XFxuLnN1YnRpdGxlIHtcXG4gICAgd2lkdGg6IG1pbigyNDBweCwgNDB2dyk7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IGdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwgMmZyLCA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaXRlbU5hbWUgaXRlbU5hbWVcXFwiXFxuICAgICAgICBcXFwiZGVzYyBkZXNjXFxcIlxcbiAgICAgICAgXFxcInByaWNlIHBpY1xcXCI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLml0ZW0+Lml0ZW1OYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBpdGVtTmFtZTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG4uaXRlbT4uZGVzYyB7XFxuICAgIGdyaWQtYXJlYTogZGVzYztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uaXRlbT4ucHJpY2Uge2dyaWQtYXJlYTogcHJpY2U7fVxcbi5pdGVtPi5waWMge1xcbiAgICBncmlkLWFyZWE6IHBpYztcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiBtaW4oMTUwcHgsIDMwdncpO1xcbiAgICBoZWlnaHQ6IG1pbigxMDBweCwgMjB2dyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImNvbnRhY3ROYW1lIGNvbnRhY3RQaWN0dXJlXFxcIlxcbiAgICAgICAgXFxcImNvbnRhY3RQb3NpdGlvbiBjb250YWN0UGljdHVyZVxcXCJcXG4gICAgICAgIFxcXCJjb250YWN0TnVtYmVyIGNvbnRhY3ROdW1iZXJcXFwiXFxuICAgICAgICBcXFwiY29udGFjdEVtYWlsIGNvbnRhY3RFbWFpbFxcXCI7XFxufVxcbi5jb250YWN0Pi5jb250YWN0TmFtZSB7Z3JpZC1hcmVhOiBjb250YWN0TmFtZTt9XFxuLmNvbnRhY3Q+LmNvbnRhY3RQb3NpdGlvbiB7Z3JpZC1hcmVhOiBjb250YWN0UG9zaXRpb247IGZvbnQtc2l6ZTogMTZweDt9XFxuLmNvbnRhY3Q+LmNvbnRhY3ROdW1iZXIge2dyaWQtYXJlYTogY29udGFjdE51bWJlcjsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdEVtYWlsIHtncmlkLWFyZWE6IGNvbnRhY3RFbWFpbDsgZm9udC1zaXplOiAxNnB4O31cXG4uY29udGFjdD4uY29udGFjdFBpY3R1cmUge1xcbiAgICBncmlkLWFyZWE6IGNvbnRhY3RQaWN0dXJlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9zcmMvYXNzZXRzL21hbmFnZXJQcm9maWxlLnBuZ1xcXCIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcblxcbn1cXG5cXG4uc21hbGxlciB7Zm9udC1zaXplOiAxOHB4fVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5saSB7bGlzdC1zdHlsZTogbm9uZTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRm9vdGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5jb250YWluZXIuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcbmEge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtlbGVtZW50fSBmcm9tICcuL2VsZW1lbnQuanMnO1xuaW1wb3J0IG1hbmFnZXJJbWcgZnJvbSAnLi9hc3NldHMvbWFuYWdlclByb2ZpbGUucG5nJztcbmltcG9ydCBjaGVmSW1nIGZyb20gJy4vYXNzZXRzL2NoZWZQcm9maWxlLnBuZyc7XG5pbXBvcnQgd2FpdGVySW1nIGZyb20gJy4vYXNzZXRzL3dhaXRlclByb2ZpbGUucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29udGFjdENvbnRlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ0ltcG9ydGluZyBjb250YWN0ICBzdHVmZi4uLicpO1xuXG4gICAgY29uc3QgY29udGVudCA9IFtdO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICd0aXRsZSddLCAnQ29udGFjdCBVcycpKTtcblxuICAgIC8vIE1hbmFnZXJcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGVDb250YWN0KCdNcy4gTWFuYWdlcicsICdNYW5hZ2VyJywgJzU1NS01NTUtNTUxJywgJ21hbmFnZXJFbWFpbEBkb21haW4uY29tJywgbWFuYWdlckltZykpO1xuXG4gICAgLy8gQ2hlZlxuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZUNvbnRhY3QoJ01zLiBDaGVmJywgJ0NoZWYnLCAnNTU1LTU1NS01NTInLCAnY2hlZkVtYWlsQGRvbWFpbi5jb20nLCBjaGVmSW1nKSk7XG5cbiAgICAvLyBXYWl0ZXJcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGVDb250YWN0KCdNci4gV2FpdGVyJywgJ1dhaXRlcicsICc1NTUtNTU1LTU1MycsICd3YWl0ZXJFbWFpbEBkb21haW4uY29tJywgd2FpdGVySW1nKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn0iLCIvLyBpbXBvcnQgc2Ftb3NhIGZyb20gJy4vYXNzZXRzL3NhbW9zYS5qcGcnO1xuXG5jb25zdCBlbGVtZW50ID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24odHlwZSwgY2xhc3NlcywgdGV4dCkge1xuICAgICAgICBsZXQgb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBjbGFzc2VzKVxuICAgICAgICAgICAgb3V0LmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgIG91dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcbiAgICBjcmVhdGVJdGVtOiBmdW5jdGlvbihuYW1lLCBkZXNjLCBwcmljZSwgcGljVXJsKSB7XG4gICAgICAgIGxldCBkaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ2l0ZW0nXSk7XG4gICAgICAgIGxldCBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydpdGVtTmFtZSddLCBuYW1lKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2Rlc2MnXSwgZGVzYyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydwcmljZSddLCBwcmljZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydwaWMnXSk7XG4gICAgICAgIHN1YkRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBwaWNVcmwgKyBcIicpXCI7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfSxcbiAgICBjcmVhdGVDb250YWN0OiBmdW5jdGlvbihuYW1lLCBwb3NpdGlvbiwgbnVtYmVyLCBlbWFpbCwgcGljVXJsKSB7XG4gICAgICAgIGxldCBkaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ2NvbnRhY3QnXSk7XG4gICAgICAgIGxldCBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjb250YWN0TmFtZSddLCBuYW1lKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgICAgIHN1YkRpdiA9IHRoaXMuY3JlYXRlKCdkaXYnLCBbJ2NvbnRhY3RQb3NpdGlvbiddLCBwb3NpdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjb250YWN0TnVtYmVyJ10sIG51bWJlcik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICBzdWJEaXYgPSB0aGlzLmNyZWF0ZSgnZGl2JywgWydjb250YWN0RW1haWwnXSwgZW1haWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbiAgICAgICAgc3ViRGl2ID0gdGhpcy5jcmVhdGUoJ2RpdicsIFsnY29udGFjdFBpY3R1cmUnXSk7XG4gICAgICAgIHN1YkRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBwaWNVcmwgKyBcIicpXCI7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH0sXG59XG5cbmV4cG9ydCB7ZWxlbWVudH0iLCJpbXBvcnQge2VsZW1lbnR9IGZyb20gJy4vZWxlbWVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhvbWVDb250ZW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdJbXBvcnRpbmcgaG9tZSBzdHVmZi4uLicpO1xuXG4gICAgY29uc3QgY29udGVudCA9IFtdO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCcsICd0aXRsZSddLCAnU2Ftb3NhIEh1dCcpKTtcblxuICAgIC8vIERlc2NyaXB0aW9uXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAnc21hbGxlciddLCBcIlNhbW9zYSBIdXQgaXMgaG9tZSB0byB0aGUgd29ybGQncyBiZXN0IFNhbW9zYXMuIEhhbmQgY3JhZnRlZCB3aXRoIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cywgeW91IHdvbid0IGZpbmQgYmV0dGVyIFNhbW9zYXMgYW55d2hlcmUgZWxzZSFcIikpO1xuXG4gICAgLy8gSG91cnNcbiAgICBsZXQgZGl2ID0gZWxlbWVudC5jcmVhdGUoJ2RpdicsIFsnY2FyZCddLCAnJyk7XG4gICAgbGV0IHN1YkRpdiA9IGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2hlYWRpbmcnXSwgJ0hvdXJzJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgbGV0IGhvdXJzTGlzdCA9IFtcbiAgICAgICAgJ1N1bmRheTogMTJhbSAtIDRwbScsXG4gICAgICAgICdNb25kYXk6IDEwYW0gLSA4cG0nLFxuICAgICAgICAnVGV1c2RheTogMTBhbSAtIDhwbScsXG4gICAgICAgICdXZWRuZXNkYXk6IDEwYW0gLSA4cG0nLFxuICAgICAgICAnVGh1cnNkYXk6IDEwYW0gLSA4cG0nLFxuICAgICAgICAnRnJpZGF5OiAxMGFtIC0gMTBwbScsXG4gICAgICAgICdTYXR1cmRheTogMTBhbSAtIDEwcG0nLFxuICAgIF07XG4gICAgZm9yIChsZXQgaSBvZiBob3Vyc0xpc3QpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtZW50LmNyZWF0ZSgnbGknLCBbXSwgaSkpO1xuICAgIGNvbnRlbnQucHVzaChkaXYpO1xuXG4gICAgLy8gTG9jYXRpb25cbiAgICBkaXYgPSBlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJ10pO1xuICAgIHN1YkRpdiA9IGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2hlYWRpbmcnXSwgJ0xvY2F0aW9uJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG4gICAgc3ViRGl2ID0gZWxlbWVudC5jcmVhdGUoJ2RpdicsIFtdLCAnOTAwMCBDZW50cmFsIEF2ZSwgTWFuaGF0dGFuLCBOZXcgWW9yaycpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuXG4gICAgY29udGVudC5wdXNoKGRpdik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn0iLCJpbXBvcnQge2VsZW1lbnR9IGZyb20gJy4vZWxlbWVudC5qcyc7XG5pbXBvcnQgc2Ftb3NhSW1nIGZyb20gJy4vYXNzZXRzL3NhbW9zYS5qcGcnO1xuaW1wb3J0IG5hYW5JbWcgZnJvbSAnLi9hc3NldHMvbmFhbi5qcGcnO1xuaW1wb3J0IGNoYWlJbWcgZnJvbSAnLi9hc3NldHMvY2hhaS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNZW51Q29udGVudCgpIHtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIG1lbnUgc3R1ZmYuLi4nKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcblxuICAgIC8vIFRpdGxlXG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlKCdkaXYnLCBbJ2NhcmQnLCAndGl0bGUnXSwgJ01lbnUnKSk7XG5cbiAgICAvLyBNYWluIERpc2hlc1xuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3N1YnRpdGxlJ10sICdNYWluIERpc2hlcycpKTtcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGVJdGVtKCdTYW1vc2EnLCAnRmlsbGVkIHdpdGggcG90YXRvZXMgYW5kIGhlcmJzIGluc2lkZSBvZiBhIGNyaXBzeSBjcnVzdCcsJyQ1Jywgc2Ftb3NhSW1nKSk7XG5cbiAgICAvLyBTaWRlc1xuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3N1YnRpdGxlJ10sICdTaWRlcycpKTtcbiAgICBjb250ZW50LnB1c2goZWxlbWVudC5jcmVhdGVJdGVtKCdOYWFuJywgJ1Nhdm9yeSBmbGF0YnJlYWQnLCckMicsIG5hYW5JbWcpKTtcblxuICAgIC8vIEJldmVyYWdlc1xuICAgIGNvbnRlbnQucHVzaChlbGVtZW50LmNyZWF0ZSgnZGl2JywgWydjYXJkJywgJ3N1YnRpdGxlJ10sICdCZXZlcmFnZXMnKSk7XG4gICAgY29udGVudC5wdXNoKGVsZW1lbnQuY3JlYXRlSXRlbSgnQ2hhaScsICdBIHNwaWNlZCBibGFjayB0ZWEnLCckNCcsIGNoYWlJbWcpKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldEhvbWVDb250ZW50IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgZ2V0TWVudUNvbnRlbnQgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBnZXRDb250YWN0Q29udGVudCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5cbmNvbnN0IHRhYnMgPSB7XG4gICAgaG9tZToge2lkOiAnaG9tZSd9LFxuICAgIG1lbnU6IHtpZDogJ21lbnUnfSxcbiAgICBjb250YWN0OiB7aWQ6ICdjb250YWN0J30sXG59O1xuXG5mb3IgKGxldCBba2V5LCB0YWJdIG9mIE9iamVjdC5lbnRyaWVzKHRhYnMpKSB7XG4gICAgLy8gU2V0dXAgbm9kZXNcbiAgICB0YWIubm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYi5pZCk7XG4gICAgLy8gU2V0dXAgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGFiLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhYi5ub2RlLmRhdGFzZXQuc2VsZWN0ZWQgPSAndHJ1ZSc7XG4gICAgICAgIC8vIFVuc2VsZWN0IG90aGVyIHRhYnNcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGFicykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFiLmlkICE9IHZhbHVlLmlkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUubm9kZS5kYXRhc2V0LnNlbGVjdGVkID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBhZGRDb250ZW50KHRhYik7XG4gICAgfSk7XG59XG5cbmNvbnN0IGNvbnRlbnQgPSB7fTtcbmNvbnRlbnQubm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudC5ub2RlLmhhc0NoaWxkTm9kZXMoKSlcbiAgICAgICAgY29udGVudC5ub2RlLnJlbW92ZUNoaWxkKGNvbnRlbnQubm9kZS5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gYWRkQ29udGVudCh0YWIpIHtcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIHRhYi5jb250ZW50KVxuICAgICAgICBjb250ZW50Lm5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cblxudGFicy5ob21lLmNvbnRlbnQgPSBnZXRIb21lQ29udGVudCgpO1xudGFicy5tZW51LmNvbnRlbnQgPSBnZXRNZW51Q29udGVudCgpO1xudGFicy5jb250YWN0LmNvbnRlbnQgPSBnZXRDb250YWN0Q29udGVudCgpO1xuXG5cbi8vIElOSVRcbmNsZWFyQ29udGVudCgpO1xuYWRkQ29udGVudCh0YWJzLmhvbWUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==