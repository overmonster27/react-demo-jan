import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const navigate = useNavigate();

    const {id, title} = post;
    return (
        <div className="ContentElement" onClick={() => navigate(id.toString())}>
            <div>PostID:{id}</div>
            <div>Title:{title}</div>
        </div>
    );
};

export {Post};