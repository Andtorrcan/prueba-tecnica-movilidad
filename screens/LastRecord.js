import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Image, ActivityIndicator, Picker } from 'react-native';

export default class LastRecord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            last: ''
        };
        this.getLastRecord();
    }
    /**
     * Obtien el último registro
     */
    async getLastRecord() {
        fetch('https://40.117.41.11:8243/gabomovility/movility/api/v1/movility/last', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ec9ca927-6d9f-3fba-beab-a17c456f52ec'
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson;
            })
            .then(data => {
                console.log(data);
                this.setState({ types: data, isLoading: false })
                console.log(this.state.last);
            })
            .catch(error => {
                console.error(error);
            });
    }



    render() {
        const { isLoading, last } = this.state;
        //Si esta cargando los datos de último registro
        if (isLoading) {
            
            return (
                <View style={[styles.containerPreload]}>
                    <ActivityIndicator size="large" color="#5bb952" />
                </View>
            )
        }
        // Ya cargo los datos
        else {
            return (
                //Código cuando no llega data del servicio, en este caso siempre me respondia vacio así que lo dejo comentareado en caso que me pidan ponerlo
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={{
                                uri: 'https://image.flaticon.com/icons/svg/2165/2165782.svg',
                            }}
                        />
                        <Text style={styles.title}>Gracias! </Text>
        
                        <Text style={styles.text}>Andres Torres identificado con CC y número de documento 1113669665, realizó su aporte de movilidad segura y reportó que se encuentra en alguna de las actividades
                        exceptuadas para circular en Bogotá.</Text>
        
                        <Text style={styles.text}>Rázon por la que te movilizas:</Text>
                        <Text style={styles.text_important}>Tenía que ir al hospital.</Text>
        
                        <Text style={styles.textNote}>*El usuario declara que la información registrada en el formulario es verídica y por lo tanto esta dentro de las actividades.</Text>
                    </View>
                    //Código cuando llega data del servicio, en este caso siempre me respondia vacio así que lo dejo comentareado en caso que me pidan ponerlo
                    /**
                     * <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={{
                                uri: 'https://image.flaticon.com/icons/svg/2165/2165782.svg',
                            }}
                        />
                        <Text style={styles.title}>Gracias! </Text>
        
                        <Text style={styles.text}>{last} identificado con {last} y número de documento {last}, realizó su aporte de movilidad segura y reportó que se encuentra en alguna de las actividades
                        exceptuadas para circular en Bogotá.</Text>
        
                        <Text style={styles.text}>Rázon por la que te movilizas:</Text>
                        <Text style={styles.text_important}>{last}</Text>
        
                        <Text style={styles.textNote}>*El usuario declara que la información registrada en el formulario es verídica y por lo tanto esta dentro de las actividades.</Text>
                    </View>
                     */
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
    containerPreload: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#5bb952',
        marginBottom: 10,
        marginTop: 10
    },
    text: {
        color: 'gray',
        textAlign: 'justify',
        padding:20
    },
    textNote: {
        color: 'gray',
        textAlign: 'justify',
        padding:20,
        paddingBottom:0,
        fontSize:14
    },  
    logo: {
        width: 80,
        height: 80,
        marginTop: 20
    },
    text_important:{
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        textAlign: 'center'
    },

});