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
        className: "jsx-2803653833"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2803653833",
        css: "h1.jsx-2803653833{color:red;}h2.jsx-2803653833{text-align :left;}.content.jsx-2803653833{text-align:center;background-color:#efefef;padding:30px;}.textAreaStyle.jsx-2803653833{border:1px solid black;width:80%;height:120px;font-size:15px;border-radius:20px;padding:20px;overflow:hidden;}.warpbtn.jsx-2803653833{padding:20px;}.btn.jsx-2803653833{width:10%;height:50px;font-size:1.2em;background-color :deepskyblue;color :#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWFjaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlcsQUFHeUIsQUFHTyxBQUlDLEFBS0ssQUFTVixBQUdILFVBdkJaLEFBd0JjLEdBSGQsSUFqQkEsQ0FHMkIsSUFrQlQsQ0FiTixVQUNHLEtBYWlCLEtBbEJqQixHQU1FLFVBTGpCLEtBTXFCLE9BWVAsWUFYQyxBQVlmLGFBWGtCLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL2VhY2hDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NvbmdteWVvbmdqaW4vRGVza3RvcC9Lb3JlYW5IZWxwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBlYWNoQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluZGV4OiB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICByZXNwb25zZTogbnVsbFxuICAgIH07XG4gIH1cblxuICBjbGljayA9ICgpID0+XG4gICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9rb3JlYW5oZWxwZXIyLmhlcm9rdWFwcC5jb20va2V5Ym9hcmRcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IHJlc3VsdC5kYXRhLmJ1dHRvbnMubWFwKFxuICAgICAgICAgICAgKGVsZW1lbnQsaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57ZWxlbWVudH08L2xpPlxuICAgICAgICApXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVzcG9uc2U6IHRlbXBcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0QXJlYVN0eWxlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53YXJwYnRuIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiBkZWVwc2t5Ymx1ZTtcbiAgICAgICAgICAgICAgY29sb3IgOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaFJlc3VsdHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIGNsYXNzTmFtZT1cInRleHRBcmVhU3R5bGVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FycGJ0blwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmNsaWNrfT5cbiAgICAgICAgICAgICAg6rKA7IOJ7ZWY6riwXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFJlc3VsdFwiPlxuICAgICAgICAgICAgPGgyPuqysOqzvDwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVzQXJlYVwiPnt0aGlzLnN0YXRlLnJlc3BvbnNlfTwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlYWNoQ29tcG9uZW50O1xuIl19 */\n/*@ sourceURL=components/eachComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-2803653833" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-2803653833"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-2803653833" + " " + "textAreaStyle"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-2803653833" + " " + "warpbtn"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-2803653833" + " " + "btn"
      }, "\uAC80\uC0C9\uD558\uAE30")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-2803653833" + " " + "searchResult"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-2803653833"
      }, "\uACB0\uACFC"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-2803653833" + " " + "resArea"
      }, this.state.response))));
    }
  }]);

  return eachComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (eachComponent);

/***/ })

})
//# sourceMappingURL=4.64fd3783b533ca247415.hot-update.js.map