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
  background-color: #161616;
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
  justify-content: space-evenly;
}

.entry {
  cursor: pointer;
}

#selectionDisplay img {
  max-width: 30vw;
  max-height: 40vh;
  border-radius: 16px;
}

.roundWinner {
  background-color: #272e25;
  border: 2px solid #8ec07c;
  border-radius: 16px;
  padding: 2rem;
}

#nextRound {
  margin: 5vh 35vw 0 35vw;
}

/* bracket display */

#bracketContainer {
  position: relative;

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
  background-color: #23346b;
  border: 1px solid #c8a951;
  border-radius: 4px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7);
  gap: 20px;
  text-align: center;
}

.winner {
  color: #ffbe0c;
}

.loser {
  color: #d16969;
  text-decoration: line-through;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;CAUC;;AAED;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA,oBAAoB;;AAEpB;EACE,kBAAkB;;EAElB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,wCAAwC;EACxC,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,6BAA6B;AAC/B","sourcesContent":["/* \r\nPrimary Background #0D0D0D \r\nSurface / Panel Background #161616\r\nAccent Gold (Primary) #C8A951\r\nAccent Gold (Bright / Hover) #E5C76B\r\nText (Primary) #F0F0F0\r\nText (Muted) #9C9C9C\r\nBorders / Lines #242424\r\nSuccess / Highlight (sage green) #8EC07C\r\nError (soft crimson) #D16969\r\n*/\r\n\r\nbody {\r\n  background-color: #161616;\r\n  color: #f0f0f0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#roundDisplay,\r\n#matchDisplay {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#selectionDisplay {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.entry {\r\n  cursor: pointer;\r\n}\r\n\r\n#selectionDisplay img {\r\n  max-width: 30vw;\r\n  max-height: 40vh;\r\n  border-radius: 16px;\r\n}\r\n\r\n.roundWinner {\r\n  background-color: #272e25;\r\n  border: 2px solid #8ec07c;\r\n  border-radius: 16px;\r\n  padding: 2rem;\r\n}\r\n\r\n#nextRound {\r\n  margin: 5vh 35vw 0 35vw;\r\n}\r\n\r\n/* bracket display */\r\n\r\n#bracketContainer {\r\n  position: relative;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n#bracketLines {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.matchNode {\r\n  position: absolute;\r\n  width: 150px;\r\n  height: 60px;\r\n  background-color: #23346b;\r\n  border: 1px solid #c8a951;\r\n  border-radius: 4px;\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 5px;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7);\r\n  gap: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.winner {\r\n  color: #ffbe0c;\r\n}\r\n\r\n.loser {\r\n  color: #d16969;\r\n  text-decoration: line-through;\r\n}\r\n"],"sourceRoot":""}]);
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
	"./Annie Bot.jpg": "./src/img/Annie Bot.jpg",
	"./Frankenstein.jpg": "./src/img/Frankenstein.jpg",
	"./Furies of Calderon.jpg": "./src/img/Furies of Calderon.jpg",
	"./Old Man's War.jpg": "./src/img/Old Man's War.jpg",
	"./Red Rabbit.jpg": "./src/img/Red Rabbit.jpg",
	"./Steve Jobs.jpg": "./src/img/Steve Jobs.jpg",
	"./Stoner.jpg": "./src/img/Stoner.jpg",
	"./The 100-Year-Old Man Who Climbed Out the Window and Disappeared.jpg": "./src/img/The 100-Year-Old Man Who Climbed Out the Window and Disappeared.jpg",
	"./The Devils.jpg": "./src/img/The Devils.jpg",
	"./The Fellowship of the Ring.jpg": "./src/img/The Fellowship of the Ring.jpg",
	"./The Tainted Cup.jpg": "./src/img/The Tainted Cup.jpg",
	"./The Will of the Many.png": "./src/img/The Will of the Many.png",
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

/***/ "./src/img/Annie Bot.jpg":
/*!*******************************!*\
  !*** ./src/img/Annie Bot.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "937e00e72a7ad659eaa4.jpg";

/***/ }),

/***/ "./src/img/Frankenstein.jpg":
/*!**********************************!*\
  !*** ./src/img/Frankenstein.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc9d0334cc459c1e6a66.jpg";

/***/ }),

/***/ "./src/img/Furies of Calderon.jpg":
/*!****************************************!*\
  !*** ./src/img/Furies of Calderon.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3a6935a33d0d0349064f.jpg";

/***/ }),

/***/ "./src/img/Old Man's War.jpg":
/*!***********************************!*\
  !*** ./src/img/Old Man's War.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "64bf6685c02485be2d6a.jpg";

/***/ }),

/***/ "./src/img/Red Rabbit.jpg":
/*!********************************!*\
  !*** ./src/img/Red Rabbit.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e2186be96a7531cf12bc.jpg";

/***/ }),

/***/ "./src/img/Steve Jobs.jpg":
/*!********************************!*\
  !*** ./src/img/Steve Jobs.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "544dfe6d46ebb06bafed.jpg";

/***/ }),

/***/ "./src/img/Stoner.jpg":
/*!****************************!*\
  !*** ./src/img/Stoner.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "71f281563e6cc44d418d.jpg";

/***/ }),

/***/ "./src/img/The 100-Year-Old Man Who Climbed Out the Window and Disappeared.jpg":
/*!*************************************************************************************!*\
  !*** ./src/img/The 100-Year-Old Man Who Climbed Out the Window and Disappeared.jpg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "482a99f9c8e78089cc3d.jpg";

/***/ }),

/***/ "./src/img/The Devils.jpg":
/*!********************************!*\
  !*** ./src/img/The Devils.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54e40f07118650138ccc.jpg";

/***/ }),

/***/ "./src/img/The Fellowship of the Ring.jpg":
/*!************************************************!*\
  !*** ./src/img/The Fellowship of the Ring.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "606567346f25c1470c01.jpg";

/***/ }),

/***/ "./src/img/The Tainted Cup.jpg":
/*!*************************************!*\
  !*** ./src/img/The Tainted Cup.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dd9fb2eb6675563d36a5.jpg";

/***/ }),

/***/ "./src/img/The Will of the Many.png":
/*!******************************************!*\
  !*** ./src/img/The Will of the Many.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f82cd4976277551d5007.png";

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
module.exports = /*#__PURE__*/JSON.parse('[{"name":"The Tainted Cup","description":"Robert Jackson Bennett","seed":1},{"name":"The Will of the Many","description":"James Islington","seed":2},{"name":"The Fellowship of the Ring","description":"J. R. R. Tolkien","seed":3},{"name":"The 100-Year-Old Man Who Climbed Out the Window and Disappeared","description":"Jonas Jonasson","seed":4},{"name":"Furies of Calderon","description":"Jim Butcher","seed":5},{"name":"Steve Jobs","description":"Walter Isaacson","seed":6},{"name":"Stoner","description":"John Williams","seed":7},{"name":"Old Man\'s War","description":"John Scalzi","seed":8},{"name":"The Devils","description":"Joe Abercrombie","seed":9},{"name":"Frankenstein","description":"Mary Shelley","seed":10},{"name":"Annie Bot","description":"Sierra Greer","seed":11},{"name":"Red Rabbit","description":"Alex Grecian","seed":12}]');

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
  MATCH_WIDTH: 180,
  MATCH_HEIGHT: 60,
  X_GAP: 60,
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
  if (number <= 0 || number > 52 || !Number.isInteger(number)) {
    throw new Error("Submit a reasonable number of entrants");
  }

  const nextPower = 2 ** Math.ceil(Math.log2(number));
  //  return 1 << Math.ceil(Math.log2(n));
  // left shift operator also works here and should be slightly faster,
  // but is less readable for the scope of this project

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

// recursion testing here //

function createMatch(id, a = null, b = null) {
  return {
    id,
    a,
    b,
    winner: null,
    loser: null,
  };
}

function createRound(id, type, matches) {
  return {
    id,
    type, // winner, loser, final
    matches, //array
  };
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
  p.classList.add("description");

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
    let selection = null;
    let resolved = false;
    nextRoundButton.disabled = true;

    const selectEntry1 = () => {
      // load selection data to be passed through
      selection = { winner: entry1Obj, loser: entry2Obj };

      // css to highlight selected entrant
      entry2Div.classList.remove("roundWinner");
      entry1Div.classList.add("roundWinner");
      nextRoundButton.disabled = false;
    };
    const selectEntry2 = () => {
      selection = { winner: entry2Obj, loser: entry1Obj };

      entry1Div.classList.remove("roundWinner");
      entry2Div.classList.add("roundWinner");
      nextRoundButton.disabled = false;
    };

    const confirmSelection = () => {
      if (resolved || !selection) return;
      resolved = true;

      cleanup();
      resolve(selection);
    };

    const cleanup = () => {
      entry1Div.removeEventListener("click", selectEntry1);
      entry2Div.removeEventListener("click", selectEntry2);
      nextRoundButton.removeEventListener("click", confirmSelection);
      nextRoundButton.disabled = true;
    };
    entry1Div.addEventListener("click", selectEntry1);
    entry2Div.addEventListener("click", selectEntry2);
    nextRoundButton.addEventListener("click", confirmSelection);
  });
}

async function displayBracketPairings(pairings) {
  const pairingsCopy = structuredClone(pairings);
  // let matchNumber = 1;
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

    // Currently hiding displayed match number to emphasize blind bracket
    // can be uncommented as desired, remember let matchNumber outside for loop
    // and p element in html file if changing
    //
    // matchDisplay.innerHTML = "";
    // matchDisplay.textContent = `Match ${matchNumber}`;
    // matchNumber += 1;

    selectionDisplayDiv.innerHTML = "";
    selectionDisplayDiv.append(entry1, entry2);

    const result = await waitForSelection(
      entry1,
      pair.entry1,
      entry2,
      pair.entry2,
    );

    // log result to match objects
    result.winner.win = true;
    result.loser.win = false;
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
  // uncomment if re-enabling match number display
  // matchDisplay.innerHTML = "";
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
          p1win: match.entry1.win,
          p2win: match.entry2.win,
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
          p1win: match.entry1.win,
          p2win: match.entry2.win,
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
  path.setAttribute("vector-effect", "non-scaling-stroke");

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

    if (match.p1win) {
      el.innerHTML = `
    <div class = "p1 winner">${match.p1}</div>
    <div class = "p2 loser">${match.p2}</div>
    `;
    }
    if (match.p2win) {
      el.innerHTML = `
    <div class = "p1 loser">${match.p1}</div>
    <div class = "p2 winner">${match.p2}</div>
    `;
    }
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
// displayFinalBracket(testResult);
main(pairArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlGQUF5RixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLHdWQUF3VixnQ0FBZ0MscUJBQXFCLG9CQUFvQiw2QkFBNkIsS0FBSyx5Q0FBeUMsb0JBQW9CLDhCQUE4QixLQUFLLDJCQUEyQixvQkFBb0Isb0NBQW9DLEtBQUssZ0JBQWdCLHNCQUFzQixLQUFLLCtCQUErQixzQkFBc0IsdUJBQXVCLDBCQUEwQixLQUFLLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLDBCQUEwQixvQkFBb0IsS0FBSyxvQkFBb0IsOEJBQThCLEtBQUssd0RBQXdELHlCQUF5Qix5QkFBeUIsS0FBSyx1QkFBdUIseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLGlCQUFpQixLQUFLLG9CQUFvQix5QkFBeUIsbUJBQW1CLG1CQUFtQixnQ0FBZ0MsZ0NBQWdDLHlCQUF5QixpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsbUJBQW1CLCtDQUErQyxnQkFBZ0IseUJBQXlCLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLGdCQUFnQixxQkFBcUIsb0NBQW9DLEtBQUssdUJBQXVCO0FBQzM2RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNwRzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEI3RSxxQkFBcUIsOERBR25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ3NCOzs7Ozs7O1VDWnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1dDbEJBLG1DOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCO0FBQ047QUFDUztBQUM3QztBQUNBLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0NBQWM7QUFDaEI7QUFDQSx3QkFBd0IsV0FBVztBQUNuQyx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEMsdUJBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQWdCO0FBQ3RCLGNBQWMsaURBQWdCO0FBQzlCLElBQUk7QUFDSjtBQUNBLGNBQWMsaURBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0JBQW9CO0FBQ2pFO0FBQ0E7QUFDQSxnREFBZ0QsZ0JBQWdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVLE9BQU8sV0FBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3Q0FBYztBQUM1RCw0Q0FBNEMsd0NBQWM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsRUFBRTtBQUNqQixNQUFNO0FBQ04sTUFBTTtBQUNOLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4Qyw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQyxzQkFBc0IsVUFBVTtBQUNoQyx3QkFBd0IsMkJBQTJCO0FBQ25ELHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhEQUE4RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNDQUFzQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQXdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdDQUFjO0FBQ2hCLGVBQWUsd0NBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy9pbWd8c3luY3xub25yZWN1cnNpdmV8RTovLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogXHJcblByaW1hcnkgQmFja2dyb3VuZCAjMEQwRDBEIFxyXG5TdXJmYWNlIC8gUGFuZWwgQmFja2dyb3VuZCAjMTYxNjE2XHJcbkFjY2VudCBHb2xkIChQcmltYXJ5KSAjQzhBOTUxXHJcbkFjY2VudCBHb2xkIChCcmlnaHQgLyBIb3ZlcikgI0U1Qzc2QlxyXG5UZXh0IChQcmltYXJ5KSAjRjBGMEYwXHJcblRleHQgKE11dGVkKSAjOUM5QzlDXHJcbkJvcmRlcnMgLyBMaW5lcyAjMjQyNDI0XHJcblN1Y2Nlc3MgLyBIaWdobGlnaHQgKHNhZ2UgZ3JlZW4pICM4RUMwN0NcclxuRXJyb3IgKHNvZnQgY3JpbXNvbikgI0QxNjk2OVxyXG4qL1xyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxuICBjb2xvcjogI2YwZjBmMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNyb3VuZERpc3BsYXksXHJcbiNtYXRjaERpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3Rpb25EaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uZW50cnkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NlbGVjdGlvbkRpc3BsYXkgaW1nIHtcclxuICBtYXgtd2lkdGg6IDMwdnc7XHJcbiAgbWF4LWhlaWdodDogNDB2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4ucm91bmRXaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJlMjU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzhlYzA3YztcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbiNuZXh0Um91bmQge1xyXG4gIG1hcmdpbjogNXZoIDM1dncgMCAzNXZ3O1xyXG59XHJcblxyXG4vKiBicmFja2V0IGRpc3BsYXkgKi9cclxuXHJcbiNicmFja2V0Q29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jYnJhY2tldExpbmVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tYXRjaE5vZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzM0NmI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YTk1MTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndpbm5lciB7XHJcbiAgY29sb3I6ICNmZmJlMGM7XHJcbn1cclxuXHJcbi5sb3NlciB7XHJcbiAgY29sb3I6ICNkMTY5Njk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7O0NBVUM7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGtCQUFrQjs7RUFFbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFxcclxcblByaW1hcnkgQmFja2dyb3VuZCAjMEQwRDBEIFxcclxcblN1cmZhY2UgLyBQYW5lbCBCYWNrZ3JvdW5kICMxNjE2MTZcXHJcXG5BY2NlbnQgR29sZCAoUHJpbWFyeSkgI0M4QTk1MVxcclxcbkFjY2VudCBHb2xkIChCcmlnaHQgLyBIb3ZlcikgI0U1Qzc2QlxcclxcblRleHQgKFByaW1hcnkpICNGMEYwRjBcXHJcXG5UZXh0IChNdXRlZCkgIzlDOUM5Q1xcclxcbkJvcmRlcnMgLyBMaW5lcyAjMjQyNDI0XFxyXFxuU3VjY2VzcyAvIEhpZ2hsaWdodCAoc2FnZSBncmVlbikgIzhFQzA3Q1xcclxcbkVycm9yIChzb2Z0IGNyaW1zb24pICNEMTY5NjlcXHJcXG4qL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcXHJcXG4gIGNvbG9yOiAjZjBmMGYwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNyb3VuZERpc3BsYXksXFxyXFxuI21hdGNoRGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb25EaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbkRpc3BsYXkgaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMzB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDQwdmg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRXaW5uZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmUyNTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4ZWMwN2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25leHRSb3VuZCB7XFxyXFxuICBtYXJnaW46IDV2aCAzNXZ3IDAgMzV2dztcXHJcXG59XFxyXFxuXFxyXFxuLyogYnJhY2tldCBkaXNwbGF5ICovXFxyXFxuXFxyXFxuI2JyYWNrZXRDb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNicmFja2V0TGluZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGNoTm9kZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNDZiO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YTk1MTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lciB7XFxyXFxuICBjb2xvcjogI2ZmYmUwYztcXHJcXG59XFxyXFxuXFxyXFxuLmxvc2VyIHtcXHJcXG4gIGNvbG9yOiAjZDE2OTY5O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQW5uaWUgQm90LmpwZ1wiOiBcIi4vc3JjL2ltZy9Bbm5pZSBCb3QuanBnXCIsXG5cdFwiLi9GcmFua2Vuc3RlaW4uanBnXCI6IFwiLi9zcmMvaW1nL0ZyYW5rZW5zdGVpbi5qcGdcIixcblx0XCIuL0Z1cmllcyBvZiBDYWxkZXJvbi5qcGdcIjogXCIuL3NyYy9pbWcvRnVyaWVzIG9mIENhbGRlcm9uLmpwZ1wiLFxuXHRcIi4vT2xkIE1hbidzIFdhci5qcGdcIjogXCIuL3NyYy9pbWcvT2xkIE1hbidzIFdhci5qcGdcIixcblx0XCIuL1JlZCBSYWJiaXQuanBnXCI6IFwiLi9zcmMvaW1nL1JlZCBSYWJiaXQuanBnXCIsXG5cdFwiLi9TdGV2ZSBKb2JzLmpwZ1wiOiBcIi4vc3JjL2ltZy9TdGV2ZSBKb2JzLmpwZ1wiLFxuXHRcIi4vU3RvbmVyLmpwZ1wiOiBcIi4vc3JjL2ltZy9TdG9uZXIuanBnXCIsXG5cdFwiLi9UaGUgMTAwLVllYXItT2xkIE1hbiBXaG8gQ2xpbWJlZCBPdXQgdGhlIFdpbmRvdyBhbmQgRGlzYXBwZWFyZWQuanBnXCI6IFwiLi9zcmMvaW1nL1RoZSAxMDAtWWVhci1PbGQgTWFuIFdobyBDbGltYmVkIE91dCB0aGUgV2luZG93IGFuZCBEaXNhcHBlYXJlZC5qcGdcIixcblx0XCIuL1RoZSBEZXZpbHMuanBnXCI6IFwiLi9zcmMvaW1nL1RoZSBEZXZpbHMuanBnXCIsXG5cdFwiLi9UaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5qcGdcIjogXCIuL3NyYy9pbWcvVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuanBnXCIsXG5cdFwiLi9UaGUgVGFpbnRlZCBDdXAuanBnXCI6IFwiLi9zcmMvaW1nL1RoZSBUYWludGVkIEN1cC5qcGdcIixcblx0XCIuL1RoZSBXaWxsIG9mIHRoZSBNYW55LnBuZ1wiOiBcIi4vc3JjL2ltZy9UaGUgV2lsbCBvZiB0aGUgTWFueS5wbmdcIixcblx0XCIuL2FwcGxlLmpwZ1wiOiBcIi4vc3JjL2ltZy9hcHBsZS5qcGdcIixcblx0XCIuL2JhbmFuYS5qcGdcIjogXCIuL3NyYy9pbWcvYmFuYW5hLmpwZ1wiLFxuXHRcIi4vYnllLmpwZ1wiOiBcIi4vc3JjL2ltZy9ieWUuanBnXCIsXG5cdFwiLi9tYW5nby5qcGdcIjogXCIuL3NyYy9pbWcvbWFuZ28uanBnXCIsXG5cdFwiLi9wZWFyLmpwZ1wiOiBcIi4vc3JjL2ltZy9wZWFyLmpwZ1wiLFxuXHRcIi4vcGluZWFwcGxlLmpwZ1wiOiBcIi4vc3JjL2ltZy9waW5lYXBwbGUuanBnXCIsXG5cdFwiLi9zYXVzYWdlLmpwZ1wiOiBcIi4vc3JjL2ltZy9zYXVzYWdlLmpwZ1wiLFxuXHRcIi4vc3RyYXdiZXJyeS5qcGdcIjogXCIuL3NyYy9pbWcvc3RyYXdiZXJyeS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJGlcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiY29uc3QgaW1hZ2VDb250ZXh0ID0gaW1wb3J0Lm1ldGEud2VicGFja0NvbnRleHQoXCIuL2ltZ1wiLCB7XHJcbiAgcmVjdXJzaXZlOiBmYWxzZSxcclxuICByZWdFeHA6IC9cXC4ocG5nfGpwZT9nfHN2ZykkL2ksXHJcbn0pO1xyXG5cclxuY29uc3QgaXRlbUltYWdlcyA9IHt9O1xyXG5pbWFnZUNvbnRleHQua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gIC8vIHJlbW92ZSBwcmVmaXggYW5kIGV4dGVuc2lvbiBmcm9tIGltYWdlIGZpbGUgbmFtZXNcclxuICBjb25zdCBmaWxlTmFtZSA9IGtleS5yZXBsYWNlKFwiLi9cIiwgXCJcIikucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpO1xyXG4gIGl0ZW1JbWFnZXNbZmlsZU5hbWVdID0gaW1hZ2VDb250ZXh0KGtleSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgaXRlbUltYWdlcyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBicmFja2V0RW50cmllcyBmcm9tIFwiLi9pdGVtcy5qc29uXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcbmltcG9ydCB0ZXN0UmVzdWx0IGZyb20gXCIuL3Rlc3RSZXN1bHQxMi5qc29uXCI7XHJcblxyXG4vLyBjb25zdCBkeW5hbWljSW1hZ2UgPSByZXF1aXJlKGAuL2ltZy8ke2ltYWdlTmFtZX0uanBnYCk7XHJcblxyXG4vLyBjaGVjayBsb3NlciBicmFja2V0IGxlbmd0aFxyXG4vLyBUT0RPIGNsaWNrIHRvIHNlbGVjdCBlbnRyeSwgdGhlbiBhIGNvbmZpcm0gYnV0dG9uIG9uIHRoZSBib3R0b21cclxuXHJcbmNvbnN0IHNlbGVjdGlvbkRpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGlvbkRpc3BsYXlcIik7XHJcbmNvbnN0IG1hdGNoRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF0Y2hEaXNwbGF5XCIpO1xyXG5jb25zdCByb3VuZERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdW5kRGlzcGxheVwiKTtcclxuY29uc3QgbmV4dFJvdW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0Um91bmRcIik7XHJcblxyXG5jb25zdCBicmFja2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicmFja2V0Q29udGFpbmVyXCIpO1xyXG5jb25zdCBtYXRjaGVzTGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGNoZXNMYXllclwiKTtcclxuY29uc3QgYnJhY2tldExpbmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicmFja2V0TGluZXNcIik7XHJcblxyXG5jb25zdCByZXN1bHRzID0ge307XHJcbmxldCB3aW5uZXJSb3VuZENvdW50ID0gMTtcclxubGV0IHdpbm5lclJvdW5kQ291bnQyID0gMTtcclxubGV0IGxvc2VyUm91bmRDb3VudCA9IDA7XHJcbmxldCBwYWlyQXJyYXkgPSBbXTtcclxubGV0IHdpbm5lckJyYWNrZXRXaW5uZXJzID0gW107XHJcbmxldCB3aW5uZXJCcmFja2V0TG9zZXJzID0gW107XHJcbmxldCBsb3NlckJyYWNrZXRXaW5uZXJzID0gW107XHJcbmxldCBjdXJyZW50Um91bmQgPSBcIndpbm5lclwiO1xyXG5sZXQgbmV4dFJvdW5kID0gXCJsb3NlclwiO1xyXG5sZXQgYnJhY2tldENvbXBsZXRlID0gZmFsc2U7XHJcblxyXG5jb25zdCBCUkFDS0VUX0NPTkZJRyA9IHtcclxuICBNQVRDSF9XSURUSDogMTgwLFxyXG4gIE1BVENIX0hFSUdIVDogNjAsXHJcbiAgWF9HQVA6IDYwLFxyXG4gIFlfR0FQOiAzMCxcclxuICAvLyB4IGhvcml6b250YWwgZ2FwLCB5IHZlcnRpY2FsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGp1c3RNYXRjaE5vZGVIZWlnaHQoKSB7XHJcbiAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGR1bW15LmNsYXNzTmFtZSA9IFwibWF0Y2hOb2RlXCI7XHJcbiAgZHVtbXkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgZHVtbXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgZHVtbXkuc3R5bGUud2lkdGggPSBgJHtCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSH1weGA7XHJcbiAgZHVtbXkuc3R5bGUud2hpdGVTcGFjZSA9IFwibm9ybWFsXCI7XHJcbiAgbWF0Y2hlc0xheWVyLmFwcGVuZENoaWxkKGR1bW15KTtcclxuXHJcbiAgYnJhY2tldEVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgIGR1bW15LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSBcInAxXCI+JHtlbnRyeS5uYW1lfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDJcIj4ke2VudHJ5Lm5hbWV9PC9kaXY+XHJcbiAgICBgO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gZHVtbXkub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKGhlaWdodCArIDEwID4gQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUKSB7XHJcbiAgICAgIEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCA9IGhlaWdodCArIDQwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIG1hdGNoZXNMYXllci5yZW1vdmVDaGlsZChkdW1teSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFgocm91bmRJbmRleCkge1xyXG4gIC8vIHplcm8taW5kZXhlZCByb3VuZCBudW1iZXIsICsyMCBidWlsdC1pbiBwYWRkaW5nXHJcbiAgcmV0dXJuIHJvdW5kSW5kZXggKiAoQlJBQ0tFVF9DT05GSUcuTUFUQ0hfV0lEVEggKyBCUkFDS0VUX0NPTkZJRy5YX0dBUCkgKyAyMDtcclxufVxyXG5mdW5jdGlvbiBnZXRZKG1hdGNoSW5kZXgpIHtcclxuICAvLyB6ZXJvLWluZGV4ZWQsIHZlcnRpY2FsIHNsb3QgZm9yIG1hdGNoZXNcclxuICByZXR1cm4gbWF0Y2hJbmRleCAqIChCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQgKyBCUkFDS0VUX0NPTkZJRy5ZX0dBUCkgKyAyMDtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFBvd2VyT2ZUd28obnVtYmVyKSB7XHJcbiAgaWYgKG51bWJlciA8PSAwIHx8IG51bWJlciA+IDUyIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcikpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlN1Ym1pdCBhIHJlYXNvbmFibGUgbnVtYmVyIG9mIGVudHJhbnRzXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV4dFBvd2VyID0gMiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cyKG51bWJlcikpO1xyXG4gIC8vICByZXR1cm4gMSA8PCBNYXRoLmNlaWwoTWF0aC5sb2cyKG4pKTtcclxuICAvLyBsZWZ0IHNoaWZ0IG9wZXJhdG9yIGFsc28gd29ya3MgaGVyZSBhbmQgc2hvdWxkIGJlIHNsaWdodGx5IGZhc3RlcixcclxuICAvLyBidXQgaXMgbGVzcyByZWFkYWJsZSBmb3IgdGhlIHNjb3BlIG9mIHRoaXMgcHJvamVjdFxyXG5cclxuICByZXR1cm4gbmV4dFBvd2VyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5uZXJSb3VuZENvdW50KG51bWJlck9mRW50cmFudHMpIHtcclxuICBjb25zdCB0b3RhbENvdW50ID0gbmV4dFBvd2VyT2ZUd28obnVtYmVyT2ZFbnRyYW50cyk7XHJcbiAgY29uc3Qgcm91bmRzID0gTWF0aC5sb2cyKHRvdGFsQ291bnQpO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvc2VyUm91bmRDb3VudChudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgdG90YWxDb3VudCA9IG5leHRQb3dlck9mVHdvKG51bWJlck9mRW50cmFudHMpO1xyXG4gIGNvbnN0IHJvdW5kcyA9IE1hdGgubG9nMih0b3RhbENvdW50KSAqIDIgLSAxO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnllcyhudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgYnllQ291bnQgPSBuZXh0UG93ZXJPZlR3byhudW1iZXJPZkVudHJhbnRzKSAtIG51bWJlck9mRW50cmFudHM7XHJcbiAgY29uc3QgYnllT2JqcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnllQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgYnllT2Jqc1tpXSA9IGBieWUke2kgKyAxfWA7XHJcbiAgfVxyXG4gIHJldHVybiBieWVPYmpzO1xyXG59XHJcblxyXG4vLyByZWN1cnNpb24gdGVzdGluZyBoZXJlIC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYXRjaChpZCwgYSA9IG51bGwsIGIgPSBudWxsKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkLFxyXG4gICAgYSxcclxuICAgIGIsXHJcbiAgICB3aW5uZXI6IG51bGwsXHJcbiAgICBsb3NlcjogbnVsbCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSb3VuZChpZCwgdHlwZSwgbWF0Y2hlcykge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCxcclxuICAgIHR5cGUsIC8vIHdpbm5lciwgbG9zZXIsIGZpbmFsXHJcbiAgICBtYXRjaGVzLCAvL2FycmF5XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgYnJhY2tldEVudHJpZXMsXHJcbiAgYnllRW50cmllcyxcclxuICBvdGhlckVudHJpZXMsXHJcbiAgZmlyc3RSb3VuZEJvb2wsXHJcbikge1xyXG4gIGNvbnN0IHBhaXJpbmdzID0gW107XHJcblxyXG4gIC8vIG9wdGlvbmFsIGhhbmRsaW5nIG9mIGJsZW5kaW5nIHdpbm5lciBicmFja2V0IGxvc2VycyB3aXRoIGxvc2VyIGJyYWNrZXQgd2lubmVyc1xyXG4gIGlmIChvdGhlckVudHJpZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnJhY2tldEVudHJpZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgcGFpcmluZ3NbaV0gPSB7XHJcbiAgICAgICAgZW50cnkxOiBicmFja2V0RW50cmllc1tpXSxcclxuICAgICAgICBlbnRyeTI6IG90aGVyRW50cmllc1tpXSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWlyaW5ncztcclxuICB9XHJcbiAgLy8gaGFuZGxlIGZpcnN0IHJvdW5kIHNjZW5hcmlvcyB3aXRoIGJ5ZXMgcHJlc2VudFxyXG4gIGlmIChieWVFbnRyaWVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5ZUVudHJpZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgcGFpcmluZ3NbaV0gPSB7XHJcbiAgICAgICAgZW50cnkxOiBicmFja2V0RW50cmllc1tpXSxcclxuICAgICAgICBlbnRyeTI6IHsgbmFtZTogYnllRW50cmllc1tpXSB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGkgPSBieWVFbnRyaWVzLmxlbmd0aCwgaiA9IC0xO1xyXG4gICAgICBpIDwgbmV4dFBvd2VyT2ZUd28oYnJhY2tldEVudHJpZXMubGVuZ3RoKSAvIDI7XHJcbiAgICAgIGkgKz0gMSwgaiAtPSAxXHJcbiAgICApIHtcclxuICAgICAgcGFpcmluZ3NbaV0gPSB7XHJcbiAgICAgICAgZW50cnkxOiBicmFja2V0RW50cmllc1tpXSxcclxuICAgICAgICBlbnRyeTI6IGJyYWNrZXRFbnRyaWVzLmF0KGopLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhaXJpbmdzO1xyXG4gIH1cclxuXHJcbiAgLy8gZmlyc3Qgcm91bmQsIGJ1dCBubyBieWVzIG5lZWRlZFxyXG4gIGlmICghYnllRW50cmllcyAmJiBmaXJzdFJvdW5kQm9vbCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAtMTsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aCAvIDI7IGkgKz0gMSwgaiAtPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBicmFja2V0RW50cmllcy5hdChqKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWlyaW5ncztcclxuICB9XHJcblxyXG4gIC8vIGNhdGNoIHNpbmdsZS1zb3VyY2UgYnJhY2tldCBnZW5lcmF0aW9uXHJcbiAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgYnJhY2tldEVudHJpZXMubGVuZ3RoOyBpICs9IDIsIGogKz0gMSkge1xyXG4gICAgcGFpcmluZ3Nbal0gPSB7XHJcbiAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgIGVudHJ5MjogYnJhY2tldEVudHJpZXNbaSArIDFdLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHBhaXJpbmdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRyeURpdihlbnRyeU9iaikge1xyXG4gIGNvbnN0IGVudHJ5V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gIGVudHJ5V3JhcC5jbGFzc0xpc3QuYWRkKFwiZW50cnlcIik7XHJcbiAgaDIudGV4dENvbnRlbnQgPSBlbnRyeU9iai5uYW1lO1xyXG4gIHAudGV4dENvbnRlbnQgPSBlbnRyeU9iai5kZXNjcmlwdGlvbjtcclxuICBwLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgaWYgKHV0aWxzLml0ZW1JbWFnZXNbZW50cnlPYmoubmFtZV0pIHtcclxuICAgIGltZy5zcmMgPSB1dGlscy5pdGVtSW1hZ2VzW2VudHJ5T2JqLm5hbWVdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBmaWxsIHN0b2NrIGltYWdlIGlmIG5vIHBpY3R1cmUgcHJvdmlkZWQgKHVzdWFsbHkgYSBnZW5lcmF0ZWQgYnllKVxyXG4gICAgaW1nLnNyYyA9IHV0aWxzLml0ZW1JbWFnZXNbXCJieWVcIl07XHJcbiAgfVxyXG5cclxuICBlbnRyeVdyYXAuYXBwZW5kKGgyLCBwLCBpbWcpO1xyXG5cclxuICByZXR1cm4gZW50cnlXcmFwO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB3YWl0Rm9yU2VsZWN0aW9uKGVudHJ5MURpdiwgZW50cnkxT2JqLCBlbnRyeTJEaXYsIGVudHJ5Mk9iaikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IG51bGw7XHJcbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcclxuICAgIG5leHRSb3VuZEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RW50cnkxID0gKCkgPT4ge1xyXG4gICAgICAvLyBsb2FkIHNlbGVjdGlvbiBkYXRhIHRvIGJlIHBhc3NlZCB0aHJvdWdoXHJcbiAgICAgIHNlbGVjdGlvbiA9IHsgd2lubmVyOiBlbnRyeTFPYmosIGxvc2VyOiBlbnRyeTJPYmogfTtcclxuXHJcbiAgICAgIC8vIGNzcyB0byBoaWdobGlnaHQgc2VsZWN0ZWQgZW50cmFudFxyXG4gICAgICBlbnRyeTJEaXYuY2xhc3NMaXN0LnJlbW92ZShcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBlbnRyeTFEaXYuY2xhc3NMaXN0LmFkZChcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBuZXh0Um91bmRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZWxlY3RFbnRyeTIgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGVjdGlvbiA9IHsgd2lubmVyOiBlbnRyeTJPYmosIGxvc2VyOiBlbnRyeTFPYmogfTtcclxuXHJcbiAgICAgIGVudHJ5MURpdi5jbGFzc0xpc3QucmVtb3ZlKFwicm91bmRXaW5uZXJcIik7XHJcbiAgICAgIGVudHJ5MkRpdi5jbGFzc0xpc3QuYWRkKFwicm91bmRXaW5uZXJcIik7XHJcbiAgICAgIG5leHRSb3VuZEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb25maXJtU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVzb2x2ZWQgfHwgIXNlbGVjdGlvbikgcmV0dXJuO1xyXG4gICAgICByZXNvbHZlZCA9IHRydWU7XHJcblxyXG4gICAgICBjbGVhbnVwKCk7XHJcbiAgICAgIHJlc29sdmUoc2VsZWN0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcclxuICAgICAgZW50cnkxRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RFbnRyeTEpO1xyXG4gICAgICBlbnRyeTJEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdEVudHJ5Mik7XHJcbiAgICAgIG5leHRSb3VuZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybVNlbGVjdGlvbik7XHJcbiAgICAgIG5leHRSb3VuZEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgZW50cnkxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RFbnRyeTEpO1xyXG4gICAgZW50cnkyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RFbnRyeTIpO1xyXG4gICAgbmV4dFJvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtU2VsZWN0aW9uKTtcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUJyYWNrZXRQYWlyaW5ncyhwYWlyaW5ncykge1xyXG4gIGNvbnN0IHBhaXJpbmdzQ29weSA9IHN0cnVjdHVyZWRDbG9uZShwYWlyaW5ncyk7XHJcbiAgLy8gbGV0IG1hdGNoTnVtYmVyID0gMTtcclxuICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcmluZ3NDb3B5KSB7XHJcbiAgICBjb25zdCBlbnRyeTEgPSBlbnRyeURpdihwYWlyLmVudHJ5MSk7XHJcbiAgICBjb25zdCBlbnRyeTIgPSBlbnRyeURpdihwYWlyLmVudHJ5Mik7XHJcbiAgICBlbnRyeTEuaWQgPSBcImVudHJ5MVwiO1xyXG4gICAgZW50cnkyLmlkID0gXCJlbnRyeTJcIjtcclxuXHJcbiAgICAvLyByb3VuZCBhbmQgbWF0Y2ggZGlzcGxheSBpbmZvXHJcbiAgICByb3VuZERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChjdXJyZW50Um91bmQgPT09IFwid2lubmVyXCIpIHtcclxuICAgICAgcm91bmREaXNwbGF5LnRleHRDb250ZW50ID0gYFJvdW5kIG9mICR7cGFpcmluZ3MubGVuZ3RoICogMn1gO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJsb3NlclwiKSB7XHJcbiAgICAgIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IGBMb3NlciBSb3VuZCAke2xvc2VyUm91bmRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEN1cnJlbnRseSBoaWRpbmcgZGlzcGxheWVkIG1hdGNoIG51bWJlciB0byBlbXBoYXNpemUgYmxpbmQgYnJhY2tldFxyXG4gICAgLy8gY2FuIGJlIHVuY29tbWVudGVkIGFzIGRlc2lyZWQsIHJlbWVtYmVyIGxldCBtYXRjaE51bWJlciBvdXRzaWRlIGZvciBsb29wXHJcbiAgICAvLyBhbmQgcCBlbGVtZW50IGluIGh0bWwgZmlsZSBpZiBjaGFuZ2luZ1xyXG4gICAgLy9cclxuICAgIC8vIG1hdGNoRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgLy8gbWF0Y2hEaXNwbGF5LnRleHRDb250ZW50ID0gYE1hdGNoICR7bWF0Y2hOdW1iZXJ9YDtcclxuICAgIC8vIG1hdGNoTnVtYmVyICs9IDE7XHJcblxyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5hcHBlbmQoZW50cnkxLCBlbnRyeTIpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhaXRGb3JTZWxlY3Rpb24oXHJcbiAgICAgIGVudHJ5MSxcclxuICAgICAgcGFpci5lbnRyeTEsXHJcbiAgICAgIGVudHJ5MixcclxuICAgICAgcGFpci5lbnRyeTIsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGxvZyByZXN1bHQgdG8gbWF0Y2ggb2JqZWN0c1xyXG4gICAgcmVzdWx0Lndpbm5lci53aW4gPSB0cnVlO1xyXG4gICAgcmVzdWx0Lmxvc2VyLndpbiA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBzZWxlY3Rpb25EaXNwbGF5RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGJyYWNrZXRDb21wbGV0ZSkge1xyXG4gICAgICAvLyAudmFsdWVzIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHBhaXIgb2JqZWN0cyAoZmluYWwgdHdvIGVudHJpZXMgaGVyZSlcclxuICAgICAgLy8gdGhlbiBmaW5kIHdoaWNoIGVudHJ5IGhhZCB3aW4gc2V0IHRvIHRydWVcclxuICAgICAgY29uc3QgZmluYWxXaW5uZXIgPSBPYmplY3QudmFsdWVzKHJlc3VsdCkuZmluZCgob2JqKSA9PiBvYmoud2luKTtcclxuICAgICAgZGlzcGxheVdpbm5lcihmaW5hbFdpbm5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudFJvdW5kID09PSBcIndpbm5lclwiKSB7XHJcbiAgICByZXN1bHRzW2B3aW5uZXJSb3VuZCR7d2lubmVyUm91bmRDb3VudH1gXSA9IHBhaXJpbmdzQ29weTtcclxuICB9XHJcbiAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJsb3NlclwiKSB7XHJcbiAgICByZXN1bHRzW2Bsb3NlclJvdW5kJHtsb3NlclJvdW5kQ291bnR9YF0gPSBwYWlyaW5nc0NvcHk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcInJlc3VsdHNcIiwgcmVzdWx0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIod2lubmVyT2JqKSB7XHJcbiAgcm91bmREaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgLy8gdW5jb21tZW50IGlmIHJlLWVuYWJsaW5nIG1hdGNoIG51bWJlciBkaXNwbGF5XHJcbiAgLy8gbWF0Y2hEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCB3aW5uZXIgPSBlbnRyeURpdih3aW5uZXJPYmopO1xyXG4gIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IFwiV0lOTkVSXCI7XHJcbiAgc2VsZWN0aW9uRGlzcGxheURpdi5hcHBlbmQod2lubmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzdWx0QXJyYXkocm91bmRUeXBlLCByb3VuZENvdW50LCB3aW5TdGF0dXMpIHtcclxuICAvLyByb3VuZFR5cGUgPSAnd2lubmVyJyBvciAnbG9zZXInXHJcbiAgLy8gcm91bmRDb3VudCA9IGludGVnZXJcclxuICAvLyB3aW5TdGF0dXMgPSB0cnVlIG9yIGZhbHNlXHJcbiAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgZm9yIChjb25zdCBtYXRjaCBvZiByZXN1bHRzW2Ake3JvdW5kVHlwZX1Sb3VuZCR7cm91bmRDb3VudH1gXSkge1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBPYmplY3Qua2V5cyhtYXRjaCkpIHtcclxuICAgICAgLy8gY2FwdHVyZSB3aW5zXHJcbiAgICAgIGlmICh3aW5TdGF0dXMpIHtcclxuICAgICAgICBpZiAobWF0Y2hbZW50cnldLndpbikgcmVzdWx0LnB1c2gobWF0Y2hbZW50cnldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY2FwdHVyZSBsb3NzZXNcclxuICAgICAgaWYgKCF3aW5TdGF0dXMpIHtcclxuICAgICAgICBpZiAoIW1hdGNoW2VudHJ5XS53aW4pIHJlc3VsdC5wdXNoKG1hdGNoW2VudHJ5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWFpbihwYWlyaW5ncykge1xyXG4gIGNvbnN0IG1heFdpbm5lclJvdW5kcyA9IGdldFdpbm5lclJvdW5kQ291bnQoYnJhY2tldEVudHJpZXMubGVuZ3RoKTtcclxuICBjb25zdCBtYXhMb3NlclJvdW5kcyA9IGdldExvc2VyUm91bmRDb3VudChicmFja2V0RW50cmllcy5sZW5ndGgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFxyXG4gIC8vICAgXCJ3cmMsIHdyYzIsIGxyY1wiLFxyXG4gIC8vICAgd2lubmVyUm91bmRDb3VudCxcclxuICAvLyAgIHdpbm5lclJvdW5kQ291bnQyLFxyXG4gIC8vICAgbG9zZXJSb3VuZENvdW50LFxyXG4gIC8vICk7XHJcbiAgYXdhaXQgZGlzcGxheUJyYWNrZXRQYWlyaW5ncyhwYWlyaW5ncyk7XHJcblxyXG4gIGlmIChicmFja2V0Q29tcGxldGUpIHtcclxuICAgIC8vIGZpbmFsLCBjb21wbGV0ZSBicmFjayBnZW5lcmF0aW9uXHJcbiAgICBkaXNwbGF5RmluYWxCcmFja2V0KHJlc3VsdHMpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAod2lubmVyUm91bmRDb3VudCA8IG1heFdpbm5lclJvdW5kcykge1xyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldFdpbm5lcnMgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgd2lubmVyUm91bmRDb3VudCxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5uZXJCcmFja2V0V2lubmVycyk7XHJcbiAgICB3aW5uZXJSb3VuZENvdW50ICs9IDE7XHJcblxyXG4gICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldFdpbm5lcnMpO1xyXG4gICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgd2lubmVyUm91bmRDb3VudCA9PT0gbWF4V2lubmVyUm91bmRzICYmXHJcbiAgICBsb3NlclJvdW5kQ291bnQgPCBtYXhMb3NlclJvdW5kc1xyXG4gICkge1xyXG4gICAgY3VycmVudFJvdW5kID0gXCJsb3NlclwiO1xyXG4gICAgaWYgKGxvc2VyUm91bmRDb3VudCA9PT0gMCkge1xyXG4gICAgICAvLyBoYW5kbGUgZmlyc3QgbG9zZXIgcm91bmQgZ2VuZXJhdGVkIG9ubHkgZnJvbSB3aW5uZXIgYnJhY2tldFxyXG4gICAgICBjb25zdCB3aW5uZXJCcmFja2V0TG9zZXJzID0gZ2V0UmVzdWx0QXJyYXkoXHJcbiAgICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgKTtcclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3Mod2lubmVyQnJhY2tldExvc2VycywgW10pO1xyXG5cclxuICAgICAgd2lubmVyUm91bmRDb3VudDIgKz0gMTtcclxuICAgICAgbG9zZXJSb3VuZENvdW50ICs9IDE7XHJcbiAgICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb3NlclJvdW5kQ291bnQgPT09IG1heExvc2VyUm91bmRzIC0gMSkge1xyXG4gICAgICAvLyBGaW5hbCByb3VuZC4gTG9zZXIgcm91bmRzIGFyZSAwIGluZGV4ZWQgdG8gYmV0dGVyIHN5bmMgd2l0aCByb3VuZCBkaXNwbGF5XHJcbiAgICAgIGNvbnN0IHdpbm5lckJyYWNrZXRXaW5uZXIgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgICBcIndpbm5lclwiLFxyXG4gICAgICAgIHdpbm5lclJvdW5kQ291bnQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVyID0gZ2V0UmVzdWx0QXJyYXkoXCJsb3NlclwiLCBsb3NlclJvdW5kQ291bnQsIHRydWUpO1xyXG5cclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgICAgICAgd2lubmVyQnJhY2tldFdpbm5lcixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBsb3NlckJyYWNrZXRXaW5uZXIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBicmFja2V0Q29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2lubmVyQnJhY2tldExvc2VycyA9IGdldFJlc3VsdEFycmF5KFxyXG4gICAgICBcIndpbm5lclwiLFxyXG4gICAgICB3aW5uZXJSb3VuZENvdW50MixcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG9zZXJCcmFja2V0V2lubmVycyA9IGdldFJlc3VsdEFycmF5KFwibG9zZXJcIiwgbG9zZXJSb3VuZENvdW50LCB0cnVlKTtcclxuXHJcbiAgICBpZiAobG9zZXJCcmFja2V0V2lubmVycy5sZW5ndGggPiB3aW5uZXJCcmFja2V0TG9zZXJzLmxlbmd0aCkge1xyXG4gICAgICAvLyBoYW5kbGUgb2Zmc2V0IHJvdW5kcyB3aGVyZSBsb3NlciBicmFja2V0IG5lZWRzIHRvIGNhdGNoIHVwXHJcbiAgICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKGxvc2VyQnJhY2tldFdpbm5lcnMsIFtdKTtcclxuXHJcbiAgICAgIGxvc2VyUm91bmRDb3VudCArPSAxO1xyXG4gICAgICBhd2FpdCBtYWluKHBhaXJBcnJheSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gICAgICB3aW5uZXJCcmFja2V0TG9zZXJzLFxyXG4gICAgICBbXSxcclxuICAgICAgbG9zZXJCcmFja2V0V2lubmVycyxcclxuICAgICk7XHJcblxyXG4gICAgLy8gbm9ybWFsIG9wZXJhdGlvbiBlbmRzIGhlcmVcclxuICAgIHdpbm5lclJvdW5kQ291bnQyICs9IDE7XHJcbiAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbmFsTWF0Y2hlcyhyZXN1bHRzT2JqLCBlbnRyYW50Q291bnQpIHtcclxuICBjb25zdCBtYXRjaGVzID0gW107XHJcblxyXG4gIGxldCB3aW5uZXJNYXRjaENvdW50ID0gMTtcclxuICBsZXQgbG9zZXJNYXRjaENvdW50ID0gMTtcclxuICBsZXQgaW50cmFSb3VuZE1hdGNoQ291bnRlciA9IDE7XHJcbiAgbGV0IHByaW9yT2RkTG9zZXJTcGFjaW5nID0ge307XHJcbiAgLy8gcGFkIHdpbm5lciBibG9jayB3aXRoIDIgc3BhY2VyIHJvd3MgYWJvdmUgbG9zZXJzXHJcbiAgY29uc3QgbG9zZXJzUm93c09mZnNldCA9IG5leHRQb3dlck9mVHdvKGVudHJhbnRDb3VudCkgLyAyICsgMjtcclxuXHJcbiAgZm9yIChjb25zdCByb3VuZCBpbiByZXN1bHRzT2JqKSB7XHJcbiAgICAvLyByZXNldCBjb3VudGVyIG9uIGVhY2ggZnJlc2ggcm91bmRcclxuICAgIGNvbnN0IGN1cnJlbnRSb3VuZCA9IE51bWJlcihyb3VuZC5tYXRjaCgvXFxkKy8pWzBdKTtcclxuICAgIHByaW9yT2RkTG9zZXJTcGFjaW5nW2N1cnJlbnRSb3VuZF0gPSBbXTtcclxuICAgIGludHJhUm91bmRNYXRjaENvdW50ZXIgPSAxO1xyXG5cclxuICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgcmVzdWx0c09ialtyb3VuZF0pIHtcclxuICAgICAgbGV0IG9iajtcclxuICAgICAgbGV0IHJvd0NhbGM7XHJcblxyXG4gICAgICBpZiAocm91bmQuaW5jbHVkZXMoXCJ3aW5uZXJcIikpIHtcclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSAxKSByb3dDYWxjID0gaW50cmFSb3VuZE1hdGNoQ291bnRlcjtcclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID4gMSkge1xyXG4gICAgICAgICAgcm93Q2FsYyA9XHJcbiAgICAgICAgICAgIE1hdGgucG93KDIsIGN1cnJlbnRSb3VuZCAtIDIpICtcclxuICAgICAgICAgICAgMC41ICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMSkgKiAoaW50cmFSb3VuZE1hdGNoQ291bnRlciAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgaWQ6IGB3JHt3aW5uZXJNYXRjaENvdW50fWAsXHJcbiAgICAgICAgICByb3VuZDogTnVtYmVyKHJvdW5kLm1hdGNoKC9cXGQrLylbMF0pLFxyXG4gICAgICAgICAgcm93OiByb3dDYWxjLFxyXG4gICAgICAgICAgcDE6IG1hdGNoLmVudHJ5MS5uYW1lLFxyXG4gICAgICAgICAgcDI6IG1hdGNoLmVudHJ5Mi5uYW1lLFxyXG4gICAgICAgICAgcDF3aW46IG1hdGNoLmVudHJ5MS53aW4sXHJcbiAgICAgICAgICBwMndpbjogbWF0Y2guZW50cnkyLndpbixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdpbm5lck1hdGNoQ291bnQgKz0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBsb3NlciByb3VuZHNcclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSAxKSB7XHJcbiAgICAgICAgICByb3dDYWxjID0gaW50cmFSb3VuZE1hdGNoQ291bnRlcjtcclxuICAgICAgICAgIHByaW9yT2RkTG9zZXJTcGFjaW5nW2N1cnJlbnRSb3VuZF0ucHVzaChyb3dDYWxjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA+IDEgJiYgY3VycmVudFJvdW5kICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gZXZlbiByb3VuZHNcclxuXHJcbiAgICAgICAgICAvLyBnZXQgcHJpb3Igcm91bmQgc3BhY2luZyAoY3VycmVudCAtIDEpLCB0aGVuIGFjY291bnQgZm9yIG1hdGNoZXMgaW5kZXhpbmcgYXQgMSwgYXJyYXkgYXQgMFxyXG4gICAgICAgICAgcm93Q2FsYyA9XHJcbiAgICAgICAgICAgIHByaW9yT2RkTG9zZXJTcGFjaW5nW2N1cnJlbnRSb3VuZCAtIDFdW2ludHJhUm91bmRNYXRjaENvdW50ZXIgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA+IDEgJiYgY3VycmVudFJvdW5kICUgMiAhPT0gMCkge1xyXG4gICAgICAgICAgLy8gb2RkIHJvdW5kc1xyXG4gICAgICAgICAgY29uc3Qgb2RkTG9zZXJSb3VuZENvdW50ZXIgPSAoY3VycmVudFJvdW5kIC0gMykgLyAyO1xyXG4gICAgICAgICAgcm93Q2FsYyA9XHJcbiAgICAgICAgICAgIE1hdGgucG93KDIsIGN1cnJlbnRSb3VuZCAtIDMgLSBvZGRMb3NlclJvdW5kQ291bnRlcikgK1xyXG4gICAgICAgICAgICAwLjUgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygyLCBjdXJyZW50Um91bmQgLSAyIC0gb2RkTG9zZXJSb3VuZENvdW50ZXIpICpcclxuICAgICAgICAgICAgICAoaW50cmFSb3VuZE1hdGNoQ291bnRlciAtIDEpO1xyXG4gICAgICAgICAgcHJpb3JPZGRMb3NlclNwYWNpbmdbY3VycmVudFJvdW5kXS5wdXNoKHJvd0NhbGMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gZ2V0TG9zZXJSb3VuZENvdW50KGVudHJhbnRDb3VudCkpIHtcclxuICAgICAgICAgIC8vIHdhbnQgMC41IHBhc3Qgd2lubmVyIGJyYWNrZXQsIGJ1dCBzdWJ0cmFjdCAyIGZyb20gdGhhdCB0byBhY2NvdW50IGZvciB0aGVcclxuICAgICAgICAgIC8vIGFscmVhZHkgZXN0YWJsaXNoZWQgb2Zmc2V0IGJ1ZmZlclxyXG4gICAgICAgICAgcm93Q2FsYyA9IC0xLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIGlkOiBgbCR7bG9zZXJNYXRjaENvdW50fWAsXHJcbiAgICAgICAgICByb3VuZDogTnVtYmVyKHJvdW5kLm1hdGNoKC9cXGQrLylbMF0pLFxyXG4gICAgICAgICAgcm93OiByb3dDYWxjICsgbG9zZXJzUm93c09mZnNldCxcclxuICAgICAgICAgIHAxOiBtYXRjaC5lbnRyeTEubmFtZSxcclxuICAgICAgICAgIHAyOiBtYXRjaC5lbnRyeTIubmFtZSxcclxuICAgICAgICAgIHAxd2luOiBtYXRjaC5lbnRyeTEud2luLFxyXG4gICAgICAgICAgcDJ3aW46IG1hdGNoLmVudHJ5Mi53aW4sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb3Nlck1hdGNoQ291bnQgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW50cmFSb3VuZE1hdGNoQ291bnRlciArPSAxO1xyXG4gICAgICBtYXRjaGVzLnB1c2gob2JqKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2cobWF0Y2hlcyk7XHJcbiAgcmV0dXJuIG1hdGNoZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdCcmFja2V0TGluZShzdGFydCwgZW5kKSB7XHJcbiAgY29uc3QgbWlkWCA9IHN0YXJ0LnggKyAoZW5kLnggLSBzdGFydC54KSAvIDI7XHJcblxyXG4gIGNvbnN0IHBhdGhEYXRhID0gYFxyXG4gIE0gJHtzdGFydC54fSAke3N0YXJ0Lnl9XHJcbiAgSCAke21pZFh9XHJcbiAgViAke2VuZC55fVxyXG4gIEggJHtlbmQueH1cclxuICBgO1xyXG5cclxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoRGF0YSk7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjZmZmZmZmZmZcIik7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIyXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJ2ZWN0b3ItZWZmZWN0XCIsIFwibm9uLXNjYWxpbmctc3Ryb2tlXCIpO1xyXG5cclxuICBicmFja2V0TGluZXMuYXBwZW5kKHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RmluYWxCcmFja2V0KHJlc3VsdHNPYmopIHtcclxuICBjb25zdCBlbnRyYW50cyA9IHJlc3VsdHNPYmoud2lubmVyUm91bmQxLmxlbmd0aCAqIDI7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IGdldEZpbmFsTWF0Y2hlcyhyZXN1bHRzT2JqLCBlbnRyYW50cyk7XHJcblxyXG4gIGNvbnN0IG5vZGVQb3NpdGlvbnMgPSB7fTtcclxuICBjb25zdCBoYWxmRW50cmFudENvdW50ID0gZW50cmFudHMgLyAyO1xyXG4gIGNvbnN0IHF1YXJ0ZXJFbnRyYW50Q291bnQgPSBoYWxmRW50cmFudENvdW50IC8gMjtcclxuICBjb25zdCBtYXhXaW5uZXJSb3VuZHMgPSBnZXRXaW5uZXJSb3VuZENvdW50KGVudHJhbnRzKTtcclxuICBjb25zdCBtYXhMb3NlclJvdW5kcyA9IGdldExvc2VyUm91bmRDb3VudChlbnRyYW50cyk7XHJcbiAgbGV0IHdpbm5lcklucHV0Q291bnRlciA9IDE7XHJcbiAgbGV0IGxvc2VySW5wdXRDb3VudGVyID0gMTtcclxuXHJcbiAgbGV0IG1heFggPSAwO1xyXG4gIGxldCBtYXhZID0gMDtcclxuICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwibWF0Y2hOb2RlXCIpO1xyXG4gICAgZWwuaWQgPSBtYXRjaC5pZDtcclxuXHJcbiAgICBpZiAobWF0Y2gucDF3aW4pIHtcclxuICAgICAgZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDEgd2lubmVyXCI+JHttYXRjaC5wMX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3MgPSBcInAyIGxvc2VyXCI+JHttYXRjaC5wMn08L2Rpdj5cclxuICAgIGA7XHJcbiAgICB9XHJcbiAgICBpZiAobWF0Y2gucDJ3aW4pIHtcclxuICAgICAgZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDEgbG9zZXJcIj4ke21hdGNoLnAxfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDIgd2lubmVyXCI+JHttYXRjaC5wMn08L2Rpdj5cclxuICAgIGA7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgYW5kIHNldCBhYnNvbHV0ZSB4LHkgcG9zaXRpb25zXHJcbiAgICBjb25zdCB4UG9zaXRpb24gPSBnZXRYKG1hdGNoLnJvdW5kKTtcclxuICAgIGNvbnN0IHlQb3NpdGlvbiA9IGdldFkobWF0Y2gucm93KTtcclxuICAgIGlmICh4UG9zaXRpb24gPiBtYXhYKSBtYXhYID0geFBvc2l0aW9uO1xyXG4gICAgaWYgKHlQb3NpdGlvbiA+IG1heFkpIG1heFkgPSB5UG9zaXRpb247XHJcblxyXG4gICAgZWwuc3R5bGUubGVmdCA9IGAke3hQb3NpdGlvbn1weGA7XHJcbiAgICBlbC5zdHlsZS50b3AgPSBgJHt5UG9zaXRpb259cHhgO1xyXG4gICAgZWwuc3R5bGUud2lkdGggPSBgJHtCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSH1weGA7XHJcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHtCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFR9cHhgO1xyXG4gICAgZWwuc3R5bGUud2hpdGVTcGFjZSA9IFwibm9ybWFsXCI7XHJcblxyXG4gICAgLy8gc2F2ZSBjb29yZGluYXRlcyBmb3IgbGluZSBhdHRhY2htZW50c1xyXG4gICAgbm9kZVBvc2l0aW9uc1ttYXRjaC5pZF0gPSB7XHJcbiAgICAgIGlucHV0OiB7IHg6IHhQb3NpdGlvbiwgeTogeVBvc2l0aW9uICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUIC8gMiB9LFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICB4OiB4UG9zaXRpb24gKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSCxcclxuICAgICAgICB5OiB5UG9zaXRpb24gKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQgLyAyLFxyXG4gICAgICB9LFxyXG4gICAgICByb3VuZDogbWF0Y2gucm91bmQsXHJcbiAgICB9O1xyXG4gICAgbWF0Y2hlc0xheWVyLmFwcGVuZChlbCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHNldCBicmFja2V0IGNvbnRhaW5lciBkaXYgdG8gZml0IHRoZSBtYXRjaGVzICsgNTAgZXh0cmEgcGFkZGluZ1xyXG4gIGNvbnN0IHRvdGFsSGVpZ2h0ID0gbWF4WSArIEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCArIDUwO1xyXG4gIGNvbnN0IHRvdGFsV2lkdGggPSBtYXhYICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfV0lEVEggKyA1MDtcclxuXHJcbiAgYnJhY2tldENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHt0b3RhbEhlaWdodH1weGA7XHJcbiAgYnJhY2tldENvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke3RvdGFsV2lkdGh9cHhgO1xyXG5cclxuICBjb25zb2xlLmxvZyhub2RlUG9zaXRpb25zKTtcclxuICBPYmplY3Qua2V5cyhub2RlUG9zaXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGNvbnN0IHNwbGl0ID0ga2V5Lm1hdGNoKC8oW3dsXSkoXFxkKykvKTtcclxuICAgIGlmIChzcGxpdFsxXSA9PT0gXCJ3XCIpIHtcclxuICAgICAgY29uc3QgbmV4dElucHV0SWQgPSBgdyR7d2lubmVySW5wdXRDb3VudGVyICsgaGFsZkVudHJhbnRDb3VudH1gO1xyXG5cclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCA9PT0gbWF4V2lubmVyUm91bmRzKSB7XHJcbiAgICAgICAgLy8gZmluYWwgcm91bmQgZXhjZXB0aW9uXHJcbiAgICAgICAgLy8gd2lubmVyIGFuZCBsb3NlciBicmFja2V0cyBoYXZlIHNhbWUgbWF0Y2ggY291bnQsIGFwcGx5IGN1cnJlbnQgY291bnQgdG8gbC1JRCB0byBtYXRjaFxyXG4gICAgICAgIC8vIHdpbm5lciB3aW5uZXIgd2l0aCBsb3NlciB3aW5uZXIgaW4gZmluYWwgcm91bmRcclxuICAgICAgICBjb25zdCBmaW5hbE1hdGNoSWQgPSBgbCR7c3BsaXRbMl19YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaW5hbE1hdGNoSWQpO1xyXG4gICAgICAgIGRyYXdCcmFja2V0TGluZShcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNba2V5XS5vdXRwdXQsXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2ZpbmFsTWF0Y2hJZF0uaW5wdXQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobm9kZVBvc2l0aW9uc1trZXldLnJvdW5kIDwgbWF4V2lubmVyUm91bmRzKVxyXG4gICAgICAgIGRyYXdCcmFja2V0TGluZShcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNba2V5XS5vdXRwdXQsXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW25leHRJbnB1dElkXS5pbnB1dCxcclxuICAgICAgICApO1xyXG4gICAgICBpZiAoTnVtYmVyKHNwbGl0WzJdKSAlIDIgPT09IDApIHtcclxuICAgICAgICAvLyBvbmx5IGluY3JlbWVudCBjb3VudGVyIGV2ZXJ5IG90aGVyIG1hdGNoIHNpbmNlIGEgd2lubmVyIGJyYWNrZXQgZnVubmVscyB0d28gaW50byBvbmVcclxuICAgICAgICB3aW5uZXJJbnB1dENvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNwbGl0WzFdID09PSBcImxcIikge1xyXG4gICAgICBpZiAobm9kZVBvc2l0aW9uc1trZXldLnJvdW5kID09PSBtYXhMb3NlclJvdW5kcykge1xyXG4gICAgICAgIC8vIGZpbmFsIGxvc2VyIHJvdW5kIGhhcyBubyBvdXRwdXQsIGJyYWNrZXQgaXMgZmluaXNoZWRcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5leHRJbnB1dElkID0gYGwke2xvc2VySW5wdXRDb3VudGVyICsgcXVhcnRlckVudHJhbnRDb3VudH1gO1xyXG5cclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCAlIDIgPT09IDApIHtcclxuICAgICAgICAvLyBldmVuIHJvdW5kc1xyXG4gICAgICAgIGRyYXdCcmFja2V0TGluZShcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNba2V5XS5vdXRwdXQsXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW25leHRJbnB1dElkXS5pbnB1dCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChOdW1iZXIoc3BsaXRbMl0pICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gb25seSBpbmNyZW1lbnQgY291bnRlciBldmVyeSBvdGhlciBtYXRjaCBzaW5jZSBhIHdpbm5lciBicmFja2V0IGZ1bm5lbHMgdHdvIGludG8gb25lXHJcbiAgICAgICAgICBsb3NlcklucHV0Q291bnRlciArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobm9kZVBvc2l0aW9uc1trZXldLnJvdW5kICUgMiAhPT0gMCkge1xyXG4gICAgICAgIC8vb2RkIHJvdW5kc1xyXG4gICAgICAgIGRyYXdCcmFja2V0TGluZShcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNba2V5XS5vdXRwdXQsXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW25leHRJbnB1dElkXS5pbnB1dCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGxvc2VySW5wdXRDb3VudGVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnN0IG5leHRSb3VuZE51bSA9IE51bWJlcihzcGxpdFsyXSkgKyAxO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3BsaXRbMV0gKyBuZXh0Um91bmROdW0pO1xyXG4gICAgLy8gZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgLy8gICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgLy8gICBub2RlUG9zaXRpb25zW3NwbGl0WzFdICsgbmV4dFJvdW5kTnVtXS5pbnB1dCxcclxuICAgIC8vICk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRyYXdCcmFja2V0TGluZShub2RlUG9zaXRpb25zW1wibTFcIl0ub3V0cHV0LCBub2RlUG9zaXRpb25zW1wibTNcIl0uaW5wdXQpO1xyXG4gIC8vIGRyYXdCcmFja2V0TGluZShub2RlUG9zaXRpb25zW1wibTJcIl0ub3V0cHV0LCBub2RlUG9zaXRpb25zW1wibTNcIl0uaW5wdXQpO1xyXG59XHJcblxyXG5wYWlyQXJyYXkgPSBnZW5lcmF0ZUJyYWNrZXRQYWlyaW5ncyhcclxuICBicmFja2V0RW50cmllcyxcclxuICBnZW5lcmF0ZUJ5ZXMoYnJhY2tldEVudHJpZXMubGVuZ3RoKSxcclxuICBmYWxzZSxcclxuICB0cnVlLFxyXG4pO1xyXG5hZGp1c3RNYXRjaE5vZGVIZWlnaHQoKTtcclxuLy8gZ2V0RmluYWxNYXRjaGVzKHRlc3RSZXN1bHQpO1xyXG4vLyBkaXNwbGF5RmluYWxCcmFja2V0KHRlc3RSZXN1bHQpO1xyXG5tYWluKHBhaXJBcnJheSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==