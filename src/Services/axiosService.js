import axios from "axios";

const baseUrl = 'https://api.spacexdata.com/v3'

const axiosGet = (url) => {
    return axios.get(`${baseUrl}${url}`)
}

export const getLaunches = () => {
    return axiosGet('/launches')
        .then(res => res.data)
        .catch(err => console.log(err))
}