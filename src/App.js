import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts";
import {UsersPage} from "./pages/usersPage/usersPage";
import {PostPage} from "./pages";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':usersDetails'} element={}/>
                    </Route>
                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':postDetails'}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
