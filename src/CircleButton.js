import React, { PropTypes } from "react";
import { inject } from 'narcissus';

// Done in SVG so we can avoid importing any CSS
const RECT_WIDTH = 1.5;
const MARGIN = 8;
const buttonStyle = {
  display: 'block',
  width: 40,
  height: 40,
  marginBottom: 5,
  transition: 'transform 0.1s',
  '&&:hover': {
    transform: 'scale(1.1)',
  }
}

const CircleButton = props => {
  const { diameter, onClick, background = 'black', children } = props;
  const radius = diameter / 2;

  return (
    <a className={inject(buttonStyle)} onClick={onClick}>
      <svg width={diameter} height={diameter}>
        <circle cx={radius} cy={radius} r={radius} fill={background} />
        {children}
      </svg>
    </a>
  );
};

CircleButton.propTypes = {
  diameter: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  background: PropTypes.string,
  children: PropTypes.element,
};

export default CircleButton;
