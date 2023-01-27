import {useEffect, useState} from "react";

import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div className='PostContainer'>
            <h1>Comments</h1>
            <div>{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
        </div>
    );
};

export {Comments};