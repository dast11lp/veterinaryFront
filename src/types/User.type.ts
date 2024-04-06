export interface UserLogin {
    email: string,
    password: string,
}

export interface UserData extends UserLogin {
    address: string,
    firstname: string,
    lastname: string,
    phoneNumber: string,
}

export interface Veterinarian extends UserData {
    roles: string [], 
    area: string,
}



