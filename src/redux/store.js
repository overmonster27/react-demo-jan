import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";
import {postReducer} from "./slices/postSlice";
import {commentReducer} from "./slices/commentsSlice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}