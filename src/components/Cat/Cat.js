import {deleteCat} from "../../pages/CatsPage/actions/actions";

const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;

    return (
        <div>
            {`${id} ${name}`}
            <button onClick={()=> {dispatch(deleteCat(id))}}>Delete</button>
        </div>
    );
};

export {Cat};