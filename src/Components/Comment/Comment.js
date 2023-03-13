import {useDispatch} from "react-redux";
import {commentActions} from "../../redux/slices/commentsSlice";

const Comment = ({comment}) => {


    const {id, name, body} = comment;

    const dispatch = useDispatch();

    return (
        <div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>Body:{body}</div>
            <button onClick={() => dispatch(commentActions.setSelectedComment(comment))}>Comment details</button>
        </div>
    );
};

export {Comment};