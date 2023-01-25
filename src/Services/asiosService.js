import axios from "axios";

import {baseURL} from "../Configs/Urls";

const axiosService = axios.create({baseURL});

export {axiosService};