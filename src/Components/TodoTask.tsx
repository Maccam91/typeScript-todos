import React from 'react'
import { ITask } from '../interfaces'

interface Props {
    task: ITask["taskName"];
    deadline: ITask["deadline"];
    // taskName: string;
    
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deadline,  completeTask }: Props) => {
    console.log(task)
    console.log(deadline)
    return (
        <div className='task'>
            <div className='content'>
            <span>{task}</span>
            <span>{deadline?.toDateString()}</span>
            </div>
            <button 
            onClick={() => {
                completeTask(task);
            }}
            >
                ✔
                </button> 
        </div>
    )
}

export default TodoTask