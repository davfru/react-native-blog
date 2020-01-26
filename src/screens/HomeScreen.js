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
import { List } from 'react-native-paper';

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
                                onPress={() => navigation.navigate('Show', { id: item.id })}
                            >
                                <List.Item
                                    title={item.title}
                                    description={item.content}
                                    right={() =>
                                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                            <List.Icon icon="delete" />
                                        </TouchableOpacity>}
                                />  
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