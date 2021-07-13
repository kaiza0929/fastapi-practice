import axios, { AxiosInstance } from "axios";
import { Todo } from "./../reducers/todo";

const base: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
    },
    responseType: "json"
});

export const getTodos = async (keyword: string | null = null): Promise<Todo[]> => {

    var res;

    if (keyword === null) {
        res = await base.get("/todo");
    } else {
        res = await base.get(`/todo?keyword=${keyword}`);
    }

    console.log(res.data)
    return res.data.todos;

}