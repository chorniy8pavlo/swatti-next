webpackHotUpdate_N_E("pages/index",{

/***/ "./templates/main_our_customers.js":
/*!*****************************************!*\
  !*** ./templates/main_our_customers.js ***!
  \*****************************************/
/*! exports provided: MainCustomers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCustomers", function() { return MainCustomers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main_customers.module.css */ "./styles/main_customers.module.css");
/* harmony import */ var _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "c:\\Users\\Ivanko\\next-site\\templates\\main_our_customers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeComplete', function (url) {
  setTimeout(function () {
    $('#photos_slider').slick({
      slidesToShow: 4,
      arrows: false,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('#customers_slider').slick({
      slidesToShow: 4,
      arrows: true,
      prevArrow: '<span class="previous_arrow"></span>',
      nextArrow: '<span class="next_arrow"></span>',
      responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }]
    });
    $('.main_customers_main_customers__1ouQ3 .all_val').text('0' + (Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length / 4) + 1));
  }, 500);
});
function MainCustomers() {
  return __jsx("section", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main_customers + ' container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, "\u041D\u0430\u0448\u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0438"), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.changer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.prev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  }, __jsx("svg", {
    width: "46",
    height: "8",
    viewBox: "0 0 46 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z",
    fill: "#1E1D1D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 8
    }
  }))), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.counter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 6
    }
  }, __jsx("span", {
    className: "current_val",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "01"), " / ", __jsx("span", {
    className: "all_val",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 49
    }
  })), __jsx("span", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.next,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }, __jsx("svg", {
    width: "46",
    height: "8",
    viewBox: "0 0 46 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z",
    fill: "#1E1D1D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 8
    }
  }))))), __jsx("div", {
    id: "customers_slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: _styles_main_customers_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single_slide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }))));
}
_c = MainCustomers;

var _c;

$RefreshReg$(_c, "MainCustomers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL21haW5fb3VyX2N1c3RvbWVycy5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInVybCIsInNldFRpbWVvdXQiLCIkIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJhcnJvd3MiLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJ0ZXh0IiwiTWF0aCIsInRydW5jIiwibGVuZ3RoIiwiTWFpbkN1c3RvbWVycyIsImNsYXNzZXMiLCJtYWluX2N1c3RvbWVycyIsIm5hdiIsImNoYW5nZXIiLCJwcmV2IiwiY291bnRlciIsIm5leHQiLCJzaW5nbGVfc2xpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxVQUFDQyxHQUFELEVBQVM7QUFDaERDLFlBQVUsQ0FBQyxZQUFVO0FBQ3BCQyxLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkMsS0FBcEIsQ0FBMEI7QUFDekJDLGtCQUFZLEVBQUUsQ0FEVztBQUUzQkMsWUFBTSxFQUFFLEtBRm1CO0FBRzFCQyxvQkFBYyxFQUFDLENBSFc7QUFJMUJDLGdCQUFVLEVBQUUsQ0FDWjtBQUNFQyxrQkFBVSxFQUFFLElBRGQ7QUFFRUMsZ0JBQVEsRUFBRTtBQUNYTCxzQkFBWSxFQUFFLENBREg7QUFFVEUsd0JBQWMsRUFBQztBQUZOO0FBRlosT0FEWSxFQVFaO0FBQ0VFLGtCQUFVLEVBQUUsR0FEZDtBQUVFQyxnQkFBUSxFQUFFO0FBQ1hMLHNCQUFZLEVBQUUsQ0FESDtBQUVURSx3QkFBYyxFQUFDO0FBRk47QUFGWixPQVJZLEVBZVo7QUFDRUUsa0JBQVUsRUFBRSxHQURkO0FBRUVDLGdCQUFRLEVBQUU7QUFD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eEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBO0FBQUssT0FBRyxFQUFDLEVBQVQ7QUFBWSxPQUFHLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBakNILEVBcUNHO0FBQUssYUFBUyxFQUFFUCx3RUFBTyxDQUFDTyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUE7QUFBSyxPQUFHLEVBQUMsRUFBVDtBQUFZLE9BQUcsRUFBQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FyQ0gsQ0F0QkgsQ0FEQztBQW1FQTtLQXBFZVIsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNGVjNGVkOTAwMTQwNjlhMzg4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vc3R5bGVzL21haW5fY3VzdG9tZXJzLm1vZHVsZS5jc3MnXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAodXJsKSA9PiB7XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0JCgnI3Bob3Rvc19zbGlkZXInKS5zbGljayh7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6NCxcclxuXHQgcmVzcG9uc2l2ZTogW1xyXG5cdFx0e1xyXG5cdFx0ICBicmVha3BvaW50OiAxMzAwLFxyXG5cdFx0ICBzZXR0aW5nczoge1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6MyxcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgYnJlYWtwb2ludDogOTkyLFxyXG5cdFx0ICBzZXR0aW5nczoge1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDIsXHJcblx0XHRcdCAgc2xpZGVzVG9TY3JvbGw6MixcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHQge1xyXG5cdFx0ICBicmVha3BvaW50OiA3MDAsXHJcblx0XHQgIHNldHRpbmdzOiB7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0ICBzbGlkZXNUb1Njcm9sbDoxLFxyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0ICBdXHJcblx0fSk7XHJcblx0JCgnI2N1c3RvbWVyc19zbGlkZXInKS5zbGljayh7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRhcnJvd3M6IHRydWUsXHJcblx0cHJldkFycm93Oic8c3BhbiBjbGFzcz1cInByZXZpb3VzX2Fycm93XCI+PC9zcGFuPicsXHJcblx0bmV4dEFycm93Oic8c3BhbiBjbGFzcz1cIm5leHRfYXJyb3dcIj48L3NwYW4+JyxcclxuXHQgcmVzcG9uc2l2ZTogW1xyXG5cdFx0e1xyXG5cdFx0ICBicmVha3BvaW50OiAxMzAwLFxyXG5cdFx0ICBzZXR0aW5nczoge1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDNcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgYnJlYWtwb2ludDogOTkyLFxyXG5cdFx0ICBzZXR0aW5nczoge1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDJcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHQge1xyXG5cdFx0ICBicmVha3BvaW50OiA3MDAsXHJcblx0XHQgIHNldHRpbmdzOiB7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogMVxyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0ICBdXHJcblx0fSk7XHJcblx0XHQkKCcubWFpbl9jdXN0b21lcnNfbWFpbl9jdXN0b21lcnNfXzFvdVEzIC5hbGxfdmFsJykudGV4dCgnMCcgKyAoTWF0aC50cnVuYygkKCcjY3VzdG9tZXJzX3NsaWRlciAuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpJykubGVuZ3RoLzQpKzEpKVxyXG59LDUwMClcclxufSlcclxuZXhwb3J0IGZ1bmN0aW9uIE1haW5DdXN0b21lcnMoKXtcclxuXHRyZXR1cm4oXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluX2N1c3RvbWVycysnIGNvbnRhaW5lcid9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZ9PlxyXG5cdFx0XHRcdDxoMj5cclxuXHRcdFx0XHRcdNCd0LDRiNGWINC60LvRltGU0L3RgtC4XHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGFuZ2VyfT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2fT5cclxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjQ2XCIgaGVpZ2h0PVwiOFwiIHZpZXdCb3g9XCIwIDAgNDYgOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNDUuMzUzNiA0LjM1MzU1QzQ1LjU0ODggNC4xNTgyOSA0NS41NDg4IDMuODQxNzEgNDUuMzUzNiAzLjY0NjQ1TDQyLjE3MTYgMC40NjQ0NjZDNDEuOTc2MyAwLjI2OTIwNCA0MS42NTk3IDAuMjY5MjA0IDQxLjQ2NDUgMC40NjQ0NjZDNDEuMjY5MiAwLjY1OTcyOCA0MS4yNjkyIDAuOTc2MzExIDQxLjQ2NDUgMS4xNzE1N0w0NC4yOTI5IDRMNDEuNDY0NSA2LjgyODQzQzQxLjI2OTIgNy4wMjM2OSA0MS4yNjkyIDcuMzQwMjcgNDEuNDY0NSA3LjUzNTUzQzQxLjY1OTcgNy43MzA4IDQxLjk3NjMgNy43MzA4IDQyLjE3MTYgNy41MzU1M0w0NS4zNTM2IDQuMzUzNTVaTTAgNC41SDQ1VjMuNUgwVjQuNVpcIiBmaWxsPVwiIzFFMUQxRFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291bnRlcn0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImN1cnJlbnRfdmFsXCI+MDE8L3NwYW4+IC8gPHNwYW4gY2xhc3NOYW1lPVwiYWxsX3ZhbFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm5leHR9PlxyXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiNDZcIiBoZWlnaHQ9XCI4XCIgdmlld0JveD1cIjAgMCA0NiA4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk00NS4zNTM2IDQuMzUzNTVDNDUuNTQ4OCA0LjE1ODI5IDQ1LjU0ODggMy44NDE3MSA0NS4zNTM2IDMuNjQ2NDVMNDIuMTcxNiAwLjQ2NDQ2NkM0MS45NzYzIDAuMjY5MjA0IDQxLjY1OTcgMC4yNjkyMDQgNDEuNDY0NSAwLjQ2NDQ2NkM0MS4yNjkyIDAuNjU5NzI4IDQxLjI2OTIgMC45NzYzMTEgNDEuNDY0NSAxLjE3MTU3TDQ0LjI5MjkgNEw0MS40NjQ1IDYuODI4NDNDNDEuMjY5MiA3LjAyMzY5IDQxLjI2OTIgNy4zNDAyNyA0MS40NjQ1IDcuNTM1NTNDNDEuNjU5NyA3LjczMDggNDEuOTc2MyA3LjczMDggNDIuMTcxNiA3LjUzNTUzTDQ1LjM1MzYgNC4zNTM1NVpNMCA0LjVINDVWMy41SDBWNC41WlwiIGZpbGw9XCIjMUUxRDFEXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0XHQ8ZGl2IGlkPVwiY3VzdG9tZXJzX3NsaWRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpbmdsZV9zbGlkZX0+XHJcblx0XHRcdFx0XHRcdDxkaXY+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpbmdsZV9zbGlkZX0+XHJcblx0XHRcdFx0XHRcdDxkaXY+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpbmdsZV9zbGlkZX0+XHJcblx0XHRcdFx0XHRcdDxkaXY+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpbmdsZV9zbGlkZX0+XHJcblx0XHRcdFx0XHRcdDxkaXY+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNpbmdsZV9zbGlkZX0+XHJcblx0XHRcdFx0XHRcdDxkaXY+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2luZ2xlX3NsaWRlfT5cclxuXHRcdFx0XHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2luZ2xlX3NsaWRlfT5cclxuXHRcdFx0XHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2luZ2xlX3NsaWRlfT5cclxuXHRcdFx0XHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2luZ2xlX3NsaWRlfT5cclxuXHRcdFx0XHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2luZ2xlX3NsaWRlfT5cclxuXHRcdFx0XHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0XHQpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9