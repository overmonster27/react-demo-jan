import {useSelector} from "react-redux";
import {Car} from "../Car/car";

const Cars = () => {

   const{cars} = useSelector(state => state.cars);

 return (
  <div>
      {
cars.map(car=> <Car key={car.id}/>)
      }
  </div>
 );
};

export {Cars};