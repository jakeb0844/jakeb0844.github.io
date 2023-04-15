import logo from './logo.svg';
import './App.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Nav';
import Footer from './components/Footer';
import EnabledItems from './components/EnabledItems';

function App() {
	return (
		<><header>
			<Header />
      <div className="jumbotron p-3">
				<div className="container">
					<h1 className="display-4">Free Online Tools</h1>
					<p className="lead">
						Our tools are free because we believe in making useful
						tools accessible to everyone. We hope you find them
						helpful!
					</p>
				</div>
			</div>
      </header>
      <main>
			<section className="py-5">
				<div className="container">
					<h2 className="mb-4">Our Tools</h2>
					<div id="tools"  className="row">
						<EnabledItems />
					</div>
				</div>
			</section>
		</main>
			<Footer />
		</>
	);
}

export default App;
