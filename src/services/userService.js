import {axiosService, urls} from "../configs";

const userService = {
    create: (user) => axiosService.post(urls.users, user)
}

export {userService}