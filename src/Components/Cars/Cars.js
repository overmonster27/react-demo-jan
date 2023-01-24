import {Car} from "../Car/Car";

const Cars = ({cars, setUpdateCar, setDeletedCar}) => {

    return (
        <div className='carsContainer'>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setDeletedCar={setDeletedCar}/>)}
        </div>
    );
};
export {Cars};