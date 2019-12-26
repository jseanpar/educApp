import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, TouchableOpacity, ImageBackground, ActivityIndicator, Alert, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import API from '../../../utils/api';

class Login extends Component {
    
    state = {
        loading: false,
        userName: undefined,
        pasword: undefined,
    }

    handleLogin = async () => {
        if ( typeof this.state.userName === 'undefined')  {
            this.showMessage('Atención', 'Debe ingresar el usuario.')
        }
        else {
            if ( typeof this.state.password === 'undefined' )  {
                this.showMessage('Atención', 'Debe ingresar la contraseña.')
            }
            else {
                this.setState ( { loading: true } )
                const userData = await API.getUserData ( this.state.userName )
                this.setState ( { loading: false } )
                if ( typeof userData !== 'undefined' ) {
                    //if ( userData[0].uspo_clave == this.state.password ) {
                    if ( userData[0].uspo_clave ) {
                        const token = 'ABCDEFGHIJK';
                        this.props.dispatch ( { 
                            type: 'SET_USER', 
                            payload: { 
                                token, userId: userData[0].pers_sec, userCardId: userData[0].uspo_usuarios, userName: 'user name', userBlocked: userData[0].uspo_bloqueo, 
                                userNew: userData[0].uspo_es_nuevo, userType: userData[0].uspo_tipo_usua, 
                            }
                        } )
                        const studentList = await API.getStudentListByUser ( userData[0].pers_sec )                        
                        this.props.dispatch( { type: 'SET_STUDENT_LIST', payload: { studentList } } )
                        this.props.navigation.navigate ( 'Loading' )
                    } 
                    else {
                        this.showMessage ( 'Atención', 'Datos incorrectos, intente nuevamente.' )
                    }
                }   
                else {
                    this.showMessage ( 'Atención', 'Datos incorrectos, intente nuevamente.' )
                }
            }    
        }
    }

    showMessage = ( p_title, p_message ) => {
        Alert.alert ( p_title, p_message, [ {text: 'OK', onPress: () => console.log ( 'OK Pressed' ) }, ], { cancelable: true } )
    }

    render () {
        return (
            <SafeAreaView style = { styles.container } >
                <StatusBar barStyle="light-content" backgroundColor="#0A74BC" />  
                <ImageBackground source = { require ('../../../assets/15.jpg') } style = { styles.imagebackground } >
                    <View style = { styles.formContainer } >
                        <View style = { styles.logoContainer } >
                            <Image source = { require ('../../../assets/234.png') } style = { styles.logo } />
                            <Text style = { styles.title } >EducApp</Text>
                        </View>
                        <View style = { styles.inputWrapper } >
                            <Image source = { require ('../../../assets/username.png') } style = { styles.inlineImg } />
                            <TextInput onChangeText={(text) => { this.setState({ userName: text }) } } style = { styles.input } placeholder = "Nombre de usuario" placeholderTextColor = "white" underlineColorAndroid = "transparent" />
                        </View>
                        <View style = { styles.inputWrapper } >
                            <Image source = { require ('../../../assets/password.png') } style = { styles.inlineImg } />
                            <TextInput onChangeText={(text) => { this.setState({ password: text }) } } style = { styles.input } placeholder = "Contraseña" placeholderTextColor = "white" secureTextEntry = { true } />
                        </View>
                        <TouchableOpacity onPress = { this.handleLogin } style = { styles.button } >
                            <Text style = { styles.buttonLabel } >
                                { this.state.loading ? <View style = { styles.loading } ><ActivityIndicator color = "white" /></View> : <Text>Iniciar Sesión</Text> }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = { styles.footerContainer } >
                        <Text style = { styles.version } >Versión 1.0.0 - Desarrollado por </Text>
                        <Image source = { require ('../../../assets/pad-logo.png') } style = { styles.logoBy } />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    message: {
        marginTop: 10, 
    },
    container: {
        flex: 1,
    },
    logoContainer : {
        //paddingBottom: 35,
        alignItems: 'center',
    },
    imagebackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20%',
        
    },
    logo: {
        width: 100,
        height: 90,
        resizeMode: 'contain',
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    inputWrapper: {
        marginBottom: 20, 
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 250,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#36a3f7',
        height: 40,
        width: 250,
        borderRadius: 20, 
        zIndex: 100,
        fontSize: 20,
    },
    buttonLabel: {
        color: 'white',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loading: {
        width: 30,
        height:10,
    },
    footerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 3,
        alignItems: 'center',
    },
    version: {
        color: 'white'
    },
    logoBy: {
        width: 100,
        height: 20,
        resizeMode: 'cover',
    }
})

export default connect ( null ) ( Login ) 