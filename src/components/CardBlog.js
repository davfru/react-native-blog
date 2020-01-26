import React, { useContext } from 'react';
import { 
    TouchableOpacity 
} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Context } from '../context/BlogContext';

const cardBlog = ({item}) => {

    const { deleteBlogPost } = useContext(Context);

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}>
            <Card>
                <Card.Content>
                    <Title>{item.title}</Title>
                    <Paragraph>{item.content}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Button>Delete</Button>
                    </TouchableOpacity>
                </Card.Actions>
            </Card>
        </TouchableOpacity>
    );
};

export default cardBlog;
