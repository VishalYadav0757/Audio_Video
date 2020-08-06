import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import { Player } from '@react-native-community/audio-toolkit';
import { color } from 'react-native-reanimated';


export default class Audiosrc extends Component{

    constructor(props) {
        super(props);
        this.player = new Player("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3");
      }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}> PlayBack </Text>
                <View style = {styles.btnContainer}>
                    <TouchableOpacity
                        style = {styles.userBtn}
                        onPress = {() => this.player.play()}>
                        <Text style = {styles.btnTxt}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.userBtn}
                        onPress = {() => this.player.pause()}>
                        <Text style = {styles.btnTxt}>Pause</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.userBtn}
                        onPress = {() => this.player.stop()}>
                        <Text style = {styles.btnTxt}>Stop</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cfd8dc',
    },
    title: {
        fontSize: 30,
        margin: 10,
        color: '#000000',
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'column',
        width: '90%',
        alignItems: 'center'
    },
    userBtn: {
        backgroundColor: '#FFF176',
        padding: 20,
        width: '50%',
        fontSize: 16,
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        color: '#D50000'
    },
});