import React, {Component} from 'react';
import {FlatList} from 'react-native';
import VData from '../../utils/data';
import ValueCard from '../components/value-card';


class ExploreValues extends Component {
    renderItem = ({item}) => {
        return (
            <ValueCard {...item}/>
        );
    };
    keyExtractor = item => `${item.date}`
    render(){
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={VData.tableValues.values}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ExploreValues;