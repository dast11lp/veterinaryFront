import { Veterinarian } from "./User.type";


export interface Appointment {
    date: string,
    hour: string,
    office: number,
    amount: number,
    procedure: string,
    description: string,
    prescription: string,
    veterinarian: Veterinarian,
}

