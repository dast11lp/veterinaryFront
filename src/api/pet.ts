import { createAsyncThunk } from "@reduxjs/toolkit";
import { PetData } from "../types/Pet.types";

const backend: string = "http://localhost:8080/owner/";

const registerPetFetch = async (body: PetData) => {
   
        const request = await fetch(`${backend}owner/pet/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return await request.json()
    
}

const getPetListFetch = async (idUser: number) => {
    const request = await fetch(`${backend}pet-list?idUser=${idUser}`, {
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
    async (idUser: number) => {
        const request = await getPetListFetch(idUser);
        return await request
    }
)