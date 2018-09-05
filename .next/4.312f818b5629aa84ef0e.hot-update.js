webpackHotUpdate(4,{

/***/ "./components/eachComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsxFileName = "/Users/songmyeongjin/Desktop/KoreanHelper/components/eachComponent.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var eachComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(eachComponent, _React$Component);

  function eachComponent(props) {
    var _this;

    _classCallCheck(this, eachComponent);

    _this = _possibleConstructorReturn(this, (eachComponent.__proto__ || Object.getPrototypeOf(eachComponent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "click", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get("https://koreanhelper2.herokuapp.com/keyboard").then(function (result) {
          var temp = result.data.buttons.map(function (element, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            }, element);
          });

          _this.setState({
            response: temp
          });
        });
      }
    });
    _this.state = {
      index: _this.props.index,
      title: _this.props.title,
      response: null
    };
    return _this;
  }

  _createClass(eachComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-2294675247"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2294675247",
        css: "h1.jsx-2294675247{color:red;}.content.jsx-2294675247{text-align:center;background-color:#efefef;padding:30px;}.textAreaStyle.jsx-2294675247{border:1px solid black;width:80%;height:120px;font-size:15px;border-radius:20px;padding:20px;overflow:hidden;}.warpbtn.jsx-2294675247{padding:20px;}.btn.jsx-2294675247{width:10%;height:50px;font-size:1.2em;background-color :deepskyblue;color :#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWFjaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlcsQUFHeUIsQUFHUSxBQUtLLEFBU1YsQUFHSCxVQW5CWixBQW9CYyxHQUhkLEtBZDJCLElBa0JULENBYk4sVUFDRyxLQWFpQixLQWxCakIsR0FNRSxVQUxqQixLQU1xQixPQVlQLFlBWEMsQUFZZixhQVhrQixnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9lYWNoQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zb25nbXllb25namluL0Rlc2t0b3AvS29yZWFuSGVscGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgZWFjaENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgcmVzcG9uc2U6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgY2xpY2sgPSAoKSA9PlxuICAgIGF4aW9zLmdldChcImh0dHBzOi8va29yZWFuaGVscGVyMi5oZXJva3VhcHAuY29tL2tleWJvYXJkXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSByZXN1bHQuZGF0YS5idXR0b25zLm1hcChcbiAgICAgICAgICAgIChlbGVtZW50LGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2VsZW1lbnR9PC9saT5cbiAgICAgICAgKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlc3BvbnNlOiB0ZW1wXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHRBcmVhU3R5bGUge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLndhcnBidG4ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IGRlZXBza3libHVlO1xuICAgICAgICAgICAgICBjb2xvciA6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIGNsYXNzTmFtZT1cInRleHRBcmVhU3R5bGVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FycGJ0blwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmNsaWNrfT5cbiAgICAgICAgICAgICAgU2VhY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZXNBcmVhXCI+e3RoaXMuc3RhdGUucmVzcG9uc2V9PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2hDb21wb25lbnQ7XG4iXX0= */\n/*@ sourceURL=components/eachComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-2294675247" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2294675247"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-2294675247" + " " + "textAreaStyle"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-2294675247" + " " + "warpbtn"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-2294675247" + " " + "btn"
      }, "Seach")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-2294675247" + " " + "resArea"
      }, this.state.response)));
    }
  }]);

  return eachComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (eachComponent);

/***/ })

})
//# sourceMappingURL=4.312f818b5629aa84ef0e.hot-update.js.map