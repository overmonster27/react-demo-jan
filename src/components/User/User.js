import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const navigate = useNavigate();

    const {id, name} = user;

 return (
  <div onClick={()=>{navigate(id.toString(), {state: user})}}>
   <div>Id:{id}</div>
   <div>Name:{name}</div>
  </div>
 );
};

export {User};