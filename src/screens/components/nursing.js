import React from 'react'
import { List, ListItem, Card, CardItem, Left, Body, Right, Text, Icon, View } from 'native-base';

function Nursing ( props ) {
    return (
        <List>
            <ListItem>
                <Body>
                    <View style = { { flexDirection: "row" }}>
                        <Icon name="md-medkit" style = { { fontSize: 9, marginTop: 2, marginRight: 3, color: '#000'  } } />
                        <Text note style = { { fontSize: 12 } }>{ props.encu_nom_profesional }</Text>
                    </View>
                    <Text style = { { fontSize: 10 } }>Motivo: { props.encu_motivo_ing }</Text>
                    <Text style = { { fontSize: 10 } }>Tratamiento: { props.encu_obs_tratamiento }</Text>
                </Body>
                <Right>
                    <Text note style = { { fontSize: 8 } }>{ props.date } {props.encu_hora_atencion}</Text>
                </Right>
            </ListItem>
        </List>
    )
}   

export default Nursing 