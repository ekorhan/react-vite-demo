import axios from "axios";

export function post(url, data) {
    return axios.post(url, data);
}

export function get(url, data) {
    return axios.get(url, data);
}