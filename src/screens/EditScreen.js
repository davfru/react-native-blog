import React from 'react';
import { Text } from 'react-native';

const editScreen = ({navigation}) => {

    const id = navigation.getParam('id');

    return (
        <>
            <Text>This is the edit screen for {id}</Text>
        </>
    );
}

export default editScreen;