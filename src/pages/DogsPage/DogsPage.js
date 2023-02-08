import {Dogs} from "../../components";
import {useReducer, useRef} from "react";
import {addDog, dogActionTypes} from "./actions/action";


const reducer = (state, action) => {

    switch (action.type) {
        case dogActionTypes.ADD_DOG:
            const [lastDog] = state.dogs.slice(-1);
            const id = lastDog ? lastDog.id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id, name: action.payload}]};

        case dogActionTypes.DELETE_DOG:
            const deleteDog = state.dogs.findIndex(dog => dog.id === action.payload);
            const newDogList = state.dogs.splice(deleteDog, 1);
            return {...state, dogs: newDogList};

        default:
            return {...state}
    }
}

const DogsPage = () => {

    const dogInput = useRef();

    const [state, dispatch] = useReducer(reducer, {dogs: []}, (data) => data);

    const createDog = () => {
        dispatch(addDog(dogInput.current.value))
        dogInput.current.value = ''
    }


    return (
        <div>
            <input type='text' ref={dogInput}/>
            <button onClick={createDog}>New dog</button>
            <Dogs dogs={state.dogs} dispatch={dispatch}/>
        </div>
    );
};

export {DogsPage};