import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";


export const Detalles = () => {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams();
    
    const character = store.character.find((char) => char.uid === id );

    return (
        <div className="text-center mt-5">
            <h1>Detalles</h1>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">{character.description}</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}; 