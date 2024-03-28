import { createAsyncThunk } from "@reduxjs/toolkit";
import { PetData } from "../types/User.type";

const backend: string = "http://localhost:8080/owner/";
const backend2: string = "http://localhost:8080/";

const registerPetFetch = async (body: PetData) => {
    const request = await fetch(`${backend2}pet/save`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return await request.json()
}
// http://localhost:8080/pet/list?idUser=81

const getPetListFetch = async (id) => {
    const request = await fetch(`${backend}pet-list?idUser=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return await request.json();
}


export const registerPetThunk = createAsyncThunk(
    'owner/pet/save',
    async (data: PetData) => {
        const request = await registerPetFetch(data);
        return await request
    }
)

export const getPetListThunk = createAsyncThunk(
    "pet/list",
    async (id: string) => {
        const request = await getPetListFetch(id);
        return await request
    }
)