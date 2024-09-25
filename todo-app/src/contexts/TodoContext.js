import { createContext, useContext } from "react";



export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addTodo:(id) => {},
    updateTodo:(id,tod)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})



export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider