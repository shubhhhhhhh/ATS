import { API_URL } from "./Url";
import { ApiRoute } from "../routes/ApiRoutes";

export const getData = async (data)=>{
    const postheader = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    }
    const response = await fetch(`${API_URL.url}${ApiRoute.getData}`,postheader)
    console.log(`${API_URL.url}${ApiRoute.getData}`,postheader)
    const body = await response.json();
    console.log(body)
    return body;
}