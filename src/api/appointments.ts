import { createAsyncThunk } from "@reduxjs/toolkit"

const backend = "http://localhost:8080/"


const getListAppointmentsFetch = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).id
    if (id) {
        const request = await fetch(`${backend}appointment/list?idUser=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        return await request.json()
    }
}

export const getListAppointmentsThunk = createAsyncThunk(
    'appointment/list',
    async () => {
        const request = await getListAppointmentsFetch();
        return await request;
    }
)