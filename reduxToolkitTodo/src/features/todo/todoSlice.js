import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: ""

    }]
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((items) => items.id != action.payload)
        },
        updateTodo: (state, action) =>{
            state.todos = state.todos.map((item)=> item.id == action.payload? action.payload.text: item)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer