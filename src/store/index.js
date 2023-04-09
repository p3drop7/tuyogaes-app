import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import ClassesReducer from './reducers/classes.reducer'
import MyClassesReducer from './reducers/myClasses.reducer';
import ProfileReducer from './reducers/profile.reducer';

const RootReducer = combineReducers({
    classes: ClassesReducer,
    myClasses: MyClassesReducer,
    profile: ProfileReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))