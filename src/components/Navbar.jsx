import { Link } from "react-router-dom";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	

	const removeFav = (id) => {
		dispatch({ type: 'remove_fav', payload: { id: id } });
	};

	return (

		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{
      backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
			<div className="container d-flex justify-content-between">
				<div className="d-flex align-items-center">
					<a className="navbar-brand" href="/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{ maxWidth: '150px', height: '80px' }} />
					</a>
				</div>
				<div className="d-flex align-items-center">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse m-0" id="navbarNavDarkDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#FFE81F'}}>
									Favoritos ({store.addFav.length})
								</a>
								
								<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
									{store.addFav.map((fav, index) => (
										<li className="d-flex justify-content-betwee" key={index}>
											<a className="dropdown-item" href="#">{fav.name}</a>
											<button className="btn btn-sm" onClick={() => removeFav(fav.id)}><i class="fa-solid fa-trash"></i></button>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};