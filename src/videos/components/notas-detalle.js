import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

function NotasDetalle(props) {

    return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.wrapper}>
                        <Text style={styles.letra}>1</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.asignatura}>Control 1</Text>
                    <Text style={styles.nota}>6.5</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    wrapper: {
        height: 65,
        width: 65,
        backgroundColor: '#98DE40',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    asignatura: {
        fontSize: 18,
        width: '75%', 
        color: '#44546b',
    },
    nota: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
    }, 
    letra: {
        fontSize: 30, 
        color: 'white',
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 2,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold'
    },
    genderContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    genderTxt: {
        color: 'white',
        fontSize: 11,
    },
})

export default NotasDetalle