import {useEffect, useState} from "react";

import {Rocket} from "../Rocket/Rocket";
import {getLaunches} from "../../Services/axiosService";

const Rockets = () => {

    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        async function getAll() {
            const allLaunches = await getLaunches()
            setRockets(allLaunches.filter(launch => launch.launch_year !== '2020'))
        }
        getAll()
    }, [])


    return (
        <div className='Rockets'>
            {rockets.map((rocket, number) => <Rocket key={number} rocket={rocket}/>)}
        </div>
    );
};

export {Rockets};