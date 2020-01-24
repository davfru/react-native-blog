import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.dark = true,
        primary: 'tomato',
        accent: 'yellow',
    },
};

export default function Main() {

    return (
        <PaperProvider theme={theme}>
            <App theme={theme} />
        </PaperProvider>
    );
}

AppRegistry.registerComponent('main', () => Main);