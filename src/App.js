import './App.css';
import {Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, PostPage, UsersPage} from "./Pages";
import {Header} from "./Components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'post'} element={<PostPage/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
