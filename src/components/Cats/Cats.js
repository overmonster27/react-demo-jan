import {Cat} from "../Cat/Cat";

const Cats = ({cats, dispatch}) => {
 return (
  <div>
      {cats.map(cat=> <Cat key={cat.id} dispatch={dispatch} cat={cat}/>)}
  </div>
 );
};

export {Cats};