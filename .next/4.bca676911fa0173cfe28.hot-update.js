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
        className: "jsx-222332295"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "222332295",
        css: "h1.jsx-222332295{color:red;}h2.jsx-222332295{text-align :left;}.content.jsx-222332295{text-align:center;background-color:#efefef;padding:30px;}.textAreaStyle.jsx-222332295{border:1px solid black;width:80%;height:120px;font-size:15px;border-radius:20px;padding:20px;overflow:hidden;}.warpbtn.jsx-222332295{padding:20px;}.btn.jsx-222332295{width:10%;height:50px;font-size:1.2em;background-color :deepskyblue;color :#fff;}.searchResult.jsx-222332295{background-color :gray;padding :20px;display:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWFjaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlcsQUFHeUIsQUFHTyxBQUlDLEFBS0ssQUFTVixBQUdILEFBT2EsVUE5QnpCLEFBd0JjLEdBSGQsSUFqQkEsQ0FHMkIsSUFrQlQsQ0FiTixBQW1CSSxVQWxCRCxJQW1CRSxDQU5lLEtBbEJqQixHQU1FLE1BbUJqQixJQXhCQSxLQU1xQixPQVlQLFlBWEMsQUFZZixhQVhrQixnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9lYWNoQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zb25nbXllb25namluL0Rlc2t0b3AvS29yZWFuSGVscGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgZWFjaENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgcmVzcG9uc2U6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgY2xpY2sgPSAoKSA9PlxuICAgIGF4aW9zLmdldChcImh0dHBzOi8va29yZWFuaGVscGVyMi5oZXJva3VhcHAuY29tL2tleWJvYXJkXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSByZXN1bHQuZGF0YS5idXR0b25zLm1hcChcbiAgICAgICAgICAgIChlbGVtZW50LGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2VsZW1lbnR9PC9saT5cbiAgICAgICAgKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlc3BvbnNlOiB0ZW1wXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogbGVmdDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dEFyZWFTdHlsZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2FycGJ0biB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogZGVlcHNreWJsdWU7XG4gICAgICAgICAgICAgIGNvbG9yIDogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2hSZXN1bHR7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiBncmF5O1xuICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMj57dGhpcy5zdGF0ZS50aXRsZX08L2gyPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJ0ZXh0QXJlYVN0eWxlXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhcnBidG5cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5jbGlja30+XG4gICAgICAgICAgICAgIOqygOyDie2VmOq4sFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hSZXN1bHRcIj5cbiAgICAgICAgICAgIDxoMj7qsrDqs7w8L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlc0FyZWFcIj57dGhpcy5zdGF0ZS5yZXNwb25zZX08L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWFjaENvbXBvbmVudDtcbiJdfQ== */\n/*@ sourceURL=components/eachComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-222332295" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-222332295"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-222332295" + " " + "textAreaStyle"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-222332295" + " " + "warpbtn"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-222332295" + " " + "btn"
      }, "\uAC80\uC0C9\uD558\uAE30")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-222332295" + " " + "searchResult"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-222332295"
      }, "\uACB0\uACFC"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-222332295" + " " + "resArea"
      }, this.state.response))));
    }
  }]);

  return eachComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (eachComponent);

/***/ })

})
//# sourceMappingURL=4.bca676911fa0173cfe28.hot-update.js.map