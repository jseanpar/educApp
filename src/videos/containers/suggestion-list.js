import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from  '../components/student-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/sugestion';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state){
    return {
        list : state.videos.suggestionList
    }
} 

class SuggestionList extends Component{
    
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay Sugerencias :( "/>
    itemSeparator = () => <Separator />
    viewMovie = (item) => { 
        this.props.dispatch({
            type: 'SET_SELECTED_ALUMNO',
            payload : {
                movie : item,   
            }
        })
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Dashboard'
            })
        )
    }
    renderItem = ({item}) => {
        return(
            <Suggestion {...item}
             onPress={() => { this.viewMovie(item) }}
            />
        )
    }

    render() {

        return(
            <Layout title="Alumnos: ">
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ItemSeparatorComponent={this.ItemSeparator}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    } 
}

export default connect(mapStateToProps)(SuggestionList);