import React from 'react'
import './CharacterCard.css'
function Card (props) {

	return (
		<>
			<div className="uniqueCard">
				<img src={props.image} alt={props.name}/>
				<h1>{props.name}</h1>
			</div>
		</>
	);
}

export default Card;