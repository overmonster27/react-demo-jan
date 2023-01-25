import {NavLink} from "react-router-dom";

const Header = () => {
 return (
  <div className='Header'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/users'}>Users</NavLink>
      <NavLink to={'/post'}>Post</NavLink>
      <NavLink to={'/About'}>About</NavLink>
  </div>
 );
};

export {Header};