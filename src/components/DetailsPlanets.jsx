import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const DetailsPlanets = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams();
    const [planets, setPlanets] = useState({});

    useEffect(() => {
        const getPlanets = async () => {
            try{
                const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                const data = await response.json();
                setPlanets(data.result.properties);
            } catch (error){
                console.log(error);
            }
        };
        getPlanets();
    }, [id]);

    const cardImg = (url) => {
        if (url.endsWith(`planets/${id}`)){
            return `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`;
        } else {
            return "Not found";
        }
    };

    const imagen = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`;
    
    return (
        <div className="text-center mb-5 p-5">
 
            <div className="container card border-0 bg-dark mt-0 mx-auto" style={{maxWidth: '740px', color: 'yellow'}}>
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body mt-5">
                            <h2 className="card-title">{planets.name}</h2>
                            <p>Clima: {planets.climate}</p>
                            <p>Órbita: {planets.orbital_period}</p>
                            <p>Población: {planets.population}</p>
                            <p>Terreno: {planets.terrain}</p>
                            <p>Diámettro: {planets.diameter}</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}; 