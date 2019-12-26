import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, ActivityIndicator, ImageBackground, StatusBar } from 'react-native';

function Loading ( props ) {
    return (
        <SafeAreaView style = { styles.container } >
            <StatusBar barStyle="light-content" backgroundColor="#0A74BC" />  
            <ImageBackground source = { require ('../../../assets/15.jpg') } style = { styles.imageBackground } >
                <View style = { styles.formContainer } >
                    <View style = { styles.logoContainer } >
                        <Image source = { require ('../../../assets/234.png') } style = { styles.logo } />
                        <Text style = { styles.title } >EducApp</Text>
                        <ActivityIndicator color = "white" />
                    </View>
                </View>
            </ImageBackground>  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
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
    logoContainer : {
        //paddingBottom: 35,
        alignItems: 'center',
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
})

export default Loading;