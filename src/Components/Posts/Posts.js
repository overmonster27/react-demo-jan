import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/postSlice";
import {Post} from "../Post/Post";
import css from './Post.module.css'

const Posts = () => {

    const dispatch = useDispatch();

    const {posts, errors, loading, selectedPost} = useSelector(state => state.posts);

    const {id, title, body} = selectedPost;

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [dispatch]);

    return (<div className={css.Container}>
        <div className={css.Posts}>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading..............</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
        <div>
            {selectedPost && <div className={css.PostDetails}>
                <div>Id:{id}</div>
                <div>Title:{title}</div>
                <div>Body:{body}</div>
            </div>}
        </div>
    </div>);
};

export {Posts};