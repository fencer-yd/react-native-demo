Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/yangdeng/myProject/reactApp/demoApp/node_modules/react-native-button/Button.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _coalesceNonElementChildren = require('./coalesceNonElementChildren');

var _coalesceNonElementChildren2 = babelHelpers.interopRequireDefault(_coalesceNonElementChildren);

var systemButtonOpacity = 0.2;

var Button = function (_Component) {
  babelHelpers.inherits(Button, _Component);

  function Button() {
    babelHelpers.classCallCheck(this, Button);
    return babelHelpers.possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  babelHelpers.createClass(Button, [{
    key: 'render',
    value: function render() {
      var touchableProps = {
        activeOpacity: this._computeActiveOpacity()
      };
      if (!this.props.disabled) {
        touchableProps.onPress = this.props.onPress;
        touchableProps.onPressIn = this.props.onPressIn;
        touchableProps.onPressOut = this.props.onPressOut;
        touchableProps.onLongPress = this.props.onLongPress;
      }

      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        babelHelpers.extends({}, touchableProps, {
          testID: this.props.testID,
          style: this.props.containerStyle,
          accessibilityTraits: 'button',
          accessibilityComponentType: 'button', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }),
        this._renderGroupedChildren()
      );
    }
  }, {
    key: '_renderGroupedChildren',
    value: function _renderGroupedChildren() {
      var _this2 = this;

      var disabled = this.props.disabled;

      var style = [styles.text, disabled ? styles.disabledText : null, this.props.style, disabled ? this.props.styleDisabled : null];

      var children = (0, _coalesceNonElementChildren2.default)(this.props.children, function (children, index) {
        return _react2.default.createElement(
          _reactNative.Text,
          { key: index, style: style, allowFontScaling: _this2.props.allowFontScaling, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          children
        );
      });

      switch (children.length) {
        case 0:
          return null;
        case 1:
          return children[0];
        default:
          return _react2.default.createElement(
            _reactNative.View,
            { style: styles.group, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            children
          );
      }
    }
  }, {
    key: '_computeActiveOpacity',
    value: function _computeActiveOpacity() {
      if (this.props.disabled) {
        return 1;
      }
      return this.props.activeOpacity != null ? this.props.activeOpacity : systemButtonOpacity;
    }
  }]);
  return Button;
}(_react.Component);

Button.propTypes = babelHelpers.extends({}, _reactNative.TouchableOpacity.propTypes, {
  allowFontScaling: _reactNative.Text.propTypes.allowFontScaling,
  containerStyle: _reactNative.View.propTypes.style,
  disabled: _react.PropTypes.bool,
  style: _reactNative.Text.propTypes.style,
  styleDisabled: _reactNative.Text.propTypes.style
});
exports.default = Button;
;

var styles = _reactNative.StyleSheet.create({
  text: {
    color: '#007aff',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center'
  },
  disabledText: {
    color: '#dcdcdc'
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});