import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/characterCard/CharacterCard';
import './Home.css'

function Home () {

	const [characters, setCharacters] = useState([]);

	useEffect(() => {

	axios.get("https://rickandmortyapi.com/api/character").then((response) => {

		setCharacters(response.data.results);
	
	}).catch((err) => {

		console.log(err);
	
	})

	}, []);

	return (
		<>
			<h1 className="home-title">Personagens</h1>

			<div className="cards-container">
				{characters.map(character => (

					<Link className="link-router" to={`/character/${character.id}`}>
					
						<Card key={character.id} name={character.name} image={character.image}/>

					</Link>
					
					)
				)}
			</div>
		</>
	);
}

export default Home;