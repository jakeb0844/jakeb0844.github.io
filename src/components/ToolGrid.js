import React, { useState, useEffect } from 'react';
import { Link } from'react-router-dom';
function ToolGrid() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const hostname = window.location.hostname;

		const file = hostname === 'localhost' ? 'http://localhost:3000/tools.json' : 'https://jakeb0844.github.io/tools.json';
		// Fetch the JSON data using the fetch API
		fetch(file, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				const enabledTools = [];

				data.forEach((item) => {
					if (item.enabled === true) {
						enabledTools.push(item);
					}
				});

				setItems(enabledTools);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div id='tools' className='row'>
			{items.map((item) => (
				<div  key={crypto.randomUUID()} className='col-md-4'>
					<Link to={item.link}>
						<div className='card mb-4'>
							<div className='card-body'>
								<h5 className='card-title primary-color'>{item.name}</h5>
								<p className='card-text text-color'>{item.description}</p>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export default ToolGrid;
