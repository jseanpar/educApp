import React from 'react'
import { List, ListItem, Body, Text, Right } from 'native-base'

function PeriodLayout ( props ) {
    return (
        <List>
            <ListItem onPress = { props.onPress } >
                <Body>
                    <Text style = { { fontSize: 12 } } >{ props.text }</Text> 
                </Body>
            </ListItem>
        </List>    
    )
}

export default PeriodLayout