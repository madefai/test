import React, { useState, useEffect } from 'react';
import './Cards.css';
import Carte from '../../components/Carte/Carte';
import axios from 'axios';

function Cards(props) {
	const [ todos, setTodos ] = useState([]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => {
				setTodos(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="grid-container">
			{todos.map((item) => (
				<div className="grid-item">
					<Carte title={item.title} body={item.body} id={item.id} />
				</div>
			))}
		</div>
	);
}

export default Cards;
