import { createSlice } from "@reduxjs/toolkit";
import { ServiceType } from "../../types/Service";

import injection from "./../../assets/img/injection.png";
import appointment from "./../../assets/img/vet.png";
import laboratory from "./../../assets/img/microscope.png";
import stylePet from "./../../assets/img/style.jpg";

interface InitialState {
    services: ServiceType[]
}
const paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae fugit distinctio neque odit omnis expedita sint natus. Totam blanditiis, autem possimus numquam magnam quos, ipsa, voluptas illum velit doloribus ea!'

const services: ServiceType[] = [
    {
        id: 1,
        title: 'Vacunación',
        url: 'Vacunacion',
        img: injection,
        paragraph,
    },
    {
        id: 2,
        title: 'Consulta general',
        url: 'general',
        img: appointment,
        paragraph,
    },
    {
        id: 3,
        title: 'Laboratorio',
        url: 'laboratorio',
        img: laboratory,
        paragraph,
    },
    {
        id: 4,
        title: 'Baño y corte',
        url: 'baño',
        img: stylePet,
        paragraph,
    },
]

const initialState: InitialState = {
    services
}

const getServicesSlice = createSlice({
    name: 'getServices',
    initialState,
    reducers: {}
})

export default getServicesSlice.reducer