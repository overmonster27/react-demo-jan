import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";
import css from './Form.module.css';

const Form = () => {

    const {register, handleSubmit, setValue, reset, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.cars);

    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const update = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car}))
        reset()
    };

    return (
        <div>
            <form className={css.Form} onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input className={css.Input} type='text' placeholder={'Brand'}{...register('brand')}/>
                <input className={css.Input} type='text'
                       placeholder={'Price'}{...register('price', {valueAsNumber: true})} />
                <input className={css.Input} type='text'
                       placeholder={'Year'}{...register('year', {valueAsNumber: true})} />
                <button className={css.Button} disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};
export {Form};