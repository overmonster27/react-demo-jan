import {Cat} from "../Cat/Cat";

const Cats = ({cats}) => {
 return (
  <div>
      {cats.map(cat=> <Cat key={cat.id} cat={cat}/>)}
  </div>
 );
};

export {Cats};