import { createContext, useReducer } from "react";

export const TodoReducerContext = createContext();

const initialState = [
    {
        id:1,
        title:'Hi',
        isCompleted:false
    }
]

export const types = {
    ADD_TODO:"ADD_TODO",
    DELETE_TODO:"DELETE_TODO",
    TOGGLE_TODO:'TOGGLE_TODO'
}


// this reducer func handles ALL state manipulation 
const reducer = (state, action) => {
    // state = state
    // action = {type:type, payload:data}
    console.log('STATE: ',state);
    console.log('ACTION: ',action);
    switch(action.type){
        case types.ADD_TODO:
            return [...state, action.payload] // same as 
            // return setTodoList([...todoList, newTodo])
        case types.DELETE_TODO: 
            // todoList.filter(todo => todo.id !== id)
            return state.filter(todo => todo.id !== action.payload)
    }
}





export const TodoReducerProvider = ({children}) => {
    //      nameOfState, dispatch
    const [todoList, dispatch] = useReducer(reducer, initialState)
    return (
        <TodoReducerContext.Provider value={{todoList, dispatch}}>
            {children} 
            {/* children just means App here
            and in any context children means the children component(s) that are children to this component
            */}
        </TodoReducerContext.Provider>
    )
}