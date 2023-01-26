import './App.css';
import {Route, Routes} from "react-router-dom";

import {AboutPage, HomePage, NotFountPage, PostDetailsPage, PostPage, TodosPage} from "./Pages";
import {MainLayout} from "./Layouts";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todo'} element={<TodosPage/>}/>
                    <Route path={'post'} element={<PostPage/>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFountPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.
