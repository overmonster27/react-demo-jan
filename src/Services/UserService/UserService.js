import {axiosService} from "../asiosService";
import {urls} from "../../Configs";

const userService = {
    getAll: () => axiosService.get(urls.users)
}
export {userService};