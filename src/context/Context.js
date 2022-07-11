// IMPORTING REACT HOOKS
import {createContext,useEffect,useReducer} from 'react'

// IMPORTING REDUCER
import Reducer from './Reducer';

// DEFINING THE INITIAL STATE
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};

// CREATING THE CONTEXT WITH INITIAL STATE
export const Context = createContext(INITIAL_STATE);

// CREATING THE CONTEXT PROVIDER
export const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer, INITIAL_STATE);

    // WHENEVER THERE IS A CHANGE IN USER, CHANGE IT IN THE LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])

    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>{children}</Context.Provider>
    )
}