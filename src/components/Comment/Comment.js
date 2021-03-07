import React, { useState } from 'react';
import './Comment.css';

function Comment(props) {
	return (
		<div class="comment">
			<label>Name : {props.name}</label>

			<label>Email : {props.email}</label>

			<label>Commentaire :</label>
			<p>{props.body}</p>
		</div>
	);
}
export default Comment;
