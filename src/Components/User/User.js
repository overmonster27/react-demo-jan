const User = ({user}) => {

    const {id, name, username} = user

    return (
        <div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>Username:{username}</div>
        </div>
    );
};

export {User};