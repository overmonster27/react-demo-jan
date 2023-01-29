import {UserDetails} from "../../components/User/userDetails";
import {Outlet} from "react-router-dom";

const UserDetailsPage = () => {
    return (
        <div className='Details'>
            <UserDetails/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};