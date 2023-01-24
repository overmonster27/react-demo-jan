import {useEffect, useState} from "react";

import './App.css';

import {CarForm, Cars} from "./Components";
import {carService} from "./Services";

function App() {

    const [updateCar, setUpdateCar] = useState(null);

    const [deletedCar, setDeletedCar] = useState(null);

    let [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => {
            setCars([...data])
        });
    }, []);

    useEffect(() => {
        if (deletedCar) {
            carService.deleteById(deletedCar.id).then(() => setCars(cars.filter(car => car.id !== deletedCar.id)))
        }
    }, [deletedCar, carService.deleteById]);

    return (
        <div className="App">
            <CarForm setCars={setCars} updateCar={updateCar}/>;
            
            <Cars cars={cars} setUpdateCar={setUpdateCar} setDeletedCar={setDeletedCar}/>;
        </div>
    );
}

export default App;
