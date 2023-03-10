import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux/slices/userSlice";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();

    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch])

    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading.......................</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};