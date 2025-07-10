
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { CardCharacters } from "../components/CardCharacters.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	async function getCharacters() {
		try {
			let response = await fetch('https://www.swapi.tech/api/people',
				{ method: 'GET' })
			let data = await response.json()
			dispatch({ type: 'get_characters', payload: data.results });


		} catch (error) {
			console.log(error);
		}
	}
	console.log("esto es mi store", store.characters);

	async function getPlanets() {
		try {
			let response = await fetch('https://www.swapi.tech/api/planets/',
				{ method: 'GET' })
			let data = await response.json()
			dispatch({ type: 'get_planets', payload: data.results });

		} catch (error) {
			console.log(error);
		}

	}
	console.log("este es mi store de planetas", store.planets);

	async function getVehicles() {
		try {
			let response = await fetch('https://www.swapi.tech/api/vehicles/',
				{ method: 'GET' })
			let data = await response.json()
			dispatch({ type: 'get_vehicles', payload: data.results });


		} catch (error) {
			console.log(error);
		}
		
	}
	console.log("estos son los vehiculos", store.vehicles);

	useEffect(() => {
		getCharacters(),
		getPlanets(),
		getVehicles()

	}, []);

	console.log(characters)

	return (
		<><div className="card">
			<div className="card-body">
				<h1 className="card-title">CHARACTERS</h1>
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
		</div><div className="card">
				<div className="card-body">
					<h1 className="card-title">PLANETS</h1>
					<div>
						{store.planets.length == 0 ? (
							<p>cargando</p>
						) : (
							<div>
								{store.planets.map((i) => (
									<CardCharacters name={i.name} id={i.uid} />
								))}
							</div>
						)}
					</div>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h1 className="card-title">VEHICLES</h1>
					<div>
						{store.vehicles.length == 0 ? (
							<p>cargando</p>
						) : (
							<div>
								{store.vehicles.map((e) => (
									<CardCharacters name={e.name} id={e.uid} />
								))}
							</div>
						)}
					</div>
					
				</div>
			</div></>



	);
};