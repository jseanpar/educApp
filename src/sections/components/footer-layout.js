import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


function FooterLayout ( props ) {
    return (
        <Footer style = { { height: 30 } } >
            <FooterTab style = { styles.container } >
                { props.children }
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create ( {
    container: {
        backgroundColor: '#0098D0',
    },
})

export default FooterLayout;