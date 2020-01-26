import React, { useContext } from 'react';
import { Text } from 'react-native';
import CardBlogForm from '../components/CardBlogForm';
import { Context } from '../context/BlogContext';

const editScreen = ({navigation}) => {

    const item = navigation.getParam('item');

    const {editBlogPost} = useContext(Context);

    return (
        <>
            <CardBlogForm initialValues={{title: item.title, content: item.content}}
                onSubmit={(title, content) => {
                    editBlogPost(item.id, title, content, ()=>navigation.pop());
                }}/>
        </>
    );
}

export default editScreen;