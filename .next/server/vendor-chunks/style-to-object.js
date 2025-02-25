"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-to-object";
exports.ids = ["vendor-chunks/style-to-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-to-object/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-object/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = StyleToObject;\nvar inline_style_parser_1 = __importDefault(__webpack_require__(/*! inline-style-parser */ \"(ssr)/./node_modules/inline-style-parser/index.js\"));\n/**\n * Parses inline style to object.\n *\n * @param style - Inline style.\n * @param iterator - Iterator.\n * @returns - Style object or null.\n *\n * @example Parsing inline style to object:\n *\n * ```js\n * import parse from 'style-to-object';\n * parse('line-height: 42;'); // { 'line-height': '42' }\n * ```\n */\nfunction StyleToObject(style, iterator) {\n    var styleObject = null;\n    if (!style || typeof style !== 'string') {\n        return styleObject;\n    }\n    var declarations = (0, inline_style_parser_1.default)(style);\n    var hasIterator = typeof iterator === 'function';\n    declarations.forEach(function (declaration) {\n        if (declaration.type !== 'declaration') {\n            return;\n        }\n        var property = declaration.property, value = declaration.value;\n        if (hasIterator) {\n            iterator(property, value, declaration);\n        }\n        else if (value) {\n            styleObject = styleObject || {};\n            styleObject[property] = value;\n        }\n    });\n    return styleObject;\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsOEVBQXFCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSSxLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS10by1vYmplY3QvY2pzL2luZGV4LmpzP2VjZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVRvT2JqZWN0O1xudmFyIGlubGluZV9zdHlsZV9wYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaW5saW5lLXN0eWxlLXBhcnNlclwiKSk7XG4vKipcbiAqIFBhcnNlcyBpbmxpbmUgc3R5bGUgdG8gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBzdHlsZSAtIElubGluZSBzdHlsZS5cbiAqIEBwYXJhbSBpdGVyYXRvciAtIEl0ZXJhdG9yLlxuICogQHJldHVybnMgLSBTdHlsZSBvYmplY3Qgb3IgbnVsbC5cbiAqXG4gKiBAZXhhbXBsZSBQYXJzaW5nIGlubGluZSBzdHlsZSB0byBvYmplY3Q6XG4gKlxuICogYGBganNcbiAqIGltcG9ydCBwYXJzZSBmcm9tICdzdHlsZS10by1vYmplY3QnO1xuICogcGFyc2UoJ2xpbmUtaGVpZ2h0OiA0MjsnKTsgLy8geyAnbGluZS1oZWlnaHQnOiAnNDInIH1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBTdHlsZVRvT2JqZWN0KHN0eWxlLCBpdGVyYXRvcikge1xuICAgIHZhciBzdHlsZU9iamVjdCA9IG51bGw7XG4gICAgaWYgKCFzdHlsZSB8fCB0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG4gICAgdmFyIGRlY2xhcmF0aW9ucyA9ICgwLCBpbmxpbmVfc3R5bGVfcGFyc2VyXzEuZGVmYXVsdCkoc3R5bGUpO1xuICAgIHZhciBoYXNJdGVyYXRvciA9IHR5cGVvZiBpdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBkZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVjbGFyYXRpb24pIHtcbiAgICAgICAgaWYgKGRlY2xhcmF0aW9uLnR5cGUgIT09ICdkZWNsYXJhdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcGVydHkgPSBkZWNsYXJhdGlvbi5wcm9wZXJ0eSwgdmFsdWUgPSBkZWNsYXJhdGlvbi52YWx1ZTtcbiAgICAgICAgaWYgKGhhc0l0ZXJhdG9yKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihwcm9wZXJ0eSwgdmFsdWUsIGRlY2xhcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgc3R5bGVPYmplY3QgPSBzdHlsZU9iamVjdCB8fCB7fTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/cjs/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/style-to-object/esm/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/style-to-object/esm/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cjs/index.js */ \"(ssr)/./node_modules/style-to-object/cjs/index.js\");\n\n\n// ensure compatibility with rollup umd build\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] || _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2VzbS9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0EsaUVBQWUscURBQXFCLElBQUksMENBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9lc20vaW5kZXgubWpzPzUxYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlVG9PYmplY3QgZnJvbSAnLi4vY2pzL2luZGV4LmpzJztcblxuLy8gZW5zdXJlIGNvbXBhdGliaWxpdHkgd2l0aCByb2xsdXAgdW1kIGJ1aWxkXG5leHBvcnQgZGVmYXVsdCBTdHlsZVRvT2JqZWN0LmRlZmF1bHQgfHwgU3R5bGVUb09iamVjdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/esm/index.mjs\n");

/***/ })

};
;