import React, { useState } from 'react';
import './Home.css';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useHistory } from 'react-router-dom';

function Home(props) {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ work, setWork ] = useState('');
	const [ profession, setProfession ] = useState('');
	const [ info, setInfo ] = useState('');

	const [ form, setForm ] = useState({});

	const history = useHistory();
	const handleSubmit = () => {
		history.push('/cards');
	};
	const handleChange = (evt) => {
		console.log([ evt.target.value ]);
		setForm({ ...form, [evt.target.name]: evt.target.value });
	};

	return (
		<div className="form">
			<h2>IT meeting guest questionnaire</h2>

			<form onSubmit={() => handleSubmit()}>
				<label>
					Last name <spam>*</spam>
				</label>
				<Input type="text" name="lastName" value={form.lastName} required={true} onChange={handleChange} />

				<label>
					First name <spam>*</spam>
				</label>
				<Input type="text" name="firstName" value={form.firstName} required={true} onChange={handleChange} />

				<label>Do you want to share your experience with us ?</label>
				<label>Work experience</label>
				<Input type="text" name="work" value={form.work} onChange={handleChange} />

				<label>Profession</label>
				<select>
					<option selected name="profession" value={form.profession} onChange={handleChange}>
						Profession
					</option>
					<option value="Developer">Developer</option>
					<option value="Tester">Tester</option>
					<option value="Product">Product owner</option>
					<option value="Project">Project manager</option>
					<option value="Businessman">Businessman</option>
				</select>

				<label>Additional info</label>
				<textarea value={form.info} onChange={handleChange} />

				<Button size="15" color="grey" content="envoyer" />
			</form>
		</div>
	);
}

export default Home;
