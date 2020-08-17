import React, { Component } from 'react'
import { Platform, StatusBar, View, TouchableOpacity,  } from 'react-native'
import { Header, Left, Body, Right, Title, Subtitle, Thumbnail, Icon, Badge, Text } from 'native-base'

class HeaderLayout extends Component {
    render () {
        return (
            <Header style = { { backgroundColor: '#0098D0' } }  androidStatusBarColor="#0A74BC" >
                <Left>
                    { this.props.children ? 
                        this.props.children
                    : 
                        <Thumbnail square small source={ require ( '../../../assets/logo-app.png' ) } style = { { resizeMode: 'contain' } } />
                    }
                </Left>
                <Body>
                    <Title style = { { color: '#fff' } } >CMDS EducApp</Title>
                    <Subtitle style = { { width: 300, textAlign: Platform.OS === 'ios' ? 'center' : 'left', fontSize: 10, color: '#fff' } } >{ this.props.title }</Subtitle>
                </Body>
                <Right>
                        { this.props.showMenu ?
                            <View style = { { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' } }  >
                                <TouchableOpacity onPress = { () => { this.props.navigation.navigate ( 'MessageList' ) } }  hitSlop = { { top: 5, bottom: 5, left: 5, right: 5 } } >
                                    <Icon name="md-mail" style = { { fontSize: 24, color: '#fff', right: 14 } } />
                                </TouchableOpacity>
                                { this.props.user.notification !== undefined ?
                                    <Badge danger style = { { position: "absolute", justifyContent: 'center', alignItems: 'center', width: 20, height: 20, right: 28, top: -4 } } >
                                        <Text style = { { fontSize: 16 } } >!</Text>
                                    </Badge>
                                : 
                                    <Text></Text>
                                }
                                <TouchableOpacity onPress = { () => this.props.navigation.toggleDrawer () }  hitSlop = { { top: 5, bottom: 5, left: 5, right: 5 } } >
                                    <Icon name="md-more" style = { { fontSize: 28, color: '#fff', marginLeft: 14, marginRight: 10 } } />
                                </TouchableOpacity>
                            </View>
                            :
                            <Text></Text>
                        } 
                </Right>
            </Header>
        )
    } 
}

export default HeaderLayout