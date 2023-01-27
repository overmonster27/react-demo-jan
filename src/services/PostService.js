import {axiosService} from "./asiosService";

import {urls} from "../configs";

const postService = {
    getById: (id)=> axiosService.get(`${urls.post}/${id}`)
}
export {postService};