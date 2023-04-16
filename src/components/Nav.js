import React from 'react';

import { Link } from 'react-router-dom';
class Header extends React.Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
				<div className='container'>
					{/* <a className='navbar-brand' href='javascript:void(0);'>
						Free Online Tools
					</a> */}

					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						{/* <li className='nav-item'>
							<Link className='nav-link' to='/tools'>
								Tools
							</Link>
						</li> */}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
