import React, {Component} from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import VData from '../../utils/data';
import VarCard from '../components/var-card';
import VarListLayout from '../components/var-list-layout';

class VarList extends Component{
    state = {
        list: VData.inds,
        modalVisible: false,
        selected: {}
    };
    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }; 
    showOptions = (item) => {
        console.log(item);
        this.setState({
            selected: item
        });
        this.toggleModal();
    };
    renderItem = ({item}) => {
        return (
            <VarCard {...item}
                onPress={() => {this.showOptions(item)}}
            />
        );
    };
    exploreVar = () => {
        this.setState({
            modalVisible: false
        });
        this.props.navigation.navigate('ExploreBTabs', {varitem: {...this.state.selected}});
    };
    addValue = () => {
        ToastAndroid.show(this.state.selected.name, ToastAndroid.LONG);
    };
    keyExtractor = item => `${item.id}`
    render(){
        return (
            <VarListLayout
                modalVisible={this.state.modalVisible}
                toggleModal={this.toggleModal}
                fnexplore={this.exploreVar}
                fnaddvalue={this.addValue}
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