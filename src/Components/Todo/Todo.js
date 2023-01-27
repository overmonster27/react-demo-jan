const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div className='ChildDiv'>
            <div>UserID:{userId}</div>
            <div>Id:{id}</div>
            <div>Title:{title}</div>
            <div>Completed:{completed}</div>
        </div>
    );
};

export {Todo};