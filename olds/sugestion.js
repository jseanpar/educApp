import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

function Suggestion(props){
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image 
                        style={styles.cover}         
                        source= { { uri : "https://mmocoin.shop/assets/images/profiles/profile.png" } } //{{ uri : props.image }}     
                    />
                </View>
                <View style={styles.right}>
                    <Text style={styles.title}>{props.nom_alum_fmt}</Text>
                    <Text style={styles.year}>21.274.444-1</Text>
                    <Text style={styles.rating}>8° básico - A</Text>
                    <Text style={styles.rating}>Escuela España</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
    },
    cover: {
        height : 100,
        width: 100,
        resizeMode: 'contain', 
        borderRadius:60, 
        margin: 5, 
    },
    right: {
        paddingLeft : 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#44546b',
    },
    year: {
        backgroundColor : '#70b124',
        paddingVertical: 2,
        paddingHorizontal: 6,
        color : 'white',
        fontSize : 11,
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

export default Suggestion