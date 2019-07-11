import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ToastAndroid} from 'react-native';
import {withNavigation} from 'react-navigation';
import ds from '../../utils/d-theme';
import CurrentValueCard from '../components/current-value-card';
import VData from '../../utils/data';
import CommentCard from '../components/comment-card';

class ExploreCommentsLayout extends Component {
    state = {
        list: VData.comments
    };
    expandCard = (item) => {
        let comments = VData.comments.filter(comment => comment.id === item.id);
        comments[0].opened = !comments[0].opened;
        let newArr = Array.from(VData.comments);
        this.setState({
            list: newArr
        });
    };
    renderItem = ({item}) => {
        return (
            <CommentCard {...item} 
                expandCard={() => this.expandCard(item)}
            />
        );
    };
    keyExtractor = item => `${item.id}`;
    render() {
        let item = this.props.navigation.getParam('varitem');
        return (
            <View style={styles.container}>
                <View style={[ds.mh1, ds.mv1]}>
                    <CurrentValueCard {...item} />
                </View>

                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default withNavigation(ExploreCommentsLayout);