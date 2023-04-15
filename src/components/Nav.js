import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
				<div className='container'>
					<a className='navbar-brand' href='javascript:void(0);'>
						Free Online Tools
					</a>

					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<a className='nav-link active' href='/'>
								Home
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
