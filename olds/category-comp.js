import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

function Category(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <ImageBackground
                style={styles.wrapper}
                source={{
                    uri: props.image
                }}
            >
                <Text style={styles.species}
                >{props.species}</Text>
            </ImageBackground>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    species: {
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
        fontSize: 30,
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 0,
        padding: 5,
        fontWeight: 'bold',
    },
})

export default Category;