import React from 'react';

import './searchbox.styles.css';

const SearchBox = ({handleChange}) => {
	return(
		<input className='search' type='search' placeholder='search kitties' onChange={handleChange}/>
	)
}

export default SearchBox