import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import VData from '../../utils/data';
import VarCard from '../components/var-card';
import VarListLayout from '../components/var-list-layout';

class VarList extends Component{
    state = {
        list: VData.inds,
        modalVisible: false
    };
    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }; 
    showOptions = (item) => {
        console.log(item);
        this.toggleModal();
    };
    renderItem = ({item}) => {
        return (
            <VarCard {...item}
                onPress={() => {this.showOptions(item)}}
            />
        );
    };
    keyExtractor = item => `${item.id}`
    render(){
        return (
            <VarListLayout
                modalVisible={this.state.modalVisible}
                toggleModal={this.toggleModal}
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}
                />
            </VarListLayout>
        );
    }
}

export default VarList;