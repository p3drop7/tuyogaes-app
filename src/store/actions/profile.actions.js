import * as FileSystem from 'expo-file-system'
import { insertProfileImage, fetchProfileImage } from '../../db'

export const TAKE_IMAGE = 'TAKE_IMAGE'
export const LOAD_IMAGE = 'LOAD_IMAGE'
export const TAKE_USERID = 'TAKE_USERID'

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

        //SQLite persistence
        const dbResult = await insertProfileImage(Path)

        dispatch({
            type: TAKE_IMAGE,
            payload: {
                id: dbResult.insertId,
                imagePath: Path
            }
            
        })
    }
}

// Load Profile Image from SQLite
export const loadImage = () => {
    return async dispatch => {
        try {

            const dbResult = await fetchProfileImage()

            dispatch({
                type: LOAD_IMAGE, 
                payload: {
                    profileImage: dbResult.rows._array}
            })

        } catch (error) {
            throw error
        }
    }
}