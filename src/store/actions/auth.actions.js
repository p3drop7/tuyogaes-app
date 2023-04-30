import * as FileSystem from 'expo-file-system'
import { API_URL, LOG_IN_URL, SIGN_UP_URL } from "../../constants/data"

export const SIGN_UP = 'SIGN_UP'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

// User's name
export const SAVE_NAME = 'SAVE_NAME'

// User's profile picture
export const TAKE_IMAGE = 'TAKE_IMAGE'
// export const LOAD_IMAGE = 'LOAD_IMAGE'

// Save/load user's data to/from Firebase if it exists
export const SAVE_USERDATA = 'SAVE_USERDATA'
export const LOAD_USERDATA = 'LOAD_USERDATA'


export const signUp = (email, password) => {
    return async dispatch => {
        try{
            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })

            const data = await response.json()

            if(!response.ok){
                if(data.error.message === "EMAIL_EXISTS"){
                    throw new Error('¡El email ya está registrado!')
                }

                if(data.error.message === "INVALID_EMAIL"){
                    throw new Error('¡Por favor, introduzca un email válido!')
                }

                if(data.error.message === "WEAK_PASSWORD : Password should be at least 6 characters"){
                    throw new Error('¡La contraseña debe tener al menos 6 caracteres!')
                }

                if(data.error.message === "MISSING_PASSWORD"){
                    throw new Error('¡Por favor introduzca una contraseña!')
                }
            }
        
            dispatch({
                type: SIGN_UP,
                payload: {
                    token: data.idToken,
                    userId: data.localId,
                    userEmail: data.email,
                }
                
            })

        } catch(error) {
            dispatch({
                type: "SIGN_UP_FAIL"
            })
            alert(error);
        }
    }
}

export const logIn = (email, password) => {
    return async dispatch => {
        try{

            const response = await fetch(LOG_IN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({
                    email,
                    password,
                })
            })

            const data = await response.json()

            console.log('DATA', data)
            if(!response.ok){
                if(data.error.message === "INVALID_EMAIL"){
                    throw new Error('¡Por favor, introduzca un email válido!')
                }

                if(data.error.message === "MISSING_PASSWORD"){
                    throw new Error('¡Por favor, introduzca la contraseña!')
                }

                if(data.error.message === "INVALID_PASSWORD" || data.error.message === "EMAIL_NOT_FOUND"){
                    throw new Error('¡El email o la contraseña no son correctos!')
                }

                if(data.error.message === "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."){
                    throw new Error('¡Muchos intentos de inicio de sesión incorrectos! La cuenta ha sido bloqueada temporalmente.')
                }
            }
            
            dispatch({
                type: LOG_IN,
                payload: {
                    token: data.idToken,
                    userId: data.localId,
                    userEmail: data.email
                }
            })

        } catch (error){
            alert(error)
        }
    }
}

export const saveName = (name) => ({
    type: SAVE_NAME,
    name
})

export const takeImage = (imageUri) => {
    return async dispatch => {

        const fileName = imageUri.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: imageUri,
                to: Path
            })

        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({
            type: TAKE_IMAGE,
            payload: {
                imagePath: Path
            }
        })
    }
}

export const saveUserData = (userData) => {
    return async dispatch => {
        try {
            const response = await fetch(API_URL + `users/${userData.userId}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userEmail: userData.userEmail,
                    userName: userData.userName,
                })
            })

        } catch(error){
            console.log(error)
        }
    }
}

export const loadUserData = (userId) =>{
    return async dispatch =>{
        try{
            const response = await fetch(API_URL + `users/${userId}.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            const resData = await response.json()

            dispatch({
                type: LOAD_USERDATA,
                userData: resData
            })

        } catch(error){
            console.log(error)
        }
    }
}

export const logOut =()=> ({
    type: LOG_OUT
})