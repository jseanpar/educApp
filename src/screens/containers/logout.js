import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

class Logout extends Component {

    componentDidMount() { 
        this.props.dispatch({ type : 'REMOVE_USER', })
        this.props.navigation.navigate('Loading');
    } 

    render() {
        return (
            <View></View>
        )
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer } }

export default connect ( mapStateToProps ) ( Logout ) 