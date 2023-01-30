import {Outlet} from "react-router-dom";

import {UserDetails} from "../../components";


const UserDetailsPage = () => {
    return (
        <div className='Details'>
            <UserDetails/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};