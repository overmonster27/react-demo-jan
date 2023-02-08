const dogActionTypes = {
    ADD_DOG: 'add-dog',
    DELETE_DOG: 'delete_dog'
}

function addDog(dog) {
    return {type: dogActionTypes.ADD_DOG, payload: dog}
}

function deleteDog(id){
    return{type: dogActionTypes.DELETE_DOG, payload: id}
}

export {dogActionTypes, addDog, deleteDog}