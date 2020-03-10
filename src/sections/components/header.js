import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";


function Header(props) {

    return (
        <View>
            <SafeAreaView>
                <View style={styles.statusBar}>
                    <Icon
                            name="bars"
                            size={20}
                            color='#1C84C6'
                            style={styles.searchDrawer}
                            onPress={() => props.navigation.toggleDrawer()}
                    />
                    <Image
                        source={require('../../../assets/cmds-logo.png')}
                        style={styles.logo}
                    />
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80, 
        height: 40,  
        resizeMode: 'contain',
    },
    container: { 
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    right: {
        paddingTop: 7,
        paddingRight: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    statusBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    searchDrawer : {
        padding : 10, 
    }
})

export default Header;