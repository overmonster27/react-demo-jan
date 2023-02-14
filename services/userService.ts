import {apiService} from "./apiService";
import {AxiosResponse} from "axios";
import {IUser} from "../interfaces/userinterface";
import {IRes} from "../interfaces/responseInterface";

const userService = {
    getAll: (): IRes<IUser> => apiService.get('/users')
}

export {userService}