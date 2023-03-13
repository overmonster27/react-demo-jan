import axios from "axios";

const axiosService = axios.create({baseURL: 'http://owu.linkpc.net/carsAPI/v1'})

const cars = '/cars';

const urls = {
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {axiosService, urls}