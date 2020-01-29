import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './context/BlogContext';
import Header from './components/Header';

const navigator = createStackNavigator(
  { 
    Index: HomeScreen,
    Edit: EditScreen,
    Create: CreateScreen
  },
  { 
    initialRouteName: 'Index', 
    defaultNavigationOptions: {
      header: null
    }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider><Header/><App/></Provider>;
}