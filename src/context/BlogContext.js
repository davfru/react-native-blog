import contextFactory from './ContextFactory';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'get_posts':
            return action.payload;
        case 'edit_post':
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blogPost;
                }
            });        
        case 'delete_post':
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'get_posts', payload: response.data});
    }
}

const deleteBlogPost = dispatch => {

    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_post', payload: id});
    }
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {

        await jsonServer.put(`/blogposts/${id}`, 
        {title, content});
        
        dispatch({ type: 'edit_post', 
        payload: {id, title, content}});
        if(callback) {
            callback();
        }
    };
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {

        await jsonServer.post(`/blogposts`, {title, content});
        if(callback) {
            callback();
        }
    }
}

export const { Context, Provider } = contextFactory(
    blogReducer,
    { getBlogPost, deleteBlogPost, editBlogPost, addBlogPost },
    []
);