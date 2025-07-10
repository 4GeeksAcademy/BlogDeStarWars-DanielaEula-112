import { CardCharacters } from "./components/CardCharacters";

export const initialStore=()=>{

  return{
    characters:[],
    addFav:[],
    planets:[],
    vehicles:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_characters':
     // const { name, id } = action.payload
      return {
        ...store,
       characters: action.payload
      };

    case 'get_planets':

    return{
      ...store,
      planets: action.payload
    };

    case 'get_vehicles':
      return{
        ...store,
        vehicles: action.payload
      };

    default:
      throw Error('Accion desconocida');
  

  }    

}
