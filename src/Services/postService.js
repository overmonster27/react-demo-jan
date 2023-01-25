import {axiosService} from "./asiosService";

import {urls} from "../Configs";

const postService = {
    getAll: () => axiosService.get(urls.post),
    getById: (id)=> axiosService.get(`${urls.post}/${id}`)
}
export {postService};