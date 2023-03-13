import {Route, Routes} from "react-router";

import {MainLayout, PostPage, UsersPage} from "./Pages";
import './App.css';
import {CommentsPage} from "./Pages/CoomentsPage/CommentsPage";



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
