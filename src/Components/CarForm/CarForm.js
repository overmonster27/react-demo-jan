import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carValidator} from "../../CarValidator";
import {carService} from "../../Services";

const CarForm = ({setCars, updateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const submit = async (allInfFormForm) => {

        const {data} = await carService.create(allInfFormForm);
        setCars(previousStateValue => [...previousStateValue, data]);
        reset();
    };

    const update = async (updatedCar) => {

        const {data} = await carService.updateById(updatedCar.id, updatedCar);
        setCars(previousStateValue => previousStateValue.map(car => {
            if (car.id !== updatedCar.id) {
                return car
            }
            return data
        }));
        reset();
    };

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar, setValue]);

    return (<form
        className='formClass'
        onSubmit={updateCar ? handleSubmit((newData) => update({...newData, id: updateCar.id})) : handleSubmit(submit)}>

        <div className='divInput'><input type='text' placeholder={'Brand'} {...register('brand')}/>
            {errors.brand && <div className='massageClass'>{errors.brand.message}</div>}</div>

        <div className='divInput'><input type='text' placeholder={'Price'} {...register('price')}/>
            {errors.price && <div>{errors.price.message}</div>}
        </div>

        <div className='divInput'><input type='text' placeholder={'Year'} {...register('year')}/>
            {errors.year && <div>{errors.year.message}</div>}
        </div>

        <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>

    </form>);
}

export {CarForm};