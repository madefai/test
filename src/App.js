import './App.css';
import Home from './pages/home/Home';
import Cards from './pages/cards/Cards';
import Detail from './pages/detail/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/cards">
					<Cards />
				</Route>
				<Route path="/detail">
					<Detail />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
