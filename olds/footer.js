import React, { Component } from 'react'
import { connect } from 'react-redux'

import FooterLayout from '../src/sections/components/footer-layout'
 
class Footer extends Component {

    render () {
        return (
            <FooterLayout user = { this.props.user } navigation = { this.props.navigation } children = { this.props.children } title = { this.props.title } />
        )
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer } }

export default connect ( mapStateToProps ) ( Footer )