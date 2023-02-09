import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import css from './Car.module.css';

const Car = ({car}) => {

    const {id, brand, price, year} = car

    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
            <div className={css.Text}>ID:{id}</div>
            <div className={css.Text}>Brand:{brand}</div>
            <div className={css.Text}>Price:{price}</div>
            <div className={css.Text}>Year:{year}</div>
            <div className={css.Buttons}>
                <div className={css.Button} onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</div>
                <div className={css.Button} onClick={() => dispatch(carActions.deleteById({id}))}>Delete</div>
            </div>
        </div>
    );
};

export {Car};