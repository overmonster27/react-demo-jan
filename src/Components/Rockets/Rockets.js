import {useEffect, useState} from "react";

import {Rocket} from "../Rocket/Rocket";

const Rockets = () => {

    let [rockets, setRockets] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setRockets(value.filter(value => value.launch_year !== '2020')))
    }, [])


    return (
        <div className='Rockets'>
            {rockets.map((rocket, number) => <Rocket key={number} rocket={rocket}/>)}
        </div>
    );
};

export {Rockets};