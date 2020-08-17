import React from 'react'
import { ListItem, Text, Icon, Body, Right, Badge } from 'native-base'

renderBadge = (average) => {
    if ( ( parseInt ( average ) > 0  && parseInt ( average ) < 4 ) || ( average == 'I' ) ) {
        return ( <Badge danger style = { { justifyContent: 'center', alignItems: 'center' } } ><Text>{ average }</Text></Badge> )
    }
    else if ( !average ) { <Text></Text> }
    else { return ( <Badge style = { { backgroundColor: '#0098D0' , justifyContent: 'center', alignItems: 'center' } } ><Text>{ average }</Text></Badge> ) }
}

function Subject ( props ) {
    return (
        <ListItem icon onPress = { props.onPress } >
            <Body>
                <Text style = { { fontSize: 12 } } >{ props.asig_descripcion }</Text>
            </Body>
            <Right>
                { renderBadge ( props.nacu_prom_parc ) }
                <Icon active name="arrow-forward" />
            </Right>
        </ListItem>
    )
}   

export default Subject 