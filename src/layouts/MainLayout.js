import {Outlet, useNavigate} from "react-router-dom";

import {Header} from "../Components";

const MainLayout = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <div className='Buttons'>
                <button className='LeftBTN' onClick={() => navigate(-1)}>Prev</button>
                <button className='RightBTN' onClick={() => navigate(1)}>Next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};