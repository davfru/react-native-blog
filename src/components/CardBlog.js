import React, { useContext } from 'react';
import { 
    TouchableOpacity 
} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Context } from '../context/BlogContext';

const CardBlog = ({item, navigation}) => {

    const { deleteBlogPost } = useContext(Context);

    return (       
        <Card>
            <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.content}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <TouchableOpacity onPress={() => navigation.navigate('Edit', {item})}>
                    <Button>Modify</Button>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Button>Delete</Button>
                </TouchableOpacity>
            </Card.Actions>
        </Card>
    );
};

export default CardBlog;
