import React from 'react';
import { inject } from 'narcissus';

const style = {
	display: 'block',
	width: 40,
	height: 40,
	marginTop: 6,
	transition: 'transform 0.1s',
	// backgroundImage: require('../images/modal-dialog-close.png'),
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: '40px 40px',
	'&&:hover': {
	  transform: 'scale(1.1)',
	}
}

const DownloadButton = (props) => {
	const { onClick, diameter = 40, background = "black", color = "white" } = props;
	const radius = diameter / 2;
	return <a className={inject(style)} onClick={onClick}>
			<svg width={diameter} height={diameter}>
	    	<circle cx={radius} cy={radius} r={radius} fill={background} />
	      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" transform="translate(8, 8)" fill={color} ></path>
	    </svg>
    </a>;
}

export default DownloadButton;