import { connectBackend } from "../config/backend";

export const addUser=(userName)=>{
    return connectBackend.post(`/saveUser?name=${userName}`).then((response) => response.data);

}

export const getAllUsers=()=>{
    return connectBackend.get("/allUsers").then((response)=>response.data);
}