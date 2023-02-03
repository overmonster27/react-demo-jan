import {axiosService} from "./axiosService";

import {urls} from "../configs";

const postService = {
    getAll: () => axiosService(urls.posts)
}
export {postService};