import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]));
    }, [])

    return (
        <div className='Content'>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};