import React, { Component} from 'react';
import {
    View,
    FlatList
} from 'react-native';

import Empty from '../src/sections/components/empty';
import Separator from '../src/sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from  '../components/category-list-layout';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state){
    return {
        list : state.videos.categoryList
    }
}

class CategoryList extends Component{

    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay Sugerencias :( "/>
    itemSeparator = () => <Separator />
    viewCategory = (item) => {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName : 'Category',
                params: {
                    gender : item.species
                }
            })
        )
    }
    renderItem = ({item}) => {
        return(
            <Category {...item}
                onPress={() => {this.viewCategory(item)}}
            />
        )
    }
    render(){
        return(
        <Layout title="Categorías">
            <FlatList 
                horizontal
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

export default connect (mapStateToProps)(CategoryList);