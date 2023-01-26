import {Posts} from "../../Components";
import {Outlet} from "react-router-dom";

const PostPage = () => {
    return (
        <div className='PostPage'>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostPage};