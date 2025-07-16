import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const DetailsVehicles = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams();
    const [vehicles, setVehicles] = useState({});

    useEffect(() => {
        const getVehicles = async () => {
            try{
                const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                const data = await response.json();
                console.log(data);
                setVehicles(data.result.properties);
            } catch (error){
                console.log(error);
            }
        };
        getVehicles();
    }, [id]);

    const cardImg = (url) => {
        if (url.endsWith(`vehicles/${id}`)){
            return `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`;
        } else {
            return "Not found";
        }
    };

    const imagen = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`;
    
    return (
        <div className="text-center mb-5 p-5">
 
            <div className="container card border-0 bg-dark mt-0 mx-auto" style={{maxWidth: '740px', color: 'yellow'}}>
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body mt-5">
                            <h2 className="card-title">{vehicles.name}</h2>
                            <p>Clase: {vehicles.vehicle_class}</p>
                            <p>Modelo: {vehicles.model}</p>
                            <p>Fabricante: {vehicles.manufacturer}</p>
                            <p>Capacidad: {vehicles.cargo_capacity}</p>
                            <p>Coste en créditos: {vehicles.cost_in_credits}</p>
                            <p>Pasajeros: {vehicles.passengers}</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}; 