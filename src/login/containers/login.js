import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, ToastAndroid} from 'react-native';

class Login extends Component{
    state = {
        usr: '',
        pwd: ''
    };
    handleOnPress = () => {
        if(this.state.usr !== 'admin' || this.state.pwd){
            ToastAndroid.show('Usuario o contraseña incorrecta', ToastAndroid.LONG);
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>
                    Ingresa los datos de autenticación de la SVE:
                </Text>
                <TextInput
                    style={styles.ti}
                    placeholder="Usuario"
                    autoFocus
                    underlineColorAndroid="transparent"
                    onChangeText={(usr) => this.setState({usr})}
                />
                <TextInput
                    style={styles.ti}
                    placeholder="Contraseña"
                    secureTextEntry
                    onChangeText={(pwd) => this.setState({pwd})}
                />
                <Button
                    title="Ingresar"
                    onPress={this.handleOnPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    ti: {
        color: '#4a4a4a',
        borderColor: '#eaeaea',
        borderWidth: 1,
        fontSize: 15,
        padding: 15,
        marginBottom: 20
    },
    txt: {
        marginBottom: 30,
        fontSize: 16
    }
});

export default Login;