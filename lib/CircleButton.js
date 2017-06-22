'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _narcissus = require('narcissus');

// Done in SVG so we can avoid importing any CSS
var RECT_WIDTH = 1.5;
var MARGIN = 8;
var buttonStyle = {
  display: 'block',
  width: 40,
  height: 40,
  marginBottom: 5,
  transition: 'transform 0.1s',
  '&&:hover': {
    transform: 'scale(1.1)'
  }
};

var CircleButton = function CircleButton(props) {
  var diameter = props.diameter;
  var onClick = props.onClick;
  var _props$background = props.background;
  var background = _props$background === undefined ? 'black' : _props$background;
  var children = props.children;

  var radius = diameter / 2;

  return _react2['default'].createElement(
    'a',
    { className: (0, _narcissus.inject)(buttonStyle), onClick: onClick },
    _react2['default'].createElement(
      'svg',
      { width: diameter, height: diameter },
      _react2['default'].createElement('circle', { cx: radius, cy: radius, r: radius, fill: background }),
      children
    )
  );
};

CircleButton.propTypes = {
  diameter: _react.PropTypes.number.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  background: _react.PropTypes.string,
  children: _react.PropTypes.element
};

exports['default'] = CircleButton;
module.exports = exports['default'];