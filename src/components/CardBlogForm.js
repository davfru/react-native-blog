import React, {useState, useContext} from 'react';
import { 
    View, 
    StyleSheet,  
    } from 'react-native';

import { TextInput, Button, Text } from 'react-native-paper';

const CardBlogForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        
        <View style={styles.container}>
            <Text>Enter title:</Text>
            <TextInput
                value={title}
                mode='outlined'
                multiline
                onChangeText={text => setTitle(text)}
            />

            <Text>Enter content:</Text>
            <TextInput
                mode='outlined'
                value={content}
                multiline
                numberOfLines={10}
                onChangeText={content => setContent(content)}
            />
            <Button onPress={() => { onSubmit(title, content)}}>Save</Button>
        </View>
    );
}

CardBlogForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    
    container: {
        margin: 10
    }
   
});

export default CardBlogForm;