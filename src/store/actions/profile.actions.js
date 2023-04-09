import * as FileSystem from 'expo-file-system'

export const TAKE_IMAGE = 'TAKE_IMAGE'

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
            imagePath: Path
        })
    }
}