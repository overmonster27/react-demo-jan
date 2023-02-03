import {axiosService} from "./axiosService";

import {urls} from "../configs";

const usersService = {
    getAll: () => axiosService(urls.users)
}
export {usersService};