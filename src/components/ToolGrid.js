import React, { useState, useEffect } from 'react';

function ToolGrid() {
	const [items, setItems] = useState([]);
	const fileLocation = './tools.json';
	useEffect(() => {
		// Fetch the JSON data using the fetch API
		fetch('http://localhost:3000/tools.json', {
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
					<a href={item.file}>
						<div className='card mb-4'>
							<div className='card-body'>
								<h5 className='card-title primary-color'>{item.name}</h5>
								<p className='card-text text-color'>{item.description}</p>
							</div>
						</div>
					</a>
				</div>
			))}
		</div>
	);
}

export default ToolGrid;
