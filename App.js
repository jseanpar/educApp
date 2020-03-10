import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import OneSignal from 'react-native-onesignal'

import { store, persistor } from './store';
import Loading from './src/sections/components/loading';
import AppNavigatorWithState from './src/app-navigator-with-state';

type Props = {};
export default class App extends Component <Props> {
    
    constructor(properties) {
        
        super(properties);

        

        OneSignal.init("6ca1836d-d0d6-43f4-82ce-5fbdc23510ce", {kOSSettingsKeyAutoPrompt : true});// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS

        OneSignal.addEventListener('received', this.onReceived)
        OneSignal.addEventListener('opened', this.onOpened)
        OneSignal.addEventListener('ids', this.onIds)
        OneSignal.enableSound(true)
        OneSignal.inFocusDisplaying(2)
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    onIds(device) {
        //console.log('Device info: ', device);
    }

    render() {
        return (
            <Provider store = { store } >
                <PersistGate loading = { <Loading/> } persistor = { persistor } >
                    <AppNavigatorWithState />
                </PersistGate>
            </Provider>
        )
    }
}