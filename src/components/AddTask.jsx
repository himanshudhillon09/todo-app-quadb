import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useState } from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import toast from 'react-hot-toast';

function AddTask() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input.length > 0){ dispatch(addTodo(input))
            setInput('')}

            else{
                toast.error('Todo cannot be empty')
            }
       
    }

    return (
        <form onSubmit={addTodoHandler} className="form">
            <input
                type="text"
                className='inputField'
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className='addButton'      >
               <ControlPointIcon className='addIcon' />
            </button>
        </form>
    )
}

export default AddTask;