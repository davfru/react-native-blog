import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { Provider } from './context/BlogContext';

const navigator = createStackNavigator(
  { 
    Index: HomeScreen
  },
  { 
    initialRouteName: 'Index', 
    defaultNavigationOptions: {
      title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

export default () => {
  return <App/>;
}