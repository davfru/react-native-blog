import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const CardBlogForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        
        <View style={styles.container}>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
                />

            <Text style={styles.label}>Enter content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={content => setContent(content)}
            />
            <Button 
                title="save"
                onPress={() => {
                    onSubmit(title, content)
                }}
            />
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

    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CardBlogForm;