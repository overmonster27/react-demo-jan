import {useEffect, useState} from "react";
import {postService} from "../../Services";

const Posts = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {
        postService.getAll().then(({data})=>setPosts([...data]))
    }, [])

    return (
        <div>
            {posts.map(post => value)}
        </div>
    );
};

export {Posts};
