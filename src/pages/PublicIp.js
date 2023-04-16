import Nav from '../components/Nav';
import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
export default function PublicIp() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		// Fetch the JSON data using the fetch API
		fetch('https://hutils.loxal.net/whois', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				let information = {
					ip: data.ip,
					city: data.city,
					country: data.country,
					isp: data.isp,
				};

				setItems(information);
			})
			.catch((error) => console.log(error));
	}, []);

	const [isToastShowing, setToastValue] = useState(false);

	const showToast = () => {
		setToastValue(true);
	};

	const closeToast = () => {
		setToastValue(false);
	};

	const CopyToClipboard = (ip) => {
		navigator.clipboard
			.writeText(ip)
			.then(() => {
				console.log('Text copied to clipboard');
			})
			.catch((error) => {
				console.error('Could not copy text: ', error);
			});
	};

    const handleClick = () =>{
        CopyToClipboard(items.ip);
        showToast();
    }

	return (
		<>
			<header>
				<Nav />
				<div className='jumbotron p-3'>
					<div className='container'>
						<h1 className='display-4'>Get Your Public IP</h1>
						<p className='lead'>
							Look below to find your public ip and other related
							information.
							<br />
						</p>

						<p className='note'>
							Please note that your public IP address is
							completely visible to anyone who has access to the
							internet. This is an essential piece of information
							for online security and networking purposes. Rest
							assured that our tool simply displays your public IP
							address and does not collect or store any other
							personal information.
						</p>
					</div>
				</div>
			</header>
			<main>
				<section className='py-5'>
					<div className='container'>
						<div
							style={{ width: '25%' }}
							className='me-auto ms-auto pb-3'
						>
							<Toast
								className='align-items-center border-0'
								style={{ backgroundColor: '#cbcccc' }}
								show={isToastShowing}
								onClose={closeToast}
								autohide={false}
							>
								<div className='d-flex'>
									<Toast.Body className='fs-6'>
										IP copied!
									</Toast.Body>
									<button
										type='button'
										className='btn-close btn-close-white me-2 m-auto'
										// data-bs-dismiss='toast'
										aria-label='Close'
										onClick={closeToast}
									></button>
								</div>
							</Toast>
						</div>
						<div className='w-50 me-auto ms-auto border border-1 fs-5'>
							<ul className='list-group list-group-flush'>
								<li id='ip' className='list-group-item'>
									My Public IP:{' '}
									<button
										className='link-button'
										onClick={handleClick}
									>
										{items.ip}
									</button>
								</li>
								<li id='city' className='list-group-item'>
									My City: {items.city}
								</li>
								<li id='country' className='list-group-item'>
									My Country: {items.country}
								</li>
								<li id='isp' className='list-group-item'>
									My ISP: {items.isp}
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
