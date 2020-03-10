import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";

class Profile extends Component {

  static navigationOptions = () => {
    return {
        title: 'Cerrar sesión',
        tabBarIcon: <Icon
            name="sign-out" 
            size={18}
            color='#92c93d'
            style={styles.search}
        />,
    }
}

  handleLogout = () => {
      this.props.dispatch({   
          type : 'REMOVE_USER',
      })
      this.props.navigation.navigate('Loading');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>nombre</Text>
        <Button 
          title="Cerrar sesión "
          color="#67a52e"
          //onPress={() => this.props.navigation.openDrawer()}
          onPress={this.handleLogout}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps(state){
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Profile) 