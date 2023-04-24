import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

import ClassesReducer from './reducers/classes.reducer'
import MyClassesReducer from './reducers/myClasses.reducer';
import ProfileReducer from './reducers/profile.reducer';
import AuthReducer from './reducers/auth.reducer';

const rootReducer = combineReducers({
    classes: ClassesReducer,
    myClasses: MyClassesReducer,
    profile: ProfileReducer,
    auth: AuthReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const storePersisted = persistStore(store)