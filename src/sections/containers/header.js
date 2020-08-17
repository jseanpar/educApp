import React, { Component } from 'react'
import { connect } from 'react-redux'
import OneSignal from 'react-native-onesignal'

import HeaderLayout from '../components/header-layout'
 
class Header extends Component {
    
    componentDidMount = () => {
        OneSignal.clearOneSignalNotifications()
        this.props.dispatch({ type : 'REMOVE_NOTIFICATION' })
    }

    render () {
        return (
            <HeaderLayout user = { this.props.user } navigation = { this.props.navigation } children = { this.props.children } title = { this.props.title } showMenu = { this.props.showMenu } />
        )
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer } }

export default connect ( mapStateToProps ) ( Header )