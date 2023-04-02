import { GET_CLASSES } from '../actions/classes.actions'
import { FILTER_DAY_CLASSES } from '../actions/classes.actions'

const initialState = {
    classes: [],
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

            const currentDayClasses = state.classes.filter(
                (item) => item.dateString === action.daySelected.dateString
            );

            //Check if there are classes available
            const available = state.classes.find((item) => item.dateString === action.daySelected.dateString);
            
            if(available){
                return {
                    ...state,
                    filteredClasses: currentDayClasses
                }
            }

        default:
            return state
    }
}

export default ClassesReducer



