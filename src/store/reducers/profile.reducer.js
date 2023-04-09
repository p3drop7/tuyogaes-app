
import { TAKE_IMAGE } from "../actions/profile.actions"

const initialState = {
    profileImage: null
}

const ProfileReducer = ( state = initialState, action) => {
    
    switch( action.type ){

        case TAKE_IMAGE:
            return {
                ...state,
                profileImage: action.imagePath
            }

        default:
            return state
    }
}

export default ProfileReducer