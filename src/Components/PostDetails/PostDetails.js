import {useEffect, useState} from "react";
import {postService} from "../../Services";

const PostDetails = ({postId, state}) => {

    const [post, setPost] = useState();

    useEffect(() => {
        if (state) {
            setPost({...state});
        } else {
            postService.getById(postId).then(({data}) => setPost(data))
        }
    }, [postId])


    return (
        <div>
            {post && <>
                <div>Id:{post.id}</div>
                <div>UserId:{post.userId}</div>
                <div>Title:{post.title}</div>
                <div>Body:{post.body}</div>
            </>}

        </div>
    );
};

export {PostDetails};