import React from 'react'
import { Platform, View, TouchableOpacity } from 'react-native'
import { List, ListItem, Left, Right, Body, Thumbnail, Text, Badge, Icon } from 'native-base'

function StudentInfoLayout ( props ) {
    return (
        <View>  
            <List>
                <ListItem avatar >
                    <Left>
                        { props.studentImage ? 
                            <Thumbnail style = { { width: 50, height: 50, marginTop: 5 } } source = { { uri: `data:image/png;base64,${ props.studentImage }`} } />
                        :
                            <Thumbnail style = { { width: 50, height: 50, marginTop: 5 } } source = { require ( '../../../assets/user.png' ) } />
                        }
                    </Left>
                    <Body>
                        <Text style = { { fontSize: 12, marginTop:5 } } >{ props.studentSelected.nom_alum_fmt }</Text>
                        <Text note style = { { fontSize: 10 } } >{ props.studentSelected.rut_alum_fmt }</Text>
                        <Text note style = { { fontSize: 10 } } >{ props.studentSelected.esed_descripcion } { props.studentSelected.grte_descrip } - { props.studentSelected.grcu_letra_curso }</Text>
                    </Body>
                </ListItem>
            </List>
            <Right style = { { position: 'absolute', right: 5, top: 0 } } >
                <TouchableOpacity onPress = { props.onPress } hitSlop = { { left: 5, top: 5, bottom: 5, right: 5 } } >
                    <Badge style = { { flex: 1, flexDirection: 'row', backgroundColor: '#DDA01E' , justifyContent: 'center', alignItems: 'center', width: 74, height: 18 } }>
                        <Text style = { { fontSize: 8, top: Platform.OS === 'ios' ? -3 : 0 } } >{ props.selectedPeriod.text }</Text>
                        <Icon name = 'md-sync' style = { { fontSize: 10, color: '#fff', top: 1 } } /> 
                    </Badge>
                </TouchableOpacity>
            </Right>
        </View>
    )
}

export default StudentInfoLayout 