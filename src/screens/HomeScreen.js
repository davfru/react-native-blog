import React, { useEffect, useContext } from 'react';
import { 
    View, 
    StyleSheet,
    FlatList, 
    ScrollView, 
} from 'react-native';
import { Context } from '../context/BlogContext';
import Header from '../components/Header';
import CardBlog from '../components/CardBlog';

const HomeScreen = ({ navigation }) => {

    const { state, getBlogPost } = useContext(Context);

    useEffect(() => {
        
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
                            <CardBlog item={item}/>
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