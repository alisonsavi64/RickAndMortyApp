import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import CharacterContainer from '../../components/detailsAboutSpecificCharacter/SpecificCharacterDetails'

function CharacterDetails () {

	const [character, setCharacter] = useState([]);

	const {id} = useParams()

	useEffect(() => {

	axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((response) => {
	
			setCharacter(response.data)		

		}).catch((err) => {
		
			console.log(err)

		})


	}, []);

	return (
		<>
			<CharacterContainer name={character.name} image={character.image} status={character.status} species={character.species} />
		</>	
	);

}

export default CharacterDetails;


