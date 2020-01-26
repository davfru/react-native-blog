import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.dark = true,
        primary: 'black',
        accent: 'yellow',
        background: 'white',
        text: 'black'
    },
    roundness: 5,
    //mode: 'adaptive'
};

export default function Main() {

    return (
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    );
}

