import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";
import {Post} from "../Post/Post";


const UserPosts = () => {

    const {id} = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        userService.getByUserId(id).then(({data}) => setPost([...data]))
    }, [id])
    console.log(post)

    return (
        <div className='Posts'>
            <h1>Posts</h1>
            {post.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};