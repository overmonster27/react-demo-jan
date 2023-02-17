import {FC, ReactNode, useEffect, useState} from "react";
import {ICAr} from "../../interfaces";
import {carService} from "../../services";
import {Car} from "../Car/Car";


const Cars: FC = () => {

    const [cars, setCars] = useState<ICAr[]>([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div className='Cars'>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};