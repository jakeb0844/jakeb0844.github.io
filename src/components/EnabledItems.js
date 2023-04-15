import React, { useState, useEffect } from 'react';

function EnabledItems() {
	const [items, setItems] = useState([]);
	const fileLocation = './tools.json';
	useEffect(() => {
    // Fetch the JSON data using the fetch API
    fetch("http://localhost:3000/tools.json",{
      'method': 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(typeof data)
        // Filter the items based on whether they are enabled or not
        const enabledItems = data.filter((item) => item.enabled);
        setItems(enabledItems);
      })
      .catch((error) => console.log(error));
  }, []);

	return (
		<div>
			{items.map((item) => (
				<div className='col-md-4'>
					<a href={item.file}>
						<div className='card mb-4'>
							<div className='card-body'>
								<h5 className='card-title'>{item.name}</h5>
								<p className='card-text'>{item.description}</p>
							</div>
						</div>
					</a>
				</div>
			))}
		</div>
	);
}

export default EnabledItems;
