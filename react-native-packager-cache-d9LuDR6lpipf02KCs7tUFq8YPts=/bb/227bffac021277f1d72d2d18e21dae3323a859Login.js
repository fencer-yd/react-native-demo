Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/Login.js";

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
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
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
            var title = this.props.title || 'No Title';
            var data = this.props.data || 'No Data';
            return _react2.default.createElement(
                _reactNative.View,
                { style: [styles.container, this.props.style], __source: {
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
                    "Login page 1"
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
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
                            lineNumber: 34
                        }
                    },
                    "Data: ",
                    data
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.loginModal2({ data: "Custom data2", title: "Custom title2" });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    },
                    "Login 2"
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.refresh({ title: "Changed title" });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        }
                    },
                    "Change title"
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: _reactNativeRouterFlux.Actions.pop, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    "Back"
                )
            );
        }
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;