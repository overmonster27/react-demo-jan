import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const navigate = useNavigate();

    const {postId, id, name, email, body} = comment;

    return (
        <div className='Comment' onClick={() => navigate(postId.toString())}>
            <div>PostID:{postId}</div>
            <div>ID:{id}</div>
            <div>Name:{name}</div>
            <div>Email:{email}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export {Comment};