import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const navigate = useNavigate();
    const {id, userId} = post;

    return (
        <div className='Post'>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <button onClick={() => navigate(id.toString(), {state: post})}>Details</button>
        </div>
    );
};

export {Post};