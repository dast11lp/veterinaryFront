import { createAsyncThunk } from "@reduxjs/toolkit"
import { toReserve } from "../types/toReserve.type"
import { Config } from "./config.ts"



const getListAppointmentsFetch = async (id: string | undefined) => {
    if (id) {
        const request = await fetch(`${Config.hostname}appointment/dates?idUser=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (!request.ok)
            throw Error(request.status.toString())
        else
            return await request.json()
    }
}

const getListHoursFetch = async (date: string, id: string | undefined) => {

    const [day, month, year] = date.split("/");

    const monthNumber = parseInt(month, 10);
    const dayNumber = parseInt(day, 10);

    const dateFormated = `${year}-${monthNumber <= 9 ? '0' + month : month}-${dayNumber <= 9 ? '0' + day : day} `

    const request = await fetch(`${Config.hostname}appointment/hours?idUser=${id}&date=${dateFormated}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    if (!request.ok)
        throw Error(request.status.toString())
    else
        return await request.json()
}

const reserveAppointmentFetch = async (data: toReserve) => {
    const request = await fetch(
        `${Config.hostname}appointment/request?idUser=${data.idUser}&idPet=${data.idPet}&idAppointment=${data.idAppoint}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    if (!request.ok)
        throw Error(request.status.toString())
    else
        return await request.json()
}

const getPetAppointmentsFetch = async (idPet: string | undefined) => {
    const request = await fetch(`${Config.hostname}pet/my-appointments/${idPet}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!request.ok)
        throw Error(request.status.toString())
    else
        return await request.json()
}

export const getListAppointmentsThunk = createAsyncThunk(
    'appointment/list',
    async (id: string | undefined) => {
        const request = await getListAppointmentsFetch(id);
        return await request;
    }
)

export const getListHoursThunk = createAsyncThunk(
    '/appointment/hours',
    async ({ date, id }: { date: string, id: string | undefined }) => {
        const response = await getListHoursFetch(date, id);
        return await response;
    }
)

export const reserveAppointmentThunk = createAsyncThunk(
    'appointment/request',
    async (data: toReserve) => {
        const request = await reserveAppointmentFetch(data)
        return await request
    }
)

export const getPetAppointmentsThunk = createAsyncThunk(
    '/pet/my-appointments/',
    async (idPet: string | undefined) => {
        const request = await getPetAppointmentsFetch(idPet)
        return await request
    }
)