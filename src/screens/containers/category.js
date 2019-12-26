import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from  '../../videos/components/suggestions-list-layout';
import Empty from '../../videos/components/empty';
import Separator from '../../videos/components/vertical-separator';
import Suggestion from '../../videos/components/sugestion';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state){
    return {
        list : state.videos.suggestionList
    }
}

class Category extends Component{
    
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay Sugerencias :( "/>
    itemSeparator = () => <Separator />
    viewMovie = (item) => { 
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload : {
                movie : item,
            }
        })
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Movie'
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
            <Layout title={`${this.props.navigation.getParam('gender','Categoria')}`}
                >
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

export default connect(mapStateToProps)(Category);