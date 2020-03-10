import React, { Component } from 'react'
import { SafeAreaView, FlatList, BackHandler, ActivityIndicator } from 'react-native'
import { Container, Content } from 'native-base';
import { connect } from 'react-redux'

import API from '../../../utils/api';
import Header  from '../../sections/containers/header';
import HeaderBackButton from '../../sections/components/header-back-button'
import SudentInfo from '../../sections/containers/student-info';
import Empty from '../../sections/components/empty'
import Message from '../components/message'

class MessagetList extends Component { 

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null } }

    async componentDidMount () {
        await API.getAuth()
        .then( ( auth ) => {
            API.getMessageListByUser ( auth, this.props.user.userCardId )
            .then( ( messageList ) => {
                console.log(messageList)
                this.props.dispatch ( { type: 'SET_MESSAGE_LIST', payload: { messageList } } )
                this.setState ( { loading: false } )
            } )
        })
                
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }

    handleBackButtonClick () {
        this.props.navigation.goBack ( null )
        return true
    }

    keyExtractor = item => item.mens_sec.toString ()
    renderEmpty = () => <Empty text = "No se encontraron registros"/>

    renderItem = ( { item } ) => { 
        const dateTime = String(item.mens_fec_ing).split('T')
        const date = String(dateTime[0]).split('-');
        const dateFormat = parseInt(date[2]) + '-' + parseInt(date[1]) + '-' + parseInt(date[0])
        return ( <Message { ...item } date = { dateFormat } /> ) 
    }
    
    render() {
        return (
            <SafeAreaView style = { { flex:1 } } >
                <Container>
                    <Header navigation = { this.props.navigation } title = 'Mensajes' >
                        <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                    </Header>
                    <Content padder>
                        {/* <SudentInfo navigation = { this.props.navigation } /> */}
                        { this.state.loading ? 
                            <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                        : 
                            (<FlatList keyExtractor = { this.keyExtractor } data = { this.props.messageList } ListEmptyComponent = { this.renderEmpty } 
                                renderItem = { this.renderItem } />) 
                        } 
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer, messageList: state.userReducer.messageList } }

export default connect ( mapStateToProps ) ( MessagetList );