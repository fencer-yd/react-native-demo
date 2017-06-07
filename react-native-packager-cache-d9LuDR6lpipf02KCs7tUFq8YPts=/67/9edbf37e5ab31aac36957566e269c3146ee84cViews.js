'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ThirdView = exports.SecondView = exports.FirstView = undefined;
var _jsxFileName = '/Users/yangdeng/myProject/reactApp/demoApp/components/Views.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

function generateShapePagerView(shapeStyle) {
    return function () {
        return _react2.default.createElement(
            _reactNative.View,
            { style: styles.pageContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            _react2.default.createElement(_reactNative.View, { style: [styles.shapeBase, shapeStyle], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }),
            _react2.default.createElement(_reactNative.View, { style: styles.mainRec, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }),
            _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }),
            _react2.default.createElement(_reactNative.View, { style: styles.subRec, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            })
        );
    };
}

var styles = _reactNative.StyleSheet.create({
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

var FirstView = exports.FirstView = generateShapePagerView(styles.square);
var SecondView = exports.SecondView = generateShapePagerView(styles.triangle);
var ThirdView = exports.ThirdView = generateShapePagerView(styles.circle);