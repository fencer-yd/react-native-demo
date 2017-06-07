Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = coalesceNonElementChildren;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

function coalesceNonElementChildren(children, coalesceNodes) {
  var coalescedChildren = [];

  var contiguousNonElements = [];
  _react.Children.forEach(children, function (child) {
    if (!_react2.default.isValidElement(child)) {
      contiguousNonElements.push(child);
      return;
    }

    if (contiguousNonElements.length) {
      coalescedChildren.push(coalesceNodes(contiguousNonElements, coalescedChildren.length));
      contiguousNonElements = [];
    }

    coalescedChildren.push(child);
  });

  if (contiguousNonElements.length) {
    coalescedChildren.push(coalesceNodes(contiguousNonElements, coalescedChildren.length));
  }

  return coalescedChildren;
}