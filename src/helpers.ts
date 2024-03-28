const required = "El campo es requerido"

export const registerFormRules = {
    firstname: {
        required,
        minLength: {
            value: 1,
            message: "Minimo 1 caracter"
        },
        maxLength: {
            value: 24,
            message: "Maximo 24 caracteres"
        },
    },
    surname: {
        required: "El campo es requerido",
        minLength: {
            value: 4,
            message: "Minimo 4 caracteres"
        },
        maxLength: 12,
    },
    email: {
        required: "El campo es requerido",
        minLength: {
            value: 6,
            message: `Minimio ${6} caracteres`
        },
        maxLength: {
            value: 60,
            message: " Maximo 60 caracteres"
        }
    },
    password: {
        required: "El campo es requerido",
        minLength: {
            value: 8,
            message: `Minimio ${6} caracteres`
        },
        maxLength: {
            value: 20,
            message: " Maximo 24 caracteres"
        },
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message: "Debe contener caracter especial"
        },
    },
    address: {
        required: "El campo es requerido",
        minLength: {
            value: 5,
            message: `Minimio ${5} caracteres`
        },
        maxLength: {
            value: 60,
            message: " Maximo 60 caracteres"
        }
    },
    phoneNumber: {
        required: "El campo es requerido",
        minLength: {
            value: 7,
            message: `Minimio ${7} caracteres`
        },
        maxLength: {
            value: 7,
            message: " Maximo 7 caracteres"
        }
    }
}

export const registerPetFormRules = {
    name: {
        required,
        minLength: {
            value: 2,
            message: "Minimo 1 caracter"
        },
        maxLength: {
            value: 24,
            message: "Maximo 24 caracteres"
        },
    },
    high: {
        required,
        min: {
            value: 1,
            message: "Peso minimo 1kg"
        },
        max: {
            value: 50,
            message: "Peso Maximo 100kg"
        },
    },
    weight: {
        required,
        min: {
            value: 2,
            message: "Minima altura 2cm "
        },
        max: {
            value: 500,
            message: "Maxima altura 500cm"
        },
    },
    species: {
        required,
        minLength: {
            value: 2,
            message: "Minimo 1 caracter"
        },
        maxLength: {
            value: 24,
            message: "Maximo 24 caracteres"
        },
    },
    breed: {
        required,
        minLength: {
            value: 2,
            message: "Minimo 1 caracter"
        },
        maxLength: {
            value: 24,
            message: "Maximo 24 caracteres"
        },
    },
}