import React, { useState } from 'react';

function Button(props) {
	const styles = {
		button: {
			width: '100px',
			height: '30px',
			left: 10,
			backgroundColor: props.color,
			fontSize: props.size,
			color: 'white',
			//	padding: '5px 10px',
			margin: '4px',
			border: 'none',
			borderRadius: '4px',
			cursor: 'pointer',
			position: 'inherit',
			display: props.disabled
		}
	};
	return (
		<button type="submit" style={styles.button} onClick={props.onClick}>
			{props.content}
		</button>
	);
}
export default Button;
