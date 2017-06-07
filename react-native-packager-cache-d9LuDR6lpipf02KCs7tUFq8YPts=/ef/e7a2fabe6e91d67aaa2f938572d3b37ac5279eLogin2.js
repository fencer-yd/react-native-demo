Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/Login2.js";

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
                        lineNumber: 20
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    "Login page 2"
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
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
                            lineNumber: 23
                        }
                    },
                    "Data: ",
                    data
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: _reactNativeRouterFlux.Actions.pop, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    "Back"
                ),
                _react2.default.createElement(
                    _reactNativeButton2.default,
                    { onPress: function onPress() {
                            return _reactNativeRouterFlux.Actions.loginModal3({ data: "Custom data3", title: "Custom title3" });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    },
                    "Login 3"
                )
            );
        }
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;