import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Right, Title, Subtitle, Thumbnail, Icon } from 'native-base';

class HeaderLayout extends Component {
    render () {
        return (
            <Header style = { { backgroundColor: '#0098D0' } }  androidStatusBarColor="#0A74BC" >
                <StatusBar backgroundColor = "#0A74BC" barStyle = "light-content" />
                <Left>{ this.props.children }</Left>
                <Body>
                    <Title>EducApp</Title>
                    <Subtitle style = { { width: 300, textAlign: 'left', fontSize: 10 } } >CMDS{ this.props.title ? ' - ' + this.props.title : '' }</Subtitle>
                </Body>
                <Right>
                    <View style = { { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' } } onPress={() => this.props.navigation.toggleDrawer()} >
                        <Thumbnail small source = { require ('../../../assets/user.png') } />
                        { this.props.navigation ? 
                            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}  hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
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

export default HeaderLayout;