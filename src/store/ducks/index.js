import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import auth from './auth'

const authPersistConfig = {
  key: 'auth',
  storage
}

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth)
})
