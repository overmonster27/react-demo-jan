import {axiosService, IRes} from "./axiosService";
import {ICAr} from "../interfaces";
import {urls} from "../configs";

const carService ={
    getAll:():IRes<ICAr[]> => axiosService.get(urls.cars.base)
}
export {carService};