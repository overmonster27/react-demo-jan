import {Users} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div className='UsersPage'>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};