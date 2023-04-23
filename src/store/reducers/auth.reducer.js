import { LOG_IN, SIGN_UP } from "../actions/auth.actions"

const initialState = {
    token: null,
    userId: null
}

const AuthReducer = ( state = initialState, action) => {
    
    switch( action.type ){

        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId        
            }

        case LOG_IN:
            return state

        default:
            return state
    }
}

export default AuthReducer



