import logo from './logo.svg';
import './App.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PublicIp from './pages/PublicIp';
import Wow from './pages/Wow';
import RaidTrinkets from './pages/RaidTrinkets';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/public-ip' element={<PublicIp />} />
			<Route path='/wow' element={<Wow />} />
			<Route path='/raid-trinkets' element={<RaidTrinkets />} />
		</Routes>
	);
}

export default App;
