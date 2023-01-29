const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>

            <div>PostID:{id}</div>
            <div>Title:{title}</div>
        </div>
    );
};

export {Post};