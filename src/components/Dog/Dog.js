import {deleteDog} from "../../pages/DogsPage/actions/action";

const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;
    return (
        <div>
            {`${id} ${name}`}
            <button onClick={()=> {dispatch(deleteDog(id))}}>Delete</button>
        </div>
    );
};

export {Dog};