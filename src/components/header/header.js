import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
        </div>
    );
};

export {Header};