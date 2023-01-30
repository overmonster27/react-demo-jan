import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}/comments`)
};
export {commentService};