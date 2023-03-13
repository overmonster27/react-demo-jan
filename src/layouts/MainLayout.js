import {Header} from "../Components";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            {/*<Users/>*/}
        </div>
    );
};

export {MainLayout};