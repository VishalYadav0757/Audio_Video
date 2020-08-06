import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

const Dashboard = ({navigation}) => {
        return(
            <View style = {styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor= '#cfd8dc' />
                <Text style = {styles.dashboard}>Dashboard</Text>
                <View style = {styles.btnContainer}>
                    <TouchableOpacity
                        style = {styles.userBtn1}
                        onPress = {() => navigation.navigate('Videosrc')}>
                        <Text style = {styles.btnTxt}>Go to Video Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                        style = {styles.userBtn2}
                        onPress = {() => navigation.navigate('Audiosrc')}>
                        <Text style = {styles.btnTxt}>Go to Audio Player</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cfd8dc',
    },
    dashboard: {
        fontSize: 30,
        margin: 10,
        color: '#f44336',
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    userBtn1: {
        backgroundColor: '#00c853',
        padding: 15,
        width: '45%'
    },
    userBtn2: {
        backgroundColor: '#2196F3',
        padding: 15,
        width: '45%'
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center'
    },
});

export default Dashboard;