var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/Home.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactNativeButton = require("react-native-button");

var _reactNativeButton2 = babelHelpers.interopRequireDefault(_reactNativeButton);

var _reactNativeRouterFlux = require("react-native-router-flux");

var _Views = require("./Views");

var _rnViewpager = require("rn-viewpager");

var styles = _reactNative.StyleSheet.create({
    indicatorContainer: {
        backgroundColor: 0x00000020,
        height: 48
    },
    indicatorText: {
        fontSize: 14,
        color: 0xFFFFFF99
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: 0xFFFFFFFF
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: 'white'
    },
    statusBar: {
        height: 24,
        backgroundColor: 0x00000044
    },
    toolbarContainer: {
        height: 56,
        backgroundColor: 0x00000020,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    backImg: {
        width: 16,
        height: 17
    },
    titleTxt: {
        marginLeft: 36,
        color: 'white',
        fontSize: 20
    },
    pageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainRec: {
        backgroundColor: '#FFFFFFAA',
        width: 256,
        height: 48,
        marginBottom: 10,
        marginTop: 156
    },
    subRec: {
        backgroundColor: '#FFFFFF55',
        width: 256,
        height: 30,
        marginTop: 10
    },
    shapeBase: {
        width: 128,
        height: 128,
        backgroundColor: 'white'
    },
    square: {},
    circle: {
        borderRadius: 64
    },
    triangle: {
        borderTopWidth: 0,
        borderRightWidth: 70,
        borderBottomWidth: 128,
        borderLeftWidth: 70,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'white',
        backgroundColor: 'transparent',
        width: 140
    }
});

var Home = function (_React$Component) {
    babelHelpers.inherits(Home, _React$Component);

    function Home(props) {
        babelHelpers.classCallCheck(this, Home);

        var _this = babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            bgColor: new _reactNative.Animated.Value(0)
        };
        _this._setBgColor = _reactNative.Animated.event([{ bgColor: _this.state.bgColor }]);

        _reactNative.ToastAndroid.show(props.title, _reactNative.ToastAndroid.SHORT);
        return _this;
    }

    babelHelpers.createClass(Home, [{
        key: "_renderTitleIndicator",
        value: function _renderTitleIndicator() {
            return _react2.default.createElement(_rnViewpager.PagerTitleIndicator, {
                style: styles.indicatorContainer,
                itemTextStyle: styles.indicatorText,
                selectedItemTextStyle: styles.indicatorSelectedText,
                selectedBorderStyle: styles.selectedBorderStyle,
                titles: ['FIRST', 'SECOND', 'THIRD'],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            });
        }
    }, {
        key: "_onPageScroll",
        value: function _onPageScroll(scrollData) {
            var offset = scrollData.offset,
                position = scrollData.position;

            if (position < 0 || position >= 2) return;
            this._setBgColor({ bgColor: offset + position });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var bgColor = this.state.bgColor.interpolate({
                inputRange: [0, 1, 2],
                outputRange: ['hsl(187, 74%, 47%)', 'hsl(89, 47%, 54%)', 'hsl(12, 97%, 59%)']
            });
            return _react2.default.createElement(
                _reactNative.Animated.View,
                { style: { flex: 1, backgroundColor: bgColor }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 132
                        }
                    },
                    _reactNative.Platform.OS === 'ios' && _react2.default.createElement(_reactNative.View, { style: styles.statusBar, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 133
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.toolbarContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 134
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            { onPress: function onPress() {
                                    return _this2.props.navigator.pop();
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 135
                                }
                            },
                            _react2.default.createElement(_reactNative.Image, { style: styles.backImg, source: require('../imgs/back_arrow.png'), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 136
                                }
                            })
                        ),
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.titleTxt, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 138
                                }
                            },
                            "TITLE"
                        )
                    )
                ),
                _react2.default.createElement(
                    _rnViewpager.IndicatorViewPager,
                    {
                        style: { flex: 1, flexDirection: 'column-reverse' },
                        indicator: this._renderTitleIndicator(),
                        onPageScroll: this._onPageScroll.bind(this),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 141
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.pageContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 146
                            }
                        },
                        _react2.default.createElement(_reactNative.View, { style: [styles.shapeBase, styles.square], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 147
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.mainRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 148
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 149
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 150
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.pageContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 152
                            }
                        },
                        _react2.default.createElement(_reactNative.View, { style: [styles.shapeBase, styles.triangle], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 153
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.mainRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 154
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 155
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 156
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.pageContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 158
                            }
                        },
                        _react2.default.createElement(_reactNative.View, { style: [styles.shapeBase, styles.circle], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 159
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.mainRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 160
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 161
                            }
                        }),
                        _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 162
                            }
                        })
                    )
                )
            );
        }
    }]);
    return Home;
}(_react2.default.Component);

module.exports = Home;