import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {commentActions} from "../../redux/slices/commentsSlice";
import {Comment} from "../Comment/Comment";
import css from './Comment.module.css';

const Comments = () => {

    const dispatch = useDispatch();

    const {comments, errors, loading, selectedComment} = useSelector(state => state.comments);

    const {id, name, email, body} = selectedComment;

    useEffect(() => {
        dispatch(commentActions.getAll())
    }, [dispatch]);


    return (
        <div className={css.Container}>
            <div className={css.Comments}>
                {errors && JSON.stringify(errors)}
                {loading && <h1>Loading................</h1>}
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
            <div >
                {selectedComment && <div className={css.Details}>
                    <div>Id:{id}</div>
                    <div>Name:{name}</div>
                    <div>Email:{email}</div>
                    <div>Body:{body}</div>
                </div>}
            </div>
        </div>
    );
};

export {Comments};