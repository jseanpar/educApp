import React from 'react';
import { SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { connect } from 'react-redux';

handleDrawer = ( props ) => {
    switch (props.activeItemKey) {
        case 'Login' : {
            props.dispatch({   
                type : 'REMOVE_USER',
            })
        break
        }
    }
}

function Drawer ( props ) {
    handleDrawer ( props )
    return (
        <ScrollView> 
            <SafeAreaView>
                <Image source = { require ( '../../../assets/cmds-logo.png' ) } style = { styles.logo } />
            </SafeAreaView>
            <DrawerNavigatorItems { ...props } />
        </ScrollView>
    )
}

const styles = StyleSheet.create ( {
    logo: {
        width: 100, 
        height: 30,
        resizeMode: 'contain',
        marginVertical: 10,
        marginLeft: 10,
    }
})

export default connect ( null ) ( Drawer ) 