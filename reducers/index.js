import { combineReducers } from 'redux'

import navigation from './navigation'
import authReducer from './auth-reducer'
import userReducer from './user-reducer'
import studentReducer from './student-reducer'

const reducer = combineReducers ({ navigation, authReducer, userReducer, studentReducer })

export default reducer;