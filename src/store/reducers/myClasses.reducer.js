import { ADD_CLASS } from '../actions/myClasses.actions'
import { SELECT_CLASS } from '../actions/myClasses.actions'

const initialState = {
    myClasses: [],
    selectedClass: null
}

const MyClassesReducer = ( state = initialState, action) => {
    
    switch( action.type ){

        case ADD_CLASS:

            if( !state.myClasses.some( item => item.key === action.selectedClass.key)) {
                return {
                    ...state,
                    myClasses: [ ...state.myClasses, action.selectedClass ]
                }
            }

        case SELECT_CLASS:
            return {
                ...state,
                selectedClass: action.classItem
            }

        default:
            return state
    }
}

export default MyClassesReducer