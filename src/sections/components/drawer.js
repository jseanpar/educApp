import React from 'react'
import { ScrollView } from 'react-native'
import { Header, Title, Left, Right, Thumbnail } from 'native-base'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { connect } from 'react-redux'

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
            <Header style = { { backgroundColor: '#0098D0' } }  androidStatusBarColor="#0A74BC" >
                <Left>
                    <Title style = { { marginLeft: 5, color: '#fff' } }>Menu</Title>
                </Left>
                <Right>
                    <Thumbnail square small source={ require ( '../../../assets/logo-app.png' ) } style = {{resizeMode: 'contain'}} />
                </Right>
            </Header>
            <DrawerNavigatorItems { ...props } />
        </ScrollView>
    )
}

export default connect ( null ) ( Drawer ) 