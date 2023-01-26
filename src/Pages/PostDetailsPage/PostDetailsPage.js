import {useLocation, useParams} from "react-router-dom";
import {PostDetails} from "../../Components";

const PostDetailsPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();


    return (
        <div>
            <PostDetails postId={postId} state={state}/>
        </div>
    );
};

export {PostDetailsPage};