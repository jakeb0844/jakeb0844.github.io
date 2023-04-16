import logo from './logo.svg';
import './App.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PublicIp from './pages/PublicIp';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/public-ip' element={<PublicIp />} />
		</Routes>
	);
}

export default App;
