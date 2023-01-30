import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts";
import {UserDetailsPage, UserPostsPage, UsersPage} from "./pages";
import {PostPage} from "./pages";
import {PostDetailSPage} from "./pages";
import {CommentDetailSPage} from "./pages";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={':posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetailSPage/>}>
                            <Route path={':comments'} element={<CommentDetailSPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
