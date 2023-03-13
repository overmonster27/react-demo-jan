import {axiosService, urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars.cars),
    create: (data) => axiosService.post(urls.cars.cars, data),
    updateById: (id, data) => axiosService.put(urls.cars.byId(id), data),
    deleteById: (id) => axiosService.delete(urls.cars.byId(id))
}

export {carService}