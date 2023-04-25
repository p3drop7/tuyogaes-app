import { LOG_IN, SIGN_UP, TAKE_IMAGE, LOAD_IMAGE } from "../actions/auth.actions"

const initialState = {
    token: null,
    userId: null,
    userName: null,
    userSurname: null,
    userEmail: null,
    profileImage: null
}

const AuthReducer = ( state = initialState, action) => {
    switch (action.type) {

      case SIGN_UP:
        return {
          ...state,
          token: action.payload.token,
          userId: action.payload.userId,
          userEmail: action.payload.userEmail
        };

      case LOG_IN:
        return {
          ...state,
          token: action.payload.token,
          userId: action.payload.userId,
          userEmail: action.payload.userEmail
        };

      case TAKE_IMAGE:
        return {
          ...state,
          profileImage: action.payload.imagePath,
        };

      case LOAD_IMAGE:
        const pic = action.payload.profileImage;
        return {
          ...state,
          profileImage: pic[pic.length - 1].image,
        };

      default:
        return state;
    }
}

export default AuthReducer



