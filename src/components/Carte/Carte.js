import React, { useState } from 'react';
import './Carte.css';
import img from '../../images/img.jpg';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

function Carte(props) {
	const history = useHistory();
	const handleSubmit = () => {
		history.push(`/detail`, { params: props.id });
	};
	return (
		<div class="card">
			<img src={img} width="100%" height="200px" />
			<div class="container">
				<h4>
					<b>{props.title}</b>
				</h4>
				<p>{props.body}</p>
				<div className="btn-container">
					<Button color="grey" content="share" disabled={props.disabled} />
					<Button color="blue" content="view" disabled={props.disabled} onClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
}
export default Carte;
