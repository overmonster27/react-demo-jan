import {axiosService} from "../AxiosService/asiosService";
import {urls} from "../../Configs";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
}
export {todosService};