import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from  '../components/curso-list-layout';
import Empty from '../src/sections/components/empty';
import Separator from '../components/vertical-separator';
import Curso from '../components/curso';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


function mapStateToProps(state){

    return {
        list : state.videos.cursoList
    }
} 

class CursoList extends Component{
    
    keyExtractor = item => item.pers_sec.toString()
    renderEmpty = () => <Empty text="No hay registros de alumnos "/>
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
            <Curso {...item}
             onPress={() => { this.viewMovie(item) }}
            />
        )
    }

    render() {
        return(
            <Layout title="Alumnos del Curso: ">
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

export default connect(mapStateToProps)(CursoList);