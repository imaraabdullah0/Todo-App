import React from 'react';

const TodosList = ({todos, setTodos}) => {
    // const addTodo = todo => {
    //     if(!todo.text || /^\s*$/.test(todo.text) ) {
    //         return
    //     }
    //     const newTodos =[todo, ...todos]
    //     setTodos(newTodos)

    // }
  return (
    <div >
        
        {todos.map((todo)=> (
       <li className='text-white absolute' key={todo.id} >
        <input className='text-white absolute' type="text" 
        value={todo.title}
        onChange={(e)=> e.preventDefault()}/>
       </li>
        ))}
      
    </div>
  )
}

export default TodosList