import {Outlet} from "react-router-dom";

import {Comments} from "../../Components";

const CommentsPage = () => {
    return (
        <div className='CommentPost'>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};