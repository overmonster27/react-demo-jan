import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";

const PostDetails = () => {

    const {id} = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        postService.getById(id).then(({data}) => {
            setPost(data)
        })
    }, [id]);

    return (<div>
            <h1>Post details</h1>
            <ul>{post && <>
                <li>id:{post.id}</li>
                <li>UserId:{post.userId}</li>
                <li>Title:{post.title}</li>
                <li>Body:{post.body}</li>
            </>}
            </ul>
        </div>
    );
};

export {PostDetails};