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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_fetchAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/fetchAPI */ \"./functions/fetchAPI.js\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Main.module.css */ \"./styles/Main.module.css\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var _components_assets_peperoni_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/assets/peperoni.jpg */ \"./components/assets/peperoni.jpg\");\n/* harmony import */ var _Modalb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modalb */ \"./components/Modalb.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Main = function(props) {\n    _s();\n    var _data = props.data, title = _data.title, text = _data.text, price = _data.price, image = _data.image, src = _data.src, id = _data.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modal = ref[0], setModal = ref[1];\n    console.log(title);\n    var clickHandler = function() {\n        setModal(props.bool);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: clickHandler,\n        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().fake),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n                            children: text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().pic),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    // loader={() => {\n                    //   return image;\n                    // }}\n                    unoptimized: true,\n                    src: image,\n                    alt: \"hello\",\n                    width: 130,\n                    height: 140\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().price),\n                children: [\n                    price,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_7___default().toman)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            setModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    show: props.bool,\n                    onHide: function() {\n                        return setModal(false);\n                    },\n                    dialogClassName: \"modal-90w\",\n                    \"aria-labelledby\": \"example-custom-modal-styling-title\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Title, {\n                                id: \"example-custom-modal-styling-title\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Body, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\css\\\\Desktop\\\\Plage\\\\plage\\\\components\\\\Main.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Main, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QztBQUNLO0FBQ0Y7QUFDckI7QUFDSztBQUNhO0FBQ0Y7QUFDWTtBQUN2QjtBQUNJO0FBQ25DLElBQU1XLElBQUksR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3RCLElBQStDQSxLQUFVLEdBQVZBLEtBQUssQ0FBQ0MsSUFBSSxFQUFqREMsS0FBSyxHQUFrQ0YsS0FBVSxDQUFqREUsS0FBSyxFQUFFQyxJQUFJLEdBQTRCSCxLQUFVLENBQTFDRyxJQUFJLEVBQUVDLEtBQUssR0FBcUJKLEtBQVUsQ0FBcENJLEtBQUssRUFBRUMsS0FBSyxHQUFjTCxLQUFVLENBQTdCSyxLQUFLLEVBQUVDLEdBQUcsR0FBU04sS0FBVSxDQUF0Qk0sR0FBRyxFQUFFQyxFQUFFLEdBQUtQLEtBQVUsQ0FBakJPLEVBQUU7SUFDMUMsSUFBMEJsQixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWxDbUIsS0FBSyxHQUFjbkIsR0FBZSxHQUE3QixFQUFFb0IsUUFBUSxHQUFJcEIsR0FBZSxHQUFuQjtJQUN0QnFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFNVSxZQUFZLEdBQUcsV0FBTTtRQUN6QkgsUUFBUSxDQUFDVCxLQUFLLENBQUNhLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxPQUFPLEVBQUVILFlBQVk7UUFBRUksU0FBUyxFQUFFekIsMEVBQWdCOzswQkFDckQsOERBQUN1QixLQUFHOztrQ0FDRiw4REFBQ0ksSUFBRTt3QkFBQ0YsU0FBUyxFQUFFekIsc0VBQVk7a0NBQUdXLEtBQUs7Ozs7OzZCQUFNO2tDQUN6Qyw4REFBQ1ksS0FBRzt3QkFBQ0UsU0FBUyxFQUFFekIscUVBQVc7a0NBQ3pCLDRFQUFDNkIsR0FBQzs0QkFBQ0osU0FBUyxFQUFFekIscUVBQVc7c0NBQUdZLElBQUk7Ozs7O2lDQUFLOzs7Ozs2QkFDakM7Ozs7OztxQkFDRjswQkFFTiw4REFBQ1csS0FBRztnQkFBQ0UsU0FBUyxFQUFFekIsb0VBQVU7MEJBQ3hCLDRFQUFDRSxtREFBSztvQkFDSixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsS0FBSztvQkFDTDZCLFdBQVc7b0JBQ1hoQixHQUFHLEVBQUVELEtBQUs7b0JBQ1ZrQixHQUFHLEVBQUMsT0FBTztvQkFDWEMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7Ozt5QkFDWDs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNYLEtBQUc7Z0JBQUNFLFNBQVMsRUFBRXpCLHNFQUFZOztvQkFDekJhLEtBQUs7b0JBQUMsR0FBQztrQ0FBQSw4REFBQ3NCLE1BQUk7d0JBQUNWLFNBQVMsRUFBRXpCLHNFQUFZOzs7Ozs2QkFBUzs7Ozs7O3FCQUMxQztZQUNMa0IsUUFBUSxpQkFDUCw4REFBQ0ssS0FBRzswQkFDRiw0RUFBQ25CLDZEQUFLO29CQUNKaUMsSUFBSSxFQUFFNUIsS0FBSyxDQUFDYSxJQUFJO29CQUNoQmdCLE1BQU0sRUFBRTsrQkFBTXBCLFFBQVEsQ0FBQyxLQUFLLENBQUM7cUJBQUE7b0JBQzdCcUIsZUFBZSxFQUFDLFdBQVc7b0JBQzNCQyxpQkFBZSxFQUFDLG9DQUFvQzs7c0NBRXBELDhEQUFDcEMsb0VBQVk7NEJBQUNzQyxXQUFXO3NDQUN2Qiw0RUFBQ3RDLG1FQUFXO2dDQUFDWSxFQUFFLEVBQUMsb0NBQW9DOzBDQUNqREwsS0FBSzs7Ozs7cUNBQ007Ozs7O2lDQUNEO3NDQUNmLDhEQUFDUCxrRUFBVTtzQ0FDVCw0RUFBQ3lCLEdBQUM7MENBQUMsb1pBUUg7Ozs7O3FDQUFJOzs7OztpQ0FDTzs7Ozs7O3lCQUNQOzs7OztxQkFDSixHQUVOLEVBQUU7Ozs7OzthQUVBLENBQ047QUFDSixDQUFDO0dBL0RLckIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBaUVWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzY4ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZmV0Y2hBUElcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01haW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XHJcbmltcG9ydCBwaXp6YSBmcm9tIFwiLi4vY29tcG9uZW50cy9hc3NldHMvcGVwZXJvbmkuanBnXCI7XHJcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL01vZGFsYlwiO1xyXG5pbXBvcnQgU3ByaW5nTW9kYWwgZnJvbSBcIi4vTW9kYWxiXCI7XHJcbmNvbnN0IE1haW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCB0ZXh0LCBwcmljZSwgaW1hZ2UsIHNyYywgaWQgfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc29sZS5sb2codGl0bGUpO1xyXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKHByb3BzLmJvb2wpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFrZX0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57dGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWN9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgLy8gbG9hZGVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIHJldHVybiBpbWFnZTtcclxuICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICB1bm9wdGltaXplZFxyXG4gICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgIGFsdD1cImhlbGxvXCJcclxuICAgICAgICAgIHdpZHRoPXsxMzB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezE0MH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAge3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b21hbn0+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NldE1vZGFsID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgc2hvdz17cHJvcHMuYm9vbH1cclxuICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZT1cIm1vZGFsLTkwd1wiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtY3VzdG9tLW1vZGFsLXN0eWxpbmctdGl0bGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImV4YW1wbGUtY3VzdG9tLW1vZGFsLXN0eWxpbmctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBJcHN1bSBtb2xlc3RpYWUgbmF0dXMgYWRpcGlzY2kgbW9kaSBlbGlnZW5kaT8gRGViaXRpcyBhbWV0IHF1YWVcclxuICAgICAgICAgICAgICAgIHVuZGUgY29tbW9kaSBhc3Blcm5hdHVyIGVuaW0sIGNvbnNlY3RldHVyLiBDdW1xdWUgZGVsZW5pdGlcclxuICAgICAgICAgICAgICAgIHRlbXBvcmlidXMgaXBzYW0gYXRxdWUgYSBkb2xvcmVzIHF1aXNxdWFtIHF1aXNxdWFtIGFkaXBpc2NpXHJcbiAgICAgICAgICAgICAgICBwb3NzaW11cyBsYWJvcmlvc2FtLiBRdWlidXNkYW0gZmFjaWxpcyBkb2xvcmlidXMgZGViaXRpcyEgU2l0XHJcbiAgICAgICAgICAgICAgICBxdWFzaSBxdW9kIGFjY3VzYW11cyBlb3MgcXVvZC4gQWIgcXVvcyBjb25zZXF1dW50dXIgZWFxdWUgcXVvXHJcbiAgICAgICAgICAgICAgICByZW0hIE1vbGxpdGlhIHJlaWNpZW5kaXMgcG9ycm8gcXVvIG1hZ25pIGluY2lkdW50IGRvbG9yZSBhbWV0XHJcbiAgICAgICAgICAgICAgICBhdHF1ZSBmYWNpbGlzIGlwc3VtIGRlbGVuaXRpIHJlbSFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoQVBJIiwic3R5bGVzIiwiYXhpb3MiLCJJbWFnZSIsIkJ1dHRvbiIsIk1vZGFsIiwicGl6emEiLCJFeGFtcGxlIiwiU3ByaW5nTW9kYWwiLCJNYWluIiwicHJvcHMiLCJkYXRhIiwidGl0bGUiLCJ0ZXh0IiwicHJpY2UiLCJpbWFnZSIsInNyYyIsImlkIiwibW9kYWwiLCJzZXRNb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJjbGlja0hhbmRsZXIiLCJib29sIiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImg1IiwiZmFrZSIsInAiLCJwaWMiLCJ1bm9wdGltaXplZCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsInRvbWFuIiwic2hvdyIsIm9uSGlkZSIsImRpYWxvZ0NsYXNzTmFtZSIsImFyaWEtbGFiZWxsZWRieSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main.js\n"));

/***/ })

});