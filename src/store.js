
export const initialStore=()=>{

  return{
    characters:[],
    planets:[],
    vehicles:[],
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
    
    case 'add_fav':
      return{
        ...store,
        addFav: [...store.addFav, action.payload]
      };

    case 'remove_fav':
      return{
        ...store,
        addFav: store.addFav.filter( fav => fav.id !== action.payload.id )
      };  

    default:
      throw Error('Accion desconocida');
  

  }    

}
