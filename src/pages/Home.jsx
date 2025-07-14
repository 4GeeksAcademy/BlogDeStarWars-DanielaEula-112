
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
		getCharacters();
		getPlanets();
		getVehicles();

	}, []);

	console.log(characters)

	return (
		<><div className="card border-0"  >
			<div className="card-body bg-dark" style={{ border: 'none', boxShadow: 'none' }}>
				<h1 className="card-title font-monospace text-light">CHARACTERS</h1>
				<div className="row">
					{store.characters.length == 0 ? (
						<p>Cargando</p>
					) : (
						store.characters.map((item) => (
							<div className="col-md-4" key={item.uid}>
								<CardCharacters
									name={item.name}
									id={item.uid}
									url={item.url}
									properties={item.properties}
								/>
							</div>
						))
					)}
				</div>
			</div>
		</div><div className="card border-0">
				<div className="card-body bg-dark">
					<h1 className="card-title font-monospace text-light">PLANETS</h1>
					<div className="row">
						{store.planets.length == 0 ? (
							<p>cargando</p>
						) : (
							store.planets.map((i) => (
								<div className="col-md-4" key={i.uid}>
									<CardCharacters 
									name={i.name} 
									id={i.uid} 
									url={i.url}
									properties={i.properties} />
								</div>
							))
						)}
					</div>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			<div className="card border-0">
				<div className="card-body bg-dark">
					<h1 className="card-title font-monospace text-light">VEHICLES</h1>
					<div className="row">
						{store.vehicles.length == 0 ? (
							<p>cargando</p>
						) : (
							store.vehicles.map((e) => (
								<div className="col-md-4" key={e.uid}>
									<CardCharacters 
									name={e.name} 
									id={e.uid} 
									url={e.url} 
									properties={e.properties}/>
								</div>
							))
						)}
					</div>

				</div>
			</div></>



	);
};