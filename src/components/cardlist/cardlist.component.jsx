import React from 'react';

import Card from '../card/card.component';
import './cardlist.styles.css';


const CardList = ({cats}) => {
	return(
		<div className='card-list'>
			{
				cats.map(cat => {
					return <Card key={cat.id} name={cat.name} email={cat.email}/>
				})
			}
		</div>
	)
}

export default CardList