import './App.css';
import {AuthRequireLayout, MainLayout} from "./layouts";
import {Navigate, Route, Routes} from "react-router-dom";
import {CarsPage, LoginPage, RegisterPage} from "./Pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'cars'}/>}/>

                    <Route element={<AuthRequireLayout/>}>
                        <Route path={'cars'} element={<CarsPage/>}/>
                    </Route>

                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
