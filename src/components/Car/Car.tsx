import {FC} from 'react';
import {ICAr} from "../../interfaces";

interface IProps {
    car: ICAr,
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;

    return (
        <div className='Car'>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
        </div>
    );
};

export {Car};



