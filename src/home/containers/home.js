import React, {Component} from 'react';
import {ToastAndroid} from 'react-native';
import {StyleSheet} from 'react-native';
import SveIcon from '../../sections/containers/sve-icon';
import {Col,Row,Grid} from 'react-native-easy-grid';

class Home extends Component {
    gotoIndicators = () => {
        ToastAndroid.show('Pa indicadores', ToastAndroid.LONG);
        this.props.navigation.navigate('VarList');
    }
    gotoCommitments = () => {
        ToastAndroid.show('Pa compromisos', ToastAndroid.LONG);
    }
    gotoPlans = () => {
        ToastAndroid.show('Pa planes', ToastAndroid.LONG);
    }
    gotoMeetings = () => {
        ToastAndroid.show('Pa reuniones', ToastAndroid.LONG);
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col style={styles.ccenter}>
                        <SveIcon 
                            iconKey="ind"
                            onPress={this.gotoIndicators}
                        />
                    </Col>
                    <Col style={styles.ccenter}>
                        <SveIcon 
                            iconKey="cmt"
                            onPress={this.gotoCommitments}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col style={styles.ccenter}>
                        <SveIcon 
                            iconKey="pln"
                            onPress={this.gotoPlans}
                        />
                    </Col>
                    <Col style={styles.ccenter}>
                        <SveIcon 
                            iconKey="mtn"
                            onPress={this.gotoMeetings}
                        />
                    </Col>
                </Row>
            </Grid>          
        );
    }
}

const styles = StyleSheet.create({
    ccenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;