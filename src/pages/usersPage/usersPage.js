import {Outlet} from "react-router-dom";

import {Users} from "../../components";

const UsersPage = () => {
    return (
        <div className='Page'>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};