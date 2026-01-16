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
  display: flex;
  flex-direction: column;
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

.roundWinner {
  border: 4px solid green;
  border-radius: 16px;
  padding: 2rem;
}

#nextRound {
  margin: 5vh 35vw 0 35vw;
}

/* bracket display */

#bracketContainer {
  position: relative;

  border: 3px solid pink;
  overflow: auto;
}

#bracketLines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.matchNode {
  position: absolute;
  width: 150px;
  height: 60px;
  background: black;
  border: 1px solid green;
  border-radius: 4px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;CAUC;;AAED;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA,oBAAoB;;AAEpB;EACE,kBAAkB;;EAElB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,wCAAwC;EACxC,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX","sourcesContent":["/* \r\nPrimary Background #0D0D0D \r\nSurface / Panel Background #161616\r\nAccent Gold (Primary) #C8A951\r\nAccent Gold (Bright / Hover) #E5C76B\r\nText (Primary) #F0F0F0\r\nText (Muted) #9C9C9C\r\nBorders / Lines #242424\r\nSuccess / Highlight (sage green) #8EC07C\r\nError (soft crimson) #D16969\r\n*/\r\n\r\nbody {\r\n  background-color: #0d0d0d;\r\n  color: #f0f0f0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#roundDisplay,\r\n#matchDisplay {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#selectionDisplay {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.entry {\r\n  cursor: pointer;\r\n}\r\n\r\n#selectionDisplay img {\r\n  max-width: 30vw;\r\n  max-height: 60vh;\r\n  border-radius: 16px;\r\n}\r\n\r\n.roundWinner {\r\n  border: 4px solid green;\r\n  border-radius: 16px;\r\n  padding: 2rem;\r\n}\r\n\r\n#nextRound {\r\n  margin: 5vh 35vw 0 35vw;\r\n}\r\n\r\n/* bracket display */\r\n\r\n#bracketContainer {\r\n  position: relative;\r\n\r\n  border: 3px solid pink;\r\n  overflow: auto;\r\n}\r\n\r\n#bracketLines {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.matchNode {\r\n  position: absolute;\r\n  width: 150px;\r\n  height: 60px;\r\n  background: black;\r\n  border: 1px solid green;\r\n  border-radius: 4px;\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 5px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = /*#__PURE__*/JSON.parse('[{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1},{"name":"The Will of the Many","description":"James Islington","seed":2},{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3},{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4},{"name":"Furies of Calderon","description":"Jim Butcher","seed":5},{"name":"Steve Jobs","description":"Walter Isaacson","seed":6},{"name":"Stoner","description":"John Williams","seed":7},{"name":"Old Man\'s War","description":"John Scalzi","seed":8},{"name":"The Devils","description":"Joe Abercrombie","seed":9},{"name":"Frankenstein ","description":"Mary Shelley","seed":10},{"name":"Annie Bot","description":"Sierra Greer","seed":11},{"name":"Red Rabbit","description":"Alex Grecian","seed":12}]');

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

/***/ "./src/testResult.json":
/*!*****************************!*\
  !*** ./src/testResult.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"winnerRound1":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"bye1","win":false}},{"entry1":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":true},"entry2":{"name":"bye2","win":false}},{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"bye3","win":false}},{"entry1":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":true},"entry2":{"name":"bye4","win":false}},{"entry1":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":true},"entry2":{"name":"Red Rabbit","description":"Alex Grecian","seed":12,"win":false}},{"entry1":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":true},"entry2":{"name":"Annie Bot","description":"Sierra Greer","seed":11,"win":false}},{"entry1":{"name":"Stoner","description":"John Williams","seed":7,"win":true},"entry2":{"name":"Frankenstein ","description":"Mary Shelley","seed":10,"win":false}},{"entry1":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":true},"entry2":{"name":"The Devils","description":"Joe Abercrombie","seed":9,"win":false}}],"winnerRound2":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":false}},{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":false}},{"entry1":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":true},"entry2":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":false}},{"entry1":{"name":"Stoner","description":"John Williams","seed":7,"win":true},"entry2":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":false}}],"winnerRound3":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":false}},{"entry1":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":true},"entry2":{"name":"Stoner","description":"John Williams","seed":7,"win":false}}],"winnerRound4":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":false}}],"loserRound1":[{"entry1":{"name":"bye1","win":true},"entry2":{"name":"The Devils","description":"Joe Abercrombie","seed":9,"win":false}},{"entry1":{"name":"bye2","win":true},"entry2":{"name":"Frankenstein ","description":"Mary Shelley","seed":10,"win":false}},{"entry1":{"name":"bye3","win":true},"entry2":{"name":"Annie Bot","description":"Sierra Greer","seed":11,"win":false}},{"entry1":{"name":"bye4","win":true},"entry2":{"name":"Red Rabbit","description":"Alex Grecian","seed":12,"win":false}}],"loserRound2":[{"entry1":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":true},"entry2":{"name":"bye1","win":false}},{"entry1":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":true},"entry2":{"name":"bye2","win":false}},{"entry1":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":true},"entry2":{"name":"bye3","win":false}},{"entry1":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":true},"entry2":{"name":"bye4","win":false}}],"loserRound3":[{"entry1":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":true},"entry2":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":false}},{"entry1":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":true},"entry2":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":false}}],"loserRound4":[{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":false}},{"entry1":{"name":"Stoner","description":"John Williams","seed":7,"win":true},"entry2":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":false}}],"loserRound5":[{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"Stoner","description":"John Williams","seed":7,"win":false}}],"loserRound6":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":false}}]}');

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
/* harmony import */ var _testResult_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testResult.json */ "./src/testResult.json");





// const dynamicImage = require(`./img/${imageName}.jpg`);

// check loser bracket length
// TODO click to select entry, then a confirm button on the bottom

const selectionDisplayDiv = document.getElementById("selectionDisplay");
const matchDisplay = document.getElementById("matchDisplay");
const roundDisplay = document.getElementById("roundDisplay");
const nextRoundButton = document.getElementById("nextRound");

const bracketContainer = document.getElementById("bracketContainer");
const matchesLayer = document.getElementById("matchesLayer");
const bracketLines = document.getElementById("bracketLines");

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

const BRACKET_CONFIG = {
  MATCH_WIDTH: 150,
  MATCH_HEIGHT: 60,
  X_GAP: 50,
  Y_GAP: 30,
  // x horizontal gap, y vertical
};

function adjustMatchNodeHeight() {
  const dummy = document.createElement("div");
  dummy.className = "matchNode";
  dummy.style.visibility = "hidden";
  dummy.style.position = "absolute";
  dummy.style.width = `${BRACKET_CONFIG.MATCH_WIDTH}px`;
  dummy.style.whiteSpace = "normal";
  matchesLayer.appendChild(dummy);

  _items_json__WEBPACK_IMPORTED_MODULE_1__.forEach((entry) => {
    dummy.innerHTML = `
    <div class = "p1">${entry.name}</div>
    <div class = "p2">${entry.name}</div>
    `;
    const height = dummy.offsetHeight;
    if (height + 10 > BRACKET_CONFIG.MATCH_HEIGHT) {
      BRACKET_CONFIG.MATCH_HEIGHT = height + 40;
    }
  });
  matchesLayer.removeChild(dummy);
}

function getX(roundIndex) {
  // zero-indexed round number, +20 built-in padding
  return roundIndex * (BRACKET_CONFIG.MATCH_WIDTH + BRACKET_CONFIG.X_GAP) + 20;
}
function getY(matchIndex) {
  // zero-indexed, vertical slot for matches
  return matchIndex * (BRACKET_CONFIG.MATCH_HEIGHT + BRACKET_CONFIG.Y_GAP) + 20;
}

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
  const rounds = Math.log2(totalCount) * 2 - 1;
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
    let current;
    const confirmSelection = () => {
      entry1Div.removeEventListener("click", onEntry1);
      entry2Div.removeEventListener("click", onEntry2);
      nextRoundButton.removeEventListener("click", confirmSelection);
      resolve(current);
    };

    const onEntry1 = () => {
      // load selection data to be passed through
      current = { entry1Obj, entry2Obj };
      // set win/loss status
      entry1Obj.win = true;
      entry2Obj.win = false;
      // css to highlight selected entrant
      entry2Div.classList.remove("roundWinner");
      entry1Div.classList.add("roundWinner");
    };
    const onEntry2 = () => {
      current = { entry2Obj, entry1Obj };
      entry2Obj.win = true;
      entry1Obj.win = false;
      entry1Div.classList.remove("roundWinner");
      entry2Div.classList.add("roundWinner");
    };

    entry1Div.addEventListener("click", onEntry1);
    entry2Div.addEventListener("click", onEntry2);
    nextRoundButton.addEventListener("click", confirmSelection);
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

    const result = await waitForSelection(
      entry1,
      pair.entry1,
      entry2,
      pair.entry2,
    );
    console.log(result);

    selectionDisplayDiv.innerHTML = "";

    if (bracketComplete) {
      // .values returns an array of the pair objects (final two entries here)
      // then find which entry had win set to true
      const finalWinner = Object.values(result).find((obj) => obj.win);
      displayWinner(finalWinner);
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

async function main(pairings) {
  const maxWinnerRounds = getWinnerRoundCount(_items_json__WEBPACK_IMPORTED_MODULE_1__.length);
  const maxLoserRounds = getLoserRoundCount(_items_json__WEBPACK_IMPORTED_MODULE_1__.length);
  // console.log(
  //   "wrc, wrc2, lrc",
  //   winnerRoundCount,
  //   winnerRoundCount2,
  //   loserRoundCount,
  // );
  await displayBracketPairings(pairings);

  if (bracketComplete) {
    // final, complete brack generation
    displayFinalBracket(results);
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
    await main(pairArray);
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
      await main(pairArray);
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
      await main(pairArray);
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
      await main(pairArray);
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
    await main(pairArray);
    return;
  }
}

function getFinalMatches(resultsObj) {
  const matches = [];
  let winnerMatchCount = 1;
  let loserMatchCount = 1;
  let intraRoundMatchCounter = 1;
  let oddLoserRoundCounter = 0;
  let priorOddLoserSpacing = {};
  // pad winner block with 2 spacer rows above losers
  const losersRowsOffset = nextPowerOfTwo(_items_json__WEBPACK_IMPORTED_MODULE_1__.length) / 2 + 2;

  for (const round in resultsObj) {
    // reset counter on each fresh round
    const currentRound = Number(round.match(/\d+/)[0]);
    priorOddLoserSpacing[currentRound] = [];
    intraRoundMatchCounter = 1;

    for (const match of resultsObj[round]) {
      let obj;
      let rowCalc;

      if (round.includes("winner")) {
        if (currentRound === 1) rowCalc = intraRoundMatchCounter;
        if (currentRound > 1) {
          rowCalc =
            Math.pow(2, currentRound - 2) +
            0.5 +
            Math.pow(2, currentRound - 1) * (intraRoundMatchCounter - 1);
        }

        obj = {
          id: `w${winnerMatchCount}`,
          round: Number(round.match(/\d+/)[0]),
          row: rowCalc,
          p1: match.entry1.name,
          p2: match.entry2.name,
        };
        winnerMatchCount += 1;
      } else {
        // loser rounds
        if (currentRound === 1) {
          rowCalc = intraRoundMatchCounter;
          priorOddLoserSpacing[currentRound].push(rowCalc);
        }
        if (currentRound > 1 && currentRound % 2 === 0) {
          // even rounds

          // get prior round spacing (current - 1), then account for matches indexing at 1, array at 0
          rowCalc =
            priorOddLoserSpacing[currentRound - 1][intraRoundMatchCounter - 1];
        }
        if (currentRound > 1 && currentRound % 2 !== 0) {
          // odd rounds
          rowCalc =
            Math.pow(2, currentRound - 3 - oddLoserRoundCounter) +
            0.5 +
            Math.pow(2, currentRound - 2 - oddLoserRoundCounter) *
              (intraRoundMatchCounter - 1);
          priorOddLoserSpacing[currentRound].push(rowCalc);
          intraRoundMatchCounter += 1;
          oddLoserRoundCounter += 1;
        }

        if (currentRound === getLoserRoundCount(_items_json__WEBPACK_IMPORTED_MODULE_1__.length)) {
          // want 0.5 past winner bracket, but subtract 2 from that to account for the
          // already established offset buffer
          rowCalc = -1.5;
        }
        obj = {
          id: `l${loserMatchCount}`,
          round: Number(round.match(/\d+/)[0]),
          row: rowCalc + losersRowsOffset,
          p1: match.entry1.name,
          p2: match.entry2.name,
        };
        loserMatchCount += 1;
      }

      intraRoundMatchCounter += 1;
      matches.push(obj);
    }
  }
  console.log(matches);
  return matches;
}

function drawBracketLine(start, end) {
  const midX = start.x + (end.x - start.x) / 2;

  const pathData = `
  M ${start.x} ${start.y}
  H ${midX}
  V ${end.y}
  H ${end.x}
  `;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  path.setAttribute("stroke", "#ffffffff");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("fill", "none");

  bracketLines.append(path);
}

function displayFinalBracket(resultsObj) {
  const matches = getFinalMatches(resultsObj);
  const nodePositions = {};
  const halfEntrantCount = nextPowerOfTwo(_items_json__WEBPACK_IMPORTED_MODULE_1__.length) / 2;
  const quarterEntrantCount = halfEntrantCount / 2;
  const maxWinnerRounds = getWinnerRoundCount(_items_json__WEBPACK_IMPORTED_MODULE_1__.length);
  const maxLoserRounds = getLoserRoundCount(_items_json__WEBPACK_IMPORTED_MODULE_1__.length);
  let winnerInputCounter = 1;
  let loserInputCounter = 1;

  let maxX = 0;
  let maxY = 0;
  matches.forEach((match) => {
    const el = document.createElement("div");
    el.classList.add("matchNode");
    el.id = match.id;

    el.innerHTML = `
    <div class = "p1">${match.p1}</div>
    <div class = "p2">${match.p2}</div>
    `;
    // get and set absolute x,y positions
    const xPosition = getX(match.round);
    const yPosition = getY(match.row);
    if (xPosition > maxX) maxX = xPosition;
    if (yPosition > maxY) maxY = yPosition;

    el.style.left = `${xPosition}px`;
    el.style.top = `${yPosition}px`;
    el.style.width = `${BRACKET_CONFIG.MATCH_WIDTH}px`;
    el.style.height = `${BRACKET_CONFIG.MATCH_HEIGHT}px`;
    el.style.whiteSpace = "normal";

    // save coordinates for line attachments
    nodePositions[match.id] = {
      input: { x: xPosition, y: yPosition + BRACKET_CONFIG.MATCH_HEIGHT / 2 },
      output: {
        x: xPosition + BRACKET_CONFIG.MATCH_WIDTH,
        y: yPosition + BRACKET_CONFIG.MATCH_HEIGHT / 2,
      },
      round: match.round,
    };
    matchesLayer.append(el);
  });

  // set bracket container div to fit the matches + 50 extra padding
  const totalHeight = maxY + BRACKET_CONFIG.MATCH_HEIGHT + 50;
  const totalWidth = maxX + BRACKET_CONFIG.MATCH_WIDTH + 50;

  bracketContainer.style.height = `${totalHeight}px`;
  bracketContainer.style.width = `${totalWidth}px`;

  console.log(nodePositions);
  Object.keys(nodePositions).forEach((key) => {
    const split = key.match(/([wl])(\d+)/);
    if (split[1] === "w") {
      const nextInputId = `w${winnerInputCounter + halfEntrantCount}`;

      if (nodePositions[key].round === maxWinnerRounds) {
        // final round exception
        // winner and loser brackets have same match count, apply current count to l-ID to match
        // winner winner with loser winner in final round
        const finalMatchId = `l${split[2]}`;
        console.log(finalMatchId);
        drawBracketLine(
          nodePositions[key].output,
          nodePositions[finalMatchId].input,
        );
      }
      if (nodePositions[key].round < maxWinnerRounds)
        drawBracketLine(
          nodePositions[key].output,
          nodePositions[nextInputId].input,
        );
      if (Number(split[2]) % 2 === 0) {
        // only increment counter every other match since a winner bracket funnels two into one
        winnerInputCounter += 1;
      }
    }
    if (split[1] === "l") {
      if (nodePositions[key].round === maxLoserRounds) {
        // final loser round has no output, bracket is finished
        return;
      }

      const nextInputId = `l${loserInputCounter + quarterEntrantCount}`;

      if (nodePositions[key].round % 2 === 0) {
        // even rounds
        drawBracketLine(
          nodePositions[key].output,
          nodePositions[nextInputId].input,
        );
        if (Number(split[2]) % 2 === 0) {
          // only increment counter every other match since a winner bracket funnels two into one
          loserInputCounter += 1;
        }
      }
      if (nodePositions[key].round % 2 !== 0) {
        //odd rounds
        drawBracketLine(
          nodePositions[key].output,
          nodePositions[nextInputId].input,
        );
        loserInputCounter += 1;
      }
    }
    // const nextRoundNum = Number(split[2]) + 1;
    // console.log(split[1] + nextRoundNum);
    // drawBracketLine(
    //   nodePositions[key].output,
    //   nodePositions[split[1] + nextRoundNum].input,
    // );
  });

  // drawBracketLine(nodePositions["m1"].output, nodePositions["m3"].input);
  // drawBracketLine(nodePositions["m2"].output, nodePositions["m3"].input);
}

pairArray = generateBracketPairings(
  _items_json__WEBPACK_IMPORTED_MODULE_1__,
  generateByes(_items_json__WEBPACK_IMPORTED_MODULE_1__.length),
  false,
  true,
);
adjustMatchNodeHeight();
// getFinalMatches(testResult);
displayFinalBracket(_testResult_json__WEBPACK_IMPORTED_MODULE_3__);
main(pairArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHdDQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx3Q0FBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTLEVBQUU7QUFDakIsTUFBTTtBQUNOLE1BQU07QUFDTixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx3Q0FBYztBQUN4RDtBQUNBLDhDQUE4Qyx3Q0FBYztBQUM1RCw0Q0FBNEMsd0NBQWM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakMsc0JBQXNCLFVBQVU7QUFDaEMsd0JBQXdCLDJCQUEyQjtBQUNuRCx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4REFBOEQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQ0FBc0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdDQUF3QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3Q0FBYztBQUNoQixlQUFlLHdDQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy9pbWd8c3luY3xub25yZWN1cnNpdmV8QzovLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogXHJcblByaW1hcnkgQmFja2dyb3VuZCAjMEQwRDBEIFxyXG5TdXJmYWNlIC8gUGFuZWwgQmFja2dyb3VuZCAjMTYxNjE2XHJcbkFjY2VudCBHb2xkIChQcmltYXJ5KSAjQzhBOTUxXHJcbkFjY2VudCBHb2xkIChCcmlnaHQgLyBIb3ZlcikgI0U1Qzc2QlxyXG5UZXh0IChQcmltYXJ5KSAjRjBGMEYwXHJcblRleHQgKE11dGVkKSAjOUM5QzlDXHJcbkJvcmRlcnMgLyBMaW5lcyAjMjQyNDI0XHJcblN1Y2Nlc3MgLyBIaWdobGlnaHQgKHNhZ2UgZ3JlZW4pICM4RUMwN0NcclxuRXJyb3IgKHNvZnQgY3JpbXNvbikgI0QxNjk2OVxyXG4qL1xyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGQwZDtcclxuICBjb2xvcjogI2YwZjBmMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNyb3VuZERpc3BsYXksXHJcbiNtYXRjaERpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3Rpb25EaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZW50cnkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NlbGVjdGlvbkRpc3BsYXkgaW1nIHtcclxuICBtYXgtd2lkdGg6IDMwdnc7XHJcbiAgbWF4LWhlaWdodDogNjB2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4ucm91bmRXaW5uZXIge1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuI25leHRSb3VuZCB7XHJcbiAgbWFyZ2luOiA1dmggMzV2dyAwIDM1dnc7XHJcbn1cclxuXHJcbi8qIGJyYWNrZXQgZGlzcGxheSAqL1xyXG5cclxuI2JyYWNrZXRDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgYm9yZGVyOiAzcHggc29saWQgcGluaztcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2JyYWNrZXRMaW5lcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWF0Y2hOb2RlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Q0FVQzs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQkFBa0I7O0VBRWxCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBcXHJcXG5QcmltYXJ5IEJhY2tncm91bmQgIzBEMEQwRCBcXHJcXG5TdXJmYWNlIC8gUGFuZWwgQmFja2dyb3VuZCAjMTYxNjE2XFxyXFxuQWNjZW50IEdvbGQgKFByaW1hcnkpICNDOEE5NTFcXHJcXG5BY2NlbnQgR29sZCAoQnJpZ2h0IC8gSG92ZXIpICNFNUM3NkJcXHJcXG5UZXh0IChQcmltYXJ5KSAjRjBGMEYwXFxyXFxuVGV4dCAoTXV0ZWQpICM5QzlDOUNcXHJcXG5Cb3JkZXJzIC8gTGluZXMgIzI0MjQyNFxcclxcblN1Y2Nlc3MgLyBIaWdobGlnaHQgKHNhZ2UgZ3JlZW4pICM4RUMwN0NcXHJcXG5FcnJvciAoc29mdCBjcmltc29uKSAjRDE2OTY5XFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jcm91bmREaXNwbGF5LFxcclxcbiNtYXRjaERpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uRGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb25EaXNwbGF5IGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDMwdnc7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MHZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kV2lubmVyIHtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXh0Um91bmQge1xcclxcbiAgbWFyZ2luOiA1dmggMzV2dyAwIDM1dnc7XFxyXFxufVxcclxcblxcclxcbi8qIGJyYWNrZXQgZGlzcGxheSAqL1xcclxcblxcclxcbiNicmFja2V0Q29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2JyYWNrZXRMaW5lcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0Y2hOb2RlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHBsZS5qcGdcIjogXCIuL3NyYy9pbWcvYXBwbGUuanBnXCIsXG5cdFwiLi9iYW5hbmEuanBnXCI6IFwiLi9zcmMvaW1nL2JhbmFuYS5qcGdcIixcblx0XCIuL2J5ZS5qcGdcIjogXCIuL3NyYy9pbWcvYnllLmpwZ1wiLFxuXHRcIi4vbWFuZ28uanBnXCI6IFwiLi9zcmMvaW1nL21hbmdvLmpwZ1wiLFxuXHRcIi4vcGVhci5qcGdcIjogXCIuL3NyYy9pbWcvcGVhci5qcGdcIixcblx0XCIuL3BpbmVhcHBsZS5qcGdcIjogXCIuL3NyYy9pbWcvcGluZWFwcGxlLmpwZ1wiLFxuXHRcIi4vc2F1c2FnZS5qcGdcIjogXCIuL3NyYy9pbWcvc2F1c2FnZS5qcGdcIixcblx0XCIuL3N0cmF3YmVycnkuanBnXCI6IFwiLi9zcmMvaW1nL3N0cmF3YmVycnkuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRpXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImNvbnN0IGltYWdlQ29udGV4dCA9IGltcG9ydC5tZXRhLndlYnBhY2tDb250ZXh0KFwiLi9pbWdcIiwge1xyXG4gIHJlY3Vyc2l2ZTogZmFsc2UsXHJcbiAgcmVnRXhwOiAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC9pLFxyXG59KTtcclxuXHJcbmNvbnN0IGl0ZW1JbWFnZXMgPSB7fTtcclxuaW1hZ2VDb250ZXh0LmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAvLyByZW1vdmUgcHJlZml4IGFuZCBleHRlbnNpb24gZnJvbSBpbWFnZSBmaWxlIG5hbWVzXHJcbiAgY29uc3QgZmlsZU5hbWUgPSBrZXkucmVwbGFjZShcIi4vXCIsIFwiXCIpLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKTtcclxuICBpdGVtSW1hZ2VzW2ZpbGVOYW1lXSA9IGltYWdlQ29udGV4dChrZXkpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGl0ZW1JbWFnZXMgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgYnJhY2tldEVudHJpZXMgZnJvbSBcIi4vaXRlbXMuanNvblwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlscy5qc1wiO1xyXG5pbXBvcnQgdGVzdFJlc3VsdCBmcm9tIFwiLi90ZXN0UmVzdWx0Lmpzb25cIjtcclxuXHJcbi8vIGNvbnN0IGR5bmFtaWNJbWFnZSA9IHJlcXVpcmUoYC4vaW1nLyR7aW1hZ2VOYW1lfS5qcGdgKTtcclxuXHJcbi8vIGNoZWNrIGxvc2VyIGJyYWNrZXQgbGVuZ3RoXHJcbi8vIFRPRE8gY2xpY2sgdG8gc2VsZWN0IGVudHJ5LCB0aGVuIGEgY29uZmlybSBidXR0b24gb24gdGhlIGJvdHRvbVxyXG5cclxuY29uc3Qgc2VsZWN0aW9uRGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0aW9uRGlzcGxheVwiKTtcclxuY29uc3QgbWF0Y2hEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRjaERpc3BsYXlcIik7XHJcbmNvbnN0IHJvdW5kRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91bmREaXNwbGF5XCIpO1xyXG5jb25zdCBuZXh0Um91bmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRSb3VuZFwiKTtcclxuXHJcbmNvbnN0IGJyYWNrZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyYWNrZXRDb250YWluZXJcIik7XHJcbmNvbnN0IG1hdGNoZXNMYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF0Y2hlc0xheWVyXCIpO1xyXG5jb25zdCBicmFja2V0TGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyYWNrZXRMaW5lc1wiKTtcclxuXHJcbmNvbnN0IHJlc3VsdHMgPSB7fTtcclxubGV0IHdpbm5lclJvdW5kQ291bnQgPSAxO1xyXG5sZXQgd2lubmVyUm91bmRDb3VudDIgPSAxO1xyXG5sZXQgbG9zZXJSb3VuZENvdW50ID0gMDtcclxubGV0IHBhaXJBcnJheSA9IFtdO1xyXG5sZXQgd2lubmVyQnJhY2tldFdpbm5lcnMgPSBbXTtcclxubGV0IHdpbm5lckJyYWNrZXRMb3NlcnMgPSBbXTtcclxubGV0IGxvc2VyQnJhY2tldFdpbm5lcnMgPSBbXTtcclxubGV0IGN1cnJlbnRSb3VuZCA9IFwid2lubmVyXCI7XHJcbmxldCBuZXh0Um91bmQgPSBcImxvc2VyXCI7XHJcbmxldCBicmFja2V0Q29tcGxldGUgPSBmYWxzZTtcclxuXHJcbmNvbnN0IEJSQUNLRVRfQ09ORklHID0ge1xyXG4gIE1BVENIX1dJRFRIOiAxNTAsXHJcbiAgTUFUQ0hfSEVJR0hUOiA2MCxcclxuICBYX0dBUDogNTAsXHJcbiAgWV9HQVA6IDMwLFxyXG4gIC8vIHggaG9yaXpvbnRhbCBnYXAsIHkgdmVydGljYWxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkanVzdE1hdGNoTm9kZUhlaWdodCgpIHtcclxuICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZHVtbXkuY2xhc3NOYW1lID0gXCJtYXRjaE5vZGVcIjtcclxuICBkdW1teS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBkdW1teS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICBkdW1teS5zdHlsZS53aWR0aCA9IGAke0JSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIfXB4YDtcclxuICBkdW1teS5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3JtYWxcIjtcclxuICBtYXRjaGVzTGF5ZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG5cclxuICBicmFja2V0RW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgZHVtbXkuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDFcIj4ke2VudHJ5Lm5hbWV9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMlwiPiR7ZW50cnkubmFtZX08L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBkdW1teS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAoaGVpZ2h0ICsgMTAgPiBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQpIHtcclxuICAgICAgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUID0gaGVpZ2h0ICsgNDA7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbWF0Y2hlc0xheWVyLnJlbW92ZUNoaWxkKGR1bW15KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WChyb3VuZEluZGV4KSB7XHJcbiAgLy8gemVyby1pbmRleGVkIHJvdW5kIG51bWJlciwgKzIwIGJ1aWx0LWluIHBhZGRpbmdcclxuICByZXR1cm4gcm91bmRJbmRleCAqIChCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSCArIEJSQUNLRVRfQ09ORklHLlhfR0FQKSArIDIwO1xyXG59XHJcbmZ1bmN0aW9uIGdldFkobWF0Y2hJbmRleCkge1xyXG4gIC8vIHplcm8taW5kZXhlZCwgdmVydGljYWwgc2xvdCBmb3IgbWF0Y2hlc1xyXG4gIHJldHVybiBtYXRjaEluZGV4ICogKEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCArIEJSQUNLRVRfQ09ORklHLllfR0FQKSArIDIwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0UG93ZXJPZlR3byhudW1iZXIpIHtcclxuICBpZiAobnVtYmVyIDw9IDAgfHwgbnVtYmVyID4gNTIgfHwgdHlwZW9mIG51bWJlciAhPT0gXCJudW1iZXJcIilcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgY29uc3QgbmV4dFBvd2VyID0gMiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cyKG51bWJlcikpO1xyXG5cclxuICByZXR1cm4gbmV4dFBvd2VyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5uZXJSb3VuZENvdW50KG51bWJlck9mRW50cmFudHMpIHtcclxuICBjb25zdCB0b3RhbENvdW50ID0gbmV4dFBvd2VyT2ZUd28obnVtYmVyT2ZFbnRyYW50cyk7XHJcbiAgY29uc3Qgcm91bmRzID0gTWF0aC5sb2cyKHRvdGFsQ291bnQpO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvc2VyUm91bmRDb3VudChudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgdG90YWxDb3VudCA9IG5leHRQb3dlck9mVHdvKG51bWJlck9mRW50cmFudHMpO1xyXG4gIGNvbnN0IHJvdW5kcyA9IE1hdGgubG9nMih0b3RhbENvdW50KSAqIDIgLSAxO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnllcyhudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgYnllQ291bnQgPSBuZXh0UG93ZXJPZlR3byhudW1iZXJPZkVudHJhbnRzKSAtIG51bWJlck9mRW50cmFudHM7XHJcbiAgY29uc3QgYnllT2JqcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnllQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgYnllT2Jqc1tpXSA9IGBieWUke2kgKyAxfWA7XHJcbiAgfVxyXG4gIHJldHVybiBieWVPYmpzO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gIGJyYWNrZXRFbnRyaWVzLFxyXG4gIGJ5ZUVudHJpZXMsXHJcbiAgb3RoZXJFbnRyaWVzLFxyXG4gIGZpcnN0Um91bmRCb29sLFxyXG4pIHtcclxuICBjb25zdCBwYWlyaW5ncyA9IFtdO1xyXG5cclxuICAvLyBvcHRpb25hbCBoYW5kbGluZyBvZiBibGVuZGluZyB3aW5uZXIgYnJhY2tldCBsb3NlcnMgd2l0aCBsb3NlciBicmFja2V0IHdpbm5lcnNcclxuICBpZiAob3RoZXJFbnRyaWVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBvdGhlckVudHJpZXNbaV0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG4gIC8vIGhhbmRsZSBmaXJzdCByb3VuZCBzY2VuYXJpb3Mgd2l0aCBieWVzIHByZXNlbnRcclxuICBpZiAoYnllRW50cmllcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieWVFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiB7IG5hbWU6IGJ5ZUVudHJpZXNbaV0gfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gYnllRW50cmllcy5sZW5ndGgsIGogPSAtMTtcclxuICAgICAgaSA8IG5leHRQb3dlck9mVHdvKGJyYWNrZXRFbnRyaWVzLmxlbmd0aCkgLyAyO1xyXG4gICAgICBpICs9IDEsIGogLT0gMVxyXG4gICAgKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBicmFja2V0RW50cmllcy5hdChqKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWlyaW5ncztcclxuICB9XHJcblxyXG4gIC8vIGZpcnN0IHJvdW5kLCBidXQgbm8gYnllcyBuZWVkZWRcclxuICBpZiAoIWJ5ZUVudHJpZXMgJiYgZmlyc3RSb3VuZEJvb2wpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBqID0gLTE7IGkgPCBicmFja2V0RW50cmllcy5sZW5ndGggLyAyOyBpICs9IDEsIGogLT0gMSkge1xyXG4gICAgICBwYWlyaW5nc1tpXSA9IHtcclxuICAgICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICAgIGVudHJ5MjogYnJhY2tldEVudHJpZXMuYXQoaiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG5cclxuICAvLyBjYXRjaCBzaW5nbGUtc291cmNlIGJyYWNrZXQgZ2VuZXJhdGlvblxyXG4gIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAyLCBqICs9IDEpIHtcclxuICAgIHBhaXJpbmdzW2pdID0ge1xyXG4gICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICBlbnRyeTI6IGJyYWNrZXRFbnRyaWVzW2kgKyAxXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBwYWlyaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gZW50cnlEaXYoZW50cnlPYmopIHtcclxuICBjb25zdCBlbnRyeVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBlbnRyeVdyYXAuY2xhc3NMaXN0LmFkZChcImVudHJ5XCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gZW50cnlPYmoubmFtZTtcclxuICBwLnRleHRDb250ZW50ID0gZW50cnlPYmouZGVzY3JpcHRpb247XHJcblxyXG4gIGlmICh1dGlscy5pdGVtSW1hZ2VzW2VudHJ5T2JqLm5hbWVdKSB7XHJcbiAgICBpbWcuc3JjID0gdXRpbHMuaXRlbUltYWdlc1tlbnRyeU9iai5uYW1lXTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmlsbCBzdG9jayBpbWFnZSBpZiBubyBwaWN0dXJlIHByb3ZpZGVkICh1c3VhbGx5IGEgZ2VuZXJhdGVkIGJ5ZSlcclxuICAgIGltZy5zcmMgPSB1dGlscy5pdGVtSW1hZ2VzW1wiYnllXCJdO1xyXG4gIH1cclxuXHJcbiAgZW50cnlXcmFwLmFwcGVuZChoMiwgcCwgaW1nKTtcclxuXHJcbiAgcmV0dXJuIGVudHJ5V3JhcDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdEZvclNlbGVjdGlvbihlbnRyeTFEaXYsIGVudHJ5MU9iaiwgZW50cnkyRGl2LCBlbnRyeTJPYmopIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGxldCBjdXJyZW50O1xyXG4gICAgY29uc3QgY29uZmlybVNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgZW50cnkxRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkVudHJ5MSk7XHJcbiAgICAgIGVudHJ5MkRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25FbnRyeTIpO1xyXG4gICAgICBuZXh0Um91bmRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1TZWxlY3Rpb24pO1xyXG4gICAgICByZXNvbHZlKGN1cnJlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkVudHJ5MSA9ICgpID0+IHtcclxuICAgICAgLy8gbG9hZCBzZWxlY3Rpb24gZGF0YSB0byBiZSBwYXNzZWQgdGhyb3VnaFxyXG4gICAgICBjdXJyZW50ID0geyBlbnRyeTFPYmosIGVudHJ5Mk9iaiB9O1xyXG4gICAgICAvLyBzZXQgd2luL2xvc3Mgc3RhdHVzXHJcbiAgICAgIGVudHJ5MU9iai53aW4gPSB0cnVlO1xyXG4gICAgICBlbnRyeTJPYmoud2luID0gZmFsc2U7XHJcbiAgICAgIC8vIGNzcyB0byBoaWdobGlnaHQgc2VsZWN0ZWQgZW50cmFudFxyXG4gICAgICBlbnRyeTJEaXYuY2xhc3NMaXN0LnJlbW92ZShcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBlbnRyeTFEaXYuY2xhc3NMaXN0LmFkZChcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRW50cnkyID0gKCkgPT4ge1xyXG4gICAgICBjdXJyZW50ID0geyBlbnRyeTJPYmosIGVudHJ5MU9iaiB9O1xyXG4gICAgICBlbnRyeTJPYmoud2luID0gdHJ1ZTtcclxuICAgICAgZW50cnkxT2JqLndpbiA9IGZhbHNlO1xyXG4gICAgICBlbnRyeTFEaXYuY2xhc3NMaXN0LnJlbW92ZShcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBlbnRyeTJEaXYuY2xhc3NMaXN0LmFkZChcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbnRyeTFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRW50cnkxKTtcclxuICAgIGVudHJ5MkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25FbnRyeTIpO1xyXG4gICAgbmV4dFJvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtU2VsZWN0aW9uKTtcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUJyYWNrZXRQYWlyaW5ncyhwYWlyaW5ncykge1xyXG4gIGNvbnN0IHBhaXJpbmdzQ29weSA9IHN0cnVjdHVyZWRDbG9uZShwYWlyaW5ncyk7XHJcbiAgbGV0IG1hdGNoTnVtYmVyID0gMTtcclxuICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcmluZ3NDb3B5KSB7XHJcbiAgICBjb25zdCBlbnRyeTEgPSBlbnRyeURpdihwYWlyLmVudHJ5MSk7XHJcbiAgICBjb25zdCBlbnRyeTIgPSBlbnRyeURpdihwYWlyLmVudHJ5Mik7XHJcbiAgICBlbnRyeTEuaWQgPSBcImVudHJ5MVwiO1xyXG4gICAgZW50cnkyLmlkID0gXCJlbnRyeTJcIjtcclxuXHJcbiAgICAvLyByb3VuZCBhbmQgbWF0Y2ggZGlzcGxheSBpbmZvXHJcbiAgICByb3VuZERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChjdXJyZW50Um91bmQgPT09IFwid2lubmVyXCIpIHtcclxuICAgICAgcm91bmREaXNwbGF5LnRleHRDb250ZW50ID0gYFJvdW5kIG9mICR7cGFpcmluZ3MubGVuZ3RoICogMn1gO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJsb3NlclwiKSB7XHJcbiAgICAgIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IGBMb3NlciBSb3VuZCAke2xvc2VyUm91bmRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWF0Y2hEaXNwbGF5LnRleHRDb250ZW50ID0gYE1hdGNoICR7bWF0Y2hOdW1iZXJ9YDtcclxuICAgIG1hdGNoTnVtYmVyICs9IDE7XHJcblxyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5hcHBlbmQoZW50cnkxLCBlbnRyeTIpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhaXRGb3JTZWxlY3Rpb24oXHJcbiAgICAgIGVudHJ5MSxcclxuICAgICAgcGFpci5lbnRyeTEsXHJcbiAgICAgIGVudHJ5MixcclxuICAgICAgcGFpci5lbnRyeTIsXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBzZWxlY3Rpb25EaXNwbGF5RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGJyYWNrZXRDb21wbGV0ZSkge1xyXG4gICAgICAvLyAudmFsdWVzIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHBhaXIgb2JqZWN0cyAoZmluYWwgdHdvIGVudHJpZXMgaGVyZSlcclxuICAgICAgLy8gdGhlbiBmaW5kIHdoaWNoIGVudHJ5IGhhZCB3aW4gc2V0IHRvIHRydWVcclxuICAgICAgY29uc3QgZmluYWxXaW5uZXIgPSBPYmplY3QudmFsdWVzKHJlc3VsdCkuZmluZCgob2JqKSA9PiBvYmoud2luKTtcclxuICAgICAgZGlzcGxheVdpbm5lcihmaW5hbFdpbm5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudFJvdW5kID09PSBcIndpbm5lclwiKSB7XHJcbiAgICByZXN1bHRzW2B3aW5uZXJSb3VuZCR7d2lubmVyUm91bmRDb3VudH1gXSA9IHBhaXJpbmdzQ29weTtcclxuICB9XHJcbiAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJsb3NlclwiKSB7XHJcbiAgICByZXN1bHRzW2Bsb3NlclJvdW5kJHtsb3NlclJvdW5kQ291bnR9YF0gPSBwYWlyaW5nc0NvcHk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcInJlc3VsdHNcIiwgcmVzdWx0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIod2lubmVyT2JqKSB7XHJcbiAgcm91bmREaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbWF0Y2hEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCB3aW5uZXIgPSBlbnRyeURpdih3aW5uZXJPYmopO1xyXG4gIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IFwiV0lOTkVSXCI7XHJcbiAgc2VsZWN0aW9uRGlzcGxheURpdi5hcHBlbmQod2lubmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzdWx0QXJyYXkocm91bmRUeXBlLCByb3VuZENvdW50LCB3aW5TdGF0dXMpIHtcclxuICAvLyByb3VuZFR5cGUgPSAnd2lubmVyJyBvciAnbG9zZXInXHJcbiAgLy8gcm91bmRDb3VudCA9IGludGVnZXJcclxuICAvLyB3aW5TdGF0dXMgPSB0cnVlIG9yIGZhbHNlXHJcbiAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgZm9yIChjb25zdCBtYXRjaCBvZiByZXN1bHRzW2Ake3JvdW5kVHlwZX1Sb3VuZCR7cm91bmRDb3VudH1gXSkge1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBPYmplY3Qua2V5cyhtYXRjaCkpIHtcclxuICAgICAgLy8gY2FwdHVyZSB3aW5zXHJcbiAgICAgIGlmICh3aW5TdGF0dXMpIHtcclxuICAgICAgICBpZiAobWF0Y2hbZW50cnldLndpbikgcmVzdWx0LnB1c2gobWF0Y2hbZW50cnldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY2FwdHVyZSBsb3NzZXNcclxuICAgICAgaWYgKCF3aW5TdGF0dXMpIHtcclxuICAgICAgICBpZiAoIW1hdGNoW2VudHJ5XS53aW4pIHJlc3VsdC5wdXNoKG1hdGNoW2VudHJ5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWFpbihwYWlyaW5ncykge1xyXG4gIGNvbnN0IG1heFdpbm5lclJvdW5kcyA9IGdldFdpbm5lclJvdW5kQ291bnQoYnJhY2tldEVudHJpZXMubGVuZ3RoKTtcclxuICBjb25zdCBtYXhMb3NlclJvdW5kcyA9IGdldExvc2VyUm91bmRDb3VudChicmFja2V0RW50cmllcy5sZW5ndGgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFxyXG4gIC8vICAgXCJ3cmMsIHdyYzIsIGxyY1wiLFxyXG4gIC8vICAgd2lubmVyUm91bmRDb3VudCxcclxuICAvLyAgIHdpbm5lclJvdW5kQ291bnQyLFxyXG4gIC8vICAgbG9zZXJSb3VuZENvdW50LFxyXG4gIC8vICk7XHJcbiAgYXdhaXQgZGlzcGxheUJyYWNrZXRQYWlyaW5ncyhwYWlyaW5ncyk7XHJcblxyXG4gIGlmIChicmFja2V0Q29tcGxldGUpIHtcclxuICAgIC8vIGZpbmFsLCBjb21wbGV0ZSBicmFjayBnZW5lcmF0aW9uXHJcbiAgICBkaXNwbGF5RmluYWxCcmFja2V0KHJlc3VsdHMpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAod2lubmVyUm91bmRDb3VudCA8IG1heFdpbm5lclJvdW5kcykge1xyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldFdpbm5lcnMgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgd2lubmVyUm91bmRDb3VudCxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5uZXJCcmFja2V0V2lubmVycyk7XHJcbiAgICB3aW5uZXJSb3VuZENvdW50ICs9IDE7XHJcblxyXG4gICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldFdpbm5lcnMpO1xyXG4gICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgd2lubmVyUm91bmRDb3VudCA9PT0gbWF4V2lubmVyUm91bmRzICYmXHJcbiAgICBsb3NlclJvdW5kQ291bnQgPCBtYXhMb3NlclJvdW5kc1xyXG4gICkge1xyXG4gICAgY3VycmVudFJvdW5kID0gXCJsb3NlclwiO1xyXG4gICAgaWYgKGxvc2VyUm91bmRDb3VudCA9PT0gMCkge1xyXG4gICAgICAvLyBoYW5kbGUgZmlyc3QgbG9zZXIgcm91bmQgZ2VuZXJhdGVkIG9ubHkgZnJvbSB3aW5uZXIgYnJhY2tldFxyXG4gICAgICBjb25zdCB3aW5uZXJCcmFja2V0TG9zZXJzID0gZ2V0UmVzdWx0QXJyYXkoXHJcbiAgICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgKTtcclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldExvc2VycywgW10pO1xyXG5cclxuICAgICAgd2lubmVyUm91bmRDb3VudDIgKz0gMTtcclxuICAgICAgbG9zZXJSb3VuZENvdW50ICs9IDE7XHJcbiAgICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb3NlclJvdW5kQ291bnQgPT09IG1heExvc2VyUm91bmRzIC0gMSkge1xyXG4gICAgICAvLyBGaW5hbCByb3VuZC4gTG9zZXIgcm91bmRzIGFyZSAwIGluZGV4ZWQgdG8gYmV0dGVyIHN5bmMgd2l0aCByb3VuZCBkaXNwbGF5XHJcbiAgICAgIGNvbnN0IHdpbm5lckJyYWNrZXRXaW5uZXIgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgICBcIndpbm5lclwiLFxyXG4gICAgICAgIHdpbm5lclJvdW5kQ291bnQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVyID0gZ2V0UmVzdWx0QXJyYXkoXCJsb3NlclwiLCBsb3NlclJvdW5kQ291bnQsIHRydWUpO1xyXG5cclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgICAgICAgd2lubmVyQnJhY2tldFdpbm5lcixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBsb3NlckJyYWNrZXRXaW5uZXIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBicmFja2V0Q29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldExvc2VycyA9IGdldFJlc3VsdEFycmF5KFxyXG4gICAgICBcIndpbm5lclwiLFxyXG4gICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVycyA9IGdldFJlc3VsdEFycmF5KFwibG9zZXJcIiwgbG9zZXJSb3VuZENvdW50LCB0cnVlKTtcclxuXHJcbiAgICBpZiAobG9zZXJCcmFja2V0V2lubmVycy5sZW5ndGggPiB3aW5uZXJCcmFja2V0TG9zZXJzLmxlbmd0aCkge1xyXG4gICAgICAvLyBoYW5kbGUgb2Zmc2V0IHJvdW5kcyB3aGVyZSBsb3NlciBicmFja2V0IG5lZWRzIHRvIGNhdGNoIHVwXHJcbiAgICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKGxvc2VyQnJhY2tldFdpbm5lcnMsIFtdKTtcclxuXHJcbiAgICAgIGxvc2VyUm91bmRDb3VudCArPSAxO1xyXG4gICAgICBhd2FpdCBtYWluKHBhaXJBcnJheSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gICAgICB3aW5uZXJCcmFja2V0TG9zZXJzLFxyXG4gICAgICBbXSxcclxuICAgICAgbG9zZXJCcmFja2V0V2lubmVycyxcclxuICAgICk7XHJcblxyXG4gICAgLy8gbm9ybWFsIG9wZXJhdGlvbiBlbmRzIGhlcmVcclxuICAgIHdpbm5lclJvdW5kQ291bnQyICs9IDE7XHJcbiAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbmFsTWF0Y2hlcyhyZXN1bHRzT2JqKSB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IFtdO1xyXG4gIGxldCB3aW5uZXJNYXRjaENvdW50ID0gMTtcclxuICBsZXQgbG9zZXJNYXRjaENvdW50ID0gMTtcclxuICBsZXQgaW50cmFSb3VuZE1hdGNoQ291bnRlciA9IDE7XHJcbiAgbGV0IG9kZExvc2VyUm91bmRDb3VudGVyID0gMDtcclxuICBsZXQgcHJpb3JPZGRMb3NlclNwYWNpbmcgPSB7fTtcclxuICAvLyBwYWQgd2lubmVyIGJsb2NrIHdpdGggMiBzcGFjZXIgcm93cyBhYm92ZSBsb3NlcnNcclxuICBjb25zdCBsb3NlcnNSb3dzT2Zmc2V0ID0gbmV4dFBvd2VyT2ZUd28oYnJhY2tldEVudHJpZXMubGVuZ3RoKSAvIDIgKyAyO1xyXG5cclxuICBmb3IgKGNvbnN0IHJvdW5kIGluIHJlc3VsdHNPYmopIHtcclxuICAgIC8vIHJlc2V0IGNvdW50ZXIgb24gZWFjaCBmcmVzaCByb3VuZFxyXG4gICAgY29uc3QgY3VycmVudFJvdW5kID0gTnVtYmVyKHJvdW5kLm1hdGNoKC9cXGQrLylbMF0pO1xyXG4gICAgcHJpb3JPZGRMb3NlclNwYWNpbmdbY3VycmVudFJvdW5kXSA9IFtdO1xyXG4gICAgaW50cmFSb3VuZE1hdGNoQ291bnRlciA9IDE7XHJcblxyXG4gICAgZm9yIChjb25zdCBtYXRjaCBvZiByZXN1bHRzT2JqW3JvdW5kXSkge1xyXG4gICAgICBsZXQgb2JqO1xyXG4gICAgICBsZXQgcm93Q2FsYztcclxuXHJcbiAgICAgIGlmIChyb3VuZC5pbmNsdWRlcyhcIndpbm5lclwiKSkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPT09IDEpIHJvd0NhbGMgPSBpbnRyYVJvdW5kTWF0Y2hDb3VudGVyO1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPiAxKSB7XHJcbiAgICAgICAgICByb3dDYWxjID1cclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMikgK1xyXG4gICAgICAgICAgICAwLjUgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygyLCBjdXJyZW50Um91bmQgLSAxKSAqIChpbnRyYVJvdW5kTWF0Y2hDb3VudGVyIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICBpZDogYHcke3dpbm5lck1hdGNoQ291bnR9YCxcclxuICAgICAgICAgIHJvdW5kOiBOdW1iZXIocm91bmQubWF0Y2goL1xcZCsvKVswXSksXHJcbiAgICAgICAgICByb3c6IHJvd0NhbGMsXHJcbiAgICAgICAgICBwMTogbWF0Y2guZW50cnkxLm5hbWUsXHJcbiAgICAgICAgICBwMjogbWF0Y2guZW50cnkyLm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5uZXJNYXRjaENvdW50ICs9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbG9zZXIgcm91bmRzXHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gMSkge1xyXG4gICAgICAgICAgcm93Q2FsYyA9IGludHJhUm91bmRNYXRjaENvdW50ZXI7XHJcbiAgICAgICAgICBwcmlvck9kZExvc2VyU3BhY2luZ1tjdXJyZW50Um91bmRdLnB1c2gocm93Q2FsYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPiAxICYmIGN1cnJlbnRSb3VuZCAlIDIgPT09IDApIHtcclxuICAgICAgICAgIC8vIGV2ZW4gcm91bmRzXHJcblxyXG4gICAgICAgICAgLy8gZ2V0IHByaW9yIHJvdW5kIHNwYWNpbmcgKGN1cnJlbnQgLSAxKSwgdGhlbiBhY2NvdW50IGZvciBtYXRjaGVzIGluZGV4aW5nIGF0IDEsIGFycmF5IGF0IDBcclxuICAgICAgICAgIHJvd0NhbGMgPVxyXG4gICAgICAgICAgICBwcmlvck9kZExvc2VyU3BhY2luZ1tjdXJyZW50Um91bmQgLSAxXVtpbnRyYVJvdW5kTWF0Y2hDb3VudGVyIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPiAxICYmIGN1cnJlbnRSb3VuZCAlIDIgIT09IDApIHtcclxuICAgICAgICAgIC8vIG9kZCByb3VuZHNcclxuICAgICAgICAgIHJvd0NhbGMgPVxyXG4gICAgICAgICAgICBNYXRoLnBvdygyLCBjdXJyZW50Um91bmQgLSAzIC0gb2RkTG9zZXJSb3VuZENvdW50ZXIpICtcclxuICAgICAgICAgICAgMC41ICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMiAtIG9kZExvc2VyUm91bmRDb3VudGVyKSAqXHJcbiAgICAgICAgICAgICAgKGludHJhUm91bmRNYXRjaENvdW50ZXIgLSAxKTtcclxuICAgICAgICAgIHByaW9yT2RkTG9zZXJTcGFjaW5nW2N1cnJlbnRSb3VuZF0ucHVzaChyb3dDYWxjKTtcclxuICAgICAgICAgIGludHJhUm91bmRNYXRjaENvdW50ZXIgKz0gMTtcclxuICAgICAgICAgIG9kZExvc2VyUm91bmRDb3VudGVyICs9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSBnZXRMb3NlclJvdW5kQ291bnQoYnJhY2tldEVudHJpZXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgLy8gd2FudCAwLjUgcGFzdCB3aW5uZXIgYnJhY2tldCwgYnV0IHN1YnRyYWN0IDIgZnJvbSB0aGF0IHRvIGFjY291bnQgZm9yIHRoZVxyXG4gICAgICAgICAgLy8gYWxyZWFkeSBlc3RhYmxpc2hlZCBvZmZzZXQgYnVmZmVyXHJcbiAgICAgICAgICByb3dDYWxjID0gLTEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgaWQ6IGBsJHtsb3Nlck1hdGNoQ291bnR9YCxcclxuICAgICAgICAgIHJvdW5kOiBOdW1iZXIocm91bmQubWF0Y2goL1xcZCsvKVswXSksXHJcbiAgICAgICAgICByb3c6IHJvd0NhbGMgKyBsb3NlcnNSb3dzT2Zmc2V0LFxyXG4gICAgICAgICAgcDE6IG1hdGNoLmVudHJ5MS5uYW1lLFxyXG4gICAgICAgICAgcDI6IG1hdGNoLmVudHJ5Mi5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9zZXJNYXRjaENvdW50ICs9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGludHJhUm91bmRNYXRjaENvdW50ZXIgKz0gMTtcclxuICAgICAgbWF0Y2hlcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xyXG4gIHJldHVybiBtYXRjaGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3QnJhY2tldExpbmUoc3RhcnQsIGVuZCkge1xyXG4gIGNvbnN0IG1pZFggPSBzdGFydC54ICsgKGVuZC54IC0gc3RhcnQueCkgLyAyO1xyXG5cclxuICBjb25zdCBwYXRoRGF0YSA9IGBcclxuICBNICR7c3RhcnQueH0gJHtzdGFydC55fVxyXG4gIEggJHttaWRYfVxyXG4gIFYgJHtlbmQueX1cclxuICBIICR7ZW5kLnh9XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aERhdGEpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiI2ZmZmZmZmZmXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG5cclxuICBicmFja2V0TGluZXMuYXBwZW5kKHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RmluYWxCcmFja2V0KHJlc3VsdHNPYmopIHtcclxuICBjb25zdCBtYXRjaGVzID0gZ2V0RmluYWxNYXRjaGVzKHJlc3VsdHNPYmopO1xyXG4gIGNvbnN0IG5vZGVQb3NpdGlvbnMgPSB7fTtcclxuICBjb25zdCBoYWxmRW50cmFudENvdW50ID0gbmV4dFBvd2VyT2ZUd28oYnJhY2tldEVudHJpZXMubGVuZ3RoKSAvIDI7XHJcbiAgY29uc3QgcXVhcnRlckVudHJhbnRDb3VudCA9IGhhbGZFbnRyYW50Q291bnQgLyAyO1xyXG4gIGNvbnN0IG1heFdpbm5lclJvdW5kcyA9IGdldFdpbm5lclJvdW5kQ291bnQoYnJhY2tldEVudHJpZXMubGVuZ3RoKTtcclxuICBjb25zdCBtYXhMb3NlclJvdW5kcyA9IGdldExvc2VyUm91bmRDb3VudChicmFja2V0RW50cmllcy5sZW5ndGgpO1xyXG4gIGxldCB3aW5uZXJJbnB1dENvdW50ZXIgPSAxO1xyXG4gIGxldCBsb3NlcklucHV0Q291bnRlciA9IDE7XHJcblxyXG4gIGxldCBtYXhYID0gMDtcclxuICBsZXQgbWF4WSA9IDA7XHJcbiAgbWF0Y2hlcy5mb3JFYWNoKChtYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIm1hdGNoTm9kZVwiKTtcclxuICAgIGVsLmlkID0gbWF0Y2guaWQ7XHJcblxyXG4gICAgZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDFcIj4ke21hdGNoLnAxfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDJcIj4ke21hdGNoLnAyfTwvZGl2PlxyXG4gICAgYDtcclxuICAgIC8vIGdldCBhbmQgc2V0IGFic29sdXRlIHgseSBwb3NpdGlvbnNcclxuICAgIGNvbnN0IHhQb3NpdGlvbiA9IGdldFgobWF0Y2gucm91bmQpO1xyXG4gICAgY29uc3QgeVBvc2l0aW9uID0gZ2V0WShtYXRjaC5yb3cpO1xyXG4gICAgaWYgKHhQb3NpdGlvbiA+IG1heFgpIG1heFggPSB4UG9zaXRpb247XHJcbiAgICBpZiAoeVBvc2l0aW9uID4gbWF4WSkgbWF4WSA9IHlQb3NpdGlvbjtcclxuXHJcbiAgICBlbC5zdHlsZS5sZWZ0ID0gYCR7eFBvc2l0aW9ufXB4YDtcclxuICAgIGVsLnN0eWxlLnRvcCA9IGAke3lQb3NpdGlvbn1weGA7XHJcbiAgICBlbC5zdHlsZS53aWR0aCA9IGAke0JSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIfXB4YDtcclxuICAgIGVsLnN0eWxlLmhlaWdodCA9IGAke0JSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVH1weGA7XHJcbiAgICBlbC5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3JtYWxcIjtcclxuXHJcbiAgICAvLyBzYXZlIGNvb3JkaW5hdGVzIGZvciBsaW5lIGF0dGFjaG1lbnRzXHJcbiAgICBub2RlUG9zaXRpb25zW21hdGNoLmlkXSA9IHtcclxuICAgICAgaW5wdXQ6IHsgeDogeFBvc2l0aW9uLCB5OiB5UG9zaXRpb24gKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQgLyAyIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIHg6IHhQb3NpdGlvbiArIEJSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRILFxyXG4gICAgICAgIHk6IHlQb3NpdGlvbiArIEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCAvIDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvdW5kOiBtYXRjaC5yb3VuZCxcclxuICAgIH07XHJcbiAgICBtYXRjaGVzTGF5ZXIuYXBwZW5kKGVsKTtcclxuICB9KTtcclxuXHJcbiAgLy8gc2V0IGJyYWNrZXQgY29udGFpbmVyIGRpdiB0byBmaXQgdGhlIG1hdGNoZXMgKyA1MCBleHRyYSBwYWRkaW5nXHJcbiAgY29uc3QgdG90YWxIZWlnaHQgPSBtYXhZICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUICsgNTA7XHJcbiAgY29uc3QgdG90YWxXaWR0aCA9IG1heFggKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSCArIDUwO1xyXG5cclxuICBicmFja2V0Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3RvdGFsSGVpZ2h0fXB4YDtcclxuICBicmFja2V0Q29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7dG90YWxXaWR0aH1weGA7XHJcblxyXG4gIGNvbnNvbGUubG9nKG5vZGVQb3NpdGlvbnMpO1xyXG4gIE9iamVjdC5rZXlzKG5vZGVQb3NpdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgY29uc3Qgc3BsaXQgPSBrZXkubWF0Y2goLyhbd2xdKShcXGQrKS8pO1xyXG4gICAgaWYgKHNwbGl0WzFdID09PSBcIndcIikge1xyXG4gICAgICBjb25zdCBuZXh0SW5wdXRJZCA9IGB3JHt3aW5uZXJJbnB1dENvdW50ZXIgKyBoYWxmRW50cmFudENvdW50fWA7XHJcblxyXG4gICAgICBpZiAobm9kZVBvc2l0aW9uc1trZXldLnJvdW5kID09PSBtYXhXaW5uZXJSb3VuZHMpIHtcclxuICAgICAgICAvLyBmaW5hbCByb3VuZCBleGNlcHRpb25cclxuICAgICAgICAvLyB3aW5uZXIgYW5kIGxvc2VyIGJyYWNrZXRzIGhhdmUgc2FtZSBtYXRjaCBjb3VudCwgYXBwbHkgY3VycmVudCBjb3VudCB0byBsLUlEIHRvIG1hdGNoXHJcbiAgICAgICAgLy8gd2lubmVyIHdpbm5lciB3aXRoIGxvc2VyIHdpbm5lciBpbiBmaW5hbCByb3VuZFxyXG4gICAgICAgIGNvbnN0IGZpbmFsTWF0Y2hJZCA9IGBsJHtzcGxpdFsyXX1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbmFsTWF0Y2hJZCk7XHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbZmluYWxNYXRjaElkXS5pbnB1dCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgPCBtYXhXaW5uZXJSb3VuZHMpXHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbbmV4dElucHV0SWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgIGlmIChOdW1iZXIoc3BsaXRbMl0pICUgMiA9PT0gMCkge1xyXG4gICAgICAgIC8vIG9ubHkgaW5jcmVtZW50IGNvdW50ZXIgZXZlcnkgb3RoZXIgbWF0Y2ggc2luY2UgYSB3aW5uZXIgYnJhY2tldCBmdW5uZWxzIHR3byBpbnRvIG9uZVxyXG4gICAgICAgIHdpbm5lcklucHV0Q291bnRlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3BsaXRbMV0gPT09IFwibFwiKSB7XHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgPT09IG1heExvc2VyUm91bmRzKSB7XHJcbiAgICAgICAgLy8gZmluYWwgbG9zZXIgcm91bmQgaGFzIG5vIG91dHB1dCwgYnJhY2tldCBpcyBmaW5pc2hlZFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV4dElucHV0SWQgPSBgbCR7bG9zZXJJbnB1dENvdW50ZXIgKyBxdWFydGVyRW50cmFudENvdW50fWA7XHJcblxyXG4gICAgICBpZiAobm9kZVBvc2l0aW9uc1trZXldLnJvdW5kICUgMiA9PT0gMCkge1xyXG4gICAgICAgIC8vIGV2ZW4gcm91bmRzXHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbbmV4dElucHV0SWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKE51bWJlcihzcGxpdFsyXSkgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBvbmx5IGluY3JlbWVudCBjb3VudGVyIGV2ZXJ5IG90aGVyIG1hdGNoIHNpbmNlIGEgd2lubmVyIGJyYWNrZXQgZnVubmVscyB0d28gaW50byBvbmVcclxuICAgICAgICAgIGxvc2VySW5wdXRDb3VudGVyICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgLy9vZGQgcm91bmRzXHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbbmV4dElucHV0SWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbG9zZXJJbnB1dENvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgbmV4dFJvdW5kTnVtID0gTnVtYmVyKHNwbGl0WzJdKSArIDE7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcGxpdFsxXSArIG5leHRSb3VuZE51bSk7XHJcbiAgICAvLyBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAvLyAgIG5vZGVQb3NpdGlvbnNba2V5XS5vdXRwdXQsXHJcbiAgICAvLyAgIG5vZGVQb3NpdGlvbnNbc3BsaXRbMV0gKyBuZXh0Um91bmROdW1dLmlucHV0LFxyXG4gICAgLy8gKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZHJhd0JyYWNrZXRMaW5lKG5vZGVQb3NpdGlvbnNbXCJtMVwiXS5vdXRwdXQsIG5vZGVQb3NpdGlvbnNbXCJtM1wiXS5pbnB1dCk7XHJcbiAgLy8gZHJhd0JyYWNrZXRMaW5lKG5vZGVQb3NpdGlvbnNbXCJtMlwiXS5vdXRwdXQsIG5vZGVQb3NpdGlvbnNbXCJtM1wiXS5pbnB1dCk7XHJcbn1cclxuXHJcbnBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gIGJyYWNrZXRFbnRyaWVzLFxyXG4gIGdlbmVyYXRlQnllcyhicmFja2V0RW50cmllcy5sZW5ndGgpLFxyXG4gIGZhbHNlLFxyXG4gIHRydWUsXHJcbik7XHJcbmFkanVzdE1hdGNoTm9kZUhlaWdodCgpO1xyXG4vLyBnZXRGaW5hbE1hdGNoZXModGVzdFJlc3VsdCk7XHJcbmRpc3BsYXlGaW5hbEJyYWNrZXQodGVzdFJlc3VsdCk7XHJcbm1haW4ocGFpckFycmF5KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9