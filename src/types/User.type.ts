export interface UserData {
    address: string,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    phoneNumber: string,
}

export interface UserLogin {
    email: string,
    password: string,
}

export interface PetData {
	name: string,
	high: DoubleRange,
	weight: DoubleRange,
	species: string,
	breed: string,
    owner: string,
}