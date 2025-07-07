import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
//importar navLink {link}

export const CardCharacters = ({name, id}) => {


    return (
        <div className="text-center mt-5">
        
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <navLink to={"/Detalles/"+id} className="btn btn-primary">Go somewhere</navLink> */}
                    </div>
                </div>
            </div>
        </div>
    );
}; 