import React from 'react'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';

function Note ( props ) {
    return (
        <List>
            <ListItem avatar>
                <Body>
                    
                    <Text note style = { { fontSize: 12 } }>{ props.nom_user_ing }</Text>
                    
                    <Text style = { { fontSize: 10 } }>{ props.obal_observacion }</Text>
                    
                </Body>
                <Right>
                    <Text note style = { { fontSize: 8 } }>{ props.date }</Text>
                    { 
                        props.tipo_obs_desc == "Anotacion Positiva" ? 
                            <Icon name = 'checkmark-circle' style = { { color: '#0098D0' } } /> 
                        : 
                            <Icon name = 'close-circle' style = { { color: '#d9534f' } } /> 
                    }
                </Right>
            </ListItem>
        </List>
    )
}   

export default Note 