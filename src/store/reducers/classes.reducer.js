import { GET_CLASSES } from '../actions/classes.actions'
import { FILTER_DAY_CLASSES } from '../actions/classes.actions'

const initialState = {
    classes: null,
    filteredClasses: []
}

const ClassesReducer = ( state = initialState, action) => {
    
    switch( action.type ){

        // Get classes from firebase
        case GET_CLASSES:
            return {
                ...state,
                classes: action.classes
            }

        //Filter day classes and pass them on to screen: DayClassesScreen
        case FILTER_DAY_CLASSES:
            let filtered = []

            if(state.classes !== null){
                filtered = state.classes.monthClasses.find(item => {
                    return item.day === action.daySelected.day
                })
            }
            
            return {
                ...state,
                filteredClasses: filtered
            }

        default:
            return state
    }
}

export default ClassesReducer



