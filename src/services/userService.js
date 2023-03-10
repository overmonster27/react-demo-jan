import {axiosSevice} from "./axiosService";
import {urls} from "../configs/urls";

const userService ={
    getAll: ()=>axiosSevice.get(urls.users),
    getById: (id)=>axiosSevice.get(`${urls.users}/${id}`)
}

export {userService}