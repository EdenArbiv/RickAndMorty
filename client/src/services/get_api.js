import axios from 'axios';
export const baseUrl = 'http://localhost:1010/'

export const getRequest = (uri) => {
    try {
        return axios.get(uri).then(res => {
            console.log(res.data.results)
            return res.data.results;
        })
    } catch (err) {
        console.log(err)
    }
};
