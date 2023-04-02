import { API_URL } from '../../constants/data'

export const ADD_CLASS = 'ADD_CLASS'
export const SELECT_CLASS = 'SELECT_CLASS'
export const DELETE_CLASS = 'DELETE_CLASS'
export const ADD_FB = 'ADD_TO_FB'

export const addClass = (selectedClass) => ({
    type: ADD_CLASS,
    selectedClass
})

export const selectClass = (classItem) => ({
    type: SELECT_CLASS,
    classItem
})

export const deleteClass = (selectedClass) => ({
    type: DELETE_CLASS,
    selectedClass
})

// Funtion to add a class to Firebase
export const addToFB = (myClasses) => {
    return async dispatch => {
        try {
            
            const response = await fetch(API_URL + 'myClasses.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: new Date(),
                    classes: myClasses
                }),
            });

            const result = await response.json();

            dispatch({
                type: ADD_FB,
                classesInFB: result
            });

        } catch (error) {
            console.error(error)
        }
    }
}