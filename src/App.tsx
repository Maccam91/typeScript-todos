import React, { FC, ChangeEvent, useState, } from 'react';
import './App.css';
import {ITask} from './interfaces'
import TodoTask from './Components/TodoTask'


const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<Date>()
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
   if ( event.target.name === 'todo') {
    setTask(event.target.value) 
   } else {
     setDeadline(new Date(event.target.value))
   }
  }
  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    setTodoList([...todoList, newTask]);
    console.log(todoList)
  }
  const completeTask =  (taskNametoDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNametoDelete
      })
    )
  }
  return (
    <div className="App">
      <h1>Todo's TypeScript</h1>
      <div className='header'>
        <div className='inputContainer'>
        <input className='Todo' type="text" placeholder='Todo' name='todo' value={task} onChange={handleChange} ></input>
        <input type="datetime-local" className='DueDate' name='deadline'  onChange={handleChange} ></input>
        </div>
        <button onClick={addTask}>Add Todo</button>
      </div>
      <div className='todoList'></div>
      {todoList.map((task: ITask,    key: number) => {
        return <TodoTask key={key} task={task.taskName} deadline={task.deadline} completeTask={completeTask} />;
      })}
    </div>
  );
}

export default App;
