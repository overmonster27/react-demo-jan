import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <NavLink to={'todo'}>Todos</NavLink>
            <NavLink to={'post'}>Post</NavLink>
            <NavLink to={'about'}>About</NavLink>
        </div>
    );
};

export {Header};