import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Right, Title, Subtitle, Thumbnail, Icon } from 'native-base';

class HeaderLayout extends Component {
    render () {
        return (
            <Header style = { { backgroundColor: '#0098D0' } }  androidStatusBarColor="#0A74BC" >
                <StatusBar backgroundColor = "#0A74BC" barStyle = "light-content" />
                <Left>
                    { this.props.children ? 
                        this.props.children
                    : 
                        <Thumbnail square small source={ require ( '../../../assets/234.png' ) } style = { { resizeMode: 'contain' } } />
                    }
                </Left>
                <Body>
                    <Title>EducApp</Title>
                    <Subtitle style = { { width: 300, textAlign: 'left', fontSize: 10 } } >{ this.props.title }</Subtitle>
                </Body>
                <Right>
                    <View style = { { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' } } onPress = { () => this.props.navigation.toggleDrawer () } >
                        {/* <Thumbnail small source = { require ('../../../assets/user.png') } /> */}
                        <TouchableOpacity onPress = { () => { this.props.navigation.navigate ( 'MessageList' ) } }  hitSlop = { { top: 5, bottom: 5, left: 5, right: 5 } } >
                                <Icon name="md-notifications" style = { { fontSize: 24, color: '#fff', marginLeft: 16, marginRight: 8 } } />
                            </TouchableOpacity>
                        { this.props.navigation ? 
                            <TouchableOpacity onPress = { () => this.props.navigation.toggleDrawer () }  hitSlop = { { top: 5, bottom: 5, left: 5, right: 5 } } >
                                <Icon name="md-more" style = { { fontSize: 28, color: '#fff', marginLeft: 14, marginRight: 8 } } />
                            </TouchableOpacity>
                        :
                            <View></View>
                        }
                    </View>
                </Right>
            </Header>
        )
    } 
}

export default HeaderLayout