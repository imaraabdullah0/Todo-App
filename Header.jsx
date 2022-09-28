import React, { useState } from 'react';
import Form from "./Form";
import {AiFillEdit} from 'react-icons/ai';
import TodosList from './TodosList';


const Header = (newTodos) => {
const [input,setInput] = useState ("");
const [todos,setTodos] = useState([]);



  return (
    <div className='bg-rose-200 h-screen w-full flex '>
        <div className='h-[500px] w-[350px] border border-neutral-700 bg-slate-800 text-white rounded-md drop-shadow-lg m-auto  items-center text-center'>
            <h2 className='text-white font-extrabold p-4 flex items-center justify-center '>To DO List <AiFillEdit className='text-rose-400 cursor-pointer hover:text-2xl hover:m-0 text-xl ml-2  '/></h2>
            <Form  onSubmit={newTodos}
             input={input}
             setInput={setInput}
             todos={todos}
             setTodos={setTodos}/>
        </div>
        <div>
            <TodosList 
            todos={todos}
            setTodos={setTodos}/>
        </div>
    </div>
  )
}

export default Header