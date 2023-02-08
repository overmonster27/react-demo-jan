import {Cats} from "../../components";
import {useReducer, useRef} from "react";
import {addCat, catActionTypes} from "./actions/actions";

const catsReducer = (state, action) => {
    switch (action.type) {
        case catActionTypes.ADD_CAT:
            const id = state.catCounter;
            return {...state, cats: [...state.cats, {id, name: action.payload}], catCounter: state.catCounter++};
        case catActionTypes.DELETE_CAT:
            const catIndex = state.cats.findIndex(cat => cat.id === action.payload);
            const newCats = state.cats.filter(cat => cat.id !== catIndex);
            return {...state, cats: newCats};
        default:
            return {...state}
    }
}

const CatsPage = () => {

    const catInput = useRef();

    const initialState = {cats: [], catCounter: 0}

    const [state, dispatch] = useReducer(catsReducer, initialState, (state) => state);

    const createCat = () => {
        dispatch(addCat(catInput.current.value))
        catInput.current.value = ''
    }


    return (
        <div>
            <input type='text' ref={catInput}/>
            <button onClick={createCat}>New cat</button>
            <Cats cats={state.cats} dispatch={dispatch}/>
        </div>
    );
};

export {CatsPage};