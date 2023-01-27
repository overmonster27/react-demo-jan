import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumPage, CommentsPage, NotFoundPage, TodosPage} from "./Pages";
import {Post} from "./Components";

import './App.css';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todo'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<Post/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

