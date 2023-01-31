import {Outlet} from "react-router-dom";

import {Comments} from "../../Components";
import {useContext} from "react";
import {MyContext} from "../../index";

const CommentsPage = () => {

    const context = useContext(MyContext);
    context.gender = 'male';
    return (
        <div className='CommentPost'>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};