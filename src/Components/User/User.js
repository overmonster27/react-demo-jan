const User = ({user, setUserId}) => {
    const {id, name, username} = user;

    return (
        <div className='User'>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>User name : {username}</div>
            <button onClick={() => setUserId(id)}>Posts</button>
        </div>
    );
};

export {User};
