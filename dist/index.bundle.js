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

/***/ "./src/testResult12.json":
/*!*******************************!*\
  !*** ./src/testResult12.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"winnerRound1":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"bye1","win":false}},{"entry1":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":true},"entry2":{"name":"bye2","win":false}},{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"bye3","win":false}},{"entry1":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":true},"entry2":{"name":"bye4","win":false}},{"entry1":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":true},"entry2":{"name":"Red Rabbit","description":"Alex Grecian","seed":12,"win":false}},{"entry1":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":true},"entry2":{"name":"Annie Bot","description":"Sierra Greer","seed":11,"win":false}},{"entry1":{"name":"Stoner","description":"John Williams","seed":7,"win":true},"entry2":{"name":"Frankenstein ","description":"Mary Shelley","seed":10,"win":false}},{"entry1":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":true},"entry2":{"name":"The Devils","description":"Joe Abercrombie","seed":9,"win":false}}],"winnerRound2":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":false}},{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":false}},{"entry1":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":true},"entry2":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":false}},{"entry1":{"name":"Stoner","description":"John Williams","seed":7,"win":true},"entry2":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":false}}],"winnerRound3":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":false}},{"entry1":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":true},"entry2":{"name":"Stoner","description":"John Williams","seed":7,"win":false}}],"winnerRound4":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":false}}],"loserRound1":[{"entry1":{"name":"bye1","win":true},"entry2":{"name":"The Devils","description":"Joe Abercrombie","seed":9,"win":false}},{"entry1":{"name":"bye2","win":true},"entry2":{"name":"Frankenstein ","description":"Mary Shelley","seed":10,"win":false}},{"entry1":{"name":"bye3","win":true},"entry2":{"name":"Annie Bot","description":"Sierra Greer","seed":11,"win":false}},{"entry1":{"name":"bye4","win":true},"entry2":{"name":"Red Rabbit","description":"Alex Grecian","seed":12,"win":false}}],"loserRound2":[{"entry1":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":true},"entry2":{"name":"bye1","win":false}},{"entry1":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":true},"entry2":{"name":"bye2","win":false}},{"entry1":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":true},"entry2":{"name":"bye3","win":false}},{"entry1":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":true},"entry2":{"name":"bye4","win":false}}],"loserRound3":[{"entry1":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":true},"entry2":{"name":"Old Man\'s War","description":"John Scalzi","seed":8,"win":false}},{"entry1":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":true},"entry2":{"name":"Steve Jobs","description":"Walter Isaacson","seed":6,"win":false}}],"loserRound4":[{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"The Will of the Many","description":"James Islington","seed":2,"win":false}},{"entry1":{"name":"Stoner","description":"John Williams","seed":7,"win":true},"entry2":{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4,"win":false}}],"loserRound5":[{"entry1":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":true},"entry2":{"name":"Stoner","description":"John Williams","seed":7,"win":false}}],"loserRound6":[{"entry1":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":true},"entry2":{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3,"win":false}}],"loserRound7":[{"entry1":{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1,"win":true},"entry2":{"name":"Furies of Calderon","description":"Jim Butcher","seed":5,"win":false}}]}');

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
/* harmony import */ var _testResult12_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testResult12.json */ "./src/testResult12.json");





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

function getFinalMatches(resultsObj, entrantCount) {
  const matches = [];

  let winnerMatchCount = 1;
  let loserMatchCount = 1;
  let intraRoundMatchCounter = 1;
  let priorOddLoserSpacing = {};
  // pad winner block with 2 spacer rows above losers
  const losersRowsOffset = nextPowerOfTwo(entrantCount) / 2 + 2;

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
          const oddLoserRoundCounter = (currentRound - 3) / 2;
          rowCalc =
            Math.pow(2, currentRound - 3 - oddLoserRoundCounter) +
            0.5 +
            Math.pow(2, currentRound - 2 - oddLoserRoundCounter) *
              (intraRoundMatchCounter - 1);
          priorOddLoserSpacing[currentRound].push(rowCalc);
        }

        if (currentRound === getLoserRoundCount(entrantCount)) {
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
  const entrants = resultsObj.winnerRound1.length * 2;
  const matches = getFinalMatches(resultsObj, entrants);

  const nodePositions = {};
  const halfEntrantCount = entrants / 2;
  const quarterEntrantCount = halfEntrantCount / 2;
  const maxWinnerRounds = getWinnerRoundCount(entrants);
  const maxLoserRounds = getLoserRoundCount(entrants);
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
displayFinalBracket(_testResult12_json__WEBPACK_IMPORTED_MODULE_3__);
main(pairArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTLEVBQUU7QUFDakIsTUFBTTtBQUNOLE1BQU07QUFDTixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQyx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDLHNCQUFzQixVQUFVO0FBQ2hDLHdCQUF3QiwyQkFBMkI7QUFDbkQseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQThEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0NBQXNDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBd0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0NBQWM7QUFDaEIsZUFBZSx3Q0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFVO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvaW1nfHN5bmN8bm9ucmVjdXJzaXZlfEM6Ly4ocG5nJTdDanBlIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFxyXG5QcmltYXJ5IEJhY2tncm91bmQgIzBEMEQwRCBcclxuU3VyZmFjZSAvIFBhbmVsIEJhY2tncm91bmQgIzE2MTYxNlxyXG5BY2NlbnQgR29sZCAoUHJpbWFyeSkgI0M4QTk1MVxyXG5BY2NlbnQgR29sZCAoQnJpZ2h0IC8gSG92ZXIpICNFNUM3NkJcclxuVGV4dCAoUHJpbWFyeSkgI0YwRjBGMFxyXG5UZXh0IChNdXRlZCkgIzlDOUM5Q1xyXG5Cb3JkZXJzIC8gTGluZXMgIzI0MjQyNFxyXG5TdWNjZXNzIC8gSGlnaGxpZ2h0IChzYWdlIGdyZWVuKSAjOEVDMDdDXHJcbkVycm9yIChzb2Z0IGNyaW1zb24pICNEMTY5NjlcclxuKi9cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XHJcbiAgY29sb3I6ICNmMGYwZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jcm91bmREaXNwbGF5LFxyXG4jbWF0Y2hEaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jc2VsZWN0aW9uRGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmVudHJ5IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3Rpb25EaXNwbGF5IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAzMHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDYwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnJvdW5kV2lubmVyIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbiNuZXh0Um91bmQge1xyXG4gIG1hcmdpbjogNXZoIDM1dncgMCAzNXZ3O1xyXG59XHJcblxyXG4vKiBicmFja2V0IGRpc3BsYXkgKi9cclxuXHJcbiNicmFja2V0Q29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNicmFja2V0TGluZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1hdGNoTm9kZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7O0NBVUM7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCOztFQUVsQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxyXFxuUHJpbWFyeSBCYWNrZ3JvdW5kICMwRDBEMEQgXFxyXFxuU3VyZmFjZSAvIFBhbmVsIEJhY2tncm91bmQgIzE2MTYxNlxcclxcbkFjY2VudCBHb2xkIChQcmltYXJ5KSAjQzhBOTUxXFxyXFxuQWNjZW50IEdvbGQgKEJyaWdodCAvIEhvdmVyKSAjRTVDNzZCXFxyXFxuVGV4dCAoUHJpbWFyeSkgI0YwRjBGMFxcclxcblRleHQgKE11dGVkKSAjOUM5QzlDXFxyXFxuQm9yZGVycyAvIExpbmVzICMyNDI0MjRcXHJcXG5TdWNjZXNzIC8gSGlnaGxpZ2h0IChzYWdlIGdyZWVuKSAjOEVDMDdDXFxyXFxuRXJyb3IgKHNvZnQgY3JpbXNvbikgI0QxNjk2OVxcclxcbiovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdW5kRGlzcGxheSxcXHJcXG4jbWF0Y2hEaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbkRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uRGlzcGxheSBpbWcge1xcclxcbiAgbWF4LXdpZHRoOiAzMHZ3O1xcclxcbiAgbWF4LWhlaWdodDogNjB2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5yb3VuZFdpbm5lciB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV4dFJvdW5kIHtcXHJcXG4gIG1hcmdpbjogNXZoIDM1dncgMCAzNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBicmFja2V0IGRpc3BsYXkgKi9cXHJcXG5cXHJcXG4jYnJhY2tldENvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBwaW5rO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNicmFja2V0TGluZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGNoTm9kZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwbGUuanBnXCI6IFwiLi9zcmMvaW1nL2FwcGxlLmpwZ1wiLFxuXHRcIi4vYmFuYW5hLmpwZ1wiOiBcIi4vc3JjL2ltZy9iYW5hbmEuanBnXCIsXG5cdFwiLi9ieWUuanBnXCI6IFwiLi9zcmMvaW1nL2J5ZS5qcGdcIixcblx0XCIuL21hbmdvLmpwZ1wiOiBcIi4vc3JjL2ltZy9tYW5nby5qcGdcIixcblx0XCIuL3BlYXIuanBnXCI6IFwiLi9zcmMvaW1nL3BlYXIuanBnXCIsXG5cdFwiLi9waW5lYXBwbGUuanBnXCI6IFwiLi9zcmMvaW1nL3BpbmVhcHBsZS5qcGdcIixcblx0XCIuL3NhdXNhZ2UuanBnXCI6IFwiLi9zcmMvaW1nL3NhdXNhZ2UuanBnXCIsXG5cdFwiLi9zdHJhd2JlcnJ5LmpwZ1wiOiBcIi4vc3JjL2ltZy9zdHJhd2JlcnJ5LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkaVwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJjb25zdCBpbWFnZUNvbnRleHQgPSBpbXBvcnQubWV0YS53ZWJwYWNrQ29udGV4dChcIi4vaW1nXCIsIHtcclxuICByZWN1cnNpdmU6IGZhbHNlLFxyXG4gIHJlZ0V4cDogL1xcLihwbmd8anBlP2d8c3ZnKSQvaSxcclxufSk7XHJcblxyXG5jb25zdCBpdGVtSW1hZ2VzID0ge307XHJcbmltYWdlQ29udGV4dC5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgLy8gcmVtb3ZlIHByZWZpeCBhbmQgZXh0ZW5zaW9uIGZyb20gaW1hZ2UgZmlsZSBuYW1lc1xyXG4gIGNvbnN0IGZpbGVOYW1lID0ga2V5LnJlcGxhY2UoXCIuL1wiLCBcIlwiKS5yZXBsYWNlKC9cXC5bXi8uXSskLywgXCJcIik7XHJcbiAgaXRlbUltYWdlc1tmaWxlTmFtZV0gPSBpbWFnZUNvbnRleHQoa2V5KTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBpdGVtSW1hZ2VzIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGJyYWNrZXRFbnRyaWVzIGZyb20gXCIuL2l0ZW1zLmpzb25cIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuaW1wb3J0IHRlc3RSZXN1bHQgZnJvbSBcIi4vdGVzdFJlc3VsdDEyLmpzb25cIjtcclxuXHJcbi8vIGNvbnN0IGR5bmFtaWNJbWFnZSA9IHJlcXVpcmUoYC4vaW1nLyR7aW1hZ2VOYW1lfS5qcGdgKTtcclxuXHJcbi8vIGNoZWNrIGxvc2VyIGJyYWNrZXQgbGVuZ3RoXHJcbi8vIFRPRE8gY2xpY2sgdG8gc2VsZWN0IGVudHJ5LCB0aGVuIGEgY29uZmlybSBidXR0b24gb24gdGhlIGJvdHRvbVxyXG5cclxuY29uc3Qgc2VsZWN0aW9uRGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0aW9uRGlzcGxheVwiKTtcclxuY29uc3QgbWF0Y2hEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRjaERpc3BsYXlcIik7XHJcbmNvbnN0IHJvdW5kRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91bmREaXNwbGF5XCIpO1xyXG5jb25zdCBuZXh0Um91bmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRSb3VuZFwiKTtcclxuXHJcbmNvbnN0IGJyYWNrZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyYWNrZXRDb250YWluZXJcIik7XHJcbmNvbnN0IG1hdGNoZXNMYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF0Y2hlc0xheWVyXCIpO1xyXG5jb25zdCBicmFja2V0TGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyYWNrZXRMaW5lc1wiKTtcclxuXHJcbmNvbnN0IHJlc3VsdHMgPSB7fTtcclxubGV0IHdpbm5lclJvdW5kQ291bnQgPSAxO1xyXG5sZXQgd2lubmVyUm91bmRDb3VudDIgPSAxO1xyXG5sZXQgbG9zZXJSb3VuZENvdW50ID0gMDtcclxubGV0IHBhaXJBcnJheSA9IFtdO1xyXG5sZXQgd2lubmVyQnJhY2tldFdpbm5lcnMgPSBbXTtcclxubGV0IHdpbm5lckJyYWNrZXRMb3NlcnMgPSBbXTtcclxubGV0IGxvc2VyQnJhY2tldFdpbm5lcnMgPSBbXTtcclxubGV0IGN1cnJlbnRSb3VuZCA9IFwid2lubmVyXCI7XHJcbmxldCBuZXh0Um91bmQgPSBcImxvc2VyXCI7XHJcbmxldCBicmFja2V0Q29tcGxldGUgPSBmYWxzZTtcclxuXHJcbmNvbnN0IEJSQUNLRVRfQ09ORklHID0ge1xyXG4gIE1BVENIX1dJRFRIOiAxNTAsXHJcbiAgTUFUQ0hfSEVJR0hUOiA2MCxcclxuICBYX0dBUDogNTAsXHJcbiAgWV9HQVA6IDMwLFxyXG4gIC8vIHggaG9yaXpvbnRhbCBnYXAsIHkgdmVydGljYWxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkanVzdE1hdGNoTm9kZUhlaWdodCgpIHtcclxuICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZHVtbXkuY2xhc3NOYW1lID0gXCJtYXRjaE5vZGVcIjtcclxuICBkdW1teS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBkdW1teS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICBkdW1teS5zdHlsZS53aWR0aCA9IGAke0JSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIfXB4YDtcclxuICBkdW1teS5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3JtYWxcIjtcclxuICBtYXRjaGVzTGF5ZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG5cclxuICBicmFja2V0RW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgZHVtbXkuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDFcIj4ke2VudHJ5Lm5hbWV9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMlwiPiR7ZW50cnkubmFtZX08L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBkdW1teS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAoaGVpZ2h0ICsgMTAgPiBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQpIHtcclxuICAgICAgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUID0gaGVpZ2h0ICsgNDA7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbWF0Y2hlc0xheWVyLnJlbW92ZUNoaWxkKGR1bW15KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WChyb3VuZEluZGV4KSB7XHJcbiAgLy8gemVyby1pbmRleGVkIHJvdW5kIG51bWJlciwgKzIwIGJ1aWx0LWluIHBhZGRpbmdcclxuICByZXR1cm4gcm91bmRJbmRleCAqIChCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSCArIEJSQUNLRVRfQ09ORklHLlhfR0FQKSArIDIwO1xyXG59XHJcbmZ1bmN0aW9uIGdldFkobWF0Y2hJbmRleCkge1xyXG4gIC8vIHplcm8taW5kZXhlZCwgdmVydGljYWwgc2xvdCBmb3IgbWF0Y2hlc1xyXG4gIHJldHVybiBtYXRjaEluZGV4ICogKEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCArIEJSQUNLRVRfQ09ORklHLllfR0FQKSArIDIwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0UG93ZXJPZlR3byhudW1iZXIpIHtcclxuICBpZiAobnVtYmVyIDw9IDAgfHwgbnVtYmVyID4gNTIgfHwgdHlwZW9mIG51bWJlciAhPT0gXCJudW1iZXJcIilcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgY29uc3QgbmV4dFBvd2VyID0gMiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cyKG51bWJlcikpO1xyXG5cclxuICByZXR1cm4gbmV4dFBvd2VyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5uZXJSb3VuZENvdW50KG51bWJlck9mRW50cmFudHMpIHtcclxuICBjb25zdCB0b3RhbENvdW50ID0gbmV4dFBvd2VyT2ZUd28obnVtYmVyT2ZFbnRyYW50cyk7XHJcbiAgY29uc3Qgcm91bmRzID0gTWF0aC5sb2cyKHRvdGFsQ291bnQpO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvc2VyUm91bmRDb3VudChudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgdG90YWxDb3VudCA9IG5leHRQb3dlck9mVHdvKG51bWJlck9mRW50cmFudHMpO1xyXG4gIGNvbnN0IHJvdW5kcyA9IE1hdGgubG9nMih0b3RhbENvdW50KSAqIDIgLSAxO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnllcyhudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgYnllQ291bnQgPSBuZXh0UG93ZXJPZlR3byhudW1iZXJPZkVudHJhbnRzKSAtIG51bWJlck9mRW50cmFudHM7XHJcbiAgY29uc3QgYnllT2JqcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnllQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgYnllT2Jqc1tpXSA9IGBieWUke2kgKyAxfWA7XHJcbiAgfVxyXG4gIHJldHVybiBieWVPYmpzO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gIGJyYWNrZXRFbnRyaWVzLFxyXG4gIGJ5ZUVudHJpZXMsXHJcbiAgb3RoZXJFbnRyaWVzLFxyXG4gIGZpcnN0Um91bmRCb29sLFxyXG4pIHtcclxuICBjb25zdCBwYWlyaW5ncyA9IFtdO1xyXG5cclxuICAvLyBvcHRpb25hbCBoYW5kbGluZyBvZiBibGVuZGluZyB3aW5uZXIgYnJhY2tldCBsb3NlcnMgd2l0aCBsb3NlciBicmFja2V0IHdpbm5lcnNcclxuICBpZiAob3RoZXJFbnRyaWVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBvdGhlckVudHJpZXNbaV0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG4gIC8vIGhhbmRsZSBmaXJzdCByb3VuZCBzY2VuYXJpb3Mgd2l0aCBieWVzIHByZXNlbnRcclxuICBpZiAoYnllRW50cmllcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieWVFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiB7IG5hbWU6IGJ5ZUVudHJpZXNbaV0gfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gYnllRW50cmllcy5sZW5ndGgsIGogPSAtMTtcclxuICAgICAgaSA8IG5leHRQb3dlck9mVHdvKGJyYWNrZXRFbnRyaWVzLmxlbmd0aCkgLyAyO1xyXG4gICAgICBpICs9IDEsIGogLT0gMVxyXG4gICAgKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBicmFja2V0RW50cmllcy5hdChqKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWlyaW5ncztcclxuICB9XHJcblxyXG4gIC8vIGZpcnN0IHJvdW5kLCBidXQgbm8gYnllcyBuZWVkZWRcclxuICBpZiAoIWJ5ZUVudHJpZXMgJiYgZmlyc3RSb3VuZEJvb2wpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBqID0gLTE7IGkgPCBicmFja2V0RW50cmllcy5sZW5ndGggLyAyOyBpICs9IDEsIGogLT0gMSkge1xyXG4gICAgICBwYWlyaW5nc1tpXSA9IHtcclxuICAgICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICAgIGVudHJ5MjogYnJhY2tldEVudHJpZXMuYXQoaiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG5cclxuICAvLyBjYXRjaCBzaW5nbGUtc291cmNlIGJyYWNrZXQgZ2VuZXJhdGlvblxyXG4gIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAyLCBqICs9IDEpIHtcclxuICAgIHBhaXJpbmdzW2pdID0ge1xyXG4gICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICBlbnRyeTI6IGJyYWNrZXRFbnRyaWVzW2kgKyAxXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBwYWlyaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gZW50cnlEaXYoZW50cnlPYmopIHtcclxuICBjb25zdCBlbnRyeVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBlbnRyeVdyYXAuY2xhc3NMaXN0LmFkZChcImVudHJ5XCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gZW50cnlPYmoubmFtZTtcclxuICBwLnRleHRDb250ZW50ID0gZW50cnlPYmouZGVzY3JpcHRpb247XHJcblxyXG4gIGlmICh1dGlscy5pdGVtSW1hZ2VzW2VudHJ5T2JqLm5hbWVdKSB7XHJcbiAgICBpbWcuc3JjID0gdXRpbHMuaXRlbUltYWdlc1tlbnRyeU9iai5uYW1lXTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmlsbCBzdG9jayBpbWFnZSBpZiBubyBwaWN0dXJlIHByb3ZpZGVkICh1c3VhbGx5IGEgZ2VuZXJhdGVkIGJ5ZSlcclxuICAgIGltZy5zcmMgPSB1dGlscy5pdGVtSW1hZ2VzW1wiYnllXCJdO1xyXG4gIH1cclxuXHJcbiAgZW50cnlXcmFwLmFwcGVuZChoMiwgcCwgaW1nKTtcclxuXHJcbiAgcmV0dXJuIGVudHJ5V3JhcDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdEZvclNlbGVjdGlvbihlbnRyeTFEaXYsIGVudHJ5MU9iaiwgZW50cnkyRGl2LCBlbnRyeTJPYmopIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGxldCBjdXJyZW50O1xyXG4gICAgY29uc3QgY29uZmlybVNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgZW50cnkxRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkVudHJ5MSk7XHJcbiAgICAgIGVudHJ5MkRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25FbnRyeTIpO1xyXG4gICAgICBuZXh0Um91bmRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1TZWxlY3Rpb24pO1xyXG4gICAgICByZXNvbHZlKGN1cnJlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkVudHJ5MSA9ICgpID0+IHtcclxuICAgICAgLy8gbG9hZCBzZWxlY3Rpb24gZGF0YSB0byBiZSBwYXNzZWQgdGhyb3VnaFxyXG4gICAgICBjdXJyZW50ID0geyBlbnRyeTFPYmosIGVudHJ5Mk9iaiB9O1xyXG4gICAgICAvLyBzZXQgd2luL2xvc3Mgc3RhdHVzXHJcbiAgICAgIGVudHJ5MU9iai53aW4gPSB0cnVlO1xyXG4gICAgICBlbnRyeTJPYmoud2luID0gZmFsc2U7XHJcbiAgICAgIC8vIGNzcyB0byBoaWdobGlnaHQgc2VsZWN0ZWQgZW50cmFudFxyXG4gICAgICBlbnRyeTJEaXYuY2xhc3NMaXN0LnJlbW92ZShcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBlbnRyeTFEaXYuY2xhc3NMaXN0LmFkZChcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRW50cnkyID0gKCkgPT4ge1xyXG4gICAgICBjdXJyZW50ID0geyBlbnRyeTJPYmosIGVudHJ5MU9iaiB9O1xyXG4gICAgICBlbnRyeTJPYmoud2luID0gdHJ1ZTtcclxuICAgICAgZW50cnkxT2JqLndpbiA9IGZhbHNlO1xyXG4gICAgICBlbnRyeTFEaXYuY2xhc3NMaXN0LnJlbW92ZShcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBlbnRyeTJEaXYuY2xhc3NMaXN0LmFkZChcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbnRyeTFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRW50cnkxKTtcclxuICAgIGVudHJ5MkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25FbnRyeTIpO1xyXG4gICAgbmV4dFJvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtU2VsZWN0aW9uKTtcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUJyYWNrZXRQYWlyaW5ncyhwYWlyaW5ncykge1xyXG4gIGNvbnN0IHBhaXJpbmdzQ29weSA9IHN0cnVjdHVyZWRDbG9uZShwYWlyaW5ncyk7XHJcbiAgbGV0IG1hdGNoTnVtYmVyID0gMTtcclxuICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcmluZ3NDb3B5KSB7XHJcbiAgICBjb25zdCBlbnRyeTEgPSBlbnRyeURpdihwYWlyLmVudHJ5MSk7XHJcbiAgICBjb25zdCBlbnRyeTIgPSBlbnRyeURpdihwYWlyLmVudHJ5Mik7XHJcbiAgICBlbnRyeTEuaWQgPSBcImVudHJ5MVwiO1xyXG4gICAgZW50cnkyLmlkID0gXCJlbnRyeTJcIjtcclxuXHJcbiAgICAvLyByb3VuZCBhbmQgbWF0Y2ggZGlzcGxheSBpbmZvXHJcbiAgICByb3VuZERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChjdXJyZW50Um91bmQgPT09IFwid2lubmVyXCIpIHtcclxuICAgICAgcm91bmREaXNwbGF5LnRleHRDb250ZW50ID0gYFJvdW5kIG9mICR7cGFpcmluZ3MubGVuZ3RoICogMn1gO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJsb3NlclwiKSB7XHJcbiAgICAgIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IGBMb3NlciBSb3VuZCAke2xvc2VyUm91bmRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWF0Y2hEaXNwbGF5LnRleHRDb250ZW50ID0gYE1hdGNoICR7bWF0Y2hOdW1iZXJ9YDtcclxuICAgIG1hdGNoTnVtYmVyICs9IDE7XHJcblxyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5hcHBlbmQoZW50cnkxLCBlbnRyeTIpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhaXRGb3JTZWxlY3Rpb24oXHJcbiAgICAgIGVudHJ5MSxcclxuICAgICAgcGFpci5lbnRyeTEsXHJcbiAgICAgIGVudHJ5MixcclxuICAgICAgcGFpci5lbnRyeTIsXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBzZWxlY3Rpb25EaXNwbGF5RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGJyYWNrZXRDb21wbGV0ZSkge1xyXG4gICAgICAvLyAudmFsdWVzIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHBhaXIgb2JqZWN0cyAoZmluYWwgdHdvIGVudHJpZXMgaGVyZSlcclxuICAgICAgLy8gdGhlbiBmaW5kIHdoaWNoIGVudHJ5IGhhZCB3aW4gc2V0IHRvIHRydWVcclxuICAgICAgY29uc3QgZmluYWxXaW5uZXIgPSBPYmplY3QudmFsdWVzKHJlc3VsdCkuZmluZCgob2JqKSA9PiBvYmoud2luKTtcclxuICAgICAgZGlzcGxheVdpbm5lcihmaW5hbFdpbm5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudFJvdW5kID09PSBcIndpbm5lclwiKSB7XHJcbiAgICByZXN1bHRzW2B3aW5uZXJSb3VuZCR7d2lubmVyUm91bmRDb3VudH1gXSA9IHBhaXJpbmdzQ29weTtcclxuICB9XHJcbiAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJsb3NlclwiKSB7XHJcbiAgICByZXN1bHRzW2Bsb3NlclJvdW5kJHtsb3NlclJvdW5kQ291bnR9YF0gPSBwYWlyaW5nc0NvcHk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcInJlc3VsdHNcIiwgcmVzdWx0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIod2lubmVyT2JqKSB7XHJcbiAgcm91bmREaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbWF0Y2hEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCB3aW5uZXIgPSBlbnRyeURpdih3aW5uZXJPYmopO1xyXG4gIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IFwiV0lOTkVSXCI7XHJcbiAgc2VsZWN0aW9uRGlzcGxheURpdi5hcHBlbmQod2lubmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzdWx0QXJyYXkocm91bmRUeXBlLCByb3VuZENvdW50LCB3aW5TdGF0dXMpIHtcclxuICAvLyByb3VuZFR5cGUgPSAnd2lubmVyJyBvciAnbG9zZXInXHJcbiAgLy8gcm91bmRDb3VudCA9IGludGVnZXJcclxuICAvLyB3aW5TdGF0dXMgPSB0cnVlIG9yIGZhbHNlXHJcbiAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgZm9yIChjb25zdCBtYXRjaCBvZiByZXN1bHRzW2Ake3JvdW5kVHlwZX1Sb3VuZCR7cm91bmRDb3VudH1gXSkge1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBPYmplY3Qua2V5cyhtYXRjaCkpIHtcclxuICAgICAgLy8gY2FwdHVyZSB3aW5zXHJcbiAgICAgIGlmICh3aW5TdGF0dXMpIHtcclxuICAgICAgICBpZiAobWF0Y2hbZW50cnldLndpbikgcmVzdWx0LnB1c2gobWF0Y2hbZW50cnldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY2FwdHVyZSBsb3NzZXNcclxuICAgICAgaWYgKCF3aW5TdGF0dXMpIHtcclxuICAgICAgICBpZiAoIW1hdGNoW2VudHJ5XS53aW4pIHJlc3VsdC5wdXNoKG1hdGNoW2VudHJ5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWFpbihwYWlyaW5ncykge1xyXG4gIGNvbnN0IG1heFdpbm5lclJvdW5kcyA9IGdldFdpbm5lclJvdW5kQ291bnQoYnJhY2tldEVudHJpZXMubGVuZ3RoKTtcclxuICBjb25zdCBtYXhMb3NlclJvdW5kcyA9IGdldExvc2VyUm91bmRDb3VudChicmFja2V0RW50cmllcy5sZW5ndGgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFxyXG4gIC8vICAgXCJ3cmMsIHdyYzIsIGxyY1wiLFxyXG4gIC8vICAgd2lubmVyUm91bmRDb3VudCxcclxuICAvLyAgIHdpbm5lclJvdW5kQ291bnQyLFxyXG4gIC8vICAgbG9zZXJSb3VuZENvdW50LFxyXG4gIC8vICk7XHJcbiAgYXdhaXQgZGlzcGxheUJyYWNrZXRQYWlyaW5ncyhwYWlyaW5ncyk7XHJcblxyXG4gIGlmIChicmFja2V0Q29tcGxldGUpIHtcclxuICAgIC8vIGZpbmFsLCBjb21wbGV0ZSBicmFjayBnZW5lcmF0aW9uXHJcbiAgICBkaXNwbGF5RmluYWxCcmFja2V0KHJlc3VsdHMpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAod2lubmVyUm91bmRDb3VudCA8IG1heFdpbm5lclJvdW5kcykge1xyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldFdpbm5lcnMgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgd2lubmVyUm91bmRDb3VudCxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5uZXJCcmFja2V0V2lubmVycyk7XHJcbiAgICB3aW5uZXJSb3VuZENvdW50ICs9IDE7XHJcblxyXG4gICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldFdpbm5lcnMpO1xyXG4gICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgd2lubmVyUm91bmRDb3VudCA9PT0gbWF4V2lubmVyUm91bmRzICYmXHJcbiAgICBsb3NlclJvdW5kQ291bnQgPCBtYXhMb3NlclJvdW5kc1xyXG4gICkge1xyXG4gICAgY3VycmVudFJvdW5kID0gXCJsb3NlclwiO1xyXG4gICAgaWYgKGxvc2VyUm91bmRDb3VudCA9PT0gMCkge1xyXG4gICAgICAvLyBoYW5kbGUgZmlyc3QgbG9zZXIgcm91bmQgZ2VuZXJhdGVkIG9ubHkgZnJvbSB3aW5uZXIgYnJhY2tldFxyXG4gICAgICBjb25zdCB3aW5uZXJCcmFja2V0TG9zZXJzID0gZ2V0UmVzdWx0QXJyYXkoXHJcbiAgICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgKTtcclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldExvc2VycywgW10pO1xyXG5cclxuICAgICAgd2lubmVyUm91bmRDb3VudDIgKz0gMTtcclxuICAgICAgbG9zZXJSb3VuZENvdW50ICs9IDE7XHJcbiAgICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb3NlclJvdW5kQ291bnQgPT09IG1heExvc2VyUm91bmRzIC0gMSkge1xyXG4gICAgICAvLyBGaW5hbCByb3VuZC4gTG9zZXIgcm91bmRzIGFyZSAwIGluZGV4ZWQgdG8gYmV0dGVyIHN5bmMgd2l0aCByb3VuZCBkaXNwbGF5XHJcbiAgICAgIGNvbnN0IHdpbm5lckJyYWNrZXRXaW5uZXIgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgICBcIndpbm5lclwiLFxyXG4gICAgICAgIHdpbm5lclJvdW5kQ291bnQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVyID0gZ2V0UmVzdWx0QXJyYXkoXCJsb3NlclwiLCBsb3NlclJvdW5kQ291bnQsIHRydWUpO1xyXG5cclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgICAgICAgd2lubmVyQnJhY2tldFdpbm5lcixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBsb3NlckJyYWNrZXRXaW5uZXIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBicmFja2V0Q29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldExvc2VycyA9IGdldFJlc3VsdEFycmF5KFxyXG4gICAgICBcIndpbm5lclwiLFxyXG4gICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVycyA9IGdldFJlc3VsdEFycmF5KFwibG9zZXJcIiwgbG9zZXJSb3VuZENvdW50LCB0cnVlKTtcclxuXHJcbiAgICBpZiAobG9zZXJCcmFja2V0V2lubmVycy5sZW5ndGggPiB3aW5uZXJCcmFja2V0TG9zZXJzLmxlbmd0aCkge1xyXG4gICAgICAvLyBoYW5kbGUgb2Zmc2V0IHJvdW5kcyB3aGVyZSBsb3NlciBicmFja2V0IG5lZWRzIHRvIGNhdGNoIHVwXHJcbiAgICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKGxvc2VyQnJhY2tldFdpbm5lcnMsIFtdKTtcclxuXHJcbiAgICAgIGxvc2VyUm91bmRDb3VudCArPSAxO1xyXG4gICAgICBhd2FpdCBtYWluKHBhaXJBcnJheSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gICAgICB3aW5uZXJCcmFja2V0TG9zZXJzLFxyXG4gICAgICBbXSxcclxuICAgICAgbG9zZXJCcmFja2V0V2lubmVycyxcclxuICAgICk7XHJcblxyXG4gICAgLy8gbm9ybWFsIG9wZXJhdGlvbiBlbmRzIGhlcmVcclxuICAgIHdpbm5lclJvdW5kQ291bnQyICs9IDE7XHJcbiAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbmFsTWF0Y2hlcyhyZXN1bHRzT2JqLCBlbnRyYW50Q291bnQpIHtcclxuICBjb25zdCBtYXRjaGVzID0gW107XHJcblxyXG4gIGxldCB3aW5uZXJNYXRjaENvdW50ID0gMTtcclxuICBsZXQgbG9zZXJNYXRjaENvdW50ID0gMTtcclxuICBsZXQgaW50cmFSb3VuZE1hdGNoQ291bnRlciA9IDE7XHJcbiAgbGV0IHByaW9yT2RkTG9zZXJTcGFjaW5nID0ge307XHJcbiAgLy8gcGFkIHdpbm5lciBibG9jayB3aXRoIDIgc3BhY2VyIHJvd3MgYWJvdmUgbG9zZXJzXHJcbiAgY29uc3QgbG9zZXJzUm93c09mZnNldCA9IG5leHRQb3dlck9mVHdvKGVudHJhbnRDb3VudCkgLyAyICsgMjtcclxuXHJcbiAgZm9yIChjb25zdCByb3VuZCBpbiByZXN1bHRzT2JqKSB7XHJcbiAgICAvLyByZXNldCBjb3VudGVyIG9uIGVhY2ggZnJlc2ggcm91bmRcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZCA9IE51bWJlcihyb3VuZC5tYXRjaCgvXFxkKy8pWzBdKTtcclxuICAgIHByaW9yT2RkTG9zZXJTcGFjaW5nW2N1cnJlbnRSb3VuZF0gPSBbXTtcclxuICAgIGludHJhUm91bmRNYXRjaENvdW50ZXIgPSAxO1xyXG5cclxuICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgcmVzdWx0c09ialtyb3VuZF0pIHtcclxuICAgICAgbGV0IG9iajtcclxuICAgICAgbGV0IHJvd0NhbGM7XHJcblxyXG4gICAgICBpZiAocm91bmQuaW5jbHVkZXMoXCJ3aW5uZXJcIikpIHtcclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSAxKSByb3dDYWxjID0gaW50cmFSb3VuZE1hdGNoQ291bnRlcjtcclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID4gMSkge1xyXG4gICAgICAgICAgcm93Q2FsYyA9XHJcbiAgICAgICAgICAgIE1hdGgucG93KDIsIGN1cnJlbnRSb3VuZCAtIDIpICtcclxuICAgICAgICAgICAgMC41ICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMSkgKiAoaW50cmFSb3VuZE1hdGNoQ291bnRlciAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgaWQ6IGB3JHt3aW5uZXJNYXRjaENvdW50fWAsXHJcbiAgICAgICAgICByb3VuZDogTnVtYmVyKHJvdW5kLm1hdGNoKC9cXGQrLylbMF0pLFxyXG4gICAgICAgICAgcm93OiByb3dDYWxjLFxyXG4gICAgICAgICAgcDE6IG1hdGNoLmVudHJ5MS5uYW1lLFxyXG4gICAgICAgICAgcDI6IG1hdGNoLmVudHJ5Mi5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2lubmVyTWF0Y2hDb3VudCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGxvc2VyIHJvdW5kc1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPT09IDEpIHtcclxuICAgICAgICAgIHJvd0NhbGMgPSBpbnRyYVJvdW5kTWF0Y2hDb3VudGVyO1xyXG4gICAgICAgICAgcHJpb3JPZGRMb3NlclNwYWNpbmdbY3VycmVudFJvdW5kXS5wdXNoKHJvd0NhbGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID4gMSAmJiBjdXJyZW50Um91bmQgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBldmVuIHJvdW5kc1xyXG5cclxuICAgICAgICAgIC8vIGdldCBwcmlvciByb3VuZCBzcGFjaW5nIChjdXJyZW50IC0gMSksIHRoZW4gYWNjb3VudCBmb3IgbWF0Y2hlcyBpbmRleGluZyBhdCAxLCBhcnJheSBhdCAwXHJcbiAgICAgICAgICByb3dDYWxjID1cclxuICAgICAgICAgICAgcHJpb3JPZGRMb3NlclNwYWNpbmdbY3VycmVudFJvdW5kIC0gMV1baW50cmFSb3VuZE1hdGNoQ291bnRlciAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID4gMSAmJiBjdXJyZW50Um91bmQgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAvLyBvZGQgcm91bmRzXHJcbiAgICAgICAgICBjb25zdCBvZGRMb3NlclJvdW5kQ291bnRlciA9IChjdXJyZW50Um91bmQgLSAzKSAvIDI7XHJcbiAgICAgICAgICByb3dDYWxjID1cclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMyAtIG9kZExvc2VyUm91bmRDb3VudGVyKSArXHJcbiAgICAgICAgICAgIDAuNSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KDIsIGN1cnJlbnRSb3VuZCAtIDIgLSBvZGRMb3NlclJvdW5kQ291bnRlcikgKlxyXG4gICAgICAgICAgICAgIChpbnRyYVJvdW5kTWF0Y2hDb3VudGVyIC0gMSk7XHJcbiAgICAgICAgICBwcmlvck9kZExvc2VyU3BhY2luZ1tjdXJyZW50Um91bmRdLnB1c2gocm93Q2FsYyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSBnZXRMb3NlclJvdW5kQ291bnQoZW50cmFudENvdW50KSkge1xyXG4gICAgICAgICAgLy8gd2FudCAwLjUgcGFzdCB3aW5uZXIgYnJhY2tldCwgYnV0IHN1YnRyYWN0IDIgZnJvbSB0aGF0IHRvIGFjY291bnQgZm9yIHRoZVxyXG4gICAgICAgICAgLy8gYWxyZWFkeSBlc3RhYmxpc2hlZCBvZmZzZXQgYnVmZmVyXHJcbiAgICAgICAgICByb3dDYWxjID0gLTEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgaWQ6IGBsJHtsb3Nlck1hdGNoQ291bnR9YCxcclxuICAgICAgICAgIHJvdW5kOiBOdW1iZXIocm91bmQubWF0Y2goL1xcZCsvKVswXSksXHJcbiAgICAgICAgICByb3c6IHJvd0NhbGMgKyBsb3NlcnNSb3dzT2Zmc2V0LFxyXG4gICAgICAgICAgcDE6IG1hdGNoLmVudHJ5MS5uYW1lLFxyXG4gICAgICAgICAgcDI6IG1hdGNoLmVudHJ5Mi5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9zZXJNYXRjaENvdW50ICs9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGludHJhUm91bmRNYXRjaENvdW50ZXIgKz0gMTtcclxuICAgICAgbWF0Y2hlcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xyXG4gIHJldHVybiBtYXRjaGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3QnJhY2tldExpbmUoc3RhcnQsIGVuZCkge1xyXG4gIGNvbnN0IG1pZFggPSBzdGFydC54ICsgKGVuZC54IC0gc3RhcnQueCkgLyAyO1xyXG5cclxuICBjb25zdCBwYXRoRGF0YSA9IGBcclxuICBNICR7c3RhcnQueH0gJHtzdGFydC55fVxyXG4gIEggJHttaWRYfVxyXG4gIFYgJHtlbmQueX1cclxuICBIICR7ZW5kLnh9XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aERhdGEpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiI2ZmZmZmZmZmXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG5cclxuICBicmFja2V0TGluZXMuYXBwZW5kKHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RmluYWxCcmFja2V0KHJlc3VsdHNPYmopIHtcclxuICBjb25zdCBlbnRyYW50cyA9IHJlc3VsdHNPYmoud2lubmVyUm91bmQxLmxlbmd0aCAqIDI7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IGdldEZpbmFsTWF0Y2hlcyhyZXN1bHRzT2JqLCBlbnRyYW50cyk7XHJcblxyXG4gIGNvbnN0IG5vZGVQb3NpdGlvbnMgPSB7fTtcclxuICBjb25zdCBoYWxmRW50cmFudENvdW50ID0gZW50cmFudHMgLyAyO1xyXG4gIGNvbnN0IHF1YXJ0ZXJFbnRyYW50Q291bnQgPSBoYWxmRW50cmFudENvdW50IC8gMjtcclxuICBjb25zdCBtYXhXaW5uZXJSb3VuZHMgPSBnZXRXaW5uZXJSb3VuZENvdW50KGVudHJhbnRzKTtcclxuICBjb25zdCBtYXhMb3NlclJvdW5kcyA9IGdldExvc2VyUm91bmRDb3VudChlbnRyYW50cyk7XHJcbiAgbGV0IHdpbm5lcklucHV0Q291bnRlciA9IDE7XHJcbiAgbGV0IGxvc2VySW5wdXRDb3VudGVyID0gMTtcclxuXHJcbiAgbGV0IG1heFggPSAwO1xyXG4gIGxldCBtYXhZID0gMDtcclxuICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwibWF0Y2hOb2RlXCIpO1xyXG4gICAgZWwuaWQgPSBtYXRjaC5pZDtcclxuXHJcbiAgICBlbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMVwiPiR7bWF0Y2gucDF9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMlwiPiR7bWF0Y2gucDJ9PC9kaXY+XHJcbiAgICBgO1xyXG4gICAgLy8gZ2V0IGFuZCBzZXQgYWJzb2x1dGUgeCx5IHBvc2l0aW9uc1xyXG4gICAgY29uc3QgeFBvc2l0aW9uID0gZ2V0WChtYXRjaC5yb3VuZCk7XHJcbiAgICBjb25zdCB5UG9zaXRpb24gPSBnZXRZKG1hdGNoLnJvdyk7XHJcbiAgICBpZiAoeFBvc2l0aW9uID4gbWF4WCkgbWF4WCA9IHhQb3NpdGlvbjtcclxuICAgIGlmICh5UG9zaXRpb24gPiBtYXhZKSBtYXhZID0geVBvc2l0aW9uO1xyXG5cclxuICAgIGVsLnN0eWxlLmxlZnQgPSBgJHt4UG9zaXRpb259cHhgO1xyXG4gICAgZWwuc3R5bGUudG9wID0gYCR7eVBvc2l0aW9ufXB4YDtcclxuICAgIGVsLnN0eWxlLndpZHRoID0gYCR7QlJBQ0tFVF9DT05GSUcuTUFUQ0hfV0lEVEh9cHhgO1xyXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7QlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUfXB4YDtcclxuICAgIGVsLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vcm1hbFwiO1xyXG5cclxuICAgIC8vIHNhdmUgY29vcmRpbmF0ZXMgZm9yIGxpbmUgYXR0YWNobWVudHNcclxuICAgIG5vZGVQb3NpdGlvbnNbbWF0Y2guaWRdID0ge1xyXG4gICAgICBpbnB1dDogeyB4OiB4UG9zaXRpb24sIHk6IHlQb3NpdGlvbiArIEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCAvIDIgfSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgeDogeFBvc2l0aW9uICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfV0lEVEgsXHJcbiAgICAgICAgeTogeVBvc2l0aW9uICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUIC8gMixcclxuICAgICAgfSxcclxuICAgICAgcm91bmQ6IG1hdGNoLnJvdW5kLFxyXG4gICAgfTtcclxuICAgIG1hdGNoZXNMYXllci5hcHBlbmQoZWwpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBzZXQgYnJhY2tldCBjb250YWluZXIgZGl2IHRvIGZpdCB0aGUgbWF0Y2hlcyArIDUwIGV4dHJhIHBhZGRpbmdcclxuICBjb25zdCB0b3RhbEhlaWdodCA9IG1heFkgKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQgKyA1MDtcclxuICBjb25zdCB0b3RhbFdpZHRoID0gbWF4WCArIEJSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIICsgNTA7XHJcblxyXG4gIGJyYWNrZXRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7dG90YWxIZWlnaHR9cHhgO1xyXG4gIGJyYWNrZXRDb250YWluZXIuc3R5bGUud2lkdGggPSBgJHt0b3RhbFdpZHRofXB4YDtcclxuXHJcbiAgY29uc29sZS5sb2cobm9kZVBvc2l0aW9ucyk7XHJcbiAgT2JqZWN0LmtleXMobm9kZVBvc2l0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBzcGxpdCA9IGtleS5tYXRjaCgvKFt3bF0pKFxcZCspLyk7XHJcbiAgICBpZiAoc3BsaXRbMV0gPT09IFwid1wiKSB7XHJcbiAgICAgIGNvbnN0IG5leHRJbnB1dElkID0gYHcke3dpbm5lcklucHV0Q291bnRlciArIGhhbGZFbnRyYW50Q291bnR9YDtcclxuXHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgPT09IG1heFdpbm5lclJvdW5kcykge1xyXG4gICAgICAgIC8vIGZpbmFsIHJvdW5kIGV4Y2VwdGlvblxyXG4gICAgICAgIC8vIHdpbm5lciBhbmQgbG9zZXIgYnJhY2tldHMgaGF2ZSBzYW1lIG1hdGNoIGNvdW50LCBhcHBseSBjdXJyZW50IGNvdW50IHRvIGwtSUQgdG8gbWF0Y2hcclxuICAgICAgICAvLyB3aW5uZXIgd2lubmVyIHdpdGggbG9zZXIgd2lubmVyIGluIGZpbmFsIHJvdW5kXHJcbiAgICAgICAgY29uc3QgZmluYWxNYXRjaElkID0gYGwke3NwbGl0WzJdfWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmluYWxNYXRjaElkKTtcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tmaW5hbE1hdGNoSWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCA8IG1heFdpbm5lclJvdW5kcylcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tuZXh0SW5wdXRJZF0uaW5wdXQsXHJcbiAgICAgICAgKTtcclxuICAgICAgaWYgKE51bWJlcihzcGxpdFsyXSkgJSAyID09PSAwKSB7XHJcbiAgICAgICAgLy8gb25seSBpbmNyZW1lbnQgY291bnRlciBldmVyeSBvdGhlciBtYXRjaCBzaW5jZSBhIHdpbm5lciBicmFja2V0IGZ1bm5lbHMgdHdvIGludG8gb25lXHJcbiAgICAgICAgd2lubmVySW5wdXRDb3VudGVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzcGxpdFsxXSA9PT0gXCJsXCIpIHtcclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCA9PT0gbWF4TG9zZXJSb3VuZHMpIHtcclxuICAgICAgICAvLyBmaW5hbCBsb3NlciByb3VuZCBoYXMgbm8gb3V0cHV0LCBicmFja2V0IGlzIGZpbmlzaGVkXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXh0SW5wdXRJZCA9IGBsJHtsb3NlcklucHV0Q291bnRlciArIHF1YXJ0ZXJFbnRyYW50Q291bnR9YDtcclxuXHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgJSAyID09PSAwKSB7XHJcbiAgICAgICAgLy8gZXZlbiByb3VuZHNcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tuZXh0SW5wdXRJZF0uaW5wdXQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoTnVtYmVyKHNwbGl0WzJdKSAlIDIgPT09IDApIHtcclxuICAgICAgICAgIC8vIG9ubHkgaW5jcmVtZW50IGNvdW50ZXIgZXZlcnkgb3RoZXIgbWF0Y2ggc2luY2UgYSB3aW5uZXIgYnJhY2tldCBmdW5uZWxzIHR3byBpbnRvIG9uZVxyXG4gICAgICAgICAgbG9zZXJJbnB1dENvdW50ZXIgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCAlIDIgIT09IDApIHtcclxuICAgICAgICAvL29kZCByb3VuZHNcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tuZXh0SW5wdXRJZF0uaW5wdXQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsb3NlcklucHV0Q291bnRlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBuZXh0Um91bmROdW0gPSBOdW1iZXIoc3BsaXRbMl0pICsgMTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNwbGl0WzFdICsgbmV4dFJvdW5kTnVtKTtcclxuICAgIC8vIGRyYXdCcmFja2V0TGluZShcclxuICAgIC8vICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgIC8vICAgbm9kZVBvc2l0aW9uc1tzcGxpdFsxXSArIG5leHRSb3VuZE51bV0uaW5wdXQsXHJcbiAgICAvLyApO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkcmF3QnJhY2tldExpbmUobm9kZVBvc2l0aW9uc1tcIm0xXCJdLm91dHB1dCwgbm9kZVBvc2l0aW9uc1tcIm0zXCJdLmlucHV0KTtcclxuICAvLyBkcmF3QnJhY2tldExpbmUobm9kZVBvc2l0aW9uc1tcIm0yXCJdLm91dHB1dCwgbm9kZVBvc2l0aW9uc1tcIm0zXCJdLmlucHV0KTtcclxufVxyXG5cclxucGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgYnJhY2tldEVudHJpZXMsXHJcbiAgZ2VuZXJhdGVCeWVzKGJyYWNrZXRFbnRyaWVzLmxlbmd0aCksXHJcbiAgZmFsc2UsXHJcbiAgdHJ1ZSxcclxuKTtcclxuYWRqdXN0TWF0Y2hOb2RlSGVpZ2h0KCk7XHJcbi8vIGdldEZpbmFsTWF0Y2hlcyh0ZXN0UmVzdWx0KTtcclxuZGlzcGxheUZpbmFsQnJhY2tldCh0ZXN0UmVzdWx0KTtcclxubWFpbihwYWlyQXJyYXkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=