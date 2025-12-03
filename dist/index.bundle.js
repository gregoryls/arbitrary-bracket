/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 
Primary Background #0D0D0D 
Surface / Panel Background #161616
Accent Gold (Primary) #C8A951
Accent Gold (Bright / Hover) #E5C76B
Text (Primary) #F0F0F0
Text (Muted) #9C9C9C
Borders / Lines #242424
Success / Highlight (sage green) #8EC07C
Error (soft crimson) #D16969
*/

body {
  background-color: #0d0d0d;
  color: #f0f0f0;
}

#roundDisplay,
#matchDisplay {
  display: flex;
  justify-content: center;
}

#selectionDisplay {
  display: flex;
  justify-content: space-around;
}

.entry {
  cursor: pointer;
}

#selectionDisplay img {
  max-width: 30vw;
  max-height: 60vh;
  border-radius: 16px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;CAUC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["/* \r\nPrimary Background #0D0D0D \r\nSurface / Panel Background #161616\r\nAccent Gold (Primary) #C8A951\r\nAccent Gold (Bright / Hover) #E5C76B\r\nText (Primary) #F0F0F0\r\nText (Muted) #9C9C9C\r\nBorders / Lines #242424\r\nSuccess / Highlight (sage green) #8EC07C\r\nError (soft crimson) #D16969\r\n*/\r\n\r\nbody {\r\n  background-color: #0d0d0d;\r\n  color: #f0f0f0;\r\n}\r\n\r\n#roundDisplay,\r\n#matchDisplay {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#selectionDisplay {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.entry {\r\n  cursor: pointer;\r\n}\r\n\r\n#selectionDisplay img {\r\n  max-width: 30vw;\r\n  max-height: 60vh;\r\n  border-radius: 16px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/img sync \\.(png%7Cjpe?g%7Csvg)$i":
/*!************************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$i ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./apple.jpg": "./src/img/apple.jpg",
	"./banana.jpg": "./src/img/banana.jpg",
	"./bye.jpg": "./src/img/bye.jpg",
	"./mango.jpg": "./src/img/mango.jpg",
	"./pear.jpg": "./src/img/pear.jpg",
	"./pineapple.jpg": "./src/img/pineapple.jpg",
	"./sausage.jpg": "./src/img/sausage.jpg",
	"./strawberry.jpg": "./src/img/strawberry.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync \\.(png%7Cjpe?g%7Csvg)$i";

/***/ }),

/***/ "./src/img/apple.jpg":
/*!***************************!*\
  !*** ./src/img/apple.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8cf9a2e837a2ab1d6e98.jpg";

/***/ }),

/***/ "./src/img/banana.jpg":
/*!****************************!*\
  !*** ./src/img/banana.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "227dea446344a709faf4.jpg";

/***/ }),

/***/ "./src/img/bye.jpg":
/*!*************************!*\
  !*** ./src/img/bye.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1547c17bb0461d54b1e.jpg";

/***/ }),

/***/ "./src/img/mango.jpg":
/*!***************************!*\
  !*** ./src/img/mango.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d770485a859419c7f154.jpg";

/***/ }),

/***/ "./src/img/pear.jpg":
/*!**************************!*\
  !*** ./src/img/pear.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06c30d3e3ccadf417dd6.jpg";

/***/ }),

/***/ "./src/img/pineapple.jpg":
/*!*******************************!*\
  !*** ./src/img/pineapple.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c2e297eac12e0283a83.jpg";

/***/ }),

/***/ "./src/img/sausage.jpg":
/*!*****************************!*\
  !*** ./src/img/sausage.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ce3d9e9c686fc6eda8ba.jpg";

/***/ }),

/***/ "./src/img/strawberry.jpg":
/*!********************************!*\
  !*** ./src/img/strawberry.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "89d75c47e6138d7855c3.jpg";

/***/ }),

/***/ "./src/items.json":
/*!************************!*\
  !*** ./src/items.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"apple","description":"It\'s a fruit","seed":1},{"name":"banana","description":"It\'s a fruit","seed":2},{"name":"pear","description":"It\'s a fruit","seed":3},{"name":"mango","description":"It\'s a fruit","seed":4},{"name":"pineapple","description":"It\'s a fruit","seed":5},{"name":"sausage","description":"It\'s not a fruit","seed":6},{"name":"strawberry","description":"It\'s a fruit","seed":7}]');

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemImages: () => (/* binding */ itemImages)
/* harmony export */ });
const imageContext = __webpack_require__("./src/img sync \\.(png%7Cjpe?g%7Csvg)$i");

const itemImages = {};
imageContext.keys().forEach((key) => {
  // remove prefix and extension from image file names
  const fileName = key.replace("./", "").replace(/\.[^/.]+$/, "");
  itemImages[fileName] = imageContext(key);
});




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.json */ "./src/items.json");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");




// const dynamicImage = require(`./img/${imageName}.jpg`);

// check loser bracket length

const selectionDisplayDiv = document.getElementById("selectionDisplay");
const matchDisplay = document.getElementById("matchDisplay");
const roundDisplay = document.getElementById("roundDisplay");
const results = {};
let winnerRoundCount = 1;
let winnerRoundCount2 = 1;
let loserRoundCount = 0;
let pairArray = [];
let winnerBracketWinners = [];
let winnerBracketLosers = [];
let loserBracketWinners = [];
let currentRound = "winner";
let nextRound = "loser";
let bracketComplete = false;

function nextPowerOfTwo(number) {
  if (number <= 0 || number > 52 || typeof number !== "number")
    return undefined;
  const nextPower = 2 ** Math.ceil(Math.log2(number));

  return nextPower;
}

function getWinnerRoundCount(numberOfEntrants) {
  const totalCount = nextPowerOfTwo(numberOfEntrants);
  const rounds = Math.log2(totalCount);
  return rounds;
}

function getLoserRoundCount(numberOfEntrants) {
  const totalCount = nextPowerOfTwo(numberOfEntrants);
  const rounds =
    Math.log2(totalCount) + Math.ceil(Math.log2(Math.log2(totalCount)));
  return rounds;
}

function generateByes(numberOfEntrants) {
  const byeCount = nextPowerOfTwo(numberOfEntrants) - numberOfEntrants;
  const byeObjs = [];
  for (let i = 0; i < byeCount; i += 1) {
    byeObjs[i] = `bye${i + 1}`;
  }
  return byeObjs;
}
function generateBracketPairings(
  bracketEntries,
  byeEntries,
  otherEntries,
  firstRoundBool,
) {
  const pairings = [];

  // optional handling of blending winner bracket losers with loser bracket winners
  if (otherEntries) {
    for (let i = 0; i < bracketEntries.length; i += 1) {
      pairings[i] = {
        entry1: bracketEntries[i],
        entry2: otherEntries[i],
      };
    }
    return pairings;
  }
  // handle first round scenarios with byes present
  if (byeEntries) {
    for (let i = 0; i < byeEntries.length; i += 1) {
      pairings[i] = {
        entry1: bracketEntries[i],
        entry2: { name: byeEntries[i] },
      };
    }
    for (
      let i = byeEntries.length, j = -1;
      i < nextPowerOfTwo(bracketEntries.length) / 2;
      i += 1, j -= 1
    ) {
      pairings[i] = {
        entry1: bracketEntries[i],
        entry2: bracketEntries.at(j),
      };
    }
    return pairings;
  }

  // first round, but no byes needed
  if (!byeEntries && firstRoundBool) {
    for (let i = 0, j = -1; i < bracketEntries.length / 2; i += 1, j -= 1) {
      pairings[i] = {
        entry1: bracketEntries[i],
        entry2: bracketEntries.at(j),
      };
    }
    return pairings;
  }

  // catch single-source bracket generation
  for (let i = 0, j = 0; i < bracketEntries.length; i += 2, j += 1) {
    pairings[j] = {
      entry1: bracketEntries[i],
      entry2: bracketEntries[i + 1],
    };
  }
  return pairings;
}

function entryDiv(entryObj) {
  const entryWrap = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  entryWrap.classList.add("entry");
  h2.textContent = entryObj.name;
  p.textContent = entryObj.description;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_2__.itemImages[entryObj.name]) {
    img.src = _utils_js__WEBPACK_IMPORTED_MODULE_2__.itemImages[entryObj.name];
  } else {
    // fill stock image if no picture provided (usually a generated bye)
    img.src = _utils_js__WEBPACK_IMPORTED_MODULE_2__.itemImages["bye"];
  }

  entryWrap.append(h2, p, img);

  return entryWrap;
}

async function waitForSelection(entry1Div, entry1Obj, entry2Div, entry2Obj) {
  return new Promise((resolve) => {
    const handler = (winner, loser) => {
      entry1Div.removeEventListener("click", onEntry1);
      entry2Div.removeEventListener("click", onEntry2);
      resolve({ winner, loser });
    };
    // add comments
    const onEntry1 = () => handler(entry1Obj, entry2Obj);
    const onEntry2 = () => handler(entry2Obj, entry1Obj);

    entry1Div.addEventListener("click", onEntry1);
    entry2Div.addEventListener("click", onEntry2);
  });
}

async function displayBracketPairings(pairings) {
  const pairingsCopy = structuredClone(pairings);
  let matchNumber = 1;
  for (const pair of pairingsCopy) {
    const entry1 = entryDiv(pair.entry1);
    const entry2 = entryDiv(pair.entry2);
    entry1.id = "entry1";
    entry2.id = "entry2";

    // round and match display info
    roundDisplay.innerHTML = "";
    if (currentRound === "winner") {
      roundDisplay.textContent = `Round of ${pairings.length * 2}`;
    }
    if (currentRound === "loser") {
      roundDisplay.textContent = `Loser Round ${loserRoundCount}`;
    }

    matchDisplay.innerHTML = "";
    matchDisplay.textContent = `Match ${matchNumber}`;
    matchNumber += 1;

    selectionDisplayDiv.innerHTML = "";
    selectionDisplayDiv.append(entry1, entry2);

    const { winner, loser } = await waitForSelection(
      entry1,
      pair.entry1,
      entry2,
      pair.entry2,
    );

    // console.log("w,l", winner, loser);
    winner.win = true;
    loser.win = false;

    selectionDisplayDiv.innerHTML = "";

    if (bracketComplete) {
      displayWinner(winner);
    }
  }

  if (currentRound === "winner") {
    results[`winnerRound${winnerRoundCount}`] = pairingsCopy;
  }
  if (currentRound === "loser") {
    results[`loserRound${loserRoundCount}`] = pairingsCopy;
  }

  console.log("results", results);
}

function displayWinner(winnerObj) {
  roundDisplay.innerHTML = "";
  matchDisplay.innerHTML = "";
  selectionDisplayDiv.innerHTML = "";

  const winner = entryDiv(winnerObj);
  roundDisplay.textContent = "WINNER";
  selectionDisplayDiv.append(winner);
}

function getResultArray(roundType, roundCount, winStatus) {
  // roundType = 'winner' or 'loser'
  // roundCount = integer
  // winStatus = true or false
  const result = [];
  for (const match of results[`${roundType}Round${roundCount}`]) {
    for (const entry of Object.keys(match)) {
      // capture wins
      if (winStatus) {
        if (match[entry].win) result.push(match[entry]);
      }

      // capture losses
      if (!winStatus) {
        if (!match[entry].win) result.push(match[entry]);
      }
    }
  }
  return result;
}

async function test(pairings) {
  const maxWinnerRounds = getWinnerRoundCount(_items_json__WEBPACK_IMPORTED_MODULE_1__.length);
  const maxLoserRounds = getLoserRoundCount(_items_json__WEBPACK_IMPORTED_MODULE_1__.length);
  console.log(
    "wrc, wrc2, lrc",
    winnerRoundCount,
    winnerRoundCount2,
    loserRoundCount,
  );
  await displayBracketPairings(pairings);

  if (bracketComplete) {
    return;
  }
  if (winnerRoundCount < maxWinnerRounds) {
    const winnerBracketWinners = getResultArray(
      "winner",
      winnerRoundCount,
      true,
    );
    console.log(winnerBracketWinners);
    winnerRoundCount += 1;

    pairArray = generateBracketPairings(winnerBracketWinners);
    await test(pairArray);
    return;
  }

  if (
    winnerRoundCount === maxWinnerRounds &&
    loserRoundCount < maxLoserRounds
  ) {
    currentRound = "loser";
    if (loserRoundCount === 0) {
      // handle first loser round generated only from winner bracket
      const winnerBracketLosers = getResultArray(
        "winner",
        winnerRoundCount2,
        false,
      );
      pairArray = generateBracketPairings(winnerBracketLosers, []);

      winnerRoundCount2 += 1;
      loserRoundCount += 1;
      await test(pairArray);
      return;
    }

    if (loserRoundCount === maxLoserRounds - 1) {
      // Final round. Loser rounds are 0 indexed to better sync with round display
      const winnerBracketWinner = getResultArray(
        "winner",
        winnerRoundCount,
        true,
      );
      const loserBracketWinner = getResultArray("loser", loserRoundCount, true);

      pairArray = generateBracketPairings(
        winnerBracketWinner,
        false,
        loserBracketWinner,
      );

      bracketComplete = true;
      loserRoundCount += 1;
      await test(pairArray);
      return;
    }

    const winnerBracketLosers = getResultArray(
      "winner",
      winnerRoundCount2,
      false,
    );
    const loserBracketWinners = getResultArray("loser", loserRoundCount, true);

    if (loserBracketWinners.length > winnerBracketLosers.length) {
      // handle offset rounds where loser bracket needs to catch up
      pairArray = generateBracketPairings(loserBracketWinners, []);

      loserRoundCount += 1;
      await test(pairArray);
      return;
    }
    pairArray = generateBracketPairings(
      winnerBracketLosers,
      [],
      loserBracketWinners,
    );

    // normal operation ends here
    winnerRoundCount2 += 1;
    loserRoundCount += 1;
    await test(pairArray);
    return;
  }
}

pairArray = generateBracketPairings(
  _items_json__WEBPACK_IMPORTED_MODULE_1__,
  generateByes(_items_json__WEBPACK_IMPORTED_MODULE_1__.length),
  false,
  true,
);

test(pairArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0NBQWM7QUFDaEIsZUFBZSx3Q0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvaW1nfHN5bmN8bm9ucmVjdXJzaXZlfEU6Ly4ocG5nJTdDanBlIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFxyXG5QcmltYXJ5IEJhY2tncm91bmQgIzBEMEQwRCBcclxuU3VyZmFjZSAvIFBhbmVsIEJhY2tncm91bmQgIzE2MTYxNlxyXG5BY2NlbnQgR29sZCAoUHJpbWFyeSkgI0M4QTk1MVxyXG5BY2NlbnQgR29sZCAoQnJpZ2h0IC8gSG92ZXIpICNFNUM3NkJcclxuVGV4dCAoUHJpbWFyeSkgI0YwRjBGMFxyXG5UZXh0IChNdXRlZCkgIzlDOUM5Q1xyXG5Cb3JkZXJzIC8gTGluZXMgIzI0MjQyNFxyXG5TdWNjZXNzIC8gSGlnaGxpZ2h0IChzYWdlIGdyZWVuKSAjOEVDMDdDXHJcbkVycm9yIChzb2Z0IGNyaW1zb24pICNEMTY5NjlcclxuKi9cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XHJcbiAgY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuXHJcbiNyb3VuZERpc3BsYXksXHJcbiNtYXRjaERpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3Rpb25EaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZW50cnkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NlbGVjdGlvbkRpc3BsYXkgaW1nIHtcclxuICBtYXgtd2lkdGg6IDMwdnc7XHJcbiAgbWF4LWhlaWdodDogNjB2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7OztDQVVDOztBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxyXFxuUHJpbWFyeSBCYWNrZ3JvdW5kICMwRDBEMEQgXFxyXFxuU3VyZmFjZSAvIFBhbmVsIEJhY2tncm91bmQgIzE2MTYxNlxcclxcbkFjY2VudCBHb2xkIChQcmltYXJ5KSAjQzhBOTUxXFxyXFxuQWNjZW50IEdvbGQgKEJyaWdodCAvIEhvdmVyKSAjRTVDNzZCXFxyXFxuVGV4dCAoUHJpbWFyeSkgI0YwRjBGMFxcclxcblRleHQgKE11dGVkKSAjOUM5QzlDXFxyXFxuQm9yZGVycyAvIExpbmVzICMyNDI0MjRcXHJcXG5TdWNjZXNzIC8gSGlnaGxpZ2h0IChzYWdlIGdyZWVuKSAjOEVDMDdDXFxyXFxuRXJyb3IgKHNvZnQgY3JpbXNvbikgI0QxNjk2OVxcclxcbiovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxufVxcclxcblxcclxcbiNyb3VuZERpc3BsYXksXFxyXFxuI21hdGNoRGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb25EaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbkRpc3BsYXkgaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMzB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDYwdmg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcGxlLmpwZ1wiOiBcIi4vc3JjL2ltZy9hcHBsZS5qcGdcIixcblx0XCIuL2JhbmFuYS5qcGdcIjogXCIuL3NyYy9pbWcvYmFuYW5hLmpwZ1wiLFxuXHRcIi4vYnllLmpwZ1wiOiBcIi4vc3JjL2ltZy9ieWUuanBnXCIsXG5cdFwiLi9tYW5nby5qcGdcIjogXCIuL3NyYy9pbWcvbWFuZ28uanBnXCIsXG5cdFwiLi9wZWFyLmpwZ1wiOiBcIi4vc3JjL2ltZy9wZWFyLmpwZ1wiLFxuXHRcIi4vcGluZWFwcGxlLmpwZ1wiOiBcIi4vc3JjL2ltZy9waW5lYXBwbGUuanBnXCIsXG5cdFwiLi9zYXVzYWdlLmpwZ1wiOiBcIi4vc3JjL2ltZy9zYXVzYWdlLmpwZ1wiLFxuXHRcIi4vc3RyYXdiZXJyeS5qcGdcIjogXCIuL3NyYy9pbWcvc3RyYXdiZXJyeS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJGlcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiY29uc3QgaW1hZ2VDb250ZXh0ID0gaW1wb3J0Lm1ldGEud2VicGFja0NvbnRleHQoXCIuL2ltZ1wiLCB7XHJcbiAgcmVjdXJzaXZlOiBmYWxzZSxcclxuICByZWdFeHA6IC9cXC4ocG5nfGpwZT9nfHN2ZykkL2ksXHJcbn0pO1xyXG5cclxuY29uc3QgaXRlbUltYWdlcyA9IHt9O1xyXG5pbWFnZUNvbnRleHQua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gIC8vIHJlbW92ZSBwcmVmaXggYW5kIGV4dGVuc2lvbiBmcm9tIGltYWdlIGZpbGUgbmFtZXNcclxuICBjb25zdCBmaWxlTmFtZSA9IGtleS5yZXBsYWNlKFwiLi9cIiwgXCJcIikucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpO1xyXG4gIGl0ZW1JbWFnZXNbZmlsZU5hbWVdID0gaW1hZ2VDb250ZXh0KGtleSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgaXRlbUltYWdlcyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBicmFja2V0RW50cmllcyBmcm9tIFwiLi9pdGVtcy5qc29uXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcblxyXG4vLyBjb25zdCBkeW5hbWljSW1hZ2UgPSByZXF1aXJlKGAuL2ltZy8ke2ltYWdlTmFtZX0uanBnYCk7XHJcblxyXG4vLyBjaGVjayBsb3NlciBicmFja2V0IGxlbmd0aFxyXG5cclxuY29uc3Qgc2VsZWN0aW9uRGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0aW9uRGlzcGxheVwiKTtcclxuY29uc3QgbWF0Y2hEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRjaERpc3BsYXlcIik7XHJcbmNvbnN0IHJvdW5kRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91bmREaXNwbGF5XCIpO1xyXG5jb25zdCByZXN1bHRzID0ge307XHJcbmxldCB3aW5uZXJSb3VuZENvdW50ID0gMTtcclxubGV0IHdpbm5lclJvdW5kQ291bnQyID0gMTtcclxubGV0IGxvc2VyUm91bmRDb3VudCA9IDA7XHJcbmxldCBwYWlyQXJyYXkgPSBbXTtcclxubGV0IHdpbm5lckJyYWNrZXRXaW5uZXJzID0gW107XHJcbmxldCB3aW5uZXJCcmFja2V0TG9zZXJzID0gW107XHJcbmxldCBsb3NlckJyYWNrZXRXaW5uZXJzID0gW107XHJcbmxldCBjdXJyZW50Um91bmQgPSBcIndpbm5lclwiO1xyXG5sZXQgbmV4dFJvdW5kID0gXCJsb3NlclwiO1xyXG5sZXQgYnJhY2tldENvbXBsZXRlID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBuZXh0UG93ZXJPZlR3byhudW1iZXIpIHtcclxuICBpZiAobnVtYmVyIDw9IDAgfHwgbnVtYmVyID4gNTIgfHwgdHlwZW9mIG51bWJlciAhPT0gXCJudW1iZXJcIilcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgY29uc3QgbmV4dFBvd2VyID0gMiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cyKG51bWJlcikpO1xyXG5cclxuICByZXR1cm4gbmV4dFBvd2VyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5uZXJSb3VuZENvdW50KG51bWJlck9mRW50cmFudHMpIHtcclxuICBjb25zdCB0b3RhbENvdW50ID0gbmV4dFBvd2VyT2ZUd28obnVtYmVyT2ZFbnRyYW50cyk7XHJcbiAgY29uc3Qgcm91bmRzID0gTWF0aC5sb2cyKHRvdGFsQ291bnQpO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvc2VyUm91bmRDb3VudChudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgdG90YWxDb3VudCA9IG5leHRQb3dlck9mVHdvKG51bWJlck9mRW50cmFudHMpO1xyXG4gIGNvbnN0IHJvdW5kcyA9XHJcbiAgICBNYXRoLmxvZzIodG90YWxDb3VudCkgKyBNYXRoLmNlaWwoTWF0aC5sb2cyKE1hdGgubG9nMih0b3RhbENvdW50KSkpO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnllcyhudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgYnllQ291bnQgPSBuZXh0UG93ZXJPZlR3byhudW1iZXJPZkVudHJhbnRzKSAtIG51bWJlck9mRW50cmFudHM7XHJcbiAgY29uc3QgYnllT2JqcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnllQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgYnllT2Jqc1tpXSA9IGBieWUke2kgKyAxfWA7XHJcbiAgfVxyXG4gIHJldHVybiBieWVPYmpzO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gIGJyYWNrZXRFbnRyaWVzLFxyXG4gIGJ5ZUVudHJpZXMsXHJcbiAgb3RoZXJFbnRyaWVzLFxyXG4gIGZpcnN0Um91bmRCb29sLFxyXG4pIHtcclxuICBjb25zdCBwYWlyaW5ncyA9IFtdO1xyXG5cclxuICAvLyBvcHRpb25hbCBoYW5kbGluZyBvZiBibGVuZGluZyB3aW5uZXIgYnJhY2tldCBsb3NlcnMgd2l0aCBsb3NlciBicmFja2V0IHdpbm5lcnNcclxuICBpZiAob3RoZXJFbnRyaWVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBvdGhlckVudHJpZXNbaV0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG4gIC8vIGhhbmRsZSBmaXJzdCByb3VuZCBzY2VuYXJpb3Mgd2l0aCBieWVzIHByZXNlbnRcclxuICBpZiAoYnllRW50cmllcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieWVFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiB7IG5hbWU6IGJ5ZUVudHJpZXNbaV0gfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gYnllRW50cmllcy5sZW5ndGgsIGogPSAtMTtcclxuICAgICAgaSA8IG5leHRQb3dlck9mVHdvKGJyYWNrZXRFbnRyaWVzLmxlbmd0aCkgLyAyO1xyXG4gICAgICBpICs9IDEsIGogLT0gMVxyXG4gICAgKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBicmFja2V0RW50cmllcy5hdChqKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWlyaW5ncztcclxuICB9XHJcblxyXG4gIC8vIGZpcnN0IHJvdW5kLCBidXQgbm8gYnllcyBuZWVkZWRcclxuICBpZiAoIWJ5ZUVudHJpZXMgJiYgZmlyc3RSb3VuZEJvb2wpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBqID0gLTE7IGkgPCBicmFja2V0RW50cmllcy5sZW5ndGggLyAyOyBpICs9IDEsIGogLT0gMSkge1xyXG4gICAgICBwYWlyaW5nc1tpXSA9IHtcclxuICAgICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICAgIGVudHJ5MjogYnJhY2tldEVudHJpZXMuYXQoaiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG5cclxuICAvLyBjYXRjaCBzaW5nbGUtc291cmNlIGJyYWNrZXQgZ2VuZXJhdGlvblxyXG4gIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAyLCBqICs9IDEpIHtcclxuICAgIHBhaXJpbmdzW2pdID0ge1xyXG4gICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICBlbnRyeTI6IGJyYWNrZXRFbnRyaWVzW2kgKyAxXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBwYWlyaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gZW50cnlEaXYoZW50cnlPYmopIHtcclxuICBjb25zdCBlbnRyeVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBlbnRyeVdyYXAuY2xhc3NMaXN0LmFkZChcImVudHJ5XCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gZW50cnlPYmoubmFtZTtcclxuICBwLnRleHRDb250ZW50ID0gZW50cnlPYmouZGVzY3JpcHRpb247XHJcblxyXG4gIGlmICh1dGlscy5pdGVtSW1hZ2VzW2VudHJ5T2JqLm5hbWVdKSB7XHJcbiAgICBpbWcuc3JjID0gdXRpbHMuaXRlbUltYWdlc1tlbnRyeU9iai5uYW1lXTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmlsbCBzdG9jayBpbWFnZSBpZiBubyBwaWN0dXJlIHByb3ZpZGVkICh1c3VhbGx5IGEgZ2VuZXJhdGVkIGJ5ZSlcclxuICAgIGltZy5zcmMgPSB1dGlscy5pdGVtSW1hZ2VzW1wiYnllXCJdO1xyXG4gIH1cclxuXHJcbiAgZW50cnlXcmFwLmFwcGVuZChoMiwgcCwgaW1nKTtcclxuXHJcbiAgcmV0dXJuIGVudHJ5V3JhcDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdEZvclNlbGVjdGlvbihlbnRyeTFEaXYsIGVudHJ5MU9iaiwgZW50cnkyRGl2LCBlbnRyeTJPYmopIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAod2lubmVyLCBsb3NlcikgPT4ge1xyXG4gICAgICBlbnRyeTFEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRW50cnkxKTtcclxuICAgICAgZW50cnkyRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkVudHJ5Mik7XHJcbiAgICAgIHJlc29sdmUoeyB3aW5uZXIsIGxvc2VyIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIGFkZCBjb21tZW50c1xyXG4gICAgY29uc3Qgb25FbnRyeTEgPSAoKSA9PiBoYW5kbGVyKGVudHJ5MU9iaiwgZW50cnkyT2JqKTtcclxuICAgIGNvbnN0IG9uRW50cnkyID0gKCkgPT4gaGFuZGxlcihlbnRyeTJPYmosIGVudHJ5MU9iaik7XHJcblxyXG4gICAgZW50cnkxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkVudHJ5MSk7XHJcbiAgICBlbnRyeTJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRW50cnkyKTtcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUJyYWNrZXRQYWlyaW5ncyhwYWlyaW5ncykge1xyXG4gIGNvbnN0IHBhaXJpbmdzQ29weSA9IHN0cnVjdHVyZWRDbG9uZShwYWlyaW5ncyk7XHJcbiAgbGV0IG1hdGNoTnVtYmVyID0gMTtcclxuICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcmluZ3NDb3B5KSB7XHJcbiAgICBjb25zdCBlbnRyeTEgPSBlbnRyeURpdihwYWlyLmVudHJ5MSk7XHJcbiAgICBjb25zdCBlbnRyeTIgPSBlbnRyeURpdihwYWlyLmVudHJ5Mik7XHJcbiAgICBlbnRyeTEuaWQgPSBcImVudHJ5MVwiO1xyXG4gICAgZW50cnkyLmlkID0gXCJlbnRyeTJcIjtcclxuXHJcbiAgICAvLyByb3VuZCBhbmQgbWF0Y2ggZGlzcGxheSBpbmZvXHJcbiAgICByb3VuZERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChjdXJyZW50Um91bmQgPT09IFwid2lubmVyXCIpIHtcclxuICAgICAgcm91bmREaXNwbGF5LnRleHRDb250ZW50ID0gYFJvdW5kIG9mICR7cGFpcmluZ3MubGVuZ3RoICogMn1gO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJsb3NlclwiKSB7XHJcbiAgICAgIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IGBMb3NlciBSb3VuZCAke2xvc2VyUm91bmRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWF0Y2hEaXNwbGF5LnRleHRDb250ZW50ID0gYE1hdGNoICR7bWF0Y2hOdW1iZXJ9YDtcclxuICAgIG1hdGNoTnVtYmVyICs9IDE7XHJcblxyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5hcHBlbmQoZW50cnkxLCBlbnRyeTIpO1xyXG5cclxuICAgIGNvbnN0IHsgd2lubmVyLCBsb3NlciB9ID0gYXdhaXQgd2FpdEZvclNlbGVjdGlvbihcclxuICAgICAgZW50cnkxLFxyXG4gICAgICBwYWlyLmVudHJ5MSxcclxuICAgICAgZW50cnkyLFxyXG4gICAgICBwYWlyLmVudHJ5MixcclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJ3LGxcIiwgd2lubmVyLCBsb3Nlcik7XHJcbiAgICB3aW5uZXIud2luID0gdHJ1ZTtcclxuICAgIGxvc2VyLndpbiA9IGZhbHNlO1xyXG5cclxuICAgIHNlbGVjdGlvbkRpc3BsYXlEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZiAoYnJhY2tldENvbXBsZXRlKSB7XHJcbiAgICAgIGRpc3BsYXlXaW5uZXIod2lubmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Um91bmQgPT09IFwid2lubmVyXCIpIHtcclxuICAgIHJlc3VsdHNbYHdpbm5lclJvdW5kJHt3aW5uZXJSb3VuZENvdW50fWBdID0gcGFpcmluZ3NDb3B5O1xyXG4gIH1cclxuICBpZiAoY3VycmVudFJvdW5kID09PSBcImxvc2VyXCIpIHtcclxuICAgIHJlc3VsdHNbYGxvc2VyUm91bmQke2xvc2VyUm91bmRDb3VudH1gXSA9IHBhaXJpbmdzQ29weTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVzdWx0c1wiLCByZXN1bHRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcih3aW5uZXJPYmopIHtcclxuICByb3VuZERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICBtYXRjaERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICBzZWxlY3Rpb25EaXNwbGF5RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IHdpbm5lciA9IGVudHJ5RGl2KHdpbm5lck9iaik7XHJcbiAgcm91bmREaXNwbGF5LnRleHRDb250ZW50ID0gXCJXSU5ORVJcIjtcclxuICBzZWxlY3Rpb25EaXNwbGF5RGl2LmFwcGVuZCh3aW5uZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXN1bHRBcnJheShyb3VuZFR5cGUsIHJvdW5kQ291bnQsIHdpblN0YXR1cykge1xyXG4gIC8vIHJvdW5kVHlwZSA9ICd3aW5uZXInIG9yICdsb3NlcidcclxuICAvLyByb3VuZENvdW50ID0gaW50ZWdlclxyXG4gIC8vIHdpblN0YXR1cyA9IHRydWUgb3IgZmFsc2VcclxuICBjb25zdCByZXN1bHQgPSBbXTtcclxuICBmb3IgKGNvbnN0IG1hdGNoIG9mIHJlc3VsdHNbYCR7cm91bmRUeXBlfVJvdW5kJHtyb3VuZENvdW50fWBdKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIE9iamVjdC5rZXlzKG1hdGNoKSkge1xyXG4gICAgICAvLyBjYXB0dXJlIHdpbnNcclxuICAgICAgaWYgKHdpblN0YXR1cykge1xyXG4gICAgICAgIGlmIChtYXRjaFtlbnRyeV0ud2luKSByZXN1bHQucHVzaChtYXRjaFtlbnRyeV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjYXB0dXJlIGxvc3Nlc1xyXG4gICAgICBpZiAoIXdpblN0YXR1cykge1xyXG4gICAgICAgIGlmICghbWF0Y2hbZW50cnldLndpbikgcmVzdWx0LnB1c2gobWF0Y2hbZW50cnldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB0ZXN0KHBhaXJpbmdzKSB7XHJcbiAgY29uc3QgbWF4V2lubmVyUm91bmRzID0gZ2V0V2lubmVyUm91bmRDb3VudChicmFja2V0RW50cmllcy5sZW5ndGgpO1xyXG4gIGNvbnN0IG1heExvc2VyUm91bmRzID0gZ2V0TG9zZXJSb3VuZENvdW50KGJyYWNrZXRFbnRyaWVzLmxlbmd0aCk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIndyYywgd3JjMiwgbHJjXCIsXHJcbiAgICB3aW5uZXJSb3VuZENvdW50LFxyXG4gICAgd2lubmVyUm91bmRDb3VudDIsXHJcbiAgICBsb3NlclJvdW5kQ291bnQsXHJcbiAgKTtcclxuICBhd2FpdCBkaXNwbGF5QnJhY2tldFBhaXJpbmdzKHBhaXJpbmdzKTtcclxuXHJcbiAgaWYgKGJyYWNrZXRDb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAod2lubmVyUm91bmRDb3VudCA8IG1heFdpbm5lclJvdW5kcykge1xyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldFdpbm5lcnMgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgd2lubmVyUm91bmRDb3VudCxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5uZXJCcmFja2V0V2lubmVycyk7XHJcbiAgICB3aW5uZXJSb3VuZENvdW50ICs9IDE7XHJcblxyXG4gICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldFdpbm5lcnMpO1xyXG4gICAgYXdhaXQgdGVzdChwYWlyQXJyYXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgd2lubmVyUm91bmRDb3VudCA9PT0gbWF4V2lubmVyUm91bmRzICYmXHJcbiAgICBsb3NlclJvdW5kQ291bnQgPCBtYXhMb3NlclJvdW5kc1xyXG4gICkge1xyXG4gICAgY3VycmVudFJvdW5kID0gXCJsb3NlclwiO1xyXG4gICAgaWYgKGxvc2VyUm91bmRDb3VudCA9PT0gMCkge1xyXG4gICAgICAvLyBoYW5kbGUgZmlyc3QgbG9zZXIgcm91bmQgZ2VuZXJhdGVkIG9ubHkgZnJvbSB3aW5uZXIgYnJhY2tldFxyXG4gICAgICBjb25zdCB3aW5uZXJCcmFja2V0TG9zZXJzID0gZ2V0UmVzdWx0QXJyYXkoXHJcbiAgICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgKTtcclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldExvc2VycywgW10pO1xyXG5cclxuICAgICAgd2lubmVyUm91bmRDb3VudDIgKz0gMTtcclxuICAgICAgbG9zZXJSb3VuZENvdW50ICs9IDE7XHJcbiAgICAgIGF3YWl0IHRlc3QocGFpckFycmF5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb3NlclJvdW5kQ291bnQgPT09IG1heExvc2VyUm91bmRzIC0gMSkge1xyXG4gICAgICAvLyBGaW5hbCByb3VuZC4gTG9zZXIgcm91bmRzIGFyZSAwIGluZGV4ZWQgdG8gYmV0dGVyIHN5bmMgd2l0aCByb3VuZCBkaXNwbGF5XHJcbiAgICAgIGNvbnN0IHdpbm5lckJyYWNrZXRXaW5uZXIgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgICBcIndpbm5lclwiLFxyXG4gICAgICAgIHdpbm5lclJvdW5kQ291bnQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVyID0gZ2V0UmVzdWx0QXJyYXkoXCJsb3NlclwiLCBsb3NlclJvdW5kQ291bnQsIHRydWUpO1xyXG5cclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgICAgICAgd2lubmVyQnJhY2tldFdpbm5lcixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBsb3NlckJyYWNrZXRXaW5uZXIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBicmFja2V0Q29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgICAgYXdhaXQgdGVzdChwYWlyQXJyYXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldExvc2VycyA9IGdldFJlc3VsdEFycmF5KFxyXG4gICAgICBcIndpbm5lclwiLFxyXG4gICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVycyA9IGdldFJlc3VsdEFycmF5KFwibG9zZXJcIiwgbG9zZXJSb3VuZENvdW50LCB0cnVlKTtcclxuXHJcbiAgICBpZiAobG9zZXJCcmFja2V0V2lubmVycy5sZW5ndGggPiB3aW5uZXJCcmFja2V0TG9zZXJzLmxlbmd0aCkge1xyXG4gICAgICAvLyBoYW5kbGUgb2Zmc2V0IHJvdW5kcyB3aGVyZSBsb3NlciBicmFja2V0IG5lZWRzIHRvIGNhdGNoIHVwXHJcbiAgICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKGxvc2VyQnJhY2tldFdpbm5lcnMsIFtdKTtcclxuXHJcbiAgICAgIGxvc2VyUm91bmRDb3VudCArPSAxO1xyXG4gICAgICBhd2FpdCB0ZXN0KHBhaXJBcnJheSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gICAgICB3aW5uZXJCcmFja2V0TG9zZXJzLFxyXG4gICAgICBbXSxcclxuICAgICAgbG9zZXJCcmFja2V0V2lubmVycyxcclxuICAgICk7XHJcblxyXG4gICAgLy8gbm9ybWFsIG9wZXJhdGlvbiBlbmRzIGhlcmVcclxuICAgIHdpbm5lclJvdW5kQ291bnQyICs9IDE7XHJcbiAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgIGF3YWl0IHRlc3QocGFpckFycmF5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbnBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gIGJyYWNrZXRFbnRyaWVzLFxyXG4gIGdlbmVyYXRlQnllcyhicmFja2V0RW50cmllcy5sZW5ndGgpLFxyXG4gIGZhbHNlLFxyXG4gIHRydWUsXHJcbik7XHJcblxyXG50ZXN0KHBhaXJBcnJheSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==