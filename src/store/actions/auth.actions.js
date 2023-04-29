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

            if( !response.ok ){
                throw new Error('¡Ocurrió un error inesperado!')
            }

            dispatch({
                type: SIGN_UP,
                payload: {
                    token: data.idToken,
                    userId: data.localId,
                    userEmail: data.email
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
            
            dispatch({
                type: LOG_IN,
                payload: {
                    token: data.idToken,
                    userId: data.localId,
                    userEmail: data.email
                }
            })

        } catch (error){
            console.log(error)
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