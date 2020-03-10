import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

function Notas(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.wrapper}>
                        <Text style={styles.letra}>L</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.asignatura}>Lenguaje y comunicación, Literatura y relleno </Text>
                    <Text style={styles.nota}>6.5</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    wrapper: {
        height: 65,
        width: 65,
        backgroundColor: '#36A3F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        //paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    asignatura: {
        fontSize: 18,
        //maxWidth: 220,
        width: '75%',  
        marginLeft: 5,
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

export default Notas