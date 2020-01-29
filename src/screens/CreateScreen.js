import React, { useContext } from 'react';
import { Text } from 'react-native';
import CardBlogForm from '../components/CardBlogForm';
import { Context } from '../context/BlogContext';

const createScreen = ({navigation}) => {
    
    const {addBlogPost} = useContext(Context);

    return (
        <>
            <CardBlogForm initialValues={{title: '', content: ''}}
                onSubmit={(title, content) => {
                    addBlogPost(title, content, ()=>navigation.pop());
                }}/>
        </>
    );
}

export default createScreen;