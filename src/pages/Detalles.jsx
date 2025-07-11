import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";

export const Detalles = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>Detalles</h1>
        
        </div>
    );
}; 