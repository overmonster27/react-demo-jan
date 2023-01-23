import {useEffect, useState} from "react";
import {carService} from "../../Services";

import {Car} from "../Car/Car";

const Cars = () => {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]));
    }, []);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};