import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";
import {useEffect} from "react";

const Form = () => {

    const {register, handleSubmit, reset, setValue, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await dispatch(carActions.createCar({car}))
        reset()
    };

    const update = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car}))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price', {valueAsNumber: true})} />
            <input type='text' placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {Form};