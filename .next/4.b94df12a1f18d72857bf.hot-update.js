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
                lineNumber: 17
              }
            }, element);
          });

          _this.setState({
            response: temp
          }); //console.log(this.myRef.current);


          _this.myRef.current.style.display = "block";
        });
      }
    });
    _this.state = {
      index: _this.props.index,
      title: _this.props.title,
      response: null
    };
    _this.myRef = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef();
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
          lineNumber: 32
        },
        className: "jsx-1758312460"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1758312460",
        css: "h1.jsx-1758312460{color:red;}h2.jsx-1758312460{text-align :left;}.content.jsx-1758312460{text-align:center;background-color:#efefef;padding:30px;}.textAreaStyle.jsx-1758312460{border:1px solid black;width:80%;height:120px;font-size:15px;border-radius:20px;padding:20px;overflow:hidden;}.warpbtn.jsx-1758312460{padding:20px;}.btn.jsx-1758312460{width:10%;height:50px;font-size:1.2em;background-color :deepskyblue;color :#fff;}.searchResult.jsx-1758312460{background-color :gray;padding :20px;display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWFjaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1csQUFHeUIsQUFHTyxBQUlDLEFBS0ssQUFTVixBQUdILEFBT2EsVUE5QnpCLEFBd0JjLEdBSGQsSUFqQkEsQ0FHMkIsSUFrQlQsQ0FiTixBQW1CSSxVQWxCRCxJQW1CQSxDQU5pQixLQWxCakIsR0FNRSxJQW1CakIsTUF4QkEsS0FNcUIsT0FZUCxZQVhDLEFBWWYsYUFYa0IsZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvZWFjaENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc29uZ215ZW9uZ2ppbi9EZXNrdG9wL0tvcmVhbkhlbHBlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIGVhY2hDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgIHJlc3BvbnNlOiBudWxsXG4gICAgfTtcbiAgICAgdGhpcy5teVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgY2xpY2sgPSAoKSA9PlxuICAgIGF4aW9zLmdldChcImh0dHBzOi8va29yZWFuaGVscGVyMi5oZXJva3VhcHAuY29tL2tleWJvYXJkXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSByZXN1bHQuZGF0YS5idXR0b25zLm1hcChcbiAgICAgICAgICAgIChlbGVtZW50LGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2VsZW1lbnR9PC9saT5cbiAgICAgICAgKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlc3BvbnNlOiB0ZW1wXG4gICAgICAgIH0pO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubXlSZWYuY3VycmVudCk7XG4gICAgICAgIHRoaXMubXlSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogbGVmdDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dEFyZWFTdHlsZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2FycGJ0biB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogZGVlcHNreWJsdWU7XG4gICAgICAgICAgICAgIGNvbG9yIDogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2hSZXN1bHR7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiBncmF5O1xuICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aDI+e3RoaXMuc3RhdGUudGl0bGV9PC9oMj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgY2xhc3NOYW1lPVwidGV4dEFyZWFTdHlsZVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXJwYnRuXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMuY2xpY2t9PlxuICAgICAgICAgICAgICDqsoDsg4ntlZjquLBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoUmVzdWx0XCIgcmVmPXt0aGlzLm15UmVmfT5cbiAgICAgICAgICAgIDxoMj7qsrDqs7w8L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlc0FyZWFcIj57dGhpcy5zdGF0ZS5yZXNwb25zZX08L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZWFjaENvbXBvbmVudDtcbiJdfQ== */\n/*@ sourceURL=components/eachComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-1758312460" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-1758312460"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-1758312460" + " " + "textAreaStyle"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-1758312460" + " " + "warpbtn"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-1758312460" + " " + "btn"
      }, "\uAC80\uC0C9\uD558\uAE30")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: this.myRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-1758312460" + " " + "searchResult"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-1758312460"
      }, "\uACB0\uACFC"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-1758312460" + " " + "resArea"
      }, this.state.response))));
    }
  }]);

  return eachComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (eachComponent);

/***/ })

})
//# sourceMappingURL=4.b94df12a1f18d72857bf.hot-update.js.map