import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';
import Search from '../src/sections/containers/search';
import Icon from "react-native-vector-icons/FontAwesome";

class Lucky extends Component {
    static navigationOptions = () => {
        return {
            title: 'Buscar',
            tabBarIcon: <Icon
                name="search"    
                size={15}
                color='#92c93d'
            />,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon
                    name="search"
                    size={50}
                    color='#92c93d'
                />
                <Search />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        padding: 10,
    },
})

export default Lucky