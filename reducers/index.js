import { combineReducers } from 'redux'

import navigation from './navigation'
import userReducer from './user-reducer'
import studentReducer from './student-reducer'

const reducer = combineReducers ({ navigation, userReducer, studentReducer })

export default reducer;