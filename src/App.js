import './App.css';
import './Components/Main_components/Style.css'
import {Character_component} from "./Components/Main_components/Character_component";


function App() {
    return (
        <div className="App">
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Character_component/>
        </div>
    );
}

export default App;
