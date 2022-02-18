import React from 'react';

import Button from './Button';

const TaskDetails = () => {
    return ( 
        <>
            <div back-button-container >
                <Button> Voltar </Button>
            </div>
            <dir task-details-container>
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