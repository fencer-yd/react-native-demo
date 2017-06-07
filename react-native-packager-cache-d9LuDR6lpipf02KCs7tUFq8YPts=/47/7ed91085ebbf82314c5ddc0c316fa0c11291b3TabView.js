Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/TabView.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactNativeButton = require("react-native-button");

var _reactNativeButton2 = babelHelpers.interopRequireDefault(_reactNativeButton);

var _reactNativeRouterFlux = require("react-native-router-flux");

var contextTypes = {
  drawer: _react2.default.PropTypes.object
};

var propTypes = {
  name: _react.PropTypes.string,
  sceneStyle: _reactNative.ViewPropTypes.style,
  title: _react.PropTypes.string
};

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red'
  }
});

var TabView = function TabView(props, context) {
  var drawer = context.drawer;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, props.sceneStyle], __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    },
    _react2.default.createElement(
      _reactNative.Text,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      "Tab ",
      props.title
    ),
    props.name === 'tab1_1' && _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: _reactNativeRouterFlux.Actions.tab1_2, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      },
      "next screen for tab1_1"
    ),
    props.name === 'tab2_1' && _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: _reactNativeRouterFlux.Actions.tab2_2, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      },
      "next screen for tab2_1"
    ),
    _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: _reactNativeRouterFlux.Actions.pop, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      "Back"
    ),
    _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: function onPress() {
          drawer.close();_reactNativeRouterFlux.Actions.tab1();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      },
      "Switch to tab1"
    ),
    _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: function onPress() {
          drawer.close();_reactNativeRouterFlux.Actions.tab2();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      },
      "Switch to tab2"
    ),
    _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: function onPress() {
          drawer.close();_reactNativeRouterFlux.Actions.tab3();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      },
      "Switch to tab3"
    ),
    _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: function onPress() {
          drawer.close();_reactNativeRouterFlux.Actions.tab4();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      },
      "Switch to tab4"
    ),
    _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: function onPress() {
          drawer.close();_reactNativeRouterFlux.Actions.tab5();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      },
      "Switch to tab5"
    ),
    _react2.default.createElement(
      _reactNativeButton2.default,
      { onPress: function onPress() {
          drawer.close();_reactNativeRouterFlux.Actions.echo();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      },
      "push new scene"
    )
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

exports.default = TabView;