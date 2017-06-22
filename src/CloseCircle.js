import React, {PropTypes} from 'react';

// Done in SVG so we can avoid importing any CSS
const RECT_WIDTH = 1.5;
const MARGIN = 8;

const CloseCircle = (props) => {
  const {
    diameter,
  } = props;

  const radius = diameter / 2;

  return (
    <g transform={`rotate(45 ${diameter / 2} ${diameter / 2})`}>
      <rect
        x={MARGIN}
        y={(diameter - RECT_WIDTH) / 2}
        width={diameter - (2 * MARGIN)}
        height={RECT_WIDTH}
        fill="white"
      />
      <rect
        y={MARGIN}
        x={(diameter - RECT_WIDTH) / 2}
        height={diameter - (2 * MARGIN)}
        width={RECT_WIDTH}
        fill="white"
      />
    </g>
    );
};

CloseCircle.propTypes = {
  diameter: PropTypes.number.isRequired,
};

export default CloseCircle;
