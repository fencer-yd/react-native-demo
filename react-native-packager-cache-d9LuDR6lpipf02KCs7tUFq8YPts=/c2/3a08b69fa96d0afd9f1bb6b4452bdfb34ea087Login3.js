Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/Login3.js";

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
        backgroundColor: "#F5FCFF"
    }
});

var popToRoot = function popToRoot() {
    _reactNativeRouterFlux.Actions.popTo("root");
};

var popToLogin1 = function popToLogin1() {
    _reactNativeRouterFlux.Actions.popTo("loginModal");
};

var popToLogin2 = function popToLogin2() {
    _reactNativeRouterFlux.Actions.popTo("loginModal2");
};

var _class = function (_React$Component) {
    babelHelpers.inherits(_class, _React$Component);

    function _class() {
        babelHelpers.classCallCheck(this, _class);
        return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    babelHelpers.createClass(_class, [{
        key: "render",
        value: function render() {
            var title = this.props.title || 'No Title';
            var data = this.props.data || 'No Data';
            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    "Login page 3"
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        }
                    },
                    "Title: ",
                    title
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    },
                    "Data: ",
                    data
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: _reactNativeRouterFlux.Actions.pop, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        }
                    },
                    "Back"
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: popToLogin1, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    "To Login"
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: popToLogin2, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    "To Login2"
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: popToRoot, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    },
                    "To Root"
                )
            );
        }
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;