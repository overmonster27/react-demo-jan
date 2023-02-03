import {Dogs} from "../../components";
import {useReducer, useRef} from "react";


const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "NEW_DOG":
            const [lastDog] = state.dogs.slice(-1);
            const id = lastDog ? lastDog + 1 : 0;
            return {...state, dogs: [...state.dogs, {id, name: action.payload}]};
        case "DELETE_DOG":
            const deleteDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(deleteDog, 1);
            return {...state};
        default:
            return {...state}
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const dogInput = useRef();

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, dispatch] = useReducer(reducer, {dogs: []}, (data) => data);

const createDog = () => {
    dispatch({type: "NEW_DOG", payload: dogInput.current.value})
    dogInput.current.value = ''
}

const DogsPage = () => {
    return (
        <div>
            <input type='text' ref={dogInput}/>
            <button onClick={createDog}>New dog</button>
            <Dogs dogs={state.dogs}/>
        </div>
    );
};

export {DogsPage};