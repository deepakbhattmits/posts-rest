/** @format */

import React from 'react';

import './Image.css';

const image = ({ imageUrl, contain, left }) => {
	console.log('object : ', imageUrl);
	return (
		<div
			className='image'
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: contain ? 'contain' : 'cover',
				backgroundPosition: left ? 'left' : 'center',
			}}
		/>
	);
};

export default image;
