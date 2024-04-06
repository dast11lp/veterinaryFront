import { createAsyncThunk } from "@reduxjs/toolkit"

const backend = "http://localhost:8080/"


const getListAppointmentsFetch = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).id
    if (id) {
        const request = await fetch(`${backend}appointment/dates?idUser=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        return await request.json()
    }
}

const getListHoursFetch = async () => {
    const id = JSON.parse(localStorage.getItem("userInfo")).id
    const request = await fetch(`${backend}appointment/hours?idUser=${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return await request.json();
}

const reserveAppointmentFetch = async (data) => {
    const request = await fetch(
        `${backend}appointment/request?idUser=${data.idUser}&idPet=${data.idPet}&idAppointment=${data.idAppoint}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    return await request.json()
}

const getPetAppointmentsFetch = async (idPet) => {
    const request = await fetch(`${backend}pet/my-appointments/${idPet}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return await request.json()
}

export const getListAppointmentsThunk = createAsyncThunk(
    'appointment/list',
    async () => {
        const request = await getListAppointmentsFetch();
        return await request;
    }
)

export const getListHoursThunk = createAsyncThunk(
    '/appointment/hours',
    async () => {
        const response = await getListHoursFetch();
        return await response;
    }
)

export const reserveAppointmentThunk = createAsyncThunk(
    'appointment/request',
    async (data: any) => {
        const request = await reserveAppointmentFetch(data)
        return await request
    }
)

export const getPetAppointmentsThunk = createAsyncThunk(
    '/pet/my-appointments/',
    async (idPet: any) => {
        const request = await getPetAppointmentsFetch(idPet)
        return await request
    }
)