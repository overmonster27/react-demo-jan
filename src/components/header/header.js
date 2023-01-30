import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <NavLink className='Buttons' to={'users'}>Users</NavLink>
            <NavLink className='Buttons' to={'posts'}>Posts</NavLink>
        </div>
    );
};

export {Header};