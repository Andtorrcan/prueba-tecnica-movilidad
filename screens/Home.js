
import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Image, ActivityIndicator, Picker } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: true,
            types: ''
        };
        this.getMovilityTypes();
    }
    /**
     * Obtiene los tipos de movilidad
     */
    async getMovilityTypes() {
        fetch('https://40.117.41.11:8243/gabomovility/movility/api/v1/conveyances/?Authorization=ecd29404-08df-3ecd-862d-e5a774b1cb05', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data;
            })
            .then(data => {
                console.log(data);
                this.setState({ types: data, isLoading: false })
                console.log(this.state.types);
            })
            .catch(error => {
                console.error(error);
            });
    }


    //Rederiza vista
    render() {
        const { isLoading, types } = this.state;
        //Si esta cargando los datos de tipos de movilidaed
        if (isLoading) {
            return (
                <View style={[styles.container]}>
                    <ActivityIndicator size="small" color="#0000ff" />
                </View>
            )
        }
        // Ya cargo los datos
        else {
            return (
                <View style={styles.container}>

                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://image.flaticon.com/icons/svg/2928/2928733.svg',
                        }}
                    />


                    <Text style={{ width: 300, marginTop: 20, marginBottom: 5 }}>Localidad</Text>
                    <Picker style={styles.input} selectedValue={this.state.user} >
                        <Picker.Item label="Usaquén" value="Usaquén" />
                        <Picker.Item label="Chapinero" value="Chapinero" />
                        <Picker.Item label="Suba" value="Suba" />
                    </Picker>

                    <Text style={{ width: 300, marginTop: 20, marginBottom: 5 }}>Hora de salida desde el hogar</Text>
                    <Picker style={styles.input} selectedValue={this.state.user} >
                        <Picker.Item label="01:00 am" value="01:00 am" />
                        <Picker.Item label="03:00 am" value="03:00 am" />
                        <Picker.Item label="07:00 am" value="07:00 am" />
                    </Picker>

                    <Text style={{ width: 300, marginTop: 20, marginBottom: 5 }}>Lugar de destino</Text>
                    <Picker style={styles.input} selectedValue={this.state.user} >
                        <Picker.Item label="Usaquén" value="Usaquén" />
                        <Picker.Item label="Chapinero" value="Chapinero" />
                        <Picker.Item label="Suba" value="Suba" />
                    </Picker>

                    <Text style={{ width: 300, marginTop: 20, marginBottom: 5 }}>Hora de salida hacía el hogar</Text>
                    <Picker style={styles.input} selectedValue={this.state.user} >
                        <Picker.Item label="01:00 pm" value="01:00 pm" />
                        <Picker.Item label="03:00 pm" value="03:00 pm" />
                        <Picker.Item label="07:00 pm" value="07:00 pm" />
                    </Picker>

                    <Text style={{ width: 300, marginTop: 20, marginBottom: 5 }}>Medio de transporte</Text>
                    <Picker style={styles.input} selectedValue={this.state.user} >
                        {
                            types.map((v) => {
                                return <Picker.Item label={v.name} value={v.name} key={v.id} />
                            })
                        }

                    </Picker>

                    <Button
                    style={styles.btnSave}
                        onPress={this.onPressLearnMore.bind(this)}
                        title="Guardar información"
                        color="#5bb952"
                        style={styles.btnSave}
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            );
        }

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    font: {
        color: 'red'
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 10
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'green',
        marginBottom: 10,
        borderRadius: 20
    },
    buttonSave: {
        borderRadius:30,
        marginTop:10
    }
});