import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Header, Subtitle, Left, Right, Thumbnail } from 'native-base'
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { connect } from 'react-redux';
//import { Header } from 'react-native/Libraries/NewAppScreen';

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
                <Header style = { { backgroundColor: '#0098D0' } }  androidStatusBarColor="#0A74BC" >
                    <Left>
                        <Subtitle style = { { marginLeft: 5 } }>Menu</Subtitle>
                    </Left>
                    <Right>
                        <Thumbnail square small source={ require ( '../../../assets/234.png' ) } style = {{resizeMode: 'contain'}} />
                    </Right>
                </Header>
            </SafeAreaView>
            <DrawerNavigatorItems { ...props } />
        </ScrollView>
    )
}

export default connect ( null ) ( Drawer ) 