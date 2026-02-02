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
  // subtract 1 if skipping possible bracket flip final round
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
        createMatch(`W${r}-${i}`, currentEntries[i], currentEntries[i + 1]),
      );
    }
    rounds.push(createRound(`W${r}`, "winner", matches));
    // currentEntries = new Array(matches.length).fill(null);
    currentEntries = [];
  }

  // loser bracker

  let loserMatchCount = entries.length / 2;
  let loserRound = 0;

  while (loserMatchCount >= 1) {
    const matches = [];
    for (let i = 0; i < loserMatchCount; i += 1) {
      matches.push(createMatch(`L${loserRound}-${i}`));
    }
    rounds.push(createRound(`L${loserRound}`, "loser", matches));
    loserMatchCount = Math.floor(loserMatchCount / 2);
    loserRound += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlGQUF5RixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLHdWQUF3VixnQ0FBZ0MscUJBQXFCLG9CQUFvQiw2QkFBNkIsS0FBSyx5Q0FBeUMsb0JBQW9CLDhCQUE4QixLQUFLLDJCQUEyQixvQkFBb0Isb0NBQW9DLEtBQUssZ0JBQWdCLHNCQUFzQixLQUFLLCtCQUErQixzQkFBc0IsdUJBQXVCLDBCQUEwQixLQUFLLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLDBCQUEwQixvQkFBb0IsS0FBSyxvQkFBb0IsOEJBQThCLEtBQUssd0RBQXdELHlCQUF5Qix5QkFBeUIsS0FBSyx1QkFBdUIseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLGlCQUFpQixLQUFLLG9CQUFvQix5QkFBeUIsbUJBQW1CLG1CQUFtQixnQ0FBZ0MsZ0NBQWdDLHlCQUF5QixpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsbUJBQW1CLCtDQUErQyxnQkFBZ0IseUJBQXlCLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLGdCQUFnQixxQkFBcUIsb0NBQW9DLEtBQUssdUJBQXVCO0FBQzM2RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNwRzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEI3RSxxQkFBcUIsOERBR25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ3NCOzs7Ozs7O1VDWnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1dDbEJBLG1DOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCO0FBQ047QUFDUztBQUM3QztBQUNBLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0NBQWM7QUFDaEI7QUFDQSx3QkFBd0IsV0FBVztBQUNuQyx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQyx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBLGlCQUFpQixFQUFFO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0Esd0JBQXdCLEVBQUUsR0FBRyxFQUFFO0FBQy9CO0FBQ0E7QUFDQSxnQ0FBZ0MsRUFBRTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QyxtQ0FBbUMsV0FBVyxHQUFHLEVBQUU7QUFDbkQ7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFnQjtBQUN0QixjQUFjLGlEQUFnQjtBQUM5QixJQUFJO0FBQ0o7QUFDQSxjQUFjLGlEQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG9CQUFvQjtBQUNqRTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxPQUFPLFdBQVc7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0NBQWM7QUFDNUQsNENBQTRDLHdDQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTLEVBQUU7QUFDakIsTUFBTTtBQUNOLE1BQU07QUFDTixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEMsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QywrQkFBK0IsU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakMsc0JBQXNCLFVBQVU7QUFDaEMsd0JBQXdCLDJCQUEyQjtBQUNuRCx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4REFBOEQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQ0FBc0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdDQUF3QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3Q0FBYztBQUNoQixlQUFlLHdDQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvaW1nfHN5bmN8bm9ucmVjdXJzaXZlfEU6Ly4ocG5nJTdDanBlIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FyYml0cmFyeS1icmFja2V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hcmJpdHJhcnktYnJhY2tldC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXJiaXRyYXJ5LWJyYWNrZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFxyXG5QcmltYXJ5IEJhY2tncm91bmQgIzBEMEQwRCBcclxuU3VyZmFjZSAvIFBhbmVsIEJhY2tncm91bmQgIzE2MTYxNlxyXG5BY2NlbnQgR29sZCAoUHJpbWFyeSkgI0M4QTk1MVxyXG5BY2NlbnQgR29sZCAoQnJpZ2h0IC8gSG92ZXIpICNFNUM3NkJcclxuVGV4dCAoUHJpbWFyeSkgI0YwRjBGMFxyXG5UZXh0IChNdXRlZCkgIzlDOUM5Q1xyXG5Cb3JkZXJzIC8gTGluZXMgIzI0MjQyNFxyXG5TdWNjZXNzIC8gSGlnaGxpZ2h0IChzYWdlIGdyZWVuKSAjOEVDMDdDXHJcbkVycm9yIChzb2Z0IGNyaW1zb24pICNEMTY5NjlcclxuKi9cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XHJcbiAgY29sb3I6ICNmMGYwZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jcm91bmREaXNwbGF5LFxyXG4jbWF0Y2hEaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jc2VsZWN0aW9uRGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmVudHJ5IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3Rpb25EaXNwbGF5IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAzMHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDQwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnJvdW5kV2lubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyZTI1O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4ZWMwN2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4jbmV4dFJvdW5kIHtcclxuICBtYXJnaW46IDV2aCAzNXZ3IDAgMzV2dztcclxufVxyXG5cclxuLyogYnJhY2tldCBkaXNwbGF5ICovXHJcblxyXG4jYnJhY2tldENvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2JyYWNrZXRMaW5lcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWF0Y2hOb2RlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNDZiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGE5NTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGdhcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53aW5uZXIge1xyXG4gIGNvbG9yOiAjZmZiZTBjO1xyXG59XHJcblxyXG4ubG9zZXIge1xyXG4gIGNvbG9yOiAjZDE2OTY5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7OztDQVVDOztBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQkFBa0I7O0VBRWxCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBcXHJcXG5QcmltYXJ5IEJhY2tncm91bmQgIzBEMEQwRCBcXHJcXG5TdXJmYWNlIC8gUGFuZWwgQmFja2dyb3VuZCAjMTYxNjE2XFxyXFxuQWNjZW50IEdvbGQgKFByaW1hcnkpICNDOEE5NTFcXHJcXG5BY2NlbnQgR29sZCAoQnJpZ2h0IC8gSG92ZXIpICNFNUM3NkJcXHJcXG5UZXh0IChQcmltYXJ5KSAjRjBGMEYwXFxyXFxuVGV4dCAoTXV0ZWQpICM5QzlDOUNcXHJcXG5Cb3JkZXJzIC8gTGluZXMgIzI0MjQyNFxcclxcblN1Y2Nlc3MgLyBIaWdobGlnaHQgKHNhZ2UgZ3JlZW4pICM4RUMwN0NcXHJcXG5FcnJvciAoc29mdCBjcmltc29uKSAjRDE2OTY5XFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBjb2xvcjogI2YwZjBmMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jcm91bmREaXNwbGF5LFxcclxcbiNtYXRjaERpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0aW9uRGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rpb25EaXNwbGF5IGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDMwdnc7XFxyXFxuICBtYXgtaGVpZ2h0OiA0MHZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kV2lubmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJlMjU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjOGVjMDdjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXh0Um91bmQge1xcclxcbiAgbWFyZ2luOiA1dmggMzV2dyAwIDM1dnc7XFxyXFxufVxcclxcblxcclxcbi8qIGJyYWNrZXQgZGlzcGxheSAqL1xcclxcblxcclxcbiNicmFja2V0Q29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jYnJhY2tldExpbmVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYXRjaE5vZGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzQ2YjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGE5NTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXIge1xcclxcbiAgY29sb3I6ICNmZmJlMGM7XFxyXFxufVxcclxcblxcclxcbi5sb3NlciB7XFxyXFxuICBjb2xvcjogI2QxNjk2OTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0FubmllIEJvdC5qcGdcIjogXCIuL3NyYy9pbWcvQW5uaWUgQm90LmpwZ1wiLFxuXHRcIi4vRnJhbmtlbnN0ZWluLmpwZ1wiOiBcIi4vc3JjL2ltZy9GcmFua2Vuc3RlaW4uanBnXCIsXG5cdFwiLi9GdXJpZXMgb2YgQ2FsZGVyb24uanBnXCI6IFwiLi9zcmMvaW1nL0Z1cmllcyBvZiBDYWxkZXJvbi5qcGdcIixcblx0XCIuL09sZCBNYW4ncyBXYXIuanBnXCI6IFwiLi9zcmMvaW1nL09sZCBNYW4ncyBXYXIuanBnXCIsXG5cdFwiLi9SZWQgUmFiYml0LmpwZ1wiOiBcIi4vc3JjL2ltZy9SZWQgUmFiYml0LmpwZ1wiLFxuXHRcIi4vU3RldmUgSm9icy5qcGdcIjogXCIuL3NyYy9pbWcvU3RldmUgSm9icy5qcGdcIixcblx0XCIuL1N0b25lci5qcGdcIjogXCIuL3NyYy9pbWcvU3RvbmVyLmpwZ1wiLFxuXHRcIi4vVGhlIDEwMC1ZZWFyLU9sZCBNYW4gV2hvIENsaW1iZWQgT3V0IHRoZSBXaW5kb3cgYW5kIERpc2FwcGVhcmVkLmpwZ1wiOiBcIi4vc3JjL2ltZy9UaGUgMTAwLVllYXItT2xkIE1hbiBXaG8gQ2xpbWJlZCBPdXQgdGhlIFdpbmRvdyBhbmQgRGlzYXBwZWFyZWQuanBnXCIsXG5cdFwiLi9UaGUgRGV2aWxzLmpwZ1wiOiBcIi4vc3JjL2ltZy9UaGUgRGV2aWxzLmpwZ1wiLFxuXHRcIi4vVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuanBnXCI6IFwiLi9zcmMvaW1nL1RoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLmpwZ1wiLFxuXHRcIi4vVGhlIFRhaW50ZWQgQ3VwLmpwZ1wiOiBcIi4vc3JjL2ltZy9UaGUgVGFpbnRlZCBDdXAuanBnXCIsXG5cdFwiLi9UaGUgV2lsbCBvZiB0aGUgTWFueS5wbmdcIjogXCIuL3NyYy9pbWcvVGhlIFdpbGwgb2YgdGhlIE1hbnkucG5nXCIsXG5cdFwiLi9hcHBsZS5qcGdcIjogXCIuL3NyYy9pbWcvYXBwbGUuanBnXCIsXG5cdFwiLi9iYW5hbmEuanBnXCI6IFwiLi9zcmMvaW1nL2JhbmFuYS5qcGdcIixcblx0XCIuL2J5ZS5qcGdcIjogXCIuL3NyYy9pbWcvYnllLmpwZ1wiLFxuXHRcIi4vbWFuZ28uanBnXCI6IFwiLi9zcmMvaW1nL21hbmdvLmpwZ1wiLFxuXHRcIi4vcGVhci5qcGdcIjogXCIuL3NyYy9pbWcvcGVhci5qcGdcIixcblx0XCIuL3BpbmVhcHBsZS5qcGdcIjogXCIuL3NyYy9pbWcvcGluZWFwcGxlLmpwZ1wiLFxuXHRcIi4vc2F1c2FnZS5qcGdcIjogXCIuL3NyYy9pbWcvc2F1c2FnZS5qcGdcIixcblx0XCIuL3N0cmF3YmVycnkuanBnXCI6IFwiLi9zcmMvaW1nL3N0cmF3YmVycnkuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRpXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImNvbnN0IGltYWdlQ29udGV4dCA9IGltcG9ydC5tZXRhLndlYnBhY2tDb250ZXh0KFwiLi9pbWdcIiwge1xyXG4gIHJlY3Vyc2l2ZTogZmFsc2UsXHJcbiAgcmVnRXhwOiAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC9pLFxyXG59KTtcclxuXHJcbmNvbnN0IGl0ZW1JbWFnZXMgPSB7fTtcclxuaW1hZ2VDb250ZXh0LmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAvLyByZW1vdmUgcHJlZml4IGFuZCBleHRlbnNpb24gZnJvbSBpbWFnZSBmaWxlIG5hbWVzXHJcbiAgY29uc3QgZmlsZU5hbWUgPSBrZXkucmVwbGFjZShcIi4vXCIsIFwiXCIpLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKTtcclxuICBpdGVtSW1hZ2VzW2ZpbGVOYW1lXSA9IGltYWdlQ29udGV4dChrZXkpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGl0ZW1JbWFnZXMgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgYnJhY2tldEVudHJpZXMgZnJvbSBcIi4vaXRlbXMuanNvblwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlscy5qc1wiO1xyXG5pbXBvcnQgdGVzdFJlc3VsdCBmcm9tIFwiLi90ZXN0UmVzdWx0MTIuanNvblwiO1xyXG5cclxuLy8gY29uc3QgZHluYW1pY0ltYWdlID0gcmVxdWlyZShgLi9pbWcvJHtpbWFnZU5hbWV9LmpwZ2ApO1xyXG5cclxuLy8gY2hlY2sgbG9zZXIgYnJhY2tldCBsZW5ndGhcclxuLy8gVE9ETyBjbGljayB0byBzZWxlY3QgZW50cnksIHRoZW4gYSBjb25maXJtIGJ1dHRvbiBvbiB0aGUgYm90dG9tXHJcblxyXG5jb25zdCBzZWxlY3Rpb25EaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Rpb25EaXNwbGF5XCIpO1xyXG5jb25zdCBtYXRjaERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGNoRGlzcGxheVwiKTtcclxuY29uc3Qgcm91bmREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3VuZERpc3BsYXlcIik7XHJcbmNvbnN0IG5leHRSb3VuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFJvdW5kXCIpO1xyXG5cclxuY29uc3QgYnJhY2tldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJhY2tldENvbnRhaW5lclwiKTtcclxuY29uc3QgbWF0Y2hlc0xheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRjaGVzTGF5ZXJcIik7XHJcbmNvbnN0IGJyYWNrZXRMaW5lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJhY2tldExpbmVzXCIpO1xyXG5cclxuY29uc3QgcmVzdWx0cyA9IHt9O1xyXG5sZXQgd2lubmVyUm91bmRDb3VudCA9IDE7XHJcbmxldCB3aW5uZXJSb3VuZENvdW50MiA9IDE7XHJcbmxldCBsb3NlclJvdW5kQ291bnQgPSAwO1xyXG5sZXQgcGFpckFycmF5ID0gW107XHJcbmxldCB3aW5uZXJCcmFja2V0V2lubmVycyA9IFtdO1xyXG5sZXQgd2lubmVyQnJhY2tldExvc2VycyA9IFtdO1xyXG5sZXQgbG9zZXJCcmFja2V0V2lubmVycyA9IFtdO1xyXG5sZXQgY3VycmVudFJvdW5kID0gXCJ3aW5uZXJcIjtcclxubGV0IG5leHRSb3VuZCA9IFwibG9zZXJcIjtcclxubGV0IGJyYWNrZXRDb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuY29uc3QgQlJBQ0tFVF9DT05GSUcgPSB7XHJcbiAgTUFUQ0hfV0lEVEg6IDE4MCxcclxuICBNQVRDSF9IRUlHSFQ6IDYwLFxyXG4gIFhfR0FQOiA2MCxcclxuICBZX0dBUDogMzAsXHJcbiAgLy8geCBob3Jpem9udGFsIGdhcCwgeSB2ZXJ0aWNhbFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRqdXN0TWF0Y2hOb2RlSGVpZ2h0KCkge1xyXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkdW1teS5jbGFzc05hbWUgPSBcIm1hdGNoTm9kZVwiO1xyXG4gIGR1bW15LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gIGR1bW15LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gIGR1bW15LnN0eWxlLndpZHRoID0gYCR7QlJBQ0tFVF9DT05GSUcuTUFUQ0hfV0lEVEh9cHhgO1xyXG4gIGR1bW15LnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vcm1hbFwiO1xyXG4gIG1hdGNoZXNMYXllci5hcHBlbmRDaGlsZChkdW1teSk7XHJcblxyXG4gIGJyYWNrZXRFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICBkdW1teS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMVwiPiR7ZW50cnkubmFtZX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3MgPSBcInAyXCI+JHtlbnRyeS5uYW1lfTwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbnN0IGhlaWdodCA9IGR1bW15Lm9mZnNldEhlaWdodDtcclxuICAgIGlmIChoZWlnaHQgKyAxMCA+IEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCkge1xyXG4gICAgICBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQgPSBoZWlnaHQgKyA0MDtcclxuICAgIH1cclxuICB9KTtcclxuICBtYXRjaGVzTGF5ZXIucmVtb3ZlQ2hpbGQoZHVtbXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRYKHJvdW5kSW5kZXgpIHtcclxuICAvLyB6ZXJvLWluZGV4ZWQgcm91bmQgbnVtYmVyLCArMjAgYnVpbHQtaW4gcGFkZGluZ1xyXG4gIHJldHVybiByb3VuZEluZGV4ICogKEJSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIICsgQlJBQ0tFVF9DT05GSUcuWF9HQVApICsgMjA7XHJcbn1cclxuZnVuY3Rpb24gZ2V0WShtYXRjaEluZGV4KSB7XHJcbiAgLy8gemVyby1pbmRleGVkLCB2ZXJ0aWNhbCBzbG90IGZvciBtYXRjaGVzXHJcbiAgcmV0dXJuIG1hdGNoSW5kZXggKiAoQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUICsgQlJBQ0tFVF9DT05GSUcuWV9HQVApICsgMjA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQb3dlck9mVHdvKG51bWJlcikge1xyXG4gIGlmIChudW1iZXIgPD0gMCB8fCBudW1iZXIgPiA1MiB8fCAhTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWJtaXQgYSByZWFzb25hYmxlIG51bWJlciBvZiBlbnRyYW50c1wiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5leHRQb3dlciA9IDIgKiogTWF0aC5jZWlsKE1hdGgubG9nMihudW1iZXIpKTtcclxuICAvLyAgcmV0dXJuIDEgPDwgTWF0aC5jZWlsKE1hdGgubG9nMihuKSk7XHJcbiAgLy8gbGVmdCBzaGlmdCBvcGVyYXRvciBhbHNvIHdvcmtzIGhlcmUgYW5kIHNob3VsZCBiZSBzbGlnaHRseSBmYXN0ZXIsXHJcbiAgLy8gYnV0IGlzIGxlc3MgcmVhZGFibGUgZm9yIHRoZSBzY29wZSBvZiB0aGlzIHByb2plY3RcclxuXHJcbiAgcmV0dXJuIG5leHRQb3dlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2lubmVyUm91bmRDb3VudChudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgdG90YWxDb3VudCA9IG5leHRQb3dlck9mVHdvKG51bWJlck9mRW50cmFudHMpO1xyXG4gIGNvbnN0IHJvdW5kcyA9IE1hdGgubG9nMih0b3RhbENvdW50KTtcclxuICByZXR1cm4gcm91bmRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb3NlclJvdW5kQ291bnQobnVtYmVyT2ZFbnRyYW50cykge1xyXG4gIGNvbnN0IHRvdGFsQ291bnQgPSBuZXh0UG93ZXJPZlR3byhudW1iZXJPZkVudHJhbnRzKTtcclxuICAvLyBzdWJ0cmFjdCAxIGlmIHNraXBwaW5nIHBvc3NpYmxlIGJyYWNrZXQgZmxpcCBmaW5hbCByb3VuZFxyXG4gIGNvbnN0IHJvdW5kcyA9IE1hdGgubG9nMih0b3RhbENvdW50KSAqIDIgLSAxO1xyXG4gIHJldHVybiByb3VuZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnllcyhudW1iZXJPZkVudHJhbnRzKSB7XHJcbiAgY29uc3QgYnllQ291bnQgPSBuZXh0UG93ZXJPZlR3byhudW1iZXJPZkVudHJhbnRzKSAtIG51bWJlck9mRW50cmFudHM7XHJcbiAgY29uc3QgYnllT2JqcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnllQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgYnllT2Jqc1tpXSA9IGBieWUke2kgKyAxfWA7XHJcbiAgfVxyXG4gIHJldHVybiBieWVPYmpzO1xyXG59XHJcblxyXG4vLyByZWN1cnNpb24gdGVzdGluZyBoZXJlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBjb21wdXRlQnllQ291bnQoZW50cmllcykge1xyXG4gIHJldHVybiBuZXh0UG93ZXJPZlR3byhlbnRyaWVzLmxlbmd0aCkgLSBlbnRyaWVzLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplRW50cnlDb3VudChlbnRyaWVzKSB7XHJcbiAgY29uc3QgYnllcyA9IGNvbXB1dGVCeWVDb3VudChlbnRyaWVzKTtcclxuXHJcbiAgY29uc3QgZW50cmllc0NvbXBsZXRlID0gZW50cmllcy5zbGljZSgpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5ZXM7IGkgKz0gMSkge1xyXG4gICAgZW50cmllc0NvbXBsZXRlLnB1c2goe1xyXG4gICAgICBpZDogYGJ5ZS0ke2l9YCxcclxuICAgICAgaXNCeWU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbnRyaWVzQ29tcGxldGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1hdGNoKGlkLCBhID0gbnVsbCwgYiA9IG51bGwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQsXHJcbiAgICBhLFxyXG4gICAgYixcclxuICAgIHdpbm5lcjogbnVsbCxcclxuICAgIGxvc2VyOiBudWxsLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdW5kKGlkLCB0eXBlLCBtYXRjaGVzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkLFxyXG4gICAgdHlwZSwgLy8gd2lubmVyLCBsb3NlciwgZmluYWxcclxuICAgIG1hdGNoZXMsIC8vYXJyYXlcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvdW5kcyhlbnRyaWVzKSB7XHJcbiAgLy8gZW5zdXJlIGVudHJpZXMgYXJlIGNvbWluZyBpbiBhcyBwb3dlciBvZiB0d29cclxuICBjb25zdCByb3VuZHMgPSBbXTtcclxuICBjb25zdCB3aW5uZXJSb3VuZHNUb3RhbCA9IE1hdGgubG9nMihlbnRyaWVzLmxlbmd0aCk7XHJcblxyXG4gIC8vIHdpbm5lciBicmFja2V0XHJcbiAgbGV0IGN1cnJlbnRFbnRyaWVzID0gZW50cmllcy5zbGljZSgpO1xyXG4gIGZvciAobGV0IHIgPSAwOyByIDwgd2lubmVyUm91bmRzVG90YWw7IHIgKz0gMSkge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50RW50cmllcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICBtYXRjaGVzLnB1c2goXHJcbiAgICAgICAgY3JlYXRlTWF0Y2goYFcke3J9LSR7aX1gLCBjdXJyZW50RW50cmllc1tpXSwgY3VycmVudEVudHJpZXNbaSArIDFdKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJvdW5kcy5wdXNoKGNyZWF0ZVJvdW5kKGBXJHtyfWAsIFwid2lubmVyXCIsIG1hdGNoZXMpKTtcclxuICAgIC8vIGN1cnJlbnRFbnRyaWVzID0gbmV3IEFycmF5KG1hdGNoZXMubGVuZ3RoKS5maWxsKG51bGwpO1xyXG4gICAgY3VycmVudEVudHJpZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8vIGxvc2VyIGJyYWNrZXJcclxuXHJcbiAgbGV0IGxvc2VyTWF0Y2hDb3VudCA9IGVudHJpZXMubGVuZ3RoIC8gMjtcclxuICBsZXQgbG9zZXJSb3VuZCA9IDA7XHJcblxyXG4gIHdoaWxlIChsb3Nlck1hdGNoQ291bnQgPj0gMSkge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb3Nlck1hdGNoQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgICBtYXRjaGVzLnB1c2goY3JlYXRlTWF0Y2goYEwke2xvc2VyUm91bmR9LSR7aX1gKSk7XHJcbiAgICB9XHJcbiAgICByb3VuZHMucHVzaChjcmVhdGVSb3VuZChgTCR7bG9zZXJSb3VuZH1gLCBcImxvc2VyXCIsIG1hdGNoZXMpKTtcclxuICAgIGxvc2VyTWF0Y2hDb3VudCA9IE1hdGguZmxvb3IobG9zZXJNYXRjaENvdW50IC8gMik7XHJcbiAgICBsb3NlclJvdW5kICs9IDE7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBlbmQgcmVjdXJzaW9uIHRlc3RpbmcgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gIGJyYWNrZXRFbnRyaWVzLFxyXG4gIGJ5ZUVudHJpZXMsXHJcbiAgb3RoZXJFbnRyaWVzLFxyXG4gIGZpcnN0Um91bmRCb29sLFxyXG4pIHtcclxuICBjb25zdCBwYWlyaW5ncyA9IFtdO1xyXG5cclxuICAvLyBvcHRpb25hbCBoYW5kbGluZyBvZiBibGVuZGluZyB3aW5uZXIgYnJhY2tldCBsb3NlcnMgd2l0aCBsb3NlciBicmFja2V0IHdpbm5lcnNcclxuICBpZiAob3RoZXJFbnRyaWVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBvdGhlckVudHJpZXNbaV0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG4gIC8vIGhhbmRsZSBmaXJzdCByb3VuZCBzY2VuYXJpb3Mgd2l0aCBieWVzIHByZXNlbnRcclxuICBpZiAoYnllRW50cmllcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieWVFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiB7IG5hbWU6IGJ5ZUVudHJpZXNbaV0gfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gYnllRW50cmllcy5sZW5ndGgsIGogPSAtMTtcclxuICAgICAgaSA8IG5leHRQb3dlck9mVHdvKGJyYWNrZXRFbnRyaWVzLmxlbmd0aCkgLyAyO1xyXG4gICAgICBpICs9IDEsIGogLT0gMVxyXG4gICAgKSB7XHJcbiAgICAgIHBhaXJpbmdzW2ldID0ge1xyXG4gICAgICAgIGVudHJ5MTogYnJhY2tldEVudHJpZXNbaV0sXHJcbiAgICAgICAgZW50cnkyOiBicmFja2V0RW50cmllcy5hdChqKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWlyaW5ncztcclxuICB9XHJcblxyXG4gIC8vIGZpcnN0IHJvdW5kLCBidXQgbm8gYnllcyBuZWVkZWRcclxuICBpZiAoIWJ5ZUVudHJpZXMgJiYgZmlyc3RSb3VuZEJvb2wpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBqID0gLTE7IGkgPCBicmFja2V0RW50cmllcy5sZW5ndGggLyAyOyBpICs9IDEsIGogLT0gMSkge1xyXG4gICAgICBwYWlyaW5nc1tpXSA9IHtcclxuICAgICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICAgIGVudHJ5MjogYnJhY2tldEVudHJpZXMuYXQoaiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcmluZ3M7XHJcbiAgfVxyXG5cclxuICAvLyBjYXRjaCBzaW5nbGUtc291cmNlIGJyYWNrZXQgZ2VuZXJhdGlvblxyXG4gIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGJyYWNrZXRFbnRyaWVzLmxlbmd0aDsgaSArPSAyLCBqICs9IDEpIHtcclxuICAgIHBhaXJpbmdzW2pdID0ge1xyXG4gICAgICBlbnRyeTE6IGJyYWNrZXRFbnRyaWVzW2ldLFxyXG4gICAgICBlbnRyeTI6IGJyYWNrZXRFbnRyaWVzW2kgKyAxXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBwYWlyaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gZW50cnlEaXYoZW50cnlPYmopIHtcclxuICBjb25zdCBlbnRyeVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBlbnRyeVdyYXAuY2xhc3NMaXN0LmFkZChcImVudHJ5XCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gZW50cnlPYmoubmFtZTtcclxuICBwLnRleHRDb250ZW50ID0gZW50cnlPYmouZGVzY3JpcHRpb247XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XHJcblxyXG4gIGlmICh1dGlscy5pdGVtSW1hZ2VzW2VudHJ5T2JqLm5hbWVdKSB7XHJcbiAgICBpbWcuc3JjID0gdXRpbHMuaXRlbUltYWdlc1tlbnRyeU9iai5uYW1lXTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmlsbCBzdG9jayBpbWFnZSBpZiBubyBwaWN0dXJlIHByb3ZpZGVkICh1c3VhbGx5IGEgZ2VuZXJhdGVkIGJ5ZSlcclxuICAgIGltZy5zcmMgPSB1dGlscy5pdGVtSW1hZ2VzW1wiYnllXCJdO1xyXG4gIH1cclxuXHJcbiAgZW50cnlXcmFwLmFwcGVuZChoMiwgcCwgaW1nKTtcclxuXHJcbiAgcmV0dXJuIGVudHJ5V3JhcDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdEZvclNlbGVjdGlvbihlbnRyeTFEaXYsIGVudHJ5MU9iaiwgZW50cnkyRGl2LCBlbnRyeTJPYmopIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBudWxsO1xyXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XHJcbiAgICBuZXh0Um91bmRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEVudHJ5MSA9ICgpID0+IHtcclxuICAgICAgLy8gbG9hZCBzZWxlY3Rpb24gZGF0YSB0byBiZSBwYXNzZWQgdGhyb3VnaFxyXG4gICAgICBzZWxlY3Rpb24gPSB7IHdpbm5lcjogZW50cnkxT2JqLCBsb3NlcjogZW50cnkyT2JqIH07XHJcblxyXG4gICAgICAvLyBjc3MgdG8gaGlnaGxpZ2h0IHNlbGVjdGVkIGVudHJhbnRcclxuICAgICAgZW50cnkyRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJyb3VuZFdpbm5lclwiKTtcclxuICAgICAgZW50cnkxRGl2LmNsYXNzTGlzdC5hZGQoXCJyb3VuZFdpbm5lclwiKTtcclxuICAgICAgbmV4dFJvdW5kQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2VsZWN0RW50cnkyID0gKCkgPT4ge1xyXG4gICAgICBzZWxlY3Rpb24gPSB7IHdpbm5lcjogZW50cnkyT2JqLCBsb3NlcjogZW50cnkxT2JqIH07XHJcblxyXG4gICAgICBlbnRyeTFEaXYuY2xhc3NMaXN0LnJlbW92ZShcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBlbnRyeTJEaXYuY2xhc3NMaXN0LmFkZChcInJvdW5kV2lubmVyXCIpO1xyXG4gICAgICBuZXh0Um91bmRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29uZmlybVNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgaWYgKHJlc29sdmVkIHx8ICFzZWxlY3Rpb24pIHJldHVybjtcclxuICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgY2xlYW51cCgpO1xyXG4gICAgICByZXNvbHZlKHNlbGVjdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XHJcbiAgICAgIGVudHJ5MURpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0RW50cnkxKTtcclxuICAgICAgZW50cnkyRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RFbnRyeTIpO1xyXG4gICAgICBuZXh0Um91bmRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1TZWxlY3Rpb24pO1xyXG4gICAgICBuZXh0Um91bmRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIGVudHJ5MURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0RW50cnkxKTtcclxuICAgIGVudHJ5MkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0RW50cnkyKTtcclxuICAgIG5leHRSb3VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybVNlbGVjdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlCcmFja2V0UGFpcmluZ3MocGFpcmluZ3MpIHtcclxuICBjb25zdCBwYWlyaW5nc0NvcHkgPSBzdHJ1Y3R1cmVkQ2xvbmUocGFpcmluZ3MpO1xyXG4gIC8vIGxldCBtYXRjaE51bWJlciA9IDE7XHJcbiAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJpbmdzQ29weSkge1xyXG4gICAgY29uc3QgZW50cnkxID0gZW50cnlEaXYocGFpci5lbnRyeTEpO1xyXG4gICAgY29uc3QgZW50cnkyID0gZW50cnlEaXYocGFpci5lbnRyeTIpO1xyXG4gICAgZW50cnkxLmlkID0gXCJlbnRyeTFcIjtcclxuICAgIGVudHJ5Mi5pZCA9IFwiZW50cnkyXCI7XHJcblxyXG4gICAgLy8gcm91bmQgYW5kIG1hdGNoIGRpc3BsYXkgaW5mb1xyXG4gICAgcm91bmREaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAoY3VycmVudFJvdW5kID09PSBcIndpbm5lclwiKSB7XHJcbiAgICAgIHJvdW5kRGlzcGxheS50ZXh0Q29udGVudCA9IGBSb3VuZCBvZiAke3BhaXJpbmdzLmxlbmd0aCAqIDJ9YDtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50Um91bmQgPT09IFwibG9zZXJcIikge1xyXG4gICAgICByb3VuZERpc3BsYXkudGV4dENvbnRlbnQgPSBgTG9zZXIgUm91bmQgJHtsb3NlclJvdW5kQ291bnR9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDdXJyZW50bHkgaGlkaW5nIGRpc3BsYXllZCBtYXRjaCBudW1iZXIgdG8gZW1waGFzaXplIGJsaW5kIGJyYWNrZXRcclxuICAgIC8vIGNhbiBiZSB1bmNvbW1lbnRlZCBhcyBkZXNpcmVkLCByZW1lbWJlciBsZXQgbWF0Y2hOdW1iZXIgb3V0c2lkZSBmb3IgbG9vcFxyXG4gICAgLy8gYW5kIHAgZWxlbWVudCBpbiBodG1sIGZpbGUgaWYgY2hhbmdpbmdcclxuICAgIC8vXHJcbiAgICAvLyBtYXRjaERpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vIG1hdGNoRGlzcGxheS50ZXh0Q29udGVudCA9IGBNYXRjaCAke21hdGNoTnVtYmVyfWA7XHJcbiAgICAvLyBtYXRjaE51bWJlciArPSAxO1xyXG5cclxuICAgIHNlbGVjdGlvbkRpc3BsYXlEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHNlbGVjdGlvbkRpc3BsYXlEaXYuYXBwZW5kKGVudHJ5MSwgZW50cnkyKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWl0Rm9yU2VsZWN0aW9uKFxyXG4gICAgICBlbnRyeTEsXHJcbiAgICAgIHBhaXIuZW50cnkxLFxyXG4gICAgICBlbnRyeTIsXHJcbiAgICAgIHBhaXIuZW50cnkyLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBsb2cgcmVzdWx0IHRvIG1hdGNoIG9iamVjdHNcclxuICAgIHJlc3VsdC53aW5uZXIud2luID0gdHJ1ZTtcclxuICAgIHJlc3VsdC5sb3Nlci53aW4gPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgc2VsZWN0aW9uRGlzcGxheURpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGlmIChicmFja2V0Q29tcGxldGUpIHtcclxuICAgICAgLy8gLnZhbHVlcyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBwYWlyIG9iamVjdHMgKGZpbmFsIHR3byBlbnRyaWVzIGhlcmUpXHJcbiAgICAgIC8vIHRoZW4gZmluZCB3aGljaCBlbnRyeSBoYWQgd2luIHNldCB0byB0cnVlXHJcbiAgICAgIGNvbnN0IGZpbmFsV2lubmVyID0gT2JqZWN0LnZhbHVlcyhyZXN1bHQpLmZpbmQoKG9iaikgPT4gb2JqLndpbik7XHJcbiAgICAgIGRpc3BsYXlXaW5uZXIoZmluYWxXaW5uZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gXCJ3aW5uZXJcIikge1xyXG4gICAgcmVzdWx0c1tgd2lubmVyUm91bmQke3dpbm5lclJvdW5kQ291bnR9YF0gPSBwYWlyaW5nc0NvcHk7XHJcbiAgfVxyXG4gIGlmIChjdXJyZW50Um91bmQgPT09IFwibG9zZXJcIikge1xyXG4gICAgcmVzdWx0c1tgbG9zZXJSb3VuZCR7bG9zZXJSb3VuZENvdW50fWBdID0gcGFpcmluZ3NDb3B5O1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCJyZXN1bHRzXCIsIHJlc3VsdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKHdpbm5lck9iaikge1xyXG4gIHJvdW5kRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIC8vIHVuY29tbWVudCBpZiByZS1lbmFibGluZyBtYXRjaCBudW1iZXIgZGlzcGxheVxyXG4gIC8vIG1hdGNoRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHNlbGVjdGlvbkRpc3BsYXlEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3Qgd2lubmVyID0gZW50cnlEaXYod2lubmVyT2JqKTtcclxuICByb3VuZERpc3BsYXkudGV4dENvbnRlbnQgPSBcIldJTk5FUlwiO1xyXG4gIHNlbGVjdGlvbkRpc3BsYXlEaXYuYXBwZW5kKHdpbm5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlc3VsdEFycmF5KHJvdW5kVHlwZSwgcm91bmRDb3VudCwgd2luU3RhdHVzKSB7XHJcbiAgLy8gcm91bmRUeXBlID0gJ3dpbm5lcicgb3IgJ2xvc2VyJ1xyXG4gIC8vIHJvdW5kQ291bnQgPSBpbnRlZ2VyXHJcbiAgLy8gd2luU3RhdHVzID0gdHJ1ZSBvciBmYWxzZVxyXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gIGZvciAoY29uc3QgbWF0Y2ggb2YgcmVzdWx0c1tgJHtyb3VuZFR5cGV9Um91bmQke3JvdW5kQ291bnR9YF0pIHtcclxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgT2JqZWN0LmtleXMobWF0Y2gpKSB7XHJcbiAgICAgIC8vIGNhcHR1cmUgd2luc1xyXG4gICAgICBpZiAod2luU3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKG1hdGNoW2VudHJ5XS53aW4pIHJlc3VsdC5wdXNoKG1hdGNoW2VudHJ5XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNhcHR1cmUgbG9zc2VzXHJcbiAgICAgIGlmICghd2luU3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKCFtYXRjaFtlbnRyeV0ud2luKSByZXN1bHQucHVzaChtYXRjaFtlbnRyeV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1haW4ocGFpcmluZ3MpIHtcclxuICBjb25zdCBtYXhXaW5uZXJSb3VuZHMgPSBnZXRXaW5uZXJSb3VuZENvdW50KGJyYWNrZXRFbnRyaWVzLmxlbmd0aCk7XHJcbiAgY29uc3QgbWF4TG9zZXJSb3VuZHMgPSBnZXRMb3NlclJvdW5kQ291bnQoYnJhY2tldEVudHJpZXMubGVuZ3RoKTtcclxuICAvLyBjb25zb2xlLmxvZyhcclxuICAvLyAgIFwid3JjLCB3cmMyLCBscmNcIixcclxuICAvLyAgIHdpbm5lclJvdW5kQ291bnQsXHJcbiAgLy8gICB3aW5uZXJSb3VuZENvdW50MixcclxuICAvLyAgIGxvc2VyUm91bmRDb3VudCxcclxuICAvLyApO1xyXG4gIGF3YWl0IGRpc3BsYXlCcmFja2V0UGFpcmluZ3MocGFpcmluZ3MpO1xyXG5cclxuICBpZiAoYnJhY2tldENvbXBsZXRlKSB7XHJcbiAgICAvLyBmaW5hbCwgY29tcGxldGUgYnJhY2sgZ2VuZXJhdGlvblxyXG4gICAgZGlzcGxheUZpbmFsQnJhY2tldChyZXN1bHRzKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHdpbm5lclJvdW5kQ291bnQgPCBtYXhXaW5uZXJSb3VuZHMpIHtcclxuICAgIGNvbnN0IHdpbm5lckJyYWNrZXRXaW5uZXJzID0gZ2V0UmVzdWx0QXJyYXkoXHJcbiAgICAgIFwid2lubmVyXCIsXHJcbiAgICAgIHdpbm5lclJvdW5kQ291bnQsXHJcbiAgICAgIHRydWUsXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cod2lubmVyQnJhY2tldFdpbm5lcnMpO1xyXG4gICAgd2lubmVyUm91bmRDb3VudCArPSAxO1xyXG5cclxuICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKHdpbm5lckJyYWNrZXRXaW5uZXJzKTtcclxuICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHdpbm5lclJvdW5kQ291bnQgPT09IG1heFdpbm5lclJvdW5kcyAmJlxyXG4gICAgbG9zZXJSb3VuZENvdW50IDwgbWF4TG9zZXJSb3VuZHNcclxuICApIHtcclxuICAgIGN1cnJlbnRSb3VuZCA9IFwibG9zZXJcIjtcclxuICAgIGlmIChsb3NlclJvdW5kQ291bnQgPT09IDApIHtcclxuICAgICAgLy8gaGFuZGxlIGZpcnN0IGxvc2VyIHJvdW5kIGdlbmVyYXRlZCBvbmx5IGZyb20gd2lubmVyIGJyYWNrZXRcclxuICAgICAgY29uc3Qgd2lubmVyQnJhY2tldExvc2VycyA9IGdldFJlc3VsdEFycmF5KFxyXG4gICAgICAgIFwid2lubmVyXCIsXHJcbiAgICAgICAgd2lubmVyUm91bmRDb3VudDIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICk7XHJcbiAgICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKHdpbm5lckJyYWNrZXRMb3NlcnMsIFtdKTtcclxuXHJcbiAgICAgIHdpbm5lclJvdW5kQ291bnQyICs9IDE7XHJcbiAgICAgIGxvc2VyUm91bmRDb3VudCArPSAxO1xyXG4gICAgICBhd2FpdCBtYWluKHBhaXJBcnJheSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9zZXJSb3VuZENvdW50ID09PSBtYXhMb3NlclJvdW5kcyAtIDEpIHtcclxuICAgICAgLy8gRmluYWwgcm91bmQuIExvc2VyIHJvdW5kcyBhcmUgMCBpbmRleGVkIHRvIGJldHRlciBzeW5jIHdpdGggcm91bmQgZGlzcGxheVxyXG4gICAgICBjb25zdCB3aW5uZXJCcmFja2V0V2lubmVyID0gZ2V0UmVzdWx0QXJyYXkoXHJcbiAgICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgICB3aW5uZXJSb3VuZENvdW50LFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGxvc2VyQnJhY2tldFdpbm5lciA9IGdldFJlc3VsdEFycmF5KFwibG9zZXJcIiwgbG9zZXJSb3VuZENvdW50LCB0cnVlKTtcclxuXHJcbiAgICAgIHBhaXJBcnJheSA9IGdlbmVyYXRlQnJhY2tldFBhaXJpbmdzKFxyXG4gICAgICAgIHdpbm5lckJyYWNrZXRXaW5uZXIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgbG9zZXJCcmFja2V0V2lubmVyLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgYnJhY2tldENvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgbG9zZXJSb3VuZENvdW50ICs9IDE7XHJcbiAgICAgIGF3YWl0IG1haW4ocGFpckFycmF5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdpbm5lckJyYWNrZXRMb3NlcnMgPSBnZXRSZXN1bHRBcnJheShcclxuICAgICAgXCJ3aW5uZXJcIixcclxuICAgICAgd2lubmVyUm91bmRDb3VudDIsXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvc2VyQnJhY2tldFdpbm5lcnMgPSBnZXRSZXN1bHRBcnJheShcImxvc2VyXCIsIGxvc2VyUm91bmRDb3VudCwgdHJ1ZSk7XHJcblxyXG4gICAgaWYgKGxvc2VyQnJhY2tldFdpbm5lcnMubGVuZ3RoID4gd2lubmVyQnJhY2tldExvc2Vycy5sZW5ndGgpIHtcclxuICAgICAgLy8gaGFuZGxlIG9mZnNldCByb3VuZHMgd2hlcmUgbG9zZXIgYnJhY2tldCBuZWVkcyB0byBjYXRjaCB1cFxyXG4gICAgICBwYWlyQXJyYXkgPSBnZW5lcmF0ZUJyYWNrZXRQYWlyaW5ncyhsb3NlckJyYWNrZXRXaW5uZXJzLCBbXSk7XHJcblxyXG4gICAgICBsb3NlclJvdW5kQ291bnQgKz0gMTtcclxuICAgICAgYXdhaXQgbWFpbihwYWlyQXJyYXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYWlyQXJyYXkgPSBnZW5lcmF0ZUJyYWNrZXRQYWlyaW5ncyhcclxuICAgICAgd2lubmVyQnJhY2tldExvc2VycyxcclxuICAgICAgW10sXHJcbiAgICAgIGxvc2VyQnJhY2tldFdpbm5lcnMsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG5vcm1hbCBvcGVyYXRpb24gZW5kcyBoZXJlXHJcbiAgICB3aW5uZXJSb3VuZENvdW50MiArPSAxO1xyXG4gICAgbG9zZXJSb3VuZENvdW50ICs9IDE7XHJcbiAgICBhd2FpdCBtYWluKHBhaXJBcnJheSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaW5hbE1hdGNoZXMocmVzdWx0c09iaiwgZW50cmFudENvdW50KSB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IFtdO1xyXG5cclxuICBsZXQgd2lubmVyTWF0Y2hDb3VudCA9IDE7XHJcbiAgbGV0IGxvc2VyTWF0Y2hDb3VudCA9IDE7XHJcbiAgbGV0IGludHJhUm91bmRNYXRjaENvdW50ZXIgPSAxO1xyXG4gIGxldCBwcmlvck9kZExvc2VyU3BhY2luZyA9IHt9O1xyXG4gIC8vIHBhZCB3aW5uZXIgYmxvY2sgd2l0aCAyIHNwYWNlciByb3dzIGFib3ZlIGxvc2Vyc1xyXG4gIGNvbnN0IGxvc2Vyc1Jvd3NPZmZzZXQgPSBuZXh0UG93ZXJPZlR3byhlbnRyYW50Q291bnQpIC8gMiArIDI7XHJcblxyXG4gIGZvciAoY29uc3Qgcm91bmQgaW4gcmVzdWx0c09iaikge1xyXG4gICAgLy8gcmVzZXQgY291bnRlciBvbiBlYWNoIGZyZXNoIHJvdW5kXHJcbiAgICBjb25zdCBjdXJyZW50Um91bmQgPSBOdW1iZXIocm91bmQubWF0Y2goL1xcZCsvKVswXSk7XHJcbiAgICBwcmlvck9kZExvc2VyU3BhY2luZ1tjdXJyZW50Um91bmRdID0gW107XHJcbiAgICBpbnRyYVJvdW5kTWF0Y2hDb3VudGVyID0gMTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIHJlc3VsdHNPYmpbcm91bmRdKSB7XHJcbiAgICAgIGxldCBvYmo7XHJcbiAgICAgIGxldCByb3dDYWxjO1xyXG5cclxuICAgICAgaWYgKHJvdW5kLmluY2x1ZGVzKFwid2lubmVyXCIpKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gMSkgcm93Q2FsYyA9IGludHJhUm91bmRNYXRjaENvdW50ZXI7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA+IDEpIHtcclxuICAgICAgICAgIHJvd0NhbGMgPVxyXG4gICAgICAgICAgICBNYXRoLnBvdygyLCBjdXJyZW50Um91bmQgLSAyKSArXHJcbiAgICAgICAgICAgIDAuNSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KDIsIGN1cnJlbnRSb3VuZCAtIDEpICogKGludHJhUm91bmRNYXRjaENvdW50ZXIgLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIGlkOiBgdyR7d2lubmVyTWF0Y2hDb3VudH1gLFxyXG4gICAgICAgICAgcm91bmQ6IE51bWJlcihyb3VuZC5tYXRjaCgvXFxkKy8pWzBdKSxcclxuICAgICAgICAgIHJvdzogcm93Q2FsYyxcclxuICAgICAgICAgIHAxOiBtYXRjaC5lbnRyeTEubmFtZSxcclxuICAgICAgICAgIHAyOiBtYXRjaC5lbnRyeTIubmFtZSxcclxuICAgICAgICAgIHAxd2luOiBtYXRjaC5lbnRyeTEud2luLFxyXG4gICAgICAgICAgcDJ3aW46IG1hdGNoLmVudHJ5Mi53aW4sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5uZXJNYXRjaENvdW50ICs9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbG9zZXIgcm91bmRzXHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gMSkge1xyXG4gICAgICAgICAgcm93Q2FsYyA9IGludHJhUm91bmRNYXRjaENvdW50ZXI7XHJcbiAgICAgICAgICBwcmlvck9kZExvc2VyU3BhY2luZ1tjdXJyZW50Um91bmRdLnB1c2gocm93Q2FsYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPiAxICYmIGN1cnJlbnRSb3VuZCAlIDIgPT09IDApIHtcclxuICAgICAgICAgIC8vIGV2ZW4gcm91bmRzXHJcblxyXG4gICAgICAgICAgLy8gZ2V0IHByaW9yIHJvdW5kIHNwYWNpbmcgKGN1cnJlbnQgLSAxKSwgdGhlbiBhY2NvdW50IGZvciBtYXRjaGVzIGluZGV4aW5nIGF0IDEsIGFycmF5IGF0IDBcclxuICAgICAgICAgIHJvd0NhbGMgPVxyXG4gICAgICAgICAgICBwcmlvck9kZExvc2VyU3BhY2luZ1tjdXJyZW50Um91bmQgLSAxXVtpbnRyYVJvdW5kTWF0Y2hDb3VudGVyIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPiAxICYmIGN1cnJlbnRSb3VuZCAlIDIgIT09IDApIHtcclxuICAgICAgICAgIC8vIG9kZCByb3VuZHNcclxuICAgICAgICAgIGNvbnN0IG9kZExvc2VyUm91bmRDb3VudGVyID0gKGN1cnJlbnRSb3VuZCAtIDMpIC8gMjtcclxuICAgICAgICAgIHJvd0NhbGMgPVxyXG4gICAgICAgICAgICBNYXRoLnBvdygyLCBjdXJyZW50Um91bmQgLSAzIC0gb2RkTG9zZXJSb3VuZENvdW50ZXIpICtcclxuICAgICAgICAgICAgMC41ICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMiwgY3VycmVudFJvdW5kIC0gMiAtIG9kZExvc2VyUm91bmRDb3VudGVyKSAqXHJcbiAgICAgICAgICAgICAgKGludHJhUm91bmRNYXRjaENvdW50ZXIgLSAxKTtcclxuICAgICAgICAgIHByaW9yT2RkTG9zZXJTcGFjaW5nW2N1cnJlbnRSb3VuZF0ucHVzaChyb3dDYWxjKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPT09IGdldExvc2VyUm91bmRDb3VudChlbnRyYW50Q291bnQpKSB7XHJcbiAgICAgICAgICAvLyB3YW50IDAuNSBwYXN0IHdpbm5lciBicmFja2V0LCBidXQgc3VidHJhY3QgMiBmcm9tIHRoYXQgdG8gYWNjb3VudCBmb3IgdGhlXHJcbiAgICAgICAgICAvLyBhbHJlYWR5IGVzdGFibGlzaGVkIG9mZnNldCBidWZmZXJcclxuICAgICAgICAgIHJvd0NhbGMgPSAtMS41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICBpZDogYGwke2xvc2VyTWF0Y2hDb3VudH1gLFxyXG4gICAgICAgICAgcm91bmQ6IE51bWJlcihyb3VuZC5tYXRjaCgvXFxkKy8pWzBdKSxcclxuICAgICAgICAgIHJvdzogcm93Q2FsYyArIGxvc2Vyc1Jvd3NPZmZzZXQsXHJcbiAgICAgICAgICBwMTogbWF0Y2guZW50cnkxLm5hbWUsXHJcbiAgICAgICAgICBwMjogbWF0Y2guZW50cnkyLm5hbWUsXHJcbiAgICAgICAgICBwMXdpbjogbWF0Y2guZW50cnkxLndpbixcclxuICAgICAgICAgIHAyd2luOiBtYXRjaC5lbnRyeTIud2luLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9zZXJNYXRjaENvdW50ICs9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGludHJhUm91bmRNYXRjaENvdW50ZXIgKz0gMTtcclxuICAgICAgbWF0Y2hlcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xyXG4gIHJldHVybiBtYXRjaGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3QnJhY2tldExpbmUoc3RhcnQsIGVuZCkge1xyXG4gIGNvbnN0IG1pZFggPSBzdGFydC54ICsgKGVuZC54IC0gc3RhcnQueCkgLyAyO1xyXG5cclxuICBjb25zdCBwYXRoRGF0YSA9IGBcclxuICBNICR7c3RhcnQueH0gJHtzdGFydC55fVxyXG4gIEggJHttaWRYfVxyXG4gIFYgJHtlbmQueX1cclxuICBIICR7ZW5kLnh9XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aERhdGEpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiI2ZmZmZmZmZmXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG4gIHBhdGguc2V0QXR0cmlidXRlKFwidmVjdG9yLWVmZmVjdFwiLCBcIm5vbi1zY2FsaW5nLXN0cm9rZVwiKTtcclxuXHJcbiAgYnJhY2tldExpbmVzLmFwcGVuZChwYXRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZpbmFsQnJhY2tldChyZXN1bHRzT2JqKSB7XHJcbiAgY29uc3QgZW50cmFudHMgPSByZXN1bHRzT2JqLndpbm5lclJvdW5kMS5sZW5ndGggKiAyO1xyXG4gIGNvbnN0IG1hdGNoZXMgPSBnZXRGaW5hbE1hdGNoZXMocmVzdWx0c09iaiwgZW50cmFudHMpO1xyXG5cclxuICBjb25zdCBub2RlUG9zaXRpb25zID0ge307XHJcbiAgY29uc3QgaGFsZkVudHJhbnRDb3VudCA9IGVudHJhbnRzIC8gMjtcclxuICBjb25zdCBxdWFydGVyRW50cmFudENvdW50ID0gaGFsZkVudHJhbnRDb3VudCAvIDI7XHJcbiAgY29uc3QgbWF4V2lubmVyUm91bmRzID0gZ2V0V2lubmVyUm91bmRDb3VudChlbnRyYW50cyk7XHJcbiAgY29uc3QgbWF4TG9zZXJSb3VuZHMgPSBnZXRMb3NlclJvdW5kQ291bnQoZW50cmFudHMpO1xyXG4gIGxldCB3aW5uZXJJbnB1dENvdW50ZXIgPSAxO1xyXG4gIGxldCBsb3NlcklucHV0Q291bnRlciA9IDE7XHJcblxyXG4gIGxldCBtYXhYID0gMDtcclxuICBsZXQgbWF4WSA9IDA7XHJcbiAgbWF0Y2hlcy5mb3JFYWNoKChtYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcIm1hdGNoTm9kZVwiKTtcclxuICAgIGVsLmlkID0gbWF0Y2guaWQ7XHJcblxyXG4gICAgaWYgKG1hdGNoLnAxd2luKSB7XHJcbiAgICAgIGVsLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSBcInAxIHdpbm5lclwiPiR7bWF0Y2gucDF9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJwMiBsb3NlclwiPiR7bWF0Y2gucDJ9PC9kaXY+XHJcbiAgICBgO1xyXG4gICAgfVxyXG4gICAgaWYgKG1hdGNoLnAyd2luKSB7XHJcbiAgICAgIGVsLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSBcInAxIGxvc2VyXCI+JHttYXRjaC5wMX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3MgPSBcInAyIHdpbm5lclwiPiR7bWF0Y2gucDJ9PC9kaXY+XHJcbiAgICBgO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0IGFuZCBzZXQgYWJzb2x1dGUgeCx5IHBvc2l0aW9uc1xyXG4gICAgY29uc3QgeFBvc2l0aW9uID0gZ2V0WChtYXRjaC5yb3VuZCk7XHJcbiAgICBjb25zdCB5UG9zaXRpb24gPSBnZXRZKG1hdGNoLnJvdyk7XHJcbiAgICBpZiAoeFBvc2l0aW9uID4gbWF4WCkgbWF4WCA9IHhQb3NpdGlvbjtcclxuICAgIGlmICh5UG9zaXRpb24gPiBtYXhZKSBtYXhZID0geVBvc2l0aW9uO1xyXG5cclxuICAgIGVsLnN0eWxlLmxlZnQgPSBgJHt4UG9zaXRpb259cHhgO1xyXG4gICAgZWwuc3R5bGUudG9wID0gYCR7eVBvc2l0aW9ufXB4YDtcclxuICAgIGVsLnN0eWxlLndpZHRoID0gYCR7QlJBQ0tFVF9DT05GSUcuTUFUQ0hfV0lEVEh9cHhgO1xyXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7QlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUfXB4YDtcclxuICAgIGVsLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vcm1hbFwiO1xyXG5cclxuICAgIC8vIHNhdmUgY29vcmRpbmF0ZXMgZm9yIGxpbmUgYXR0YWNobWVudHNcclxuICAgIG5vZGVQb3NpdGlvbnNbbWF0Y2guaWRdID0ge1xyXG4gICAgICBpbnB1dDogeyB4OiB4UG9zaXRpb24sIHk6IHlQb3NpdGlvbiArIEJSQUNLRVRfQ09ORklHLk1BVENIX0hFSUdIVCAvIDIgfSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgeDogeFBvc2l0aW9uICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfV0lEVEgsXHJcbiAgICAgICAgeTogeVBvc2l0aW9uICsgQlJBQ0tFVF9DT05GSUcuTUFUQ0hfSEVJR0hUIC8gMixcclxuICAgICAgfSxcclxuICAgICAgcm91bmQ6IG1hdGNoLnJvdW5kLFxyXG4gICAgfTtcclxuICAgIG1hdGNoZXNMYXllci5hcHBlbmQoZWwpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBzZXQgYnJhY2tldCBjb250YWluZXIgZGl2IHRvIGZpdCB0aGUgbWF0Y2hlcyArIDUwIGV4dHJhIHBhZGRpbmdcclxuICBjb25zdCB0b3RhbEhlaWdodCA9IG1heFkgKyBCUkFDS0VUX0NPTkZJRy5NQVRDSF9IRUlHSFQgKyA1MDtcclxuICBjb25zdCB0b3RhbFdpZHRoID0gbWF4WCArIEJSQUNLRVRfQ09ORklHLk1BVENIX1dJRFRIICsgNTA7XHJcblxyXG4gIGJyYWNrZXRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7dG90YWxIZWlnaHR9cHhgO1xyXG4gIGJyYWNrZXRDb250YWluZXIuc3R5bGUud2lkdGggPSBgJHt0b3RhbFdpZHRofXB4YDtcclxuXHJcbiAgY29uc29sZS5sb2cobm9kZVBvc2l0aW9ucyk7XHJcbiAgT2JqZWN0LmtleXMobm9kZVBvc2l0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBzcGxpdCA9IGtleS5tYXRjaCgvKFt3bF0pKFxcZCspLyk7XHJcbiAgICBpZiAoc3BsaXRbMV0gPT09IFwid1wiKSB7XHJcbiAgICAgIGNvbnN0IG5leHRJbnB1dElkID0gYHcke3dpbm5lcklucHV0Q291bnRlciArIGhhbGZFbnRyYW50Q291bnR9YDtcclxuXHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgPT09IG1heFdpbm5lclJvdW5kcykge1xyXG4gICAgICAgIC8vIGZpbmFsIHJvdW5kIGV4Y2VwdGlvblxyXG4gICAgICAgIC8vIHdpbm5lciBhbmQgbG9zZXIgYnJhY2tldHMgaGF2ZSBzYW1lIG1hdGNoIGNvdW50LCBhcHBseSBjdXJyZW50IGNvdW50IHRvIGwtSUQgdG8gbWF0Y2hcclxuICAgICAgICAvLyB3aW5uZXIgd2lubmVyIHdpdGggbG9zZXIgd2lubmVyIGluIGZpbmFsIHJvdW5kXHJcbiAgICAgICAgY29uc3QgZmluYWxNYXRjaElkID0gYGwke3NwbGl0WzJdfWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmluYWxNYXRjaElkKTtcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tmaW5hbE1hdGNoSWRdLmlucHV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCA8IG1heFdpbm5lclJvdW5kcylcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tuZXh0SW5wdXRJZF0uaW5wdXQsXHJcbiAgICAgICAgKTtcclxuICAgICAgaWYgKE51bWJlcihzcGxpdFsyXSkgJSAyID09PSAwKSB7XHJcbiAgICAgICAgLy8gb25seSBpbmNyZW1lbnQgY291bnRlciBldmVyeSBvdGhlciBtYXRjaCBzaW5jZSBhIHdpbm5lciBicmFja2V0IGZ1bm5lbHMgdHdvIGludG8gb25lXHJcbiAgICAgICAgd2lubmVySW5wdXRDb3VudGVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzcGxpdFsxXSA9PT0gXCJsXCIpIHtcclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCA9PT0gbWF4TG9zZXJSb3VuZHMpIHtcclxuICAgICAgICAvLyBmaW5hbCBsb3NlciByb3VuZCBoYXMgbm8gb3V0cHV0LCBicmFja2V0IGlzIGZpbmlzaGVkXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXh0SW5wdXRJZCA9IGBsJHtsb3NlcklucHV0Q291bnRlciArIHF1YXJ0ZXJFbnRyYW50Q291bnR9YDtcclxuXHJcbiAgICAgIGlmIChub2RlUG9zaXRpb25zW2tleV0ucm91bmQgJSAyID09PSAwKSB7XHJcbiAgICAgICAgLy8gZXZlbiByb3VuZHNcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tuZXh0SW5wdXRJZF0uaW5wdXQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoTnVtYmVyKHNwbGl0WzJdKSAlIDIgPT09IDApIHtcclxuICAgICAgICAgIC8vIG9ubHkgaW5jcmVtZW50IGNvdW50ZXIgZXZlcnkgb3RoZXIgbWF0Y2ggc2luY2UgYSB3aW5uZXIgYnJhY2tldCBmdW5uZWxzIHR3byBpbnRvIG9uZVxyXG4gICAgICAgICAgbG9zZXJJbnB1dENvdW50ZXIgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGVQb3NpdGlvbnNba2V5XS5yb3VuZCAlIDIgIT09IDApIHtcclxuICAgICAgICAvL29kZCByb3VuZHNcclxuICAgICAgICBkcmF3QnJhY2tldExpbmUoXHJcbiAgICAgICAgICBub2RlUG9zaXRpb25zW2tleV0ub3V0cHV0LFxyXG4gICAgICAgICAgbm9kZVBvc2l0aW9uc1tuZXh0SW5wdXRJZF0uaW5wdXQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsb3NlcklucHV0Q291bnRlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBuZXh0Um91bmROdW0gPSBOdW1iZXIoc3BsaXRbMl0pICsgMTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNwbGl0WzFdICsgbmV4dFJvdW5kTnVtKTtcclxuICAgIC8vIGRyYXdCcmFja2V0TGluZShcclxuICAgIC8vICAgbm9kZVBvc2l0aW9uc1trZXldLm91dHB1dCxcclxuICAgIC8vICAgbm9kZVBvc2l0aW9uc1tzcGxpdFsxXSArIG5leHRSb3VuZE51bV0uaW5wdXQsXHJcbiAgICAvLyApO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkcmF3QnJhY2tldExpbmUobm9kZVBvc2l0aW9uc1tcIm0xXCJdLm91dHB1dCwgbm9kZVBvc2l0aW9uc1tcIm0zXCJdLmlucHV0KTtcclxuICAvLyBkcmF3QnJhY2tldExpbmUobm9kZVBvc2l0aW9uc1tcIm0yXCJdLm91dHB1dCwgbm9kZVBvc2l0aW9uc1tcIm0zXCJdLmlucHV0KTtcclxufVxyXG5cclxucGFpckFycmF5ID0gZ2VuZXJhdGVCcmFja2V0UGFpcmluZ3MoXHJcbiAgYnJhY2tldEVudHJpZXMsXHJcbiAgZ2VuZXJhdGVCeWVzKGJyYWNrZXRFbnRyaWVzLmxlbmd0aCksXHJcbiAgZmFsc2UsXHJcbiAgdHJ1ZSxcclxuKTtcclxuYWRqdXN0TWF0Y2hOb2RlSGVpZ2h0KCk7XHJcbi8vIGdldEZpbmFsTWF0Y2hlcyh0ZXN0UmVzdWx0KTtcclxuLy8gZGlzcGxheUZpbmFsQnJhY2tldCh0ZXN0UmVzdWx0KTtcclxubWFpbihwYWlyQXJyYXkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=