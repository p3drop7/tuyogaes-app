
import { LOAD_IMAGE, TAKE_IMAGE, TAKE_USERID } from "../actions/profile.actions"

const initialState = {
    userId: null,
    userName: null,
    userSurname: null,
    userEmail: null,
    profileImage: null
}

const ProfileReducer = ( state = initialState, action) => {
    
    switch( action.type ){

        case TAKE_IMAGE:
            return {
                ...state,
                profileImage: action.payload.imagePath
            }

            case LOAD_IMAGE:
                const pic = action.payload.profileImage
                return {
                    ...state,
                    profileImage: pic[pic.length - 1].image
                }

            // case TAKE_USERID:
            //     return {
            //         ...state,
            //         userID: action.userID
            //     }

        default:
            return state
    }
}

export default ProfileReducer