import React, { useState } from 'react';

const ServiceFullAbout = ({ item }) => {
	const [showFullDescription, setShowFullDescription] = useState(false);

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		<div className="service-item">
			<img src={item.img} alt="" />
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			{showFullDescription && <p className='full-description'>{item.fullDescription}</p>}
			<button onClick={toggleDescription}>Batafsil</button>
		</div>
	);
};

export default ServiceFullAbout;
