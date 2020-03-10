import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';
import Layout from  '../components/notas-detalle-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import NotasDetalle from '../components/notas-detalle';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state){
    return {
        list : state.videos.suggestionList
    }
} 

class NotasDetalleList extends Component{
    
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay Notas disponibles"/>
    itemSeparator = () => <Separator />
    viewMovie = (item) => { 
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Suerte'
            })
        )
    }
    renderItem = ({item}) => {
        return(
            <NotasDetalle {...item}
             onPress={() => { this.viewMovie(item) }}
            />
        ) 
    }

    render() {

        return(
            <Layout title="Notas de la asignatura : blablabla ">
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

export default connect(mapStateToProps)(NotasDetalleList);