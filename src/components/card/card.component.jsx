import React from 'react';

import './card.styles.css';

const Card = ({name, email}) => {
	return(
		<div className='card-container'>
			<img alt='kitties' src={`https://robohash.org/${name}?size=200x200&set=set4`}/>
			<h3>Name: {name}</h3>
			<span>Email: {email}</span>
		</div>
	)
}

export default Card