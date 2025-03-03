import React, { useState } from 'react';
import { wowClasses } from '../data/wowData';

const RaidTrinkets = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState({ sTier: [], aTier: [] });

	const handleSearch = (query) => {
		setSearchQuery(query);

		if (!query) {
			setResults({ sTier: [], aTier: [] });
			return;
		}

		const matchingSpecs = {
			sTier: [],
			aTier: [],
		};

		wowClasses.forEach((wowClass) => {
			wowClass.specs.forEach((spec) => {
				const sTier = spec.bisTrinkets?.s || [];
				const aTier = spec.bisTrinkets?.a || [];

				// Check S tier
				if (
					sTier.some((trinket) =>
						trinket.toLowerCase().includes(query.toLowerCase())
					)
				) {
					matchingSpecs.sTier.push({
						class: wowClass.name,
						spec: spec.name,
						color: wowClass.color,
					});
				}

				// Check A tier
				if (
					aTier.some((trinket) =>
						trinket.toLowerCase().includes(query.toLowerCase())
					)
				) {
					matchingSpecs.aTier.push({
						class: wowClass.name,
						spec: spec.name,
						color: wowClass.color,
					});
				}
			});
		});

		setResults(matchingSpecs);
	};

	const SpecCard = ({ spec, className, color }) => (
		<div className='p-4 border rounded mb-2' style={{width: '180px'}}>
			<div className='font-semibold' style={{ color }}>
				{className}
			</div>
			<div>{spec}</div>
		</div>
	);

	const hasResults = results.sTier.length > 0 || results.aTier.length > 0;

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold mb-6'>Raid Trinket Search</h1>

			<div className='mb-6'>
				<input
					type='text'
					placeholder='Search for a trinket...'
					className='w-75 mx-auto p-2 border border-gray-300 rounded'
					value={searchQuery}
					onChange={(e) => handleSearch(e.target.value)}
				/>
			</div>

			{hasResults ? (
				<div
					style={{
						// display: 'grid',
						// gridTemplateColumns: '1fr 1fr',
						// gap: '10px',
						// overflowY: 'auto',
						// maxHeight: '800px',
						padding: '10px',
					}}
				>
					{/* S Tier Column */}
					<div>
						<h2 className='text-xl font-semibold mb-4'>S Tier</h2>
						<div style={{display: 'flex', flexFlow: 'row wrap', gap: '4px'}}>
						{results.sTier.length > 0 ? (
							results.sTier.map((result, index) => (
								<SpecCard
									key={`s-${index}`}
									spec={result.spec}
									className={result.class}
									color={result.color}
								/>
							))
						) : (
							<div className='text-gray-600'>
								No specs found in S tier
							</div>
						)}
						</div>
					</div>

					{/* A Tier Column */}
					<div>
						<h2 className='text-xl font-semibold mb-4'>A Tier</h2>
						<div style={{display: 'flex', flexFlow: 'row wrap', gap: '4px'}}>
						{results.aTier.length > 0 ? (
							results.aTier.map((result, index) => (
								<SpecCard
									key={`a-${index}`}
									spec={result.spec}
									className={result.class}
									color={result.color}
								/>
							))
						) : (
							<div className='text-gray-600'>
								No specs found in A tier
							</div>
						)}
						</div>
					</div>
				</div>
			) : (
				searchQuery && (
					<div className='text-gray-600'>
						No specs found using this trinket.
					</div>
				)
			)}
		</div>
	);
};

export default RaidTrinkets;
