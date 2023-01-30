import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";


const PostDetails = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        postService.getById(id).then(({data}) => {
            setPost(data)
        })
    }, [id]);

    return (<div className='DetailsContainer'>
            <h1>Post details</h1>
            <ul>{post && <>
                <li>id:{post.id}</li>
                <li>UserId:{post.userId}</li>
                <li>Title:{post.title}</li>
                <li>Body:{post.body}</li>
                <button onClick={() => {
                    navigate('comments')
                }}>Click
                </button>
            </>}
            </ul>
        </div>
    );
};

export {PostDetails};