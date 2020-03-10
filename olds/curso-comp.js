import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import Icon from "react-native-vector-icons/FontAwesome5";

function Curso(props){
    return (
            <View style={styles.container}>
              <View style={styles.left}>
              <Icon
                name="user"
                size={60}
                color='#92c93d'
                style={styles.searchDrawer}
            />
                </View>
                <View style={styles.right}>
                    <View style={styles.containerAlumno}>
                        <View style={styles.nombreAlumno}>
                            <Text style={styles.title}>{props.nombre_alumno}</Text>
                        </View>
                    </View>
                    <Text style={styles.nombreAlumno}>{props.rut_alumno}</Text>
                    <Text style={styles.title}>{props.grte_descrip} {props.grcu_letra_curso}</Text>
                    <Text style={styles.rating}>Número Lista: {props.alcu_orden}</Text> 
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
    },
    containerAlumno: {
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cover: {
        height : 100,
        width: 100,
        resizeMode: 'contain', 
        borderRadius:60, 
        margin: 5, 
    },
    nombreAlumno: {
        fontSize: 14,
        maxWidth: 270,
        marginLeft: 10,
        color: '#44546b',
    },
    right: {
        paddingLeft : 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#44546b',
    },
    left: {
        padding: 10,
    },
    year: {
        backgroundColor : '#70b124', 
        paddingVertical: 2,
        paddingHorizontal: 6,
        color : 'white',
        fontSize : 13,
        borderRadius : 5,
        overflow: 'hidden', 
        alignSelf : 'flex-start'
    },
    rating : {
        color : '#6b6b6b',
        fontSize: 14,  
        fontWeight : 'bold'
    },
    genderContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal : 7,
    },
    genderTxt : {
        color : 'white',
        fontSize : 11,
    },
})

export default Curso