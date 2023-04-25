// SQLite
import * as FileSystem from 'expo-file-system'
// import { insertProfile, fetchProfile } from '../../db'

import { LOG_IN_URL, SIGN_UP_URL } from "../../constants/data"

export const SIGN_UP = 'SIGN_UP'
export const LOG_IN = 'LOG_IN'
export const TAKE_IMAGE = 'TAKE_IMAGE'
export const LOAD_IMAGE = 'LOAD_IMAGE'


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