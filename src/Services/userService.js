import {axiosService} from "./axiosService";

const userService = {
    getAll: () => axiosService.get('/Users')
}
export {userService};