import React, { useState } from 'react';

import Button from './Button';
import './AddTask.css';

const AddTask = ({handleTaskAddtion}) =>{
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e) =>{
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () =>{
        handleTaskAddtion(inputData)
        setInputData('')
    }
   
    return (
        <div className='Add-task-container'>
            <input onChange={handleInputChange} 
            value = {inputData}
            className='Add-task-input' type="text"/>
            <div className='Add-task-button-container'>
                <Button onClick={handleAddTaskClick} >Adcionar</Button>
            </div>
        </div>
    );
}
export default AddTask;