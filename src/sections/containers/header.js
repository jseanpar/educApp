import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderLayout from '../components/header-layout'
 
class Header extends Component {
    render () {
        return (
            <HeaderLayout user = { this.props.user } navigation = { this.props.navigation } children = { this.props.children } title = { this.props.title } />
        )
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer } }

export default connect ( mapStateToProps ) ( Header )
