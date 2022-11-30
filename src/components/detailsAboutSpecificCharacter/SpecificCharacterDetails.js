import React from 'react';
import './SpecificCharacterDetails.css'

function CharacterContainer (props) {

	return (
		<>
		
			<div className="main-container">

				<div className="first-part-of-container">

					<img src={props.image} alt={props.name}/>

				</div>

				<div className="second-part-of-container">

					<h1>{props.name}</h1><br/>
					<p>	{props.name} é uma personagem que petence a série Rick And Morty. Essa personagem é especificamente da espécie "{props.species}" e se encontra no estado "{props.status}".</p>		
				</div>

			</div>

		</>
	);

}

export default CharacterContainer;