import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { wowClasses } from '../data/wowData';

const Wow = () => {
	const [selectedClass, setSelectedClass] = useState(null);
	const [selectedSpec, setSelectedSpec] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');

	// Sort classes alphabetically
	const sortedClasses = useMemo(() => {
		return [...wowClasses].sort((a, b) => a.name.localeCompare(b.name));
	}, []);

	// Get sorted specs for selected class
	const sortedSpecs = useMemo(() => {
		if (!selectedClass) return [];
		return [...selectedClass.specs].sort((a, b) =>
			a.name.localeCompare(b.name)
		);
	}, [selectedClass]);

	const handleClassClick = (wowClass) => {
		setSelectedClass(wowClass);
		setSelectedSpec(null);
	};

	const handleSpecClick = (spec) => {
		setSelectedSpec(spec);
	};

	// Find all specs that have the searched item as BiS
	const findSpecsWithItem = () => {
		if (!searchQuery) return [];

		const results = [];
		const searchLower = searchQuery.toLowerCase();

		sortedClasses.forEach((wowClass) => {
			const sortedSpecs = [...wowClass.specs].sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			sortedSpecs.forEach((spec) => {
				const matchingItems = spec.bis.filter((item) =>
					item.item.toLowerCase().includes(searchLower)
				);

				if (matchingItems.length > 0) {
					results.push({
						className: wowClass.name,
						classColor: wowClass.color,
						specName: spec.name,
						role: spec.role,
						items: matchingItems,
					});
				}
			});
		});

		// Sort results by class name, then spec name
		return results.sort((a, b) => {
			const classCompare = a.className.localeCompare(b.className);
			if (classCompare !== 0) return classCompare;
			return a.specName.localeCompare(b.specName);
		});
	};

	const searchResults = findSpecsWithItem();

	return (
		<Container className='py-5'>
			<h1 className='text-center mb-5'>World of Warcraft Classes</h1>

			{/* Search Bar */}
			<Row className='mb-5'>
				<Col md={6} className='mx-auto'>
					<InputGroup>
						<Form.Control
							placeholder='Search for an item...'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</InputGroup>
				</Col>
			</Row>

			{/* Search Results */}
			{searchQuery && (
				<Row className='mb-5'>
					<Col>
						<Card>
							<Card.Header>
								<h3 className='mb-0'>Search Results</h3>
							</Card.Header>
							<Card.Body>
								{searchResults.length > 0 ? (
									<div className='d-grid gap-3'>
										{searchResults.map((result, index) => (
											<Card key={index}>
												<Card.Body>
													<h5
														style={{
															color: result.classColor,
														}}
													>
														{result.className} -{' '}
														{result.specName}
													</h5>
													<div className='text-muted mb-2'>
														Role: {result.role}
													</div>
													<div>
														{result.items.map(
															(
																item,
																itemIndex
															) => (
																<div
																	key={
																		itemIndex
																	}
																>
																	<strong>
																		{
																			item.slot
																		}
																		:
																	</strong>{' '}
																	{item.item}
																</div>
															)
														)}
													</div>
												</Card.Body>
											</Card>
										))}
									</div>
								) : (
									<p className='text-center mb-0'>
										No items found matching "{searchQuery}"
									</p>
								)}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			)}

			{/* Class, Spec, and BiS Display */}
			<Row>
				<Col md={4}>
					<h2 className='mb-4'>Classes</h2>
					<div className='d-grid gap-2'>
						{sortedClasses.map((wowClass) => (
							<Card
								key={wowClass.id}
								onClick={() => handleClassClick(wowClass)}
								className={`cursor-pointer ${
									selectedClass?.id === wowClass.id
										? 'border-primary'
										: ''
								}`}
								style={{
									cursor: 'pointer',
									borderWidth:
										selectedClass?.id === wowClass.id
											? '2px'
											: '1px',
								}}
							>
								<Card.Body>
									<Card.Title
										style={{ color: wowClass.color }}
									>
										{wowClass.name}
									</Card.Title>
								</Card.Body>
							</Card>
						))}
					</div>
				</Col>

				{selectedClass && (
					<Col md={4}>
						<h2 className='mb-4'>Specializations</h2>
						<div className='d-grid gap-2'>
							{sortedSpecs.map((spec) => (
								<Card
									key={spec.id}
									onClick={() => handleSpecClick(spec)}
									className={`cursor-pointer ${
										selectedSpec?.id === spec.id
											? 'border-primary'
											: ''
									}`}
									style={{
										cursor: 'pointer',
										borderWidth:
											selectedSpec?.id === spec.id
												? '2px'
												: '1px',
									}}
								>
									<Card.Body>
										<Card.Title>{spec.name}</Card.Title>
										<Card.Subtitle className='mb-2 text-muted'>
											{spec.role}
										</Card.Subtitle>
									</Card.Body>
								</Card>
							))}
						</div>
					</Col>
				)}

				{selectedSpec && (
					<Col md={4}>
						<h2 className='mb-4'>Best in Slot</h2>
						<Card>
							<Card.Body>
								<Card.Title className='mb-4'>
									{selectedClass.name} - {selectedSpec.name}
								</Card.Title>
								<div className='d-grid gap-2'>
									{selectedSpec.bis.map((item, index) => (
										<div
											key={index}
											className='d-flex justify-content-between align-items-center'
										>
											<strong>{item.slot}:</strong>
											<div className='d-flex align-items-center'>
												<img
													src={item.image}
													alt={item.item}
													style={{
														width: '20px',
														height: '20px',
														marginRight: '5px',
													}}
												/>
												<a
													href={item.url}
													target='_blank'
													rel='noopener noreferrer'
												>
													{item.item}
												</a>
											</div>
										</div>
									))}
								</div>
							</Card.Body>
						</Card>
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default Wow;
