import {Users} from "../../Components";
import {Outlet} from "react-router";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};