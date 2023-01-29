import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts/mainLayout";
import {UserDetailsPage, UserPostsPage, UsersPage} from "./pages";
import {PostPage} from "./pages";
import {PostDetailSPage} from "./pages/postDetailsPage/postDetailSPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={':id'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetailSPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
