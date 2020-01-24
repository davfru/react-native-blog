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
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Show', { id: item.id })}
                            >
                                <View style={styles.row}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                        <Text> deleteMe </Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'red'
    },
    title: {
        fontSize: 18
    }
});


export default HomeScreen;