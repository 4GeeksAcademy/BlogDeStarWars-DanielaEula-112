
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { CardCharacters } from "../components/CardCharacters.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [characters, setCharacters] = useState([]);

  async function getCharacters(){
	try{
		let response = await fetch('https://www.swapi.tech/api/people',
		{method: 'GET'})
		let data = await response.json()
		dispatch({type: 'get_characters', payload: data.results});

		
  } catch (error){
	console.log(error);
  }
  }
  console.log("esto es mi store", store.characters);

useEffect(() => {
	getCharacters()
	
}, [] );

console.log(characters)

	return (
		<div className="text-center mt-5">
			<h1>CHARACTERS</h1>
			<div>
				{store.characters.length == 0 ? ( 
					<p>Cargando</p>
					 ) : (
					<div> 
						{store.characters.map((item) => (
							<CardCharacters name={item.name} id={item.uid} key={item.uid} />
						))}
					</div>
						 )}
			 
			</div>
		</div>
	);
};