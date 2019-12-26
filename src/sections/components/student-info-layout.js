import React from 'react'
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base'

function StudentInfoLayout ( props ) {
    return (
        <List>
            <ListItem avatar >
                <Left>
                { props.studentSelected.studentImage ? 
                        <Thumbnail style = { { width: 50, height: 50 } } source = { { uri: `data:image/png;base64,${ props.studentSelected.studentImage }`} } />
                    :
                        <Thumbnail style = { { width: 50, height: 50 } } source = { require ( '../../../assets/user.png' ) } />
                    }
                </Left>
                <Body>
                    <Text style = { { fontSize: 12 } } >{ props.studentSelected.nom_alum_fmt }</Text>
                    <Text note style = { { fontSize: 10 } } >{ props.studentSelected.rut_alum_fmt }</Text>
                    <Text note style = { { fontSize: 10 } } >{ props.studentSelected.esed_descripcion } { props.studentSelected.grte_descrip } - { props.studentSelected.grcu_letra_curso }</Text>
                </Body>
            </ListItem>
        </List>
    )
}

export default StudentInfoLayout;