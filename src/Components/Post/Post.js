import React from 'react';

const Post = ({post}) => {
    const {id, userId, body} = post
    return (
        <div className='Post'>
            <div>ID:{id}</div>
            <div>User ID:{userId}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export {Post};