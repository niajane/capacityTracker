import axios from 'axios';

//const url = process.env.DB_URL1 ==null ? "" : process.env.DB_URL1.replace(';','');
//console.log(url);

const url = "http://localhost:8000/count"
axios.defaults.baseURL = ``;
//console.log(url.replace(';',''));

//export const createList = (list: Object) : Promise<AxiosResponse<List>> => axios.post(url, list);
export const getItems = () => axios.get(url);
export const getAverage = () => axios.get(`${url}/average`);
/*export const getListsOverview = () : Promise<AxiosResponse> => axios.get(`${url}/overview`);
export const getList = (id: string) : Promise<AxiosResponse> => axios.get(`${url}/${id}`);
export const updateList = (list_id: string, changes: Object) : Promise<AxiosResponse> => axios.patch(`${url}/${list_id}`, changes);
export const deleteList = (id: string) : Promise<AxiosResponse> => axios.delete(`${url}/${id}`);
export const deleteCompleted = (list: string) : Promise<AxiosResponse> => axios.delete(`${url}/completed/${list}`);
export const deleteTodo = (list_id: string, todo_id: string) : Promise<AxiosResponse> => axios.delete(`${url}/${list_id}/${todo_id}`);
export const updateTodo = (list_id: string, todo_id: string, changes: Object) : Promise<AxiosResponse> => axios.patch(`${url}/${list_id}/${todo_id}`, changes);
export const createTodo = (list_id: string, todo: Object) : Promise<AxiosResponse> => axios.post(`${url}/${list_id}`, todo);
*/