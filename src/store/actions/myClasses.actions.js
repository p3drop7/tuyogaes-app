export const ADD_CLASS = 'ADD_CLASS'
export const SELECT_CLASS = 'SELECT_CLASS'

export const addClass = (selectedClass) => ({
    type: ADD_CLASS,
    selectedClass
})

export const selectClass = (classItem) => ({
    type: SELECT_CLASS,
    classItem
})