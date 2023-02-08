const catActionTypes = {
    ADD_CAT: 'add_cat',
    DELETE_CAT: 'delete_cat'
}

function addCat(cat) {
    return {type: catActionTypes.ADD_CAT, payload: cat}
}

function deleteCat(catId) {
    return {type: catActionTypes.DELETE_CAT, payload: catId}
}

export {catActionTypes, addCat, deleteCat}