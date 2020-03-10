import React from 'react'
import { List, ListItem, Card, CardItem, Left, Body, Right, Text, Icon, View } from 'native-base';

function Message ( props ) {
    return (
        <List>
            <ListItem>
                <Body>
                   <Text note style = { { fontSize: 12 } }>{ props.mens_texto }</Text>
                </Body>
                <Right>
                    <Text note style = { { fontSize: 8 } }>{ props.date } {props.date}</Text>
                </Right>
            </ListItem>
        </List>
    )
}   

export default Message 