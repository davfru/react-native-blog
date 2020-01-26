import React, { useEffect, useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList, 
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import { Context } from '../context/BlogContext';
import Header from '../components/Header';
import { List, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {

    const { state, getBlogPost, deleteBlogPost } = useContext(Context);

    useEffect(() => {

        console.log(state);
        
        getBlogPost();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        });

        return () => {
            listener.remove();
        }
    }, [])

    return (
        <View>
            <Header></Header>
            <ScrollView>
                <FlatList
                    data={state}
                    keyExtractor={(blogPost) => blogPost.id.toString()}
                    renderItem={({ item }) => {
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
                    }}
                />
            </ScrollView>

                  

        </View>
    );
}

const styles = StyleSheet.create({
  
});


export default HomeScreen;