"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_fetchAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/fetchAPI */ \"./functions/fetchAPI.js\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Main.module.css */ \"./styles/Main.module.css\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var _components_assets_peperoni_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/assets/peperoni.jpg */ \"./components/assets/peperoni.jpg\");\n/* harmony import */ var _Modalb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modalb */ \"./components/Modalb.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Main = function(props) {\n    _s();\n    var _data = props.data, title = _data.title, text = _data.text, price = _data.price, image = _data.image, src = _data.src, id = _data.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modal = ref[0], setModal = ref[1];\n    console.log(title);\n    var clickHandler = function() {\n        setModal(!modal);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: clickHandler,\n        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().fake),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n                            children: text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().pic),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    // loader={() => {\n                    //   return image;\n                    // }}\n                    unoptimized: true,\n                    src: image,\n                    alt: \"hello\",\n                    width: 130,\n                    height: 140\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().price),\n                children: [\n                    price,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().toman)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            setModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    show: modal,\n                    onHide: function() {\n                        return setModal(false);\n                    },\n                    dialogClassName: \"modal-90w\",\n                    \"aria-labelledby\": \"example-custom-modal-styling-title\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Title, {\n                                id: \"example-custom-modal-styling-title\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Main, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b25lbnRzL01haW4uanM/NjhlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9mZXRjaEFQSVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWFpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IHBpenphIGZyb20gXCIuLi9jb21wb25lbnRzL2Fzc2V0cy9wZXBlcm9uaS5qcGdcIjtcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vTW9kYWxiXCI7XHJcbmltcG9ydCBTcHJpbmdNb2RhbCBmcm9tIFwiLi9Nb2RhbGJcIjtcclxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIHRleHQsIHByaWNlLCBpbWFnZSwgc3JjLCBpZCB9ID0gcHJvcHMuZGF0YTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoIW1vZGFsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9oNT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZha2V9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGljfT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIC8vIGxvYWRlcj17KCkgPT4ge1xyXG4gICAgICAgICAgLy8gICByZXR1cm4gaW1hZ2U7XHJcbiAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgdW5vcHRpbWl6ZWRcclxuICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJoZWxsb1wiXHJcbiAgICAgICAgICB3aWR0aD17MTMwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgIHtwcmljZX0gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9tYW59Pjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzZXRNb2RhbCA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHNob3c9e21vZGFsfVxyXG4gICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldE1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lPVwibW9kYWwtOTB3XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1jdXN0b20tbW9kYWwtc3R5bGluZy10aXRsZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiZXhhbXBsZS1jdXN0b20tbW9kYWwtc3R5bGluZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIElwc3VtIG1vbGVzdGlhZSBuYXR1cyBhZGlwaXNjaSBtb2RpIGVsaWdlbmRpPyBEZWJpdGlzIGFtZXQgcXVhZVxyXG4gICAgICAgICAgICAgICAgdW5kZSBjb21tb2RpIGFzcGVybmF0dXIgZW5pbSwgY29uc2VjdGV0dXIuIEN1bXF1ZSBkZWxlbml0aVxyXG4gICAgICAgICAgICAgICAgdGVtcG9yaWJ1cyBpcHNhbSBhdHF1ZSBhIGRvbG9yZXMgcXVpc3F1YW0gcXVpc3F1YW0gYWRpcGlzY2lcclxuICAgICAgICAgICAgICAgIHBvc3NpbXVzIGxhYm9yaW9zYW0uIFF1aWJ1c2RhbSBmYWNpbGlzIGRvbG9yaWJ1cyBkZWJpdGlzISBTaXRcclxuICAgICAgICAgICAgICAgIHF1YXNpIHF1b2QgYWNjdXNhbXVzIGVvcyBxdW9kLiBBYiBxdW9zIGNvbnNlcXV1bnR1ciBlYXF1ZSBxdW9cclxuICAgICAgICAgICAgICAgIHJlbSEgTW9sbGl0aWEgcmVpY2llbmRpcyBwb3JybyBxdW8gbWFnbmkgaW5jaWR1bnQgZG9sb3JlIGFtZXRcclxuICAgICAgICAgICAgICAgIGF0cXVlIGZhY2lsaXMgaXBzdW0gZGVsZW5pdGkgcmVtIVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hBUEkiLCJzdHlsZXMiLCJheGlvcyIsIkltYWdlIiwiQnV0dG9uIiwiTW9kYWwiLCJwaXp6YSIsIkV4YW1wbGUiLCJTcHJpbmdNb2RhbCIsIk1haW4iLCJwcm9wcyIsImRhdGEiLCJ0aXRsZSIsInRleHQiLCJwcmljZSIsImltYWdlIiwic3JjIiwiaWQiLCJtb2RhbCIsInNldE1vZGFsIiwiY29uc29sZSIsImxvZyIsImNsaWNrSGFuZGxlciIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoNSIsImZha2UiLCJwIiwicGljIiwidW5vcHRpbWl6ZWQiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJ0b21hbiIsInNob3ciLCJvbkhpZGUiLCJkaWFsb2dDbGFzc05hbWUiLCJhcmlhLWxhYmVsbGVkYnkiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n"));

/***/ })

});