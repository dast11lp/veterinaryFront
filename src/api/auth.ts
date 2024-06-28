import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData, UserLogin } from "../types/User.type";

const backend: string = "http://localhost:8080/";

const registerUserFetch = async (body: UserData) => {

    const request = await fetch(`${backend}owner/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    if (!request.ok) 
        throw Error(request.status.toString())
    else
        return await request.json()
}

const loginFetch = async (data: UserLogin) => {
    const request = await fetch(`${backend}auth/login?email=${data.email}&password=${data.password}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!request.ok) 
        throw Error(request.status.toString())
    else
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
    async (data: UserLogin) => {
        const response = await loginFetch(data)
        return await response;
    }
)




