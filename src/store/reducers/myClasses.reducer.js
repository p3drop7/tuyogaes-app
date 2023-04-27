import { ADD_CLASS, DELETE_CLASS, LOAD_FIREBASE, SELECT_CLASS, UPDATE_FIREBASE } from '../actions/myClasses.actions'

const initialState = {
    myClasses: [],
    selectedClass: null,
}

const MyClassesReducer = ( state = initialState, action) => {
    
    switch( action.type ){

        // Add a class to state.myClasses and show it on deshboard screen list
        case ADD_CLASS:
            if( !state.myClasses.some( item => item.key === action.selectedClass.key)) {
                
                const newList = [
                    ...state.myClasses,
                    action.selectedClass
                ]
                newList.sort((a, b) => (a.key > b.key) ? 1 : -1)

                return {
                    ...state,
                    myClasses: newList
                }
            }

        // Select a class on dashboard screen to show on pop-up modal
        case SELECT_CLASS:
            return {
                ...state,
                selectedClass: action.classItem
            }
        
        // Delete a class from state.myClasses and erase it from dashboard screen list
        case DELETE_CLASS:
            const newMyClasses = state.myClasses.filter((item) => {
                return item.key !== action.selectedClass.key
            })

            return {
                ...state,
                myClasses: newMyClasses
            }

        // Load classes from Firebase
        case LOAD_FIREBASE:
            return {
                ...state,
                myClasses: action.classesInFB
            }

        // Add class list from dashboard screen list (state.myClasses) to Firebase
        case UPDATE_FIREBASE:
            return {
                ...state,
            }

        default:
            return state
    }
}

export default MyClassesReducer