import { LOG_IN, SIGN_UP, TAKE_IMAGE, LOAD_IMAGE, SAVE_NAME, LOAD_USERDATA } from "../actions/auth.actions"

const initialState = {
    token: null,
    userId: null,
    userName: null,
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

      case SAVE_NAME:
        return {
          ...state,
          userName: action.name
        }

      case TAKE_IMAGE:
        return {
          ...state,
          profileImage: action.payload.imagePath,
        };

      case LOAD_USERDATA:
        return {
          ...state,
          userName: action.userData.userName,
          userEmail: action.userData.userEmail
        }

      default:
        return state;
    }
}

export default AuthReducer



