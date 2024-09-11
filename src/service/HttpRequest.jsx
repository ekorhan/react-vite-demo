import axios from "axios";

const baseUrl = "http://localhost:8080/"

export async function post(url, data) {
    url = baseUrl + url;
    try {
        const response = await axios({
            method: 'post',
            url,
            data
        });
        return response.data;
    } catch (err) {
        return console.log(err);
    }
}

export function get(url, data) {
    return axios.get(url, data)
        .then((response) => { displayOutput(response); })
        .catch((err) => console.log(err));
}

