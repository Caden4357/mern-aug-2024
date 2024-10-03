import React, {useState, useContext} from 'react';
import { TodoReducerContext } from '../context/TodoReducerContext';
import { types } from '../context/TodoReducerContext';
const Display = (props) => {
    const {todoList, dispatch} = useContext(TodoReducerContext)

    const deleteTodo = (id) => {
        dispatch({type:types.DELETE_TODO, payload:id})
    }
    return (
        <div>
            <h2>Display</h2>
            {
                todoList.map((todo) => (
                    <div key={todo.id}>
                        <p>Todo: {todo.title}</p>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
)}

export default Display;