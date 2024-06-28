import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData, UserLogin } from "../types/User.type";
import { Config } from "./config.ts";



const registerUserFetch = async (body: UserData) => {

    const request = await fetch(`${Config.hostname}owner/register`, {
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
    const request = await fetch(`${Config.hostname}auth/login?email=${data.email}&password=${data.password}`, {
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





