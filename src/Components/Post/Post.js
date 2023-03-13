import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/postSlice";

const Post = ({post}) => {

    const {id, title} = post;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>Title:{title}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>Post details</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>Details</button>
        </div>
    );
};

export {Post};