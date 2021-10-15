import axios from 'axios';

const url = "http://localhost:8000/count"
axios.defaults.baseURL = ``;

export const getItems = () => axios.get(url);
export const getAverage = () => axios.get(`${url}/average`);
export const getAvDay = (day) => axios.get(`${url}/avDay/${day}`);
