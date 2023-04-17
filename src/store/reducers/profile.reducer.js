
import { LOAD_IMAGE, TAKE_IMAGE } from "../actions/profile.actions"

const initialState = {
    profileImage: null
}

const ProfileReducer = ( state = initialState, action) => {
    
    switch( action.type ){

        case TAKE_IMAGE:
            return {
                // ...state,
                profileImage: action.payload.imagePath
            }

            case LOAD_IMAGE:
                const pic = action.payload.profileImage
                return {
                    ...state,
                    profileImage: pic[pic.length - 1].image
                }

        default:
            return state
    }
}

export default ProfileReducer