import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";

const UserDetails = () => {

    const {id} = useParams();

    const [user, setUser] = useState();

    useEffect(() => {
        userService.getById(id).then(({data}) => {
            setUser(data)
        })
    }, [id]);
    console.log(user)

    return (<div>
            <h1>User details</h1>
            <div>{user && <>
                <div>id:{user.id}</div>
                <div>name:{user.name}</div>
                <div>username:{user.username}</div>
                <div>email:{user.email}</div>
            </>}
            </div>
        </div>
    );
};

export {UserDetails};