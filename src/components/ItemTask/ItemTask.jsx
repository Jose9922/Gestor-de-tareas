import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../Context/Context'
import './ItemTask.css'

export const ItemTask = ({idTask, content, titleTask}) => {
  
  const {tasks, updateTaskStatus} = useContext (TaskContext)

  const task = tasks.find(task => task.id === idTask)

  const handleCheckboxChange = () => {
    // Actualizamos el estado de la tarea
    updateTaskStatus(idTask, !task.status);
  }

  return (
    <li id={idTask} className={task.status ? "item-task cheched" : "item-task"} >
        <div className={task.status ? "circle-state circle-green": "circle-state"} ></div>
          <h2>{}titleTask</h2>
          <p>{content}</p>
          <input type="checkbox"
          checked={task.status}
          onChange={handleCheckboxChange}
          />
          </li>
  )
}
