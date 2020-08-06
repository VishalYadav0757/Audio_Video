import React, { Component } from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';

export default class Videosrc extends Component{
  state = { animating: true }
  closeActivityIndicator = () => setTimeout(() => this.setState({
  animating: false }), 6000)
  componentDidMount = () => this.closeActivityIndicator()

    render() {
      const animating = this.state.animating
        return(
           <View style={{flex: 1}}>
              <ActivityIndicator animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
               <Video style={styles.backgroundVideo}
                    source={{uri: "http://techslides.com/demos/sample-videos/small.mp4"}
                    }/>
            </View> 
        )
    };
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 400,
    left: 140,
    bottom: 0,
    right: 0
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 }
});