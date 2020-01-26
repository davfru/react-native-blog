import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.dark = true,
        primary: 'green',
        accent: 'yellow',
    },
};

export default function Main() {

    return (
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    );
}

