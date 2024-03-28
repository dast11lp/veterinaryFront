import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData, UserLogin } from "../types/User.type";

const backend: string = "http://localhost:8080/owner/";
const backend2: string = "http://localhost:8080/";

const registerUserFetch = async (body: UserData) => {
    
    const request = await fetch(`${backend}register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const response = await request.json();
    return await response
}

const loginFetch = async (data: UserLogin) => {
    const request = await fetch(`${backend2}auth/login?email=${data.email}&password=${data.password}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await request.json()
}
export const registerUserThunk = createAsyncThunk(
    'auth/register',
    async (data: UserData) => {
        const response = await registerUserFetch(data);
        return await response;
    }
);

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (data:UserLogin) => {
        const response = await loginFetch(data)
        return await response;
    }
)





