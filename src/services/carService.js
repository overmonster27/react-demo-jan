import {apiService} from "./apiSevice";
import {urls} from "../configs";

const carService = {
    getAllL: () => apiService.get(urls.cars.cars),
    create: (data) => apiService.post(urls.cars.cars, data),
    updateById: (id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export {carService};