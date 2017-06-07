

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/yangdeng/myProject/reactApp/demoApp/node_modules/rn-viewpager/viewpager/indicator/PagerTabIndicator.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _IndicatorViewPager = require('../IndicatorViewPager');

var _IndicatorViewPager2 = babelHelpers.interopRequireDefault(_IndicatorViewPager);

var PagerTabIndicator = function (_Component) {
    babelHelpers.inherits(PagerTabIndicator, _Component);

    function PagerTabIndicator() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, PagerTabIndicator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = PagerTabIndicator.__proto__ || Object.getPrototypeOf(PagerTabIndicator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedIndex: _this.props.initialPage
        }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(PagerTabIndicator, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                tabs = _props.tabs,
                pager = _props.pager,
                style = _props.style,
                itemStyle = _props.itemStyle,
                selectedItemStyle = _props.selectedItemStyle,
                iconStyle = _props.iconStyle,
                selectedIconStyle = _props.selectedIconStyle,
                textStyle = _props.textStyle,
                selectedTextStyle = _props.selectedTextStyle;

            if (!tabs || tabs.length === 0) return null;

            var tabsView = tabs.map(function (tab, index) {
                var isSelected = _this2.state.selectedIndex === index;
                return _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    {
                        style: [styles.itemContainer, isSelected ? selectedItemStyle : itemStyle],
                        activeOpacity: 0.6,
                        key: index,
                        onPress: function onPress() {
                            !isSelected && pager.setPage(index);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    _react2.default.createElement(_reactNative.Image, {
                        style: [styles.image, isSelected ? selectedIconStyle : iconStyle],
                        source: isSelected ? tab.selectedIconSource : tab.iconSource,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            style: [isSelected ? styles.textSelected : styles.text, isSelected ? selectedTextStyle : textStyle],
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        tab.text
                    )
                );
            });
            return _react2.default.createElement(
                _reactNative.View,
                { style: [styles.container, style], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                },
                tabsView
            );
        }
    }, {
        key: 'onPageSelected',
        value: function onPageSelected(e) {
            this.setState({ selectedIndex: e.position });
        }
    }]);
    return PagerTabIndicator;
}(_react.Component);

PagerTabIndicator.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
    initialPage: _react.PropTypes.number,
    pager: _react.PropTypes.instanceOf(_IndicatorViewPager2.default),
    tabs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.string,
        iconSource: _reactNative.Image.propTypes.source,
        selectedIconSource: _reactNative.Image.propTypes.source
    })).isRequired,
    itemStyle: _reactNative.View.propTypes.style,
    selectedItemStyle: _reactNative.View.propTypes.style,
    iconStyle: _reactNative.Image.propTypes.style,
    selectedIconStyle: _reactNative.Image.propTypes.style,
    textStyle: _reactNative.Text.propTypes.style,
    selectedTextStyle: _reactNative.Text.propTypes.style
});
PagerTabIndicator.defaultProps = {
    tabs: []
};
exports.default = PagerTabIndicator;


var styles = _reactNative.StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 4,
        borderTopWidth: 0.5,
        borderTopColor: '#E0E0E0',
        backgroundColor: '#F7F7F7'
    },
    itemContainer: {
        alignItems: 'center',
        flex: 1
    },
    image: {},
    text: {
        marginTop: 4,
        fontSize: 11,
        color: '#999999'
    },
    textSelected: {
        marginTop: 4,
        fontSize: 11,
        color: '#3584F6'
    }
});