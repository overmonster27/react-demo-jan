import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";

const UserDetails = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState();

    useEffect(() => {
        userService.getById(id).then(({data}) => {
            setUser(data)
        })
    }, [id]);

    return (<div>
            <h1>User details</h1>
            <ul>{user && <>
                <li>Id : {user.id}</li>
                <li>Name : {user.name}</li>
                <li>User name : {user.username}</li>
                <li>Email : {user.email}</li>
                <li>Adress : {user.address.zipcode}</li>
                <li>Street : {user.address.street}</li>
                <li>Suite : {user.address.suite}</li>
                <li>City : {user.address.city}</li>
                <li>Lat : {user.address.geo.lat}</li>
                <li>Lng : {user.address.geo.lng}</li>
                <li>Phone : {user.phone}</li>
                <li>Website : {user.website}</li>
                <li>Company : {user.company.name}</li>
                <li>CatchPhrase : {user.company.catchPhrase}</li>
                <li>Bs : {user.company.bs}</li>
                <button onClick={() => {
                    navigate(id.toString())
                }}>Posts
                </button>
            </>}
            </ul>
        </div>
    );
};

export {UserDetails};