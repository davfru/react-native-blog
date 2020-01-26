import React, { useContext } from 'react';
import { 
    TouchableOpacity, 
    StyleSheet,
    View 
} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Context } from '../context/BlogContext';

const CardBlog = ({item, navigation}) => {

    const { deleteBlogPost } = useContext(Context);

    return ( 
        <View style={styles.container}>
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
        </View>     
    );
};

const styles = StyleSheet.create({
  container: {
      margin: 5
  }
});

export default CardBlog;
