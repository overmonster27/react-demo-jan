import {Posts} from "../../components/Posts/Posts";
import {Outlet} from "react-router-dom";

const PostPage = () => {
    return (
        <div className='Page'>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostPage};