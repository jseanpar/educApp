import React from 'react'
import { View } from 'react-native'
import { ListItem, Text, Body, Right, Badge } from 'native-base'

renderBadge = ( rating ) => {
    if ( ( parseInt ( rating ) > 0  && parseInt ( rating ) < 4 ) || ( rating == 'I' ) ) {
        return ( <Badge danger style = { { justifyContent: 'center', alignItems: 'center' } } ><Text style = { { fontSize: 12 } } >{ rating }</Text></Badge> )
    }
    else if ( !rating ) { <Text></Text> }
    else { return ( <Badge style = { { backgroundColor: '#0098D0' , justifyContent: 'center', alignItems: 'center' } } ><Text style = { { fontSize: 10 } }>{ rating }</Text></Badge> ) }
}

function Rating ( props ) {
    return (
        props.value ? 
            <ListItem icon onPress = { props.onPress }>
                <Body>
                    <Text style = { { fontSize: 12 } } >{  props.title }</Text>
                </Body>
                <Right>
                    { renderBadge ( props.value ) }
                </Right>
            </ListItem>
        : 
            <View></View> 
    )
}   

export default Rating 