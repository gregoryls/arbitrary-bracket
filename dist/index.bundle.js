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

// recursion testing here ///////////////////////////////////////////////

function computeByeCount(entries) {
  return nextPowerOfTwo(entries.length) - entries.length;
}

function normalizeEntryCount(entries) {
  const byes = computeByeCount(entries);

  const entriesComplete = entries.slice();

  for (let i = 0; i < byes; i += 1) {
    entriesComplete.push({
      id: `bye-${i}`,
      isBye: true,
    });
  }

  return entriesComplete;
}

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

function buildRounds(entries) {
  // ensure entries are coming in as power of two
  const rounds = [];
  const winnerRoundsTotal = Math.log2(entries.length);

  // winner bracket
  let currentEntries = entries.slice();
  for (let r = 0; r < winnerRoundsTotal; r += 1) {
    const matches = [];
    for (let i = 0; i < currentEntries.length; i += 2) {
      matches.push(
        createMatch(`w${r}-${i}`, currentEntries[i], currentEntries[i + 1]),
      );
    }
    rounds.push(createRound(`w${r}`, "winner", matches));
    // currentEntries = new Array(matches.length).fill(null);
    currentEntries = [];
  }
}

// end recursion testing ///////////////////////////////////////////////

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxFQUFFO0FBQ2pCLE1BQU07QUFDTixNQUFNO0FBQ04sTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkMsK0JBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDLHNCQUFzQixVQUFVO0FBQ2hDLHdCQUF3QiwyQkFBMkI7QUFDbkQseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQThEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0NBQXNDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBd0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0NBQWM7QUFDaEIsZUFBZSx3Q0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL2ltZ3xzeW5jfG5vbnJlY3Vyc2l2ZXxFOi8uKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBcclxuUHJpbWFyeSBCYWNrZ3JvdW5kICMwRDBEMEQgXHJcblN1cmZhY2UgLyBQYW5lbCBCYWNrZ3JvdW5kICMxNjE2MTZcclxuQWNjZW50IEdvbGQgKFByaW1hcnkpICNDOEE5NTFcclxuQWNjZW50IEdvbGQgKEJyaWdodCAvIEhvdmVyKSAjRTVDNzZCXHJcblRleHQgKFByaW1hcnkpICNGMEYwRjBcclxuVGV4dCAoTXV0ZWQpICM5QzlDOUNcclxuQm9yZGVycyAvIExpbmVzICMyNDI0MjRcclxuU3VjY2VzcyAvIEhpZ2hsaWdodCAoc2FnZSBncmVlbikgIzhFQzA3Q1xyXG5FcnJvciAoc29mdCBjcmltc29uKSAjRDE2OTY5XHJcbiovXHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xyXG4gIGNvbG9yOiAjZjBmMGYwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI3JvdW5kRGlzcGxheSxcclxuI21hdGNoRGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3NlbGVjdGlvbkRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5lbnRyeSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc2VsZWN0aW9uRGlzcGxheSBpbWcge1xyXG4gIG1heC13aWR0aDogMzB2dztcclxuICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5yb3VuZFdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmUyNTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOGVjMDdjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuI25leHRSb3VuZCB7XHJcbiAgbWFyZ2luOiA1dmggMzV2dyAwIDM1dnc7XHJcbn1cclxuXHJcbi8qIGJyYWNrZXQgZGlzcGxheSAqL1xyXG5cclxuI2JyYWNrZXRDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNicmFja2V0TGluZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1hdGNoTm9kZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzQ2YjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhhOTUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICBnYXA6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2lubmVyIHtcclxuICBjb2xvcjogI2ZmYmUwYztcclxufVxyXG5cclxuLmxvc2VyIHtcclxuICBjb2xvcjogI2QxNjk2OTtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Q0FVQzs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCOztFQUVsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxyXFxuUHJpbWFyeSBCYWNrZ3JvdW5kICMwRDBEMEQgXFxyXFxuU3VyZmFjZSAvIFBhbmVsIEJhY2tncm91bmQgIzE2MTYxNlxcclxcbkFjY2VudCBHb2xkIChQcmltYXJ5KSAjQzhBOTUxXFxyXFxuQWNjZW50IEdvbGQgKEJyaWdodCAvIEhvdmVyKSAjRTVDNzZCXFxyXFxuVGV4dCAoUHJpbWFyeSkgI0YwRjBGMFxcclxcblRleHQgKE11dGVkKSAjOUM5QzlDXFxyXFxuQm9yZGVycyAvIExpbmVzICMyNDI0MjRcXHJcXG5TdWNjZXNzIC8gSGlnaGxpZ2h0IChzYWdlIGdyZWVuKSAjOEVDMDdDXFxyXFxuRXJyb3IgKHNvZnQgY3JpbXNvbikgI0QxNjk2OVxcclxcbiovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI3JvdW5kRGlzcGxheSxcXHJcXG4jbWF0Y2hEaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGlvbkRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uRGlzcGxheSBpbWcge1xcclxcbiAgbWF4LXdpZHRoOiAzMHZ3O1xcclxcbiAgbWF4LWhlaWdodDogNDB2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5yb3VuZFdpbm5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyZTI1O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzhlYzA3YztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV4dFJvdW5kIHtcXHJcXG4gIG1hcmdpbjogNXZoIDM1dncgMCAzNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBicmFja2V0IGRpc3BsYXkgKi9cXHJcXG5cXHJcXG4jYnJhY2tldENvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2JyYWNrZXRMaW5lcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0Y2hOb2RlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzM0NmI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhhOTUxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZiZTBjO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9zZXIge1xcclxcbiAgY29sb3I6ICNkMTY5Njk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9Bbm5pZSBCb3QuanBnXCI6IFwiLi9zcmMvaW1nL0FubmllIEJvdC5qcGdcIixcblx0XCIuL0ZyYW5rZW5zdGVpbi5qcGdcIjogXCIuL3NyYy9pbWcvRnJhbmtlbnN0ZWluLmpwZ1wiLFxuXHRcIi4vRnVyaWVzIG9mIENhbGRlcm9uLmpwZ1wiOiBcIi4vc3JjL2ltZy9GdXJpZXMgb2YgQ2FsZGVyb24uanBnXCIsXG5cdFwiLi9PbGQgTWFuJ3MgV2FyLmpwZ1wiOiBcIi4vc3JjL2ltZy9PbGQgTWFuJ3MgV2FyLmpwZ1wiLFxuXHRcIi4vUmVkIFJhYmJpdC5qcGdcIjogXCIuL3NyYy9pbWcvUmVkIFJhYmJpdC5qcGdcIixcblx0XCIuL1N0ZXZlIEpvYnMuanBnXCI6IFwiLi9zcmMvaW1nL1N0ZXZlIEpvYnMuanBnXCIsXG5cdFwiLi9TdG9uZXIuanBnXCI6IFwiLi9zcmMvaW1nL1N0b25lci5qcGdcIixcblx0XCIuL1RoZSAxMDAtWWVhci1PbGQgTWFuIFdobyBDbGltYmVkIE91dCB0aGUgV2luZG93IGFuZCBEaXNhcHBlYXJlZC5qcGdcIjogXCIuL3NyYy9pbWcvVGhlIDEwMC1ZZWFyLU9sZCBNYW4gV2hvIENsaW1iZWQgT3V0IHRoZSBXaW5kb3cgYW5kIERpc2FwcGVhcmVkLmpwZ1wiLFxuXHRcIi4vVGhlIERldmlscy5qcGdcIjogXCIuL3NyYy9pbWcvVGhlIERldmlscy5qcGdcIixcblx0XCIuL1RoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLmpwZ1wiOiBcIi4vc3JjL2ltZy9UaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5qcGdcIixcblx0XCIuL1RoZSBUYWludGVkIEN1cC5qcGdcIjogXCIuL3NyYy9pbWcvVGhlIFRhaW50ZWQgQ3VwLmpwZ1wiLFxuXHRcIi4vVGhlIFdpbGwgb2YgdGhlIE1hbnkucG5nXCI6IFwiLi9zcmMvaW1nL1RoZSBXaWxsIG9mIHRoZSBNYW55LnBuZ1wiLFxuXHRcIi4vYXBwbGUuanBnXCI6IFwiLi9zcmMvaW1nL2FwcGxlLmpwZ1wiLFxuXHRcIi4vYmFuYW5hLmpwZ1wiOiBcIi4vc3JjL2ltZy9iYW5hbmEuanBnXCIsXG5cdFwiLi9ieWUuanBnXCI6IFwiLi9zcmMvaW1nL2J5ZS5qcGdcIixcblx0XCIuL21hbmdvLmpwZ1wiOiBcIi4vc3JjL2ltZy9tYW5nby5qcGdcIixcblx0XCIuL3BlYXIuanBnXCI6IFwiLi9zcmMvaW1nL3BlYXIuanBnXCIsXG5cdFwiLi9waW5lYXBwbGUuanBnXCI6IFwiLi9zcmMvaW1nL3BpbmVhcHBsZS5qcGdcIixcblx0XCIuL3NhdXNhZ2UuanBnXCI6IFwiLi9zcmMvaW1nL3NhdXNhZ2UuanBnXCIsXG5cdFwiLi9zdHJhd2JlcnJ5LmpwZ1wiOiBcIi4vc3JjL2ltZy9zdHJhd2JlcnJ5LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkaVwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJjb25zdCBpbWFnZUNvbnRleHQgPSBpbXBvcnQubWV0YS53ZWJwYWNrQ29udGV4dChcIi4vaW1nXCIsIHtcclxuICByZWN1cnNpdmU6IGZhbHNlLFxyXG4gIHJlZ0V4cDogL1xcLihwbmd8anBlP2d8c3ZnKSQvaSxcclxufSk7XHJcblxyXG5jb25zdCBpdGVtSW1hZ2VzID0ge307XHJcbmltYWdlQ29udGV4dC5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgLy8gcmVtb3ZlIHByZWZpeCBhbmQgZXh0ZW5zaW9uIGZyb20gaW1hZ2UgZmlsZSBuYW1lc1xyXG4gIGNvbnN0IGZpbGVOYW1lID0ga2V5LnJlcGxhY2UoXCIuL1wiLCBcIlwiKS5yZXBsYWNlKC9cXC5bXi8uXSskLywgXCJcIik7XHJcbiAgaXRlbUltYWdlc1tmaWxlTmFtZV0gPSBpbWFnZUNvbnRleHQoa2V5KTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBpdGVtSW1hZ2VzIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGJyYWNrZXRFbnRyaWVzIGZyb20gXCIuL2l0ZW1zLmpzb25cIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuaW1wb3J0IHRlc3RSZXN1bHQgZnJvbSBcIi4vdGVzdFJlc3VsdDEyLmpzb25cIjtcclxuXHJcbi8vIGNvbnN0IGR5bmFtaWNJbWFnZSA9IHJlcXVpcmUoYC4vaW1nLyR7aW1hZ2VOYW1lfS5qcGdgKTtcclxuXHJcbi8vIGNoZWNrIGxvc2VyIGJyYWNrZXQgbGVuZ3RoXHJcbi8vIFRPRE8gY2xpY2sgdG8gc2VsZWN0IGVudHJ5LCB0aGVuIGEgY29uZmlybSBidXR0b24gb24gdGhlIGJvdHRvbVxyXG5cclxuY29uc3Qgc2VsZWN0aW9uRGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0aW9uRGlzcGxheVwiKTtcclxuY29uc3QgbWF0Y2hEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRjaERpc3BsYXlcIik7XHJcbmNvbnN0IHJvdW5kRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91bmREaXNwbGF5XCIpO1xyXG5jb25zdCBuZXh0Um91bmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRSb3VuZFwiKTtcclxuXHJcbmNvbnN0IGJyYWNrZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyYWNrZXRDb250YWluZXJcIik7XHJcbmNvbnN0IG1hdGNoZXNMYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF0Y2hlc0xheWVyXCIpO1xyXG5jb25zdCBicmFja2V0TGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyYWNrZXRMaW5lc1wiKTtcclxuXHJcbmNvbnN0IHJlc3VsdHMgPSB7fTtcclxubGV0IHdpbm5lclJvdW5kQ291bnQgPSAxO1xyXG5sZXQgd2lubmVyUm91bmRDb3VudDIgPSAxO1xyXG5sZXQgbG9zZXJSb3VuZENvdW50ID0gMDtcclxubGV0IHBhaXJBcnJheSA9IFtdO1xyXG5sZXQgd2lubmVyQnJhY2tldFdpbm5lcnMgPSBbXTtcclxubGV0IHdpbm5lckJyYWNrZXRMb3NlcnMgPSBbXTtcclxubGV0IGxvc2VyQnJhY2tldFdpbm5lcnMgPSBbXTtcclxubGV0IGN1cnJlbnRSb3VuZCA9IFwid2lubmVyXCI7XHJcbmxldCBuZXh0Um91bmQgPSBcImxvc2VyXCI7XHJcbmxldCBicmFja2V0Q29tcGxldGUgPSBmYWxzZTtcclxuXHJcbmNvbnN0IEJSQUNLRVRfQ09ORklHID0ge1xyXG4gIE1BVENIX1dJRFRIOiAxODAsXHJcbiAgTUFUQ0hfSEVJR0hUOiA2MCxcclxuICBYX0dBUDogNjAsXHJcbiAgWV9HQVA6IDMwLFxyXG4gIC8vIHggaG9yaXpvbnRhbCBnYXAsIHkgdmVydGljYWxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkanVzdE1hdGNoTm9kZUhlaWdodCgpIHtcclxuICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZHVtbXkuY2xhc3NOYW1lID0gXCJtYXRjaE5vZGVcIjtcclxuICBkdW1teS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBkdW1teS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICBkdW1teS5zdHlsZS53aWR0aCA9IGAke0JSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIfXB4YDtcclxuICBkdW1teS5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3JtYWxcIjtcclxuICBtYXRjaGVzTGF5ZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG5cclxuICBicmFja2V0RW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgZHVtbXkuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDFcIj4ke2VudHJ5Lm5hbWV9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMlwiPiR7ZW50cnkubmFtZX08L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBkdW1teS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAoaGVpZ2h0ICsgMTAgPiBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQpIHtcclxuICAgICAgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUID0gaGVpZ2h0ICsgNDA7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbWF0Y2hlc0xheWVyLnJlbW92ZUNoaWxkKGR1bW15KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WChyb3VuZEluZGV4KSB7XHJcbiAgLy8gemVyby1pbmRleGVkIHJvdW5kIG51bWJlciwgKzIwIGJ1aWx0LWluIHBhZGRpbmdcclxuICByZXR1cm4gcm91bmRJbmRleCAqIChCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSCArIEJSQUNLRVRfQ09ORklHLlhfR0FQKSArIDIwO1xyXG59XHJcbmZ1bmN0aW9uIGdldFkobWF0Y2hJbmRleCkge1xyXG4gIC8vIHplcm8taW5kZXhlZCwgdmVydGljYWwgc2xvdCBmb3IgbWF0Y2hlc1xyXG4gIHJldHVybiBtYXRjaEluZGV4ICogKEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCArIEJSQUNLRVRfQ09ORklHLllfR0FQKSArIDIwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0UG93ZXJPZlR3byhudW1iZXIpIHtcclxuICBpZiAobnVtYmVyIDw9IDAgfHwgbnVtYmVyID4gNTIgfHwgIU51bWJlci5pc0ludGVnZXIobnVtYmVyKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3VibWl0IGEgcmVhc29uYWJsZSBudW1iZXIgb2YgZW50cmFudHNcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXh0UG93ZXIgPSAyICoqIE1hdGguY2VpbChNYXRoLmxvZzIobnVtYmVyKSk7XHJcbiAgLy8gIHJldHVybiAxIDw8IE1hdGguY2VpbChNYXRoLmxvZzIobikpO1xyXG4gIC8vIGxlZnQgc2hpZnQgb3BlcmF0b3IgYWxzbyB3b3JrcyBoZXJlIGFuZCBzaG91bGQgYmUgc2xpZ2h0bHkgZmFzdGVyLFxyXG4gIC8vIGJ1dCBpcyBsZXNzIHJlYWRhYmxlIGZvciB0aGUgc2NvcGUgb2YgdGhpcyBwcm9qZWN0XHJcblxyXG4gIHJldHVybiBuZXh0UG93ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbm5lclJvdW5kQ291bnQobnVtYmVyT2ZFbnRyYW50cykge1xyXG4gIGNvbnN0IHRvdGFsQ291bnQgPSBuZXh0UG93ZXJPZlR3byhudW1iZXJPZkVudHJhbnRzKTtcclxuICBjb25zdCByb3VuZHMgPSBNYXRoLmxvZzIodG90YWxDb3VudCk7XHJcbiAgcmV0dXJuIHJvdW5kcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9zZXJSb3VuZENvdW50KG51bWJlck9mRW50cmFudHMpIHtcclxuICBjb25zdCB0b3RhbENvdW50ID0gbmV4dFBvd2VyT2ZUd28obnVtYmVyT2ZFbnRyYW50cyk7XHJcbiAgY29uc3Qgcm91bmRzID0gTWF0aC5sb2cyKHRvdGFsQ291bnQpICogMiAtIDE7XHJcbiAgcmV0dXJuIHJvdW5kcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCeWVzKG51bWJlck9mRW50cmFudHMpIHtcclxuICBjb25zdCBieWVDb3VudCA9IG5leHRQb3dlck9mVHdvKG51bWJlck9mRW50cmFudHMpIC0gbnVtYmVyT2ZFbnRyYW50cztcclxuICBjb25zdCBieWVPYmpzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieWVDb3VudDsgaSArPSAxKSB7XHJcbiAgICBieWVPYmpzW2ldID0gYGJ5ZSR7aSArIDF9YDtcclxuICB9XHJcbiAgcmV0dXJuIGJ5ZU9ianM7XHJcbn1cclxuXHJcbi8vIHJlY3Vyc2lvbiB0ZXN0aW5nIGhlcmUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVCeWVDb3VudChlbnRyaWVzKSB7XHJcbiAgcmV0dXJuIG5leHRQb3dlck9mVHdvKGVudHJpZXMubGVuZ3RoKSAtIGVudHJpZXMubGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVFbnRyeUNvdW50KGVudHJpZXMpIHtcclxuICBjb25zdCBieWVzID0gY29tcHV0ZUJ5ZUNvdW50KGVudHJpZXMpO1xyXG5cclxuICBjb25zdCBlbnRyaWVzQ29tcGxldGUgPSBlbnRyaWVzLnNsaWNlKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnllczsgaSArPSAxKSB7XHJcbiAgICBlbnRyaWVzQ29tcGxldGUucHVzaCh7XHJcbiAgICAgIGlkOiBgYnllLSR7aX1gLFxyXG4gICAgICBpc0J5ZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVudHJpZXNDb21wbGV0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWF0Y2goaWQsIGEgPSBudWxsLCBiID0gbnVsbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCxcclxuICAgIGEsXHJcbiAgICBiLFxyXG4gICAgd2lubmVyOiBudWxsLFxyXG4gICAgbG9zZXI6IG51bGwsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUm91bmQoaWQsIHR5cGUsIG1hdGNoZXMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQsXHJcbiAgICB0eXBlLCAvLyB3aW5uZXIsIGxvc2VyLCBmaW5hbFxyXG4gICAgbWF0Y2hlcywgLy9hcnJheVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUm91bmRzKGVudHJpZXMpIHtcclxuICAvLyBlbnN1cmUgZW50cmllcyBhcmUgY29taW5nIGluIGFzIHBvd2VyIG9mIHR3b1xyXG4gIGNvbnN0IHJvdW5kcyA9IFtdO1xyXG4gIGNvbnN0IHdpbm5lclJvdW5kc1RvdGFsID0gTWF0aC5sb2cyKGVudHJpZXMubGVuZ3RoKTtcclxuXHJcbiAgLy8gd2lubmVyIGJyYWNrZXRcclxuICBsZXQgY3VycmVudEVudHJpZXMgPSBlbnRyaWVzLnNsaWNlKCk7XHJcbiAgZm9yIChsZXQgciA9IDA7IHIgPCB3aW5uZXJSb3VuZHNUb3RhbDsgciArPSAxKSB7XHJcbiAgICBjb25zdCBtYXRjaGVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRFbnRyaWVzLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgIG1hdGNoZXMucHVzaChcclxuICAgICAgICBjcmVhdGVNYXRjaChgdyR7cn0tJHtpfWAsIGN1cnJlbnRFbnRyaWVzW2ldLCBjdXJyZW50RW50cmllc1tpICsgMV0pLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcm91bmRzLnB1c2goY3JlYXRlUm91bmQoYHcke3J9YCwgXCJ3aW5uZXJcIiwgbWF0Y2hlcykpO1xyXG4gICAgLy8gY3VycmVudEVudHJpZXMgPSBuZXcgQXJyYXkobWF0Y2hlcy5sZW5ndGgpLmZpbGwobnVsbCk7XHJcbiAgICBjdXJyZW50RW50cmllcyA9IFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZW5kIHJlY3Vyc2lvbiB0ZXN0aW5nIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUJyYWNrZXRQYWlyaW5ncyhcclxuICBicmFja2V0RW50cmllcyxcclxuICBieWVFbnRyaWVzLFxyXG4gIG90aGVyRW50cmllcyxcclxuICBmaXJzdFJvdW5kQm9vbCxcclxuKSB7XHJcbiAgY29uc3QgcGFpcmluZ3MgPSBbXTtcclxuXHJcbiAgLy8gb3B0aW9uYWwgaGFuZGxpbmcgb2YgYmxlbmRpbmcgd2lubmVyIGJyYWNrZXQgbG9zZXJzIHdpdGggbG9zZXIgYnJhY2tldCB3aW5uZXJzXHJcbiAgaWYgKG90aGVyRW50cmllcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicmFja2V0RW50cmllcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBwYWlyaW5nc1tpXSA9IHtcclxuICAgICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICAgIGVudHJ5Mjogb3RoZXJFbnRyaWVzW2ldLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhaXJpbmdzO1xyXG4gIH1cclxuICAvLyBoYW5kbGUgZmlyc3Qgcm91bmQgc2NlbmFyaW9zIHdpdGggYnllcyBwcmVzZW50XHJcbiAgaWYgKGJ5ZUVudHJpZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnllRW50cmllcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBwYWlyaW5nc1tpXSA9IHtcclxuICAgICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICAgIGVudHJ5MjogeyBuYW1lOiBieWVFbnRyaWVzW2ldIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IGJ5ZUVudHJpZXMubGVuZ3RoLCBqID0gLTE7XHJcbiAgICAgIGkgPCBuZXh0UG93ZXJPZlR3byhicmFja2V0RW50cmllcy5sZW5ndGgpIC8gMjtcclxuICAgICAgaSArPSAxLCBqIC09IDFcclxuICAgICkge1xyXG4gICAgICBwYWlyaW5nc1tpXSA9IHtcclxuICAgICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICAgIGVudHJ5MjogYnJhY2tldEVudHJpZXMuYXQoaiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG5cclxuICAvLyBmaXJzdCByb3VuZCwgYnV0IG5vIGJ5ZXMgbmVlZGVkXHJcbiAgaWYgKCFieWVFbnRyaWVzICYmIGZpcnN0Um91bmRCb29sKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IC0xOyBpIDwgYnJhY2tldEVudHJpZXMubGVuZ3RoIC8gMjsgaSArPSAxLCBqIC09IDEpIHtcclxuICAgICAgcGFpcmluZ3NbaV0gPSB7XHJcbiAgICAgICAgZW50cnkxOiBicmFja2V0RW50cmllc1tpXSxcclxuICAgICAgICBlbnRyeTI6IGJyYWNrZXRFbnRyaWVzLmF0KGopLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhaXJpbmdzO1xyXG4gIH1cclxuXHJcbiAgLy8gY2F0Y2ggc2luZ2xlLXNvdXJjZSBicmFja2V0IGdlbmVyYXRpb25cclxuICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBicmFja2V0RW50cmllcy5sZW5ndGg7IGkgKz0gMiwgaiArPSAxKSB7XHJcbiAgICBwYWlyaW5nc1tqXSA9IHtcclxuICAgICAgZW50cnkxOiBicmFja2V0RW50cmllc1tpXSxcclxuICAgICAgZW50cnkyOiBicmFja2V0RW50cmllc1tpICsgMV0sXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4gcGFpcmluZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudHJ5RGl2KGVudHJ5T2JqKSB7XHJcbiAgY29uc3QgZW50cnlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgZW50cnlXcmFwLmNsYXNzTGlzdC5hZGQoXCJlbnRyeVwiKTtcclxuICBoMi50ZXh0Q29udGVudCA9IGVudHJ5T2JqLm5hbWU7XHJcbiAgcC50ZXh0Q29udGVudCA9IGVudHJ5T2JqLmRlc2NyaXB0aW9uO1xyXG4gIHAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICBpZiAodXRpbHMuaXRlbUltYWdlc1tlbnRyeU9iai5uYW1lXSkge1xyXG4gICAgaW1nLnNyYyA9IHV0aWxzLml0ZW1JbWFnZXNbZW50cnlPYmoubmFtZV07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGZpbGwgc3RvY2sgaW1hZ2UgaWYgbm8gcGljdHVyZSBwcm92aWRlZCAodXN1YWxseSBhIGdlbmVyYXRlZCBieWUpXHJcbiAgICBpbWcuc3JjID0gdXRpbHMuaXRlbUltYWdlc1tcImJ5ZVwiXTtcclxuICB9XHJcblxyXG4gIGVudHJ5V3JhcC5hcHBlbmQoaDIsIHAsIGltZyk7XHJcblxyXG4gIHJldHVybiBlbnRyeVdyYXA7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JTZWxlY3Rpb24oZW50cnkxRGl2LCBlbnRyeTFPYmosIGVudHJ5MkRpdiwgZW50cnkyT2JqKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gbnVsbDtcclxuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xyXG4gICAgbmV4dFJvdW5kQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RFbnRyeTEgPSAoKSA9PiB7XHJcbiAgICAgIC8vIGxvYWQgc2VsZWN0aW9uIGRhdGEgdG8gYmUgcGFzc2VkIHRocm91Z2hcclxuICAgICAgc2VsZWN0aW9uID0geyB3aW5uZXI6IGVudHJ5MU9iaiwgbG9zZXI6IGVudHJ5Mk9iaiB9O1xyXG5cclxuICAgICAgLy8gY3NzIHRvIGhpZ2hsaWdodCBzZWxlY3RlZCBlbnRyYW50XHJcbiAgICAgIGVudHJ5MkRpdi5jbGFzc0xpc3QucmVtb3ZlKFwicm91bmRXaW5uZXJcIik7XHJcbiAgICAgIGVudHJ5MURpdi5jbGFzc0xpc3QuYWRkKFwicm91bmRXaW5uZXJcIik7XHJcbiAgICAgIG5leHRSb3VuZEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNlbGVjdEVudHJ5MiA9ICgpID0+IHtcclxuICAgICAgc2VsZWN0aW9uID0geyB3aW5uZXI6IGVudHJ5Mk9iaiwgbG9zZXI6IGVudHJ5MU9iaiB9O1xyXG5cclxuICAgICAgZW50cnkxRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJyb3VuZFdpbm5lclwiKTtcclxuICAgICAgZW50cnkyRGl2LmNsYXNzTGlzdC5hZGQoXCJyb3VuZFdpbm5lclwiKTtcclxuICAgICAgbmV4dFJvdW5kQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbmZpcm1TZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZXNvbHZlZCB8fCAhc2VsZWN0aW9uKSByZXR1cm47XHJcbiAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNsZWFudXAoKTtcclxuICAgICAgcmVzb2x2ZShzZWxlY3Rpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xyXG4gICAgICBlbnRyeTFEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdEVudHJ5MSk7XHJcbiAgICAgIGVudHJ5MkRpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0RW50cnkyKTtcclxuICAgICAgbmV4dFJvdW5kQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtU2VsZWN0aW9uKTtcclxuICAgICAgbmV4dFJvdW5kQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBlbnRyeTFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdEVudHJ5MSk7XHJcbiAgICBlbnRyeTJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdEVudHJ5Mik7XHJcbiAgICBuZXh0Um91bmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1TZWxlY3Rpb24pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5QnJhY2tldFBhaXJpbmdzKHBhaXJpbmdzKSB7XHJcbiAgY29uc3QgcGFpcmluZ3NDb3B5ID0gc3RydWN0dXJlZENsb25lKHBhaXJpbmdzKTtcclxuICAvLyBsZXQgbWF0Y2hOdW1iZXIgPSAxO1xyXG4gIGZvciAoY29uc3QgcGFpciBvZiBwYWlyaW5nc0NvcHkpIHtcclxuICAgIGNvbnN0IGVudHJ5MSA9IGVudHJ5RGl2KHBhaXIuZW50cnkxKTtcclxuICAgIGNvbnN0IGVudHJ5MiA9IGVudHJ5RGl2KHBhaXIuZW50cnkyKTtcclxuICAgIGVudHJ5MS5pZCA9IFwiZW50cnkxXCI7XHJcbiAgICBlbnRyeTIuaWQgPSBcImVudHJ5MlwiO1xyXG5cclxuICAgIC8vIHJvdW5kIGFuZCBtYXRjaCBkaXNwbGF5IGluZm9cclxuICAgIHJvdW5kRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJ3aW5uZXJcIikge1xyXG4gICAgICByb3VuZERpc3BsYXkudGV4dENvbnRlbnQgPSBgUm91bmQgb2YgJHtwYWlyaW5ncy5sZW5ndGggKiAyfWA7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFJvdW5kID09PSBcImxvc2VyXCIpIHtcclxuICAgICAgcm91bmREaXNwbGF5LnRleHRDb250ZW50ID0gYExvc2VyIFJvdW5kICR7bG9zZXJSb3VuZENvdW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3VycmVudGx5IGhpZGluZyBkaXNwbGF5ZWQgbWF0Y2ggbnVtYmVyIHRvIGVtcGhhc2l6ZSBibGluZCBicmFja2V0XHJcbiAgICAvLyBjYW4gYmUgdW5jb21tZW50ZWQgYXMgZGVzaXJlZCwgcmVtZW1iZXIgbGV0IG1hdGNoTnVtYmVyIG91dHNpZGUgZm9yIGxvb3BcclxuICAgIC8vIGFuZCBwIGVsZW1lbnQgaW4gaHRtbCBmaWxlIGlmIGNoYW5naW5nXHJcbiAgICAvL1xyXG4gICAgLy8gbWF0Y2hEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAvLyBtYXRjaERpc3BsYXkudGV4dENvbnRlbnQgPSBgTWF0Y2ggJHttYXRjaE51bWJlcn1gO1xyXG4gICAgLy8gbWF0Y2hOdW1iZXIgKz0gMTtcclxuXHJcbiAgICBzZWxlY3Rpb25EaXNwbGF5RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBzZWxlY3Rpb25EaXNwbGF5RGl2LmFwcGVuZChlbnRyeTEsIGVudHJ5Mik7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FpdEZvclNlbGVjdGlvbihcclxuICAgICAgZW50cnkxLFxyXG4gICAgICBwYWlyLmVudHJ5MSxcclxuICAgICAgZW50cnkyLFxyXG4gICAgICBwYWlyLmVudHJ5MixcclxuICAgICk7XHJcblxyXG4gICAgLy8gbG9nIHJlc3VsdCB0byBtYXRjaCBvYmplY3RzXHJcbiAgICByZXN1bHQud2lubmVyLndpbiA9IHRydWU7XHJcbiAgICByZXN1bHQubG9zZXIud2luID0gZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgIHNlbGVjdGlvbkRpc3BsYXlEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZiAoYnJhY2tldENvbXBsZXRlKSB7XHJcbiAgICAgIC8vIC52YWx1ZXMgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgcGFpciBvYmplY3RzIChmaW5hbCB0d28gZW50cmllcyBoZXJlKVxyXG4gICAgICAvLyB0aGVuIGZpbmQgd2hpY2ggZW50cnkgaGFkIHdpbiBzZXQgdG8gdHJ1ZVxyXG4gICAgICBjb25zdCBmaW5hbFdpbm5lciA9IE9iamVjdC52YWx1ZXMocmVzdWx0KS5maW5kKChvYmopID0+IG9iai53aW4pO1xyXG4gICAgICBkaXNwbGF5V2lubmVyKGZpbmFsV2lubmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Um91bmQgPT09IFwid2lubmVyXCIpIHtcclxuICAgIHJlc3VsdHNbYHdpbm5lclJvdW5kJHt3aW5uZXJSb3VuZENvdW50fWBdID0gcGFpcmluZ3NDb3B5O1xyXG4gIH1cclxuICBpZiAoY3VycmVudFJvdW5kID09PSBcImxvc2VyXCIpIHtcclxuICAgIHJlc3VsdHNbYGxvc2VyUm91bmQke2xvc2VyUm91bmRDb3VudH1gXSA9IHBhaXJpbmdzQ29weTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVzdWx0c1wiLCByZXN1bHRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcih3aW5uZXJPYmopIHtcclxuICByb3VuZERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAvLyB1bmNvbW1lbnQgaWYgcmUtZW5hYmxpbmcgbWF0Y2ggbnVtYmVyIGRpc3BsYXlcclxuICAvLyBtYXRjaERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICBzZWxlY3Rpb25EaXNwbGF5RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IHdpbm5lciA9IGVudHJ5RGl2KHdpbm5lck9iaik7XHJcbiAgcm91bmREaXNwbGF5LnRleHRDb250ZW50ID0gXCJXSU5ORVJcIjtcclxuICBzZWxlY3Rpb25EaXNwbGF5RGl2LmFwcGVuZCh3aW5uZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXN1bHRBcnJheShyb3VuZFR5cGUsIHJvdW5kQ291bnQsIHdpblN0YXR1cykge1xyXG4gIC8vIHJvdW5kVHlwZSA9ICd3aW5uZXInIG9yICdsb3NlcidcclxuICAvLyByb3VuZENvdW50ID0gaW50ZWdlclxyXG4gIC8vIHdpblN0YXR1cyA9IHRydWUgb3IgZmFsc2VcclxuICBjb25zdCByZXN1bHQgPSBbXTtcclxuICBmb3IgKGNvbnN0IG1hdGNoIG9mIHJlc3VsdHNbYCR7cm91bmRUeXBlfVJvdW5kJHtyb3VuZENvdW50fWBdKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIE9iamVjdC5rZXlzKG1hdGNoKSkge1xyXG4gICAgICAvLyBjYXB0dXJlIHdpbnNcclxuICAgICAgaWYgKHdpblN0YXR1cykge1xyXG4gICAgICAgIGlmIChtYXRjaFtlbnRyeV0ud2luKSByZXN1bHQucHVzaChtYXRjaFtlbnRyeV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjYXB0dXJlIGxvc3Nlc1xyXG4gICAgICBpZiAoIXdpblN0YXR1cykge1xyXG4gICAgICAgIGlmICghbWF0Y2hbZW50cnldLndpbikgcmVzdWx0LnB1c2gobWF0Y2hbZW50cnldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKHBhaXJpbmdzKSB7XHJcbiAgY29uc3QgbWF4V2lubmVyUm91bmRzID0gZ2V0V2lubmVyUm91bmRDb3VudChicmFja2V0RW50cmllcy5sZW5ndGgpO1xyXG4gIGNvbnN0IG1heExvc2VyUm91bmRzID0gZ2V0TG9zZXJSb3VuZENvdW50KGJyYWNrZXRFbnRyaWVzLmxlbmd0aCk7XHJcbiAgLy8gY29uc29sZS5sb2coXHJcbiAgLy8gICBcIndyYywgd3JjMiwgbHJjXCIsXHJcbiAgLy8gICB3aW5uZXJSb3VuZENvdW50LFxyXG4gIC8vICAgd2lubmVyUm91bmRDb3VudDIsXHJcbiAgLy8gICBsb3NlclJvdW5kQ291bnQsXHJcbiAgLy8gKTtcclxuICBhd2FpdCBkaXNwbGF5QnJhY2tldFBhaXJpbmdzKHBhaXJpbmdzKTtcclxuXHJcbiAgaWYgKGJyYWNrZXRDb21wbGV0ZSkge1xyXG4gICAgLy8gZmluYWwsIGNvbXBsZXRlIGJyYWNrIGdlbmVyYXRpb25cclxuICAgIGRpc3BsYXlGaW5hbEJyYWNrZXQocmVzdWx0cyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICh3aW5uZXJSb3VuZENvdW50IDwgbWF4V2lubmVyUm91bmRzKSB7XHJcbiAgICBjb25zdCB3aW5uZXJCcmFja2V0V2lubmVycyA9IGdldFJlc3VsdEFycmF5KFxyXG4gICAgICBcIndpbm5lclwiLFxyXG4gICAgICB3aW5uZXJSb3VuZENvdW50LFxyXG4gICAgICB0cnVlLFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHdpbm5lckJyYWNrZXRXaW5uZXJzKTtcclxuICAgIHdpbm5lclJvdW5kQ291bnQgKz0gMTtcclxuXHJcbiAgICBwYWlyQXJyYXkgPSBnZW5lcmF0ZUJyYWNrZXRQYWlyaW5ncyh3aW5uZXJCcmFja2V0V2lubmVycyk7XHJcbiAgICBhd2FpdCBtYWluKHBhaXJBcnJheSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICB3aW5uZXJSb3VuZENvdW50ID09PSBtYXhXaW5uZXJSb3VuZHMgJiZcclxuICAgIGxvc2VyUm91bmRDb3VudCA8IG1heExvc2VyUm91bmRzXHJcbiAgKSB7XHJcbiAgICBjdXJyZW50Um91bmQgPSBcImxvc2VyXCI7XHJcbiAgICBpZiAobG9zZXJSb3VuZENvdW50ID09PSAwKSB7XHJcbiAgICAgIC8vIGhhbmRsZSBmaXJzdCBsb3NlciByb3VuZCBnZW5lcmF0ZWQgb25seSBmcm9tIHdpbm5lciBicmFja2V0XHJcbiAgICAgIGNvbnN0IHdpbm5lckJyYWNrZXRMb3NlcnMgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgICBcIndpbm5lclwiLFxyXG4gICAgICAgIHdpbm5lclJvdW5kQ291bnQyLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICApO1xyXG4gICAgICBwYWlyQXJyYXkgPSBnZW5lcmF0ZUJyYWNrZXRQYWlyaW5ncyh3aW5uZXJCcmFja2V0TG9zZXJzLCBbXSk7XHJcblxyXG4gICAgICB3aW5uZXJSb3VuZENvdW50MiArPSAxO1xyXG4gICAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvc2VyUm91bmRDb3VudCA9PT0gbWF4TG9zZXJSb3VuZHMgLSAxKSB7XHJcbiAgICAgIC8vIEZpbmFsIHJvdW5kLiBMb3NlciByb3VuZHMgYXJlIDAgaW5kZXhlZCB0byBiZXR0ZXIgc3luYyB3aXRoIHJvdW5kIGRpc3BsYXlcclxuICAgICAgY29uc3Qgd2lubmVyQnJhY2tldFdpbm5lciA9IGdldFJlc3VsdEFycmF5KFxyXG4gICAgICAgIFwid2lubmVyXCIsXHJcbiAgICAgICAgd2lubmVyUm91bmRDb3VudCxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBsb3NlckJyYWNrZXRXaW5uZXIgPSBnZXRSZXN1bHRBcnJheShcImxvc2VyXCIsIGxvc2VyUm91bmRDb3VudCwgdHJ1ZSk7XHJcblxyXG4gICAgICBwYWlyQXJyYXkgPSBnZW5lcmF0ZUJyYWNrZXRQYWlyaW5ncyhcclxuICAgICAgICB3aW5uZXJCcmFja2V0V2lubmVyLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGxvc2VyQnJhY2tldFdpbm5lcixcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGJyYWNrZXRDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIGxvc2VyUm91bmRDb3VudCArPSAxO1xyXG4gICAgICBhd2FpdCBtYWluKHBhaXJBcnJheSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3aW5uZXJCcmFja2V0TG9zZXJzID0gZ2V0UmVzdWx0QXJyYXkoXHJcbiAgICAgIFwid2lubmVyXCIsXHJcbiAgICAgIHdpbm5lclJvdW5kQ291bnQyLFxyXG4gICAgICBmYWxzZSxcclxuICAgICk7XHJcbiAgICBjb25zdCBsb3NlckJyYWNrZXRXaW5uZXJzID0gZ2V0UmVzdWx0QXJyYXkoXCJsb3NlclwiLCBsb3NlclJvdW5kQ291bnQsIHRydWUpO1xyXG5cclxuICAgIGlmIChsb3NlckJyYWNrZXRXaW5uZXJzLmxlbmd0aCA+IHdpbm5lckJyYWNrZXRMb3NlcnMubGVuZ3RoKSB7XHJcbiAgICAgIC8vIGhhbmRsZSBvZmZzZXQgcm91bmRzIHdoZXJlIGxvc2VyIGJyYWNrZXQgbmVlZHMgdG8gY2F0Y2ggdXBcclxuICAgICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MobG9zZXJCcmFja2V0V2lubmVycywgW10pO1xyXG5cclxuICAgICAgbG9zZXJSb3VuZENvdW50ICs9IDE7XHJcbiAgICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgICAgIHdpbm5lckJyYWNrZXRMb3NlcnMsXHJcbiAgICAgIFtdLFxyXG4gICAgICBsb3NlckJyYWNrZXRXaW5uZXJzLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBub3JtYWwgb3BlcmF0aW9uIGVuZHMgaGVyZVxyXG4gICAgd2lubmVyUm91bmRDb3VudDIgKz0gMTtcclxuICAgIGxvc2VyUm91bmRDb3VudCArPSAxO1xyXG4gICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmluYWxNYXRjaGVzKHJlc3VsdHNPYmosIGVudHJhbnRDb3VudCkge1xyXG4gIGNvbnN0IG1hdGNoZXMgPSBbXTtcclxuXHJcbiAgbGV0IHdpbm5lck1hdGNoQ291bnQgPSAxO1xyXG4gIGxldCBsb3Nlck1hdGNoQ291bnQgPSAxO1xyXG4gIGxldCBpbnRyYVJvdW5kTWF0Y2hDb3VudGVyID0gMTtcclxuICBsZXQgcHJpb3JPZGRMb3NlclNwYWNpbmcgPSB7fTtcclxuICAvLyBwYWQgd2lubmVyIGJsb2NrIHdpdGggMiBzcGFjZXIgcm93cyBhYm92ZSBsb3NlcnNcclxuICBjb25zdCBsb3NlcnNSb3dzT2Zmc2V0ID0gbmV4dFBvd2VyT2ZUd28oZW50cmFudENvdW50KSAvIDIgKyAyO1xyXG5cclxuICBmb3IgKGNvbnN0IHJvdW5kIGluIHJlc3VsdHNPYmopIHtcclxuICAgIC8vIHJlc2V0IGNvdW50ZXIgb24gZWFjaCBmcmVzaCByb3VuZFxyXG4gICAgY29uc3QgY3VycmVudFJvdW5kID0gTnVtYmVyKHJvdW5kLm1hdGNoKC9cXGQrLylbMF0pO1xyXG4gICAgcHJpb3JPZGRMb3NlclNwYWNpbmdbY3VycmVudFJvdW5kXSA9IFtdO1xyXG4gICAgaW50cmFSb3VuZE1hdGNoQ291bnRlciA9IDE7XHJcblxyXG4gICAgZm9yIChjb25zdCBtYXRjaCBvZiByZXN1bHRzT2JqW3JvdW5kXSkge1xyXG4gICAgICBsZXQgb2JqO1xyXG4gICAgICBsZXQgcm93Q2FsYztcclxuXHJcbiAgICAgIGlmIChyb3VuZC5pbmNsdWRlcyhcIndpbm5lclwiKSkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPT09IDEpIHJvd0NhbGMgPSBpbnRyYVJvdW5kTWF0Y2hDb3VudGVyO1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPiAxKSB7XHJcbiAgICAgICAgICByb3dDYWxjID1cclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMikgK1xyXG4gICAgICAgICAgICAwLjUgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygyLCBjdXJyZW50Um91bmQgLSAxKSAqIChpbnRyYVJvdW5kTWF0Y2hDb3VudGVyIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICBpZDogYHcke3dpbm5lck1hdGNoQ291bnR9YCxcclxuICAgICAgICAgIHJvdW5kOiBOdW1iZXIocm91bmQubWF0Y2goL1xcZCsvKVswXSksXHJcbiAgICAgICAgICByb3c6IHJvd0NhbGMsXHJcbiAgICAgICAgICBwMTogbWF0Y2guZW50cnkxLm5hbWUsXHJcbiAgICAgICAgICBwMjogbWF0Y2guZW50cnkyLm5hbWUsXHJcbiAgICAgICAgICBwMXdpbjogbWF0Y2guZW50cnkxLndpbixcclxuICAgICAgICAgIHAyd2luOiBtYXRjaC5lbnRyeTIud2luLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2lubmVyTWF0Y2hDb3VudCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGxvc2VyIHJvdW5kc1xyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPT09IDEpIHtcclxuICAgICAgICAgIHJvd0NhbGMgPSBpbnRyYVJvdW5kTWF0Y2hDb3VudGVyO1xyXG4gICAgICAgICAgcHJpb3JPZGRMb3NlclNwYWNpbmdbY3VycmVudFJvdW5kXS5wdXNoKHJvd0NhbGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID4gMSAmJiBjdXJyZW50Um91bmQgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBldmVuIHJvdW5kc1xyXG5cclxuICAgICAgICAgIC8vIGdldCBwcmlvciByb3VuZCBzcGFjaW5nIChjdXJyZW50IC0gMSksIHRoZW4gYWNjb3VudCBmb3IgbWF0Y2hlcyBpbmRleGluZyBhdCAxLCBhcnJheSBhdCAwXHJcbiAgICAgICAgICByb3dDYWxjID1cclxuICAgICAgICAgICAgcHJpb3JPZGRMb3NlclNwYWNpbmdbY3VycmVudFJvdW5kIC0gMV1baW50cmFSb3VuZE1hdGNoQ291bnRlciAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID4gMSAmJiBjdXJyZW50Um91bmQgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAvLyBvZGQgcm91bmRzXHJcbiAgICAgICAgICBjb25zdCBvZGRMb3NlclJvdW5kQ291bnRlciA9IChjdXJyZW50Um91bmQgLSAzKSAvIDI7XHJcbiAgICAgICAgICByb3dDYWxjID1cclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMyAtIG9kZExvc2VyUm91bmRDb3VudGVyKSArXHJcbiAgICAgICAgICAgIDAuNSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KDIsIGN1cnJlbnRSb3VuZCAtIDIgLSBvZGRMb3NlclJvdW5kQ291bnRlcikgKlxyXG4gICAgICAgICAgICAgIChpbnRyYVJvdW5kTWF0Y2hDb3VudGVyIC0gMSk7XHJcbiAgICAgICAgICBwcmlvck9kZExvc2VyU3BhY2luZ1tjdXJyZW50Um91bmRdLnB1c2gocm93Q2FsYyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSBnZXRMb3NlclJvdW5kQ291bnQoZW50cmFudENvdW50KSkge1xyXG4gICAgICAgICAgLy8gd2FudCAwLjUgcGFzdCB3aW5uZXIgYnJhY2tldCwgYnV0IHN1YnRyYWN0IDIgZnJvbSB0aGF0IHRvIGFjY291bnQgZm9yIHRoZVxyXG4gICAgICAgICAgLy8gYWxyZWFkeSBlc3RhYmxpc2hlZCBvZmZzZXQgYnVmZmVyXHJcbiAgICAgICAgICByb3dDYWxjID0gLTEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgaWQ6IGBsJHtsb3Nlck1hdGNoQ291bnR9YCxcclxuICAgICAgICAgIHJvdW5kOiBOdW1iZXIocm91bmQubWF0Y2goL1xcZCsvKVswXSksXHJcbiAgICAgICAgICByb3c6IHJvd0NhbGMgKyBsb3NlcnNSb3dzT2Zmc2V0LFxyXG4gICAgICAgICAgcDE6IG1hdGNoLmVudHJ5MS5uYW1lLFxyXG4gICAgICAgICAgcDI6IG1hdGNoLmVudHJ5Mi5uYW1lLFxyXG4gICAgICAgICAgcDF3aW46IG1hdGNoLmVudHJ5MS53aW4sXHJcbiAgICAgICAgICBwMndpbjogbWF0Y2guZW50cnkyLndpbixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvc2VyTWF0Y2hDb3VudCArPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnRyYVJvdW5kTWF0Y2hDb3VudGVyICs9IDE7XHJcbiAgICAgIG1hdGNoZXMucHVzaChvYmopO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcclxuICByZXR1cm4gbWF0Y2hlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0JyYWNrZXRMaW5lKHN0YXJ0LCBlbmQpIHtcclxuICBjb25zdCBtaWRYID0gc3RhcnQueCArIChlbmQueCAtIHN0YXJ0LngpIC8gMjtcclxuXHJcbiAgY29uc3QgcGF0aERhdGEgPSBgXHJcbiAgTSAke3N0YXJ0Lnh9ICR7c3RhcnQueX1cclxuICBIICR7bWlkWH1cclxuICBWICR7ZW5kLnl9XHJcbiAgSCAke2VuZC54fVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGhEYXRhKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcIiNmZmZmZmZmZlwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjJcIik7XHJcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcInZlY3Rvci1lZmZlY3RcIiwgXCJub24tc2NhbGluZy1zdHJva2VcIik7XHJcblxyXG4gIGJyYWNrZXRMaW5lcy5hcHBlbmQocGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGaW5hbEJyYWNrZXQocmVzdWx0c09iaikge1xyXG4gIGNvbnN0IGVudHJhbnRzID0gcmVzdWx0c09iai53aW5uZXJSb3VuZDEubGVuZ3RoICogMjtcclxuICBjb25zdCBtYXRjaGVzID0gZ2V0RmluYWxNYXRjaGVzKHJlc3VsdHNPYmosIGVudHJhbnRzKTtcclxuXHJcbiAgY29uc3Qgbm9kZVBvc2l0aW9ucyA9IHt9O1xyXG4gIGNvbnN0IGhhbGZFbnRyYW50Q291bnQgPSBlbnRyYW50cyAvIDI7XHJcbiAgY29uc3QgcXVhcnRlckVudHJhbnRDb3VudCA9IGhhbGZFbnRyYW50Q291bnQgLyAyO1xyXG4gIGNvbnN0IG1heFdpbm5lclJvdW5kcyA9IGdldFdpbm5lclJvdW5kQ291bnQoZW50cmFudHMpO1xyXG4gIGNvbnN0IG1heExvc2VyUm91bmRzID0gZ2V0TG9zZXJSb3VuZENvdW50KGVudHJhbnRzKTtcclxuICBsZXQgd2lubmVySW5wdXRDb3VudGVyID0gMTtcclxuICBsZXQgbG9zZXJJbnB1dENvdW50ZXIgPSAxO1xyXG5cclxuICBsZXQgbWF4WCA9IDA7XHJcbiAgbGV0IG1heFkgPSAwO1xyXG4gIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJtYXRjaE5vZGVcIik7XHJcbiAgICBlbC5pZCA9IG1hdGNoLmlkO1xyXG5cclxuICAgIGlmIChtYXRjaC5wMXdpbikge1xyXG4gICAgICBlbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMSB3aW5uZXJcIj4ke21hdGNoLnAxfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcyA9IFwicDIgbG9zZXJcIj4ke21hdGNoLnAyfTwvZGl2PlxyXG4gICAgYDtcclxuICAgIH1cclxuICAgIGlmIChtYXRjaC5wMndpbikge1xyXG4gICAgICBlbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMSBsb3NlclwiPiR7bWF0Y2gucDF9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMiB3aW5uZXJcIj4ke21hdGNoLnAyfTwvZGl2PlxyXG4gICAgYDtcclxuICAgIH1cclxuICAgIC8vIGdldCBhbmQgc2V0IGFic29sdXRlIHgseSBwb3NpdGlvbnNcclxuICAgIGNvbnN0IHhQb3NpdGlvbiA9IGdldFgobWF0Y2gucm91bmQpO1xyXG4gICAgY29uc3QgeVBvc2l0aW9uID0gZ2V0WShtYXRjaC5yb3cpO1xyXG4gICAgaWYgKHhQb3NpdGlvbiA+IG1heFgpIG1heFggPSB4UG9zaXRpb247XHJcbiAgICBpZiAoeVBvc2l0aW9uID4gbWF4WSkgbWF4WSA9IHlQb3NpdGlvbjtcclxuXHJcbiAgICBlbC5zdHlsZS5sZWZ0ID0gYCR7eFBvc2l0aW9ufXB4YDtcclxuICAgIGVsLnN0eWxlLnRvcCA9IGAke3lQb3NpdGlvbn1weGA7XHJcbiAgICBlbC5zdHlsZS53aWR0aCA9IGAke0JSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIfXB4YDtcclxuICAgIGVsLnN0eWxlLmhlaWdodCA9IGAke0JSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVH1weGA7XHJcbiAgICBlbC5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3JtYWxcIjtcclxuXHJcbiAgICAvLyBzYXZlIGNvb3JkaW5hdGVzIGZvciBsaW5lIGF0dGFjaG1lbnRzXHJcbiAgICBub2RlUG9zaXRpb25zW21hdGNoLmlkXSA9IHtcclxuICAgICAgaW5wdXQ6IHsgeDogeFBvc2l0aW9uLCB5OiB5UG9zaXRpb24gKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQgLyAyIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIHg6IHhQb3NpdGlvbiArIEJSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRILFxyXG4gICAgICAgIHk6IHlQb3NpdGlvbiArIEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCAvIDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvdW5kOiBtYXRjaC5yb3VuZCxcclxuICAgIH07XHJcbiAgICBtYXRjaGVzTGF5ZXIuYXBwZW5kKGVsKTtcclxuICB9KTtcclxuXHJcbiAgLy8gc2V0IGJyYWNrZXQgY29udGFpbmVyIGRpdiB0byBmaXQgdGhlIG1hdGNoZXMgKyA1MCBleHRyYSBwYWRkaW5nXHJcbiAgY29uc3QgdG90YWxIZWlnaHQgPSBtYXhZICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUICsgNTA7XHJcbiAgY29uc3QgdG90YWxXaWR0aCA9IG1heFggKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9XSURUSCArIDUwO1xyXG5cclxuICBicmFja2V0Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3RvdGFsSGVpZ2h0fXB4YDtcclxuICBicmFja2V0Q29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7dG90YWxXaWR0aH1weGA7XHJcblxyXG4gIGNvbnNvbGUubG9nKG5vZGVQb3NpdGlvbnMpO1xyXG4gIE9iamVjdC5rZXlzKG5vZGVQb3NpdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgY29uc3Qgc3BsaXQgPSBrZXkubWF0Y2goLyhbd2xdKShcXGQrKS8pO1xyXG4gICAgaWYgKHNwbGl0WzFdID09PSBcIndcIikge1xyXG4gICAgICBjb25zdCBuZXh0SW5wdXRJZCA9IGB3JHt3aW5uZXJJbnB1dENvdW50ZXIgKyBoYWxmRW50cmFudENvdW50fWA7XHJcblxyXG4gICAgICBpZiAobm9kZVBvc2l0aW9uc1trZXldLnJvdW5kID09PSBtYXhXaW5uZXJSb3VuZHMpIHtcclxuICAgICAgICAvLyBmaW5hbCByb3VuZCBleGNlcHRpb25cclxuICAgICAgICAvLyB3aW5uZXIgYW5kIGxvc2VyIGJyYWNrZXRzIGhhdmUgc2FtZSBtYXRjaCBjb3VudCwgYXBwbHkgY3VycmVudCBjb3VudCB0byBsLUlEIHRvIG1hdGNoXHJcbiAgICAgICAgLy8gd2lubmVyIHdpbm5lciB3aXRoIGxvc2VyIHdpbm5lciBpbiBmaW5hbCByb3VuZFxyXG4gICAgICAgIGNvbnN0IGZpbmFsTWF0Y2hJZCA9IGBsJHtzcGxpdFsyXX1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbmFsTWF0Y2hJZCk7XHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbZmluYWxNYXRjaElkXS5pbnB1dCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgPCBtYXhXaW5uZXJSb3VuZHMpXHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbbmV4dElucHV0SWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgIGlmIChOdW1iZXIoc3BsaXRbMl0pICUgMiA9PT0gMCkge1xyXG4gICAgICAgIC8vIG9ubHkgaW5jcmVtZW50IGNvdW50ZXIgZXZlcnkgb3RoZXIgbWF0Y2ggc2luY2UgYSB3aW5uZXIgYnJhY2tldCBmdW5uZWxzIHR3byBpbnRvIG9uZVxyXG4gICAgICAgIHdpbm5lcklucHV0Q291bnRlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3BsaXRbMV0gPT09IFwibFwiKSB7XHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgPT09IG1heExvc2VyUm91bmRzKSB7XHJcbiAgICAgICAgLy8gZmluYWwgbG9zZXIgcm91bmQgaGFzIG5vIG91dHB1dCwgYnJhY2tldCBpcyBmaW5pc2hlZFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV4dElucHV0SWQgPSBgbCR7bG9zZXJJbnB1dENvdW50ZXIgKyBxdWFydGVyRW50cmFudENvdW50fWA7XHJcblxyXG4gICAgICBpZiAobm9kZVBvc2l0aW9uc1trZXldLnJvdW5kICUgMiA9PT0gMCkge1xyXG4gICAgICAgIC8vIGV2ZW4gcm91bmRzXHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbbmV4dElucHV0SWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKE51bWJlcihzcGxpdFsyXSkgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBvbmx5IGluY3JlbWVudCBjb3VudGVyIGV2ZXJ5IG90aGVyIG1hdGNoIHNpbmNlIGEgd2lubmVyIGJyYWNrZXQgZnVubmVscyB0d28gaW50byBvbmVcclxuICAgICAgICAgIGxvc2VySW5wdXRDb3VudGVyICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgJSAyICE9PSAwKSB7XHJcbiAgICAgICAgLy9vZGQgcm91bmRzXHJcbiAgICAgICAgZHJhd0JyYWNrZXRMaW5lKFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgICAgICAgIG5vZGVQb3NpdGlvbnNbbmV4dElucHV0SWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbG9zZXJJbnB1dENvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgbmV4dFJvdW5kTnVtID0gTnVtYmVyKHNwbGl0WzJdKSArIDE7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzcGxpdFsxXSArIG5leHRSb3VuZE51bSk7XHJcbiAgICAvLyBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAvLyAgIG5vZGVQb3NpdGlvbnNba2V5XS5vdXRwdXQsXHJcbiAgICAvLyAgIG5vZGVQb3NpdGlvbnNbc3BsaXRbMV0gKyBuZXh0Um91bmROdW1dLmlucHV0LFxyXG4gICAgLy8gKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZHJhd0JyYWNrZXRMaW5lKG5vZGVQb3NpdGlvbnNbXCJtMVwiXS5vdXRwdXQsIG5vZGVQb3NpdGlvbnNbXCJtM1wiXS5pbnB1dCk7XHJcbiAgLy8gZHJhd0JyYWNrZXRMaW5lKG5vZGVQb3NpdGlvbnNbXCJtMlwiXS5vdXRwdXQsIG5vZGVQb3NpdGlvbnNbXCJtM1wiXS5pbnB1dCk7XHJcbn1cclxuXHJcbnBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gIGJyYWNrZXRFbnRyaWVzLFxyXG4gIGdlbmVyYXRlQnllcyhicmFja2V0RW50cmllcy5sZW5ndGgpLFxyXG4gIGZhbHNlLFxyXG4gIHRydWUsXHJcbik7XHJcbmFkanVzdE1hdGNoTm9kZUhlaWdodCgpO1xyXG4vLyBnZXRGaW5hbE1hdGNoZXModGVzdFJlc3VsdCk7XHJcbi8vIGRpc3BsYXlGaW5hbEJyYWNrZXQodGVzdFJlc3VsdCk7XHJcbm1haW4ocGFpckFycmF5KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9