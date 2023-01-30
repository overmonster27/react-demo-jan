import {Outlet} from "react-router-dom";

import {Posts} from "../../components";

const PostPage = () => {
    return (
        <div className='Page'>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostPage};