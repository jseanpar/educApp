import React, { Component } from 'react'
import { BackHandler, View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Form, Item, Label, Input, Icon, Button, Text } from 'native-base'

import API from '../../../utils/api'
import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'

class Profile extends Component {

    state = { loading: true, userName: '', phone: '', cellPhone: '',  email: '', }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null, } }

    async componentDidMount () {
        await API.getAuth()
        .then ( ( auth ) => {
            API.getUserProfile ( auth, this.props.user.userType, this.props.student.esed_sec, this.props.student.fial_sec_alum, this.props.user.userId )
            .then( ( profile ) => {
                this.props.dispatch ( { type: 'SET_PROFILE', payload: { profile } } )
                if (profile) {
                    this.setState({
                        phone: this.props.user.profile[0].nro_telefono, 
                        cellPhone: this.props.user.profile[0].nro_celular, 
                        email: this.props.user.profile[0].email
                    })
                }
                this.setState ( { loading: false } )
            } )
        } )
        if (this.props.user.profileName) {
            this.setState({
                userName: this.props.user.profileName
            })
        }
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }
    
    handleBackButtonClick () {
        this.props.navigation.goBack ( null )
        return true
    }

   handleButtonClick = async () => {
        this.props.dispatch ( { type: 'SET_PROFILE_NAME', payload: this.state.userName } )
        await API.getAuth()
        .then ( ( auth ) => {
            API.updateUserData( auth, this.props.user.userType, this.props.student.esed_sec, this.props.student.fial_sec_alum, this.props.user.userId, this.state.phone, this.state.cellPhone, this.state.email )
            .then( ( result ) => {                
                this.props.navigation.goBack ( null )
                return true
            } )
        })
    }

    render () {
        return (
            <Container>
                <Header title = 'Perfil' navigation = { this.props.navigation } showMenu = { true } >
                    <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                </Header>
                {/* <View style = { { height: 200 } } >
                    <ImageBackground blurRadius={5} source={ require ('../../../assets/background.jpg') } style={ { height: 200, flex: 1, resizeMode: 'cover', alignItems: 'center' } } >   
                        <Thumbnail style = { { width: 120, height: 120, marginTop: 40 } } source = { require ( '../../../assets/user.png' ) } />
                    </ImageBackground>
                </View> */}
                <View style={{ flex: 1, margin: 10 }}>
                    <Form >
                        <Item floatingLabel>
                            <Label>Usuario</Label>
                            <Input value = { this.state.userName } onChangeText = { (text) => this.setState({ userName: text }) } />
                            <Icon active name='md-contact'/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Telefono</Label>
                            <Input keyboardType="numeric" value={this.state.phone} onChangeText={ (text) => this.setState({ phone: text }) } />
                            <Icon active name='md-call'/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Celurar</Label>
                            <Input keyboardType="numeric" value={this.state.cellPhone} onChangeText={ (text) => this.setState({ cellPhone: text }) } />
                            <Icon active name='md-phone-portrait'/>
                        </Item>
                        <Item floatingLabel> 
                            <Label>Correo</Label>
                            <Input autoCapitalize='none' keyboardType="email-address" value={this.state.email} onChangeText={ (text) => this.setState({ email: text }) } />
                            <Icon active name='md-at'/>
                        </Item>
                        <Button onPress = { this.handleButtonClick }  iconRight block style = { { marginTop: 40, backgroundColor: '#0098D0' } } color = '#fff' >
                            <Text>Guardar</Text>
                            <Icon name='md-cloud-upload' />
                        </Button>
                    </Form>
                </View>
            </Container>
        )
    } 
}

function mapStateToProps ( state ) { return { user: state.userReducer, student: state.studentReducer.selectedStudent } }

export default connect ( mapStateToProps ) ( Profile )