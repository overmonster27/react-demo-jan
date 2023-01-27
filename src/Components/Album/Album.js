const Album = ({album}) => {

    const {userId, id, title} = album;


    return (
        <div className='ChildDiv'>
            <div>UserId:{userId}</div>
            <div>Id:{id}</div>
            <div>Title:{title}</div>
        </div>
    );
};

export {Album};