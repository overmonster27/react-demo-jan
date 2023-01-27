import {axiosService} from "./asiosService";

import {urls} from "../configs";

const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}
export {albumsService}