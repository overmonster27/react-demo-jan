import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";

const Post = () => {

    const {id} = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        postService.getById(id).then(({data}) => {
            setPost(data)
        })
    }, [id]);

    return (<div className='PostContainer'>
            <h1>Post</h1>
            <div className='Comment'>{post && <>
                <div>UserID:{post.userId}</div>
                <div>ID:{post.id}</div>
                <div>title:{post.title}</div>
                <div>Body:{post.body}</div>
            </>}
            </div>
        </div>
    );
};

export {Post};