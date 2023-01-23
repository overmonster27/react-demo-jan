import {useForm} from "react-hook-form";
import {all} from "axios";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'})

    const submit = (allInfFormForm) => {
        console.log(allInfFormForm)
    }

    return (<form onSubmit={handleSubmit(submit)}>

        <input type='text' placeholder={'brand'} {...register('brand', {
            pattern: {
                value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                message: 'Не повинен містити літери'
            }
        })}/>
        {errors.brand && <div>{errors.brand.message}</div>}

        <input type='text' placeholder={'price'} {...register('price', {
            valueAsNumber: true,
            min: {value: 0, message: 'min 0'},
            max: {value: 1000000, message: 'max 1000000'},

        })}/>
        {errors.price && <div>{errors.price.message}</div>}

        <input type='text' placeholder={'year'} {...register('year', {
            valueAsNumber: true,
            min: {value: 1990, message: 'min1990'},
            max: {value: new Date().getFullYear(), message:` max ${new Date().getFullYear()}`}
        })}/>
        {errors.year && <div>{errors.year.message}</div>}

        <button>Confirm</button>
    </form>);
}

export {CarForm};