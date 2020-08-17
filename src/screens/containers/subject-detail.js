import React, { Component } from 'react'
import { BackHandler, View } from 'react-native'
import { Container, ListItem, Body, Text } from 'native-base'
import { connect } from 'react-redux'

import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import SudentInfo from '../../sections/containers/student-info'
import Rating from '../components/rating'

class SubjectDetail extends Component {

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null, } }

    componentDidMount () {
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }
    
    handleBackButtonClick () {
        this.props.navigation.goBack ( null )
        return true
    }

    render() {console.log(this.props)
        return (
            <Container>
                <Header title = 'Notas' navigation = { this.props.navigation } showMenu = { true } >
                    <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                </Header>
                <View style={{ flex: 1, margin: 10 }}>    
                    <SudentInfo navigation = { this.props.navigation } />
                    <ListItem>
                        <Body style = { { justifyContent: 'center', alignItems: 'center' } } >
                            <Text style = { { fontSize: 12 } }>{ this.props.subject.asig_descripcion }</Text>
                        </Body>
                    </ListItem>
                    <Rating title = { "Nota 01" } value = { this.props.subject.nacu_nota_1 } />
                    <Rating title = { "Nota 02" } value = { this.props.subject.nacu_nota_2 } />
                    <Rating title = { "Nota 03" } value = { this.props.subject.nacu_nota_3 } />
                    <Rating title = { "Nota 04" } value = { this.props.subject.nacu_nota_4 } />
                    <Rating title = { "Nota 05" } value = { this.props.subject.nacu_nota_5 } />
                    <Rating title = { "Nota 06" } value = { this.props.subject.nacu_nota_6 } />
                    <Rating title = { "Nota 07" } value = { this.props.subject.nacu_nota_7 } />
                    <Rating title = { "Nota 08" } value = { this.props.subject.nacu_nota_8 } />
                    <Rating title = { "Nota 09" } value = { this.props.subject.nacu_nota_9 } />
                    <Rating title = { "Nota 10" } value = { this.props.subject.nacu_nota_10 } />
                    <Rating title = { "Nota 11" } value = { this.props.subject.nacu_nota_11 } />
                    <Rating title = { "Nota 12" } value = { this.props.subject.nacu_nota_12 } />
                    <Rating title = { "Nota 13" } value = { this.props.subject.nacu_nota_13 } />
                    <Rating title = { "Nota 14" } value = { this.props.subject.nacu_nota_14 } />
                    <Rating title = { "Nota 15" } value = { this.props.subject.nacu_nota_15 } />
                    <Rating title = { "Nota 16" } value = { this.props.subject.nacu_nota_16 } />
                    <Rating title = { "Nota 17" } value = { this.props.subject.nacu_nota_17 } />
                    <Rating title = { "Nota 18" } value = { this.props.subject.nacu_nota_18 } />
                    <Rating title = { "Nota 19" } value = { this.props.subject.nacu_nota_19 } />
                    <Rating title = { "Nota 20" } value = { this.props.subject.nacu_nota_20 } />
                    <Rating title = { "Promedio Parcial" } value = { this.props.subject.nacu_prom_parc } />
                </View>
            </Container>
        )
    }
}

function mapStateToProps ( state ) { return { subject: state.studentReducer.subject } }

export default connect ( mapStateToProps ) ( SubjectDetail )