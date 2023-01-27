import {axiosService} from "./asiosService";

import {urls} from "../configs";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
}
export {todosService};