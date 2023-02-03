import {Cats} from "../../components";
import {useReducer, useRef} from "react";

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "NEW_CAT":
            const [lastCat] = state.cats.slice(-1);
            const id = lastCat ? lastCat + 1 : 0;
            return {...state, cats: [...state.cats, {id, name: action.payload}]};
        case "DELETE_CAT":
            const deleteCat = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(deleteCat, 1);
            return {...state};
        default:
            return {...state}
    }
}


// eslint-disable-next-line react-hooks/rules-of-hooks
const catInput = useRef();

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, dispatch] = useReducer(reducer, {cats: []}, (data) => data);

const createCat = () => {
    dispatch({type: "NEW_CAT", payload: catInput.current.value})
    catInput.current.value = ''
}

const CatsPage = () => {
    return (
        <div>
            <input type='text' ref={catInput}/>
            <button onClick={createCat}>New dog</button>
            <Cats cats={state.cats}/>
        </div>
    );
};

export {CatsPage};