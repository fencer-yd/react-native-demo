Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/yangdeng/myProject/reactApp/demoApp/components/TabIcon.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var propTypes = {
  selected: _react.PropTypes.bool,
  title: _react.PropTypes.string
};

var TabIcon = function TabIcon(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    {
      style: { color: props.selected ? 'red' : 'black' },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    props.title
  );
};

TabIcon.propTypes = propTypes;

exports.default = TabIcon;