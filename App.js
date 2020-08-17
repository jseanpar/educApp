import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import OneSignal from 'react-native-onesignal'

import { store, persistor } from './store'
import Loading from './src/screens/components/loading-layout'
import AppNavigatorWithState from './src/app-navigator-with-state'

type Props = {}
export default class App extends Component <Props> {
    
    constructor(properties) {
        super(properties)
        OneSignal.init("6ca1836d-d0d6-43f4-82ce-5fbdc23510ce", { kOSSettingsKeyAutoPrompt : true });// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
        OneSignal.inFocusDisplaying(2)
    }

    render() {
        return (
            <Provider store = { store } >
                <PersistGate loading = { <Loading /> } persistor = { persistor } >
                    <AppNavigatorWithState />
                </PersistGate>
            </Provider>
        )
    }
}