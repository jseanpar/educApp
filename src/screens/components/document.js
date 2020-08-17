import React from 'react'
import { List, ListItem, Body, Right, Text, Icon, View } from 'native-base';

function Document ( props ) {
    return (
        <List>
            <ListItem onPress = { props.onPress }>
                <Body>
                    <View style = { { flexDirection: "row" }}>
                        <Icon name="md-document" style = { { fontSize: 9, marginTop: 2, marginRight: 3, color: '#000'  } } />
                        <Text note style = { { fontSize: 12 } }>{ props.dado_nom_docto }</Text>
                    </View>
                    <Text style = { { fontSize: 10 } }>Descripción: { props.dado_descrip }</Text>
                    <Text style = { { fontSize: 10 } }>Mensaje: { props.dccu_mensaje }</Text>
                </Body>
                <Right>
                    <Icon name = "md-download" ></Icon>
                </Right>
            </ListItem>
        </List>
    )
}   

export default Document 