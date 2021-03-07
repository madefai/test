import React, { useState } from 'react';

function Input(props) {
	const styles = {
		input: {
			width: '80%',
			padding: '12px 20px',
			margin: '8px 0',
			display: 'inline-block',
			border: '1px solid #ccc',
			borderRadius: '4px',
			boxSizing: 'border-box'
		}
	};
	return (
		<input
			type={props.type}
			name={props.name}
			value={props.value}
			required={props.required}
			style={styles.input}
			onChange={props.onChange}
		/>
	);
}
export default Input;
