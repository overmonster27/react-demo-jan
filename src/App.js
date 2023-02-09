import {useSelector} from "react-redux";

import {Cars, Form} from "./components";
import './App.css';

function App() {

    const {loading} = useSelector(state => state.cars);

    return (
        <div className="App">
            <Form/>
            <hr/>
            {loading && <div className="loader"></div>}
            <Cars/>
        </div>
    );
}

export default App;
