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
        dispatch({ type: 'add_fav', payload: { name: name, id: id } })

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

    
    const imagen = cardImg(url) // "Imagen not found" ? cardImg(url) : "https://static.wikia.nocookie.net/ptstarwars/images/8/82/Tatooine-TOR.jpg/revision/latest?cb=20160320020409"
   
    function detailRoute(url) {
        if (url.endsWith(`people/${id}`)) {
            return `detalles/${id}`;
        } else if (url.endsWith(`planets/${id}`)) {
            return `detailsplanets/${id}`;
        }
     //   else if (url.endsWith(`vehicles/${id}`)) {
       //     return `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`;
       // }
        else {
            return "not found";
        }
    }

    const routes = detailRoute(url)

    return (
        <div className="col-md-4 text-center mt-5"  style={{
      backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} >

            <div className="card" style={{ width: '18rem' }}>
                <img src={imagen} onError={(e) => { e.target.src = rigoImageUrl; }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link to={routes}>
                            <button className="btn btn-dark">Learn More</button>
                        </Link>
                        <button className="btn btn-outline-warning" onClick={addFav}><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>

        </div>
    );
}; 