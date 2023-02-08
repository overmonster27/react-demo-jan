const {combineReducers, configureStore} = require("@reduxjs/toolkit");

const {carReducer} = require("./slices/carSlice");

const rootReducer = combineReducers({
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}