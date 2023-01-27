import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <NavLink to={'todo'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export {Header};