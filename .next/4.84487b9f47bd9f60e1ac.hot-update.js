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
        className: "jsx-142971178"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "142971178",
        css: "h1.jsx-142971178{color:red;}h2.jsx-142971178{text-align :left;}.content.jsx-142971178{text-align:center;background-color:#efefef;padding:30px;}.textAreaStyle.jsx-142971178{border:1px solid black;width:80%;height:120px;font-size:15px;border-radius:20px;padding:20px;overflow:hidden;}.warpbtn.jsx-142971178{padding:20px;}.btn.jsx-142971178{width:10%;height:50px;font-size:1.2em;background-color :deepskyblue;color :#fff;}.searchResult.jsx-142971178{background-color :gray;padding :20px;display:none;border-radius :20px;text-align :left;width :50%;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWFjaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1csQUFHeUIsQUFHTyxBQUlDLEFBS0ssQUFTVixBQUdILEFBT2EsVUE5QnpCLEFBd0JjLEdBSGQsSUFqQkEsQ0FHMkIsSUFrQlQsQ0FiTixBQW1CSSxVQWxCRCxJQW1CQSxDQU5pQixLQWxCakIsR0FNRSxJQW1CSyxNQXhCdEIsS0FNcUIsT0FZUCxFQU9JLFVBbEJILEFBWWYsT0FPYSxNQWxCSyxLQW1CRixXQWxCaEIsR0FtQkEiLCJmaWxlIjoiY29tcG9uZW50cy9lYWNoQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zb25nbXllb25namluL0Rlc2t0b3AvS29yZWFuSGVscGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgZWFjaENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgcmVzcG9uc2U6IG51bGxcbiAgICB9O1xuICAgICB0aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBjbGljayA9ICgpID0+XG4gICAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9rb3JlYW5oZWxwZXIyLmhlcm9rdWFwcC5jb20va2V5Ym9hcmRcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IHJlc3VsdC5kYXRhLmJ1dHRvbnMubWFwKFxuICAgICAgICAgICAgKGVsZW1lbnQsaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57ZWxlbWVudH08L2xpPlxuICAgICAgICApXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVzcG9uc2U6IHRlbXBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5teVJlZi5jdXJyZW50KTtcbiAgICAgICAgdGhpcy5teVJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0QXJlYVN0eWxlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53YXJwYnRuIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiBkZWVwc2t5Ymx1ZTtcbiAgICAgICAgICAgICAgY29sb3IgOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaFJlc3VsdHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IGdyYXk7XG4gICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzIDogMjBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbiA6bGVmdDtcbiAgICAgICAgICAgICAgd2lkdGggOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMj57dGhpcy5zdGF0ZS50aXRsZX08L2gyPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJ0ZXh0QXJlYVN0eWxlXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhcnBidG5cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5jbGlja30+XG4gICAgICAgICAgICAgIOqygOyDie2VmOq4sFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hSZXN1bHRcIiByZWY9e3RoaXMubXlSZWZ9PlxuICAgICAgICAgICAgPGgyPuqysOqzvDwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVzQXJlYVwiPnt0aGlzLnN0YXRlLnJlc3BvbnNlfTwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlYWNoQ29tcG9uZW50O1xuIl19 */\n/*@ sourceURL=components/eachComponent.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-142971178" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-142971178"
      }, this.state.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-142971178" + " " + "textAreaStyle"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-142971178" + " " + "warpbtn"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-142971178" + " " + "btn"
      }, "\uAC80\uC0C9\uD558\uAE30")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: this.myRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-142971178" + " " + "searchResult"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-142971178"
      }, "\uACB0\uACFC"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-142971178" + " " + "resArea"
      }, this.state.response))));
    }
  }]);

  return eachComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (eachComponent);

/***/ })

})
//# sourceMappingURL=4.84487b9f47bd9f60e1ac.hot-update.js.map