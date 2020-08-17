import React, { Component } from 'react'
import { connect } from 'react-redux'
import OneSignal from 'react-native-onesignal'
import { Platform, PermissionsAndroid } from 'react-native'
import LoadingLayout from '../components/loading-layout'

class Loading extends Component {

    constructor(properties) {
        super(properties)
        OneSignal.addEventListener('received', this.onReceived)
    }
  
    componentDidMount = async () => {
        if (Platform.OS === 'ios') {
            //Dont need to request permission
        }
        else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                        title: "Permiso de almacenamiento",
                        message: "Esta aplicación necesita acceso a la memoria para descargar archivos"
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //Alert.alert("Permiso concedido", "Ahora puedes descargar cualquier archivos a tu dispositivo!")
                } 
                else {
                    //Alert.alert( "Permiso denegado!", "Debe otorgar permiso de almacenamiento para descargar archivos" )
                }
            } 
            catch (err) { console.warn(err) }
        }

        if ( this.props.user.hasOwnProperty('userId') ) {
            if (this.props.user.userNew == 'S') {
                this.props.navigation.navigate ( 'ChangePassword' )
            } 
            else {
                this.props.navigation.navigate ( 'StudentList' )
            }
        }
        else {
            this.props.navigation.navigate ( 'Login' )
        }
    }

    onReceived = (notification) => {
        this.props.dispatch( { type: 'SET_NOTIFICATION', payload: { notification } } )
    }

    render () {
        return (
            <LoadingLayout />
        )   
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer } }

export default connect ( mapStateToProps ) ( Loading )