import axios from "axios";
import {authService} from "../services";
import {createBrowserHistory} from "history";

const axiosService = axios.create({baseURL: 'http://owu.linkpc.net/carsAPI/v2'})

const history = createBrowserHistory();

axiosService.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        const access = authService.getAccessToken();

        config.headers.Authorization = `Bearer ${access}`
    }
    return config
});

let isRefreshing = false;

axiosService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();
        if (error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true
            try {
                await authService.refresh(refresh)
            } catch (e) {
                authService.deleteTokens()
                history.replace('/login?expiredSession=true')
            }
            isRefreshing = false;
            return axiosService(error.config)
        }
        return Promise.reject(error)
    }
)


const cars = '/cars';
const auth = '/auth'

const urls = {
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    },
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}./me`
    },
    users: '/users'
}

export {axiosService, urls, history}