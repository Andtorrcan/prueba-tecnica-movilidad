
import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Image } from 'react-native';


import Home from './Home';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onLogin({ navigation }) {
        console.log(this.state);
        const { username, password } = this.state;
        console.log('Oliwi');
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />

                <Text style={{ marginTop: 10, marginBottom: 10 }}>Login</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        color: 'red'
    },
    logo: {
        width: 100,
        height: 100
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 20
    },
});