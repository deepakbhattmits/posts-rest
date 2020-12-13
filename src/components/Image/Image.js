/** @format */

import React from 'react';

import './Image.css';

const image = ({ imageUrl, contain, left }) => {
	return (
		<>
			{/* // <div
		// 	className='image'
		// 	style={{
		// 		backgroundImage: backgroundImage,
		// 		backgroundSize: contain ? 'contain' : 'cover',
		// 		backgroundPosition: left ? 'left' : 'center',
		// 	}}
		// /> */}
			<img className='image' src={imageUrl} alt={imageUrl} />
		</>
	);
};

export default image;
