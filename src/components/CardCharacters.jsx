import PropTypes from "prop-types";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
//import ImgAlternativa from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88Ne9oGsKj9TPPc4iUafELSVKxYs916IySW8cglLFeTtqfZAbo4A-9q6RrHmPQKdSuXo&usqp=CAU"
//importar navLink {link}
import { Link } from "react-router-dom";

export const CardCharacters = ({ name, id, url }) => {
    const { store, dispatch } = useGlobalReducer()


    function addFav() {
        dispatch({
            type: 'add_fav',
            payload: { 
                name: name, 
                id: id,
                url: url
             } 
        });
    };

    function cardImg(url) {
        if (url.endsWith(`people/${id}`)) {
            return `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${id}.jpg`;
        } else if (url.endsWith(`planets/${id}`)) {
            return `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg` || `https://static.wikia.nocookie.net/star-wars-roleplaying/images/0/01/Tatooine.png/revision/latest?cb=20240712072557`;
        }
        else if (url.endsWith(`vehicles/${id}`)) {
            return `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`;
        }
        else {
            return "not found";
        }
    }

    
    const imagen = cardImg(url) 
   
    function detailRoute(url) {
        if (url.endsWith(`people/${id}`)) {
            return `detalles/${id}`;
        } else if (url.endsWith(`planets/${id}`)) {
            return `detailsplanets/${id}`;
        }
        else if (url.endsWith(`vehicles/${id}`)) {
            return `detailsvehicles/${id}`;
        }
        else {
            return "Not Found";
        }
    }

    const routes = detailRoute(url)

    return (
        <div className="container text-center mt-3" >
            <div className="card" style={{ width: '15rem' }}>
                <img src={imagen} onError={(e) => { e.target.src = rigoImageUrl; }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-light">{name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link to={routes}>
                            <button className="btn btn-warning">Learn More</button>
                        </Link>
                        <button className="btn btn-outline-warning" onClick={addFav}><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>

        </div>
    );
}; 