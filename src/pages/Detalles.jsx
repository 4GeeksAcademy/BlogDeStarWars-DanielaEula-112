import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const Detalles = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const getCharacter = async () => {
            try{
                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                const data = await response.json();
                console.log(data);
                setCharacter(data.result.properties);
            } catch (error){
                console.log(error);
            }
        };
        getCharacter();
    }, [id]);

    const cardImg = (url) => {
        if (url.endsWith(`people/${id}`)){
            return `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${id}.jpg`;
        } else {
            return "Not found";
        }
    };

    const imagen = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${id}.jpg`;
    
    return (
        <div className="text-center mb-5 p-5">
 
            <div className="container card border-0 bg-dark mt-0 mx-auto" style={{maxWidth: '740px', color: 'yellow'}}>
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body mt-5">
                            <h2 className="card-title">{character.name}</h2>
                            <p>Género: {character.gender}</p>
                            <p>Año de Nacimiento: {character.birth_year}</p>
                            <p>Ojos: {character.eye_color}</p>
                            <p>Cabello: {character.hair_color}</p>
                            <p>Altura: {character.height}</p>
                            <p>Peso: {character.mass}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}; 