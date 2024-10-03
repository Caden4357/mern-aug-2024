import React, { useState, useContext } from 'react';
import { TodoReducerContext, types } from '../context/TodoReducerContext';
const Form = (props) => {
    const [todo, setTodo] = useState('')
    const {todoList, dispatch} = useContext(TodoReducerContext)

    const submitHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            id:todoList.length+1,
            title:todo,
            isCompleted:false
        }
        dispatch({type:types.ADD_TODO, payload:newTodo})
    }
    return (
        <div>
            <h2>TODO FORM</h2>
            <form onSubmit={submitHandler}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;
