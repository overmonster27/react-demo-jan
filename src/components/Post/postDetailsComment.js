import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {commentService} from "../../services";
import {Comment} from "../coment/Comment";


const PostDetailsComment = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getById(id).then(({data}) => setComments([...data]))

    }, [id])


    return (<div className='Information'>
            <h1>Comments</h1>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostDetailsComment};