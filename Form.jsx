import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {AiOutlineDelete, AiOutlineCheck, AiOutlineEdit} from 'react-icons/ai';
import TodosList from './TodosList';
import * as ReactDOM from 'react-dom';

const Form = ({input, setInput, todos, setTodos,props }) => {
    
    const onInputChange = (e) => {
        setInput(e.target.value)
    };

    const onFormSubmit=(e) => {
        e.preventDefault()
        // props.onFormSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })
        setTodos = ([...todos ,{id:uuidv4(), title:input , completed: false}])
        setInput("");
       
    };
   

    console.log(input)
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type='text'
             placeholder='Enter your Duty '
             className='rounded p-1 m-4 text-slate-600' 
             value={input} 
             name="text"
             onChange={onInputChange}
              />
            <button type="submit" className=' bg-lime-500 rounded mr-4 p-1 hover:bg-lime-700 hover:translate-x-0.5' onClick={input = (e)=>(e.target.name)}>SUBMIT</button>
            
            
        </form>
        <div className=' '>
            {/* <div className='flex  justify-center ml-6 items-center bg-gray-200/50 rounded-md w-[300px] '>
                <p className='mr-[100px]'>toDO-1</p>
                <div className='flex '>
                <AiOutlineCheck className='mx-1.5 hover:text-green-300' />
                <AiOutlineEdit className='mx-1.5 hover:text-green-300'/>
                <AiOutlineDelete className='mx-1.5 hover:text-green-300'/>
                </div>
               </div> */}
            <div>
            <TodosList 
            todos={todos}
            setTodos={setTodos}/>
            </div>
        
        </div>
    </div>
  )
}

export default Form