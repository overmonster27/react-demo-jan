import axios from "axios";

const {baseURL} = require("../configs/config");

const axiosService = axios.create({baseURL});

export {axiosService};