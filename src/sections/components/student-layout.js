import React from 'react'
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Badge } from 'native-base'

renderRightPanel = ( props ) => {
    if ( props.rut_alum_fmt ) {
        return (
            <Text note style = { { fontSize: 10 } } >{ props.esed_descripcion } { props.grte_descrip } - { props.grcu_letra_curso }</Text> 
        )
    }
    else if ( props.alcu_estado == 'VIGENTE' )  {
        return (
            <Right style = { { position: 'absolute', right: 5, top: 30 } }>
                <Badge style = { { backgroundColor: '#0098D0' , justifyContent: 'center', alignItems: 'center', width: 28, height: 20 } } >
                    <Text style = { { fontSize: 8 } } >{ props.alcu_orden }</Text>
                </Badge>
            </Right>
        )
    }
    else {
        return (
             <Right style = { { position: 'absolute', right: 5, top: 30  } }>
                <Badge danger style = { { justifyContent: 'center', alignItems: 'center', width: 28, height: 20 } } >
                    <Text style = { { fontSize: 8 } } >{ props.alcu_orden }</Text>
                </Badge>
            </Right>
        )
    }
}

function Student ( props ) {
    return (
        <List>
            <ListItem thumbnail onPress = { props.onPress } >
                <Left>
                    { props.studentImage ? 
                        <Thumbnail source = { { uri: `data:image/png;base64,${ props.studentImage }`} } />
                    :
                        <Thumbnail resizeMethod="resize" source = { require ( '../../../assets/user.png' ) } />
                    }
                </Left>
                <Body>
                    <Text style = { { fontSize: 12 } } >{ props.nom_alum_fmt ? props.nom_alum_fmt : props.nombre_alumno }</Text>
                    <Text note style = { { fontSize: 10 } }>{ props.rut_alum_fmt ? props.rut_alum_fmt : props.rut_alumno }</Text>
                    { renderRightPanel ( props ) }
                </Body>
            </ListItem>
        </List>
    )
}

export default Student