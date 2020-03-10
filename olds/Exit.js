import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

import { connect } from 'react-redux'

class Profile extends Component {

    static navigationOptions = () => {
        return {
            title: 'Cerrar sesión',
            tabBarIcon: <Icon name="sign-out" size = { 18 } color='#92c93d' style = { styles.search } />,
        }
    }

    handleLogout = () => {
        this.props.dispatch ( { type : 'REMOVE_USER' } )
        this.props.navigation.navigate ( 'Loading' )
    }
  
    render() {
        return (
            <SafeAreaView style = { styles.container } >
                <Text>nombre usuario</Text>
                <Button title = "Cerrar sesión extit" color = "#67a52e" onPress = { this.handleLogout } />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create ( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

function mapStateToProps ( state ) {
    return {
        user: state.userReducer
    }
}

export default connect ( mapStateToProps ) ( Profile ) 