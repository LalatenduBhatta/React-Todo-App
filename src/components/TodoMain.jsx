import React, { useReducer } from 'react'
import TaskInput from './TaskInput'
import TaskDisplay from './TaskDisplay'
import { useTodo } from '../context/TodoContext'
import { todoReducer } from '../reducers/TodoReducers'
function TodoMain({ dark }) {
    const data = useTodo()
    const [tasks, dispatch] = useReducer(todoReducer, data)
    return (
        <div style={{ backgroundColor: dark ? "black" : "white" }}>
            <TaskInput dispatch={dispatch} dark={dark} />
            <TaskDisplay tasks={tasks} dispatch={dispatch} dark={dark} />
        </div>
    )
}

export default TodoMain