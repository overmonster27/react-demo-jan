import {Dog} from "../Dog/Dog";

const Dogs = ({dogs, dispatch}) => {
 return (
  <div>
      {dogs.map(dog=> <Dog key={dog.id} dispatch={dispatch} dog={dog}/>)}
  </div>
 );
};

export {Dogs};