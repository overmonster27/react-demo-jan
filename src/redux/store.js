import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducers} from "./slises/carSlice";

const rootReducer = combineReducers({
    cars: carReducers
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}

