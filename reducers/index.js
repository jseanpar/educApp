import { combineReducers } from 'redux';

import navigation from './navigation';
import videos from './videos';
import userReducer from './user-reducer';
import studentReducer from './student-reducer';

const reducer = combineReducers ( {
    videos,
    navigation,
    userReducer,
    studentReducer,
} )

export default reducer;