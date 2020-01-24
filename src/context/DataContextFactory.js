import React, { useReducer } from 'react';

export default(reducer, actions, initialState) => {
    const context = React.createContext();

    const provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const boundActions = {};
        
        for (let key in actions) {
            boundActions[key] = action[key](dispatch);
        }

        return <context.Provider value = {{state, ...boundActions}}>
            { children }
        </context.Provider>
    }

    return { context, provider };
}