import React, {Component} from 'react';
import {FlatList} from 'react-native';
import VData from '../../utils/data';
import ValueCard from '../components/value-card';
import ValueListLayout from '../components/value-list-layout';

class ExploreValues extends Component {
    state = {
        modalVisible: false,
    };
    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    };
    toComment = (item) => {
        this.toggleModal();
    };
    renderItem = ({item}) => {
        return (
            <ValueCard {...item}
                onPress={() => {this.toComment(item)}}
            />
        );
    };
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name') || 'Explorar'
        };
    };
    keyExtractor = item => `${item.date}`
    render(){
        return (
            <ValueListLayout
                modalVisible={this.state.modalVisible}
                toggleModal={this.toggleModal}
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={VData.tableValues.values}
                    renderItem={this.renderItem}
                />
            </ValueListLayout>
            
        );
    }
}

export default ExploreValues;