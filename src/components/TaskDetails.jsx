import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import Button from './Button';

import './taskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () =>{
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container" >
                <Button onClick={handleBackButtonClick}> Voltar </Button>
            </div>
            <dir className="task-details-container">
                <h2>{params.taskTitle}</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eaque impedit repudiandae vitae. 
                    Eos esse quaerat perferendis iste atque at, 
                    dolorum magni cupiditate praesentium sunt cum incidunt autem ipsum harum?
                </p>
            </dir>
        </>
     );
}
 
export default TaskDetails;