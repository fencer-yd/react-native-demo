Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/Error.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactNativeButton = require("react-native-button");

var _reactNativeButton2 = babelHelpers.interopRequireDefault(_reactNativeButton);

var _reactNativeRouterFlux = require("react-native-router-flux");

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    deviceHeight = _Dimensions$get.height;

var styles = _reactNative.StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    }
});

var _class = function (_React$Component) {
    babelHelpers.inherits(_class, _React$Component);

    function _class(props) {
        babelHelpers.classCallCheck(this, _class);

        var _this = babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            offset: new _reactNative.Animated.Value(-deviceHeight)
        };
        return _this;
    }

    babelHelpers.createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            _reactNative.Animated.timing(this.state.offset, {
                duration: 150,
                toValue: 0
            }).start();
        }
    }, {
        key: "closeModal",
        value: function closeModal() {
            _reactNative.Animated.timing(this.state.offset, {
                duration: 150,
                toValue: -deviceHeight
            }).start(_reactNativeRouterFlux.Actions.pop);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactNative.Animated.View,
                { style: [styles.container, { backgroundColor: "rgba(52,52,52,0.5)" }, { transform: [{ translateY: this.state.offset }] }], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: { width: 250,
                            height: 250,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 55
                            }
                        },
                        this.props.data
                    ),
                    _react2.default.createElement(
                        _reactNativeButton2.default,
                        { onPress: this.closeModal.bind(this), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        "Close"
                    )
                )
            );
        }
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;