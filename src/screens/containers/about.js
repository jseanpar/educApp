import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
} from 'react-native';
//import Icon from '../../sections/components/icon';
import { 
  Container, 
  Header, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Form, 
  Item, 
  Input,
  Text } from 'native-base';
  
  import Icon from "react-native-vector-icons/FontAwesome";


class About extends Component {

    static navigationOptions = () => {
        return {
            title: 'Nosotros',
            tabBarIcon: <Icon
            name="address-card"
            size={15}
            color='#92c93d'
            style={styles.search}
        />
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
        })
    }

    render() {
        return (
          <Container>
          <Header />
          <Content>
            <Form>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item last>
                <Input placeholder="Password" />
              </Item>
            </Form>
          </Content>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#022c43',
    },
    text: {
        textAlign: 'center',
        marginBottom: 5,
        color: 'white',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
    }
})

export default About