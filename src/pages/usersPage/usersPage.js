import {Users} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div className='Page'>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};