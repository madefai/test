import React, { useState, useEffect } from 'react';
import './Detail.css';
import Carte from '../../components/Carte/Carte';
import Comment from '../../components/Comment/Comment';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Detail(props) {
	const location = useLocation();
	const myparam = location.state.params;
	console.log('trt', myparam);

	const [ todos, setTodos ] = useState([]);
	const [ comments, setComments ] = useState([]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${myparam}`)
			.then((res) => {
				setTodos(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${myparam}/comments`)
			.then((res) => {
				setComments(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="grid-container">
			<div className="grid-item">
				<Carte title={todos.title} body={todos.body} disabled="none" />
			</div>
			<div className="grid-item">
				{comments.map((item) => <Comment name={item.name} email={item.email} body={item.body} />)}
			</div>
		</div>
	);
}

export default Detail;
