import {axiosService} from "./asiosService";

import {urls} from "../configs";

const commentService = {
    getAll: () => axiosService.get(urls.comments)
};
export {commentService};