Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/EchoView.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactNativeButton = require("react-native-button");

var _reactNativeButton2 = babelHelpers.interopRequireDefault(_reactNativeButton);

var _reactNativeRouterFlux = require("react-native-router-flux");

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: 2,
    borderColor: 'red'
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  smaller: {
    marginBottom: 5,
    fontSize: 12
  }
});

var _class = function (_React$Component) {
  babelHelpers.inherits(_class, _React$Component);

  function _class() {
    babelHelpers.classCallCheck(this, _class);
    return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  babelHelpers.createClass(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.container, this.props.sceneStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          "key: ",
          this.props.navigationState.key
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          "sceneKey: ",
          this.props.navigationState.sceneKey
        ),
        _react2.default.createElement(
          _reactNativeButton2.default,
          {
            onPress: function onPress() {
              return _reactNativeRouterFlux.Actions.echo();
            },
            style: styles.smaller,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          "push new scene hideNavBar=inherit hideTabBar=inherit"
        ),
        _react2.default.createElement(
          _reactNativeButton2.default,
          {
            onPress: function onPress() {
              return _reactNativeRouterFlux.Actions.echo({ hideNavBar: true, hideTabBar: true });
            },
            style: styles.smaller,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          "push new scene hideNavBar=true hideTabBar=true"
        ),
        _react2.default.createElement(
          _reactNativeButton2.default,
          {
            onPress: function onPress() {
              return _reactNativeRouterFlux.Actions.echo({ hideNavBar: true, hideTabBar: false });
            },
            style: styles.smaller,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          "push new scene hideNavBar=true hideTabBar=false"
        ),
        _react2.default.createElement(
          _reactNativeButton2.default,
          {
            onPress: function onPress() {
              return _reactNativeRouterFlux.Actions.echo({ hideNavBar: false, hideTabBar: true });
            },
            style: styles.smaller,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          "push new scene hideNavBar=false hideTabBar=true"
        ),
        _react2.default.createElement(
          _reactNativeButton2.default,
          {
            onPress: function onPress() {
              return _reactNativeRouterFlux.Actions.echo({ hideNavBar: false, hideTabBar: false });
            },
            style: styles.smaller,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          "push new scene hideNavBar=false hideTabBar=false"
        ),
        _react2.default.createElement(
          _reactNativeButton2.default,
          { onPress: _reactNativeRouterFlux.Actions.pop, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          "pop"
        )
      );
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;