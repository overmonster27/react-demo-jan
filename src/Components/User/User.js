import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {

    const {id, name, username} = user

    const dispatch = useDispatch();

    return (
        <div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>User name:{username}</div>
            <button onClick={()=> dispatch(userActions.setSelectedUser(user))}>select</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>api Select </button>
        </div>
    );
};

export {User};