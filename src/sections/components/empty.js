import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from 'native-base'

function Empty ( props ) {
    return (
        <View style = { styles.container } >
            <Image source = { require ('../../../assets/no-data.png') } style = { styles.image } />
            <Text note style = { { marginTop: 20 } } >{ props.text }</Text>
        </View>
    )
}

const styles = StyleSheet.create ( {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        marginTop: 60,
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
})

export default Empty