import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {User} from "../User/User";
import css from './Users.module.css';

const Users = () => {

    const dispatch = useDispatch();

    const {users, errors, loading, selectedUser} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch])

    const  {id, name, username, email } = selectedUser;

    return (
        <div className={css.Container}>
            <div className={css.Posts}>
                {errors && JSON.stringify(errors)}
                {loading && <h1>Loading.......................</h1>}
                {users.map(user => <User key={user.id} user={user}/>)}

            </div>
            <div>
                {selectedUser && <div className={css.UserDetails}>
                    <div>Id:{id}</div>
                    <div>Name:{name}</div>
                    <div>User name:{username}</div>
                    <div>Email :{email}</div>
                </div>}
            </div>
        </div>
    );
};

export {Users};