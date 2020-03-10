import React, { Component } from 'react'
import { SafeAreaView, BackHandler, ActivityIndicator, View, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { Container, Content } from "native-base"
import { NavigationActions } from 'react-navigation'

import API from '../../../utils/api'
import Header from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import Empty from '../../sections/components/empty'
import Period from '../../sections/containers/period'

class PeriodList extends Component {

    state = { 
        loading: true,
        clicked: false
    }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null } }

    async componentDidMount () {
        const periodList = await API.getPeriodListByPeriodType ( this.props.student.esde_tipo_periodo )
        this.props.dispatch ( { type: 'SET_PERIOD_LIST', payload: { periodList } } )
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
        this.setState ( { loading: false } )
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }
    
    handleBackButtonClick () {
        this.props.navigation.goBack ( null )
        return true
    }
    keyExtractor = item => item.id.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros" />
    periodPress = ( item ) => { 
        this.props.dispatch ( { type: 'SET_SELECTED_PERIOD', payload: { selectedPeriod: item } } )
        API.getAuth()
        .then ( ( auth ) => {
            API.getAverageByStudent ( auth, this.props.student.grcu_sec, this.props.student.fial_sec_alum, item.id )
            .then( ( average ) => {
                this.props.dispatch ( { type: 'SET_AVERAGE', payload: { average } } )
                this.props.dispatch ( NavigationActions.navigate ( { routeName: 'Dashboard' } ) )
            } )
        } )
    }
    renderItem = ( { item } ) => {
        return (
            <Period { ...item } onPress = { () => { this.periodPress ( item ) } } />
        )
    }

    render () {
        return (
            <SafeAreaView style = { { flex:1 } } >
                <Container>
                    <Header title = 'Seleccion de periodo' navigation = { this.props.navigation } >
                        <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                    </Header>
                    <Content padder>
                        { this.state.loading ? 
                            <ActivityIndicator color = "#0098D0" size = "large" style = { { flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 } } />
                        : 
                            (<View style = { { marginTop: 10 } } >
                                <FlatList keyExtractor = { this.keyExtractor } data = { this.props.periodList } ListEmptyComponent = { this.renderEmpty } 
                                    renderItem = { this.renderItem } />
                            </View>) 
                        } 
                    </Content>
                </Container>
            </SafeAreaView> 
        )
    }
}

function mapStateToProps ( state ) { 
    return { student: state.studentReducer.selectedStudent, periodList: state.studentReducer.periodList, selectedPeriod: state.studentReducer.selectedPeriod } 
}

export default connect ( mapStateToProps ) ( PeriodList )