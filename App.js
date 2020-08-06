import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard';
import Videosrc from './src/Videosrc';
import Audiosrc from './src/Audiosrc';

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
  Videosrc: {
    screen: Videosrc,
    navigationOptions: {
      title: 'Video Player',
    },
  },
  Audiosrc: {
    screen: Audiosrc,
    navigationOptions: {
      title: 'Audio Player',
    },
  },
});

export default createAppContainer(AppNavigator);