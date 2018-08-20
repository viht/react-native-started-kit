import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SplashScreen from '../splash-screen';
// import Login from '../login';
// import Setting from '../setting';


// Init navigation slack for app

const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
  Login: {
    screen: Login,
  },
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

export default MainNavigator;
