import { LOG_IN_URL, SIGN_UP_URL } from "../../constants/data"

export const SIGN_UP = 'SIGN_UP'
export const LOG_IN = 'LOG_IN'

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
            console.log('DATA', data)

            if( !response.ok ){
                throw new Error('¡Ocurrió un error inesperado!')
            }

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId 
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
            console.log('LOG IN DATA', data)

        } catch (error){
            console.log(error)
        }
    }
}