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

		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container d-flex justify-content-between">
				<div className="col-md-2">
					<a className="navbar-brand" href="#">
						<img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" style={{ maxWidth: '150px', height: '80px' }} />
					</a>
				</div>
				<div className="col-md-4 ml-auto">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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