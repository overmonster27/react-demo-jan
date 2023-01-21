import {useEffect, useState} from "react";

import {postService} from "../../Services";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(userId).then(({data}) => setPosts([...data]))
    }, [userId]);

    return (
        <div className='Posts'>
            <div className='Header'><b>Posts</b></div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};