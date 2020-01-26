import React, { useEffect, useContext } from 'react';
import { 
    View, 
    StyleSheet,
    FlatList, 
} from 'react-native';
import { FAB } from 'react-native-paper';
import { Context } from '../context/BlogContext';

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
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item, }) => {
                    return (
                        <CardBlog item={item} navigation={navigation}/>
                    );
                }}
            />
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    }
});


export default HomeScreen;