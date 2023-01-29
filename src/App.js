import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts/mainLayout";
import {UsersPage} from "./pages";
import {PostPage} from "./pages";
import {UserDetailPage} from "./pages/userDetailsPage/userDetailPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':usersDetails'} element={<UserDetailPage/>}/>
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
