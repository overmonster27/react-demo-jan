import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";
import css from './Cars.module.css';

const Cars = () => {

    const {cars, prev, next} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carActions.getAll({page: query.get('page')}))
    }, [dispatch, query]);

    return (<div>
            <div className={css.Cars}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
            
            <div className={css.Buttons}>
                <button disabled={!prev} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>Prev
                </button>
                <button disabled={!next} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>Next
                </button>
            </div>
        </div>
    );
};

export {Cars};