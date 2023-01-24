const Car = ({car, setUpdateCar, setDeletedCar}) => {

    const {id, brand, price, year} = car

    return (
        <div className='container'>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => setDeletedCar(car)}>Delete</button>
        </div>
    );
};

export {Car};