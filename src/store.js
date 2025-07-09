import { CardCharacters } from "./components/CardCharacters";

export const initialStore=()=>{

  return{
    characters:[],
    addFav:[]
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
    default:
      throw Error('Unknown action.');
  }    
}
