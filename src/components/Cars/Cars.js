import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {

    const {carsList} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);

    return (
        <div>
            {carsList.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};