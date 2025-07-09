import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
//importar navLink {link}

export const CardCharacters = ({name, id}) => {
    const {store, dispatch} = useGlobalReducer()

    function addFav () {
        console.log(name,id);
        dispatch({type: 'add_fav', payload:{name:name,id:id}}) //payload la propiedad de name con el valor de name, lo mismo con id
    }


    return (
        <div className=" container text-center mt-5">
        
            <div className="">
                <div className="col-sm-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <navLink to={"/Detalles/"+id} className="btn btn-primary">Go somewhere</navLink> */}
                            <button className="btn btn-primary">Learn More</button>
                            <button className="btn btn-warning" onClick={addFav}>like</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 