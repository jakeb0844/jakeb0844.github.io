import Nav from '..//components/Nav';
import ToolGrid from '..//components/ToolGrid';
import Footer from '..//components/Footer';

export default function Home(){
    return (
        <>
			<header>
				<Nav />
				<div className='jumbotron p-3'>
					<div className='container'>
						<h1 className='display-4'>Free Online Tools</h1>
						<p className='lead'>
							Our tools are free because we believe in making
							useful tools accessible to everyone. We hope you
							find them helpful!
						</p>
					</div>
				</div>
			</header>
			<main>
				<section className='py-5'>
					<div className='container'>
						<h2 className='mb-4'>Our Tools</h2>
						<ToolGrid />
					</div>
				</section>
			</main>
			<Footer />
		</>
    );
}