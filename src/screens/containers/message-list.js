import React, { Component } from 'react'
import { BackHandler, ActivityIndicator, View } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import Timeline from 'react-native-timeline-flatlist'

import API from '../../../utils/api'
import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import Empty from '../../sections/components/empty'

class MessagetList extends Component { 

    state = { loading: true, eventList: null, messageCount: 0 }

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
                this.props.dispatch ( { type: 'SET_MESSAGE_LIST', payload: { messageList } } )
                this.setState ( { loading: false, messageCount: messageList.length } )
                this.renderMessageList ( messageList )
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

    renderMessageList = ( messageList ) => {
        var eventList = []
        messageList.map( (message) => {  
            eventList.push ( { time: message.fec_ing_fmt, title: message.mens_fec_ing.substring ( 11, 16 ), description: message.mens_texto, lineColor: '#0098D0', circleColor : '#0098D0' }  ) 
        } )
        this.setState ( { eventList } )
    }
    
    render() {
        return (
            <Container>
                <Header title = 'Mensajes' navigation = { this.props.navigation } showMenu = { true } >
                    <HeaderBackButton onPress = { () => { this.props.navigation.goBack() } } />
                </Header>
                <View style={{ flex: 1, margin: 10 }}>
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 } } />
                    :
                        this.state.messageCount == 0 ? <Empty text = "No se encontraron registros" /> :
                        ( <Timeline data= { this.state.eventList } innerCircle = { 'dot' } timeContainerStyle = { { minWidth:52 } }
                        timeStyle = { { fontSize: 9, textAlign: 'center', backgroundColor: '#DDA01E', color: 'white', padding: 5, borderRadius: 13 } } 
                        titleStyle = { { fontSize: 11, color: 'gray' } } 
                        descriptionStyle = { { fontSize: 10, color: 'gray' } } /> ) 
                    } 
                </View>
            </Container>
        )
    }
}

function mapStateToProps ( state ) { return { user: state.userReducer, messageList: state.userReducer.messageList } }

export default connect ( mapStateToProps ) ( MessagetList )