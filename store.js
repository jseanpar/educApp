import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import reducer from './reducers/index'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['navigation']
}

const closeSession = () => { AsyncStorage.clear() }
const persistedReducer = persistReducer ( persistConfig, reducer )
const navigationMiddleware = createReactNavigationReduxMiddleware ( state => state.navigation )
const store = createStore ( persistedReducer, applyMiddleware( navigationMiddleware ) )
const persistor = persistStore ( store )

export { store, persistor, closeSession }