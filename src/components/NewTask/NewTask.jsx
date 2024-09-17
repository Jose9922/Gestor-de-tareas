import { useContext, useRef, useState } from 'react';
import { TaskContext } from "../Context/Context"
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'

export const NewTask = () => {

  const context = useContext(TaskContext)

  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  const txtTitle = useRef ('')
  const txtDescription = useRef ('')

  const handleTitleTask = (event) => setTitleTask(event.target.value)
  const handleDescriptionTask = (event) => setDescriptionTask(event.target.value)

  const handleCreateTask = (event) => {
    event.preventDefaul()
    const newTask ={
      id: uuidv4(),
      title:titleTask,
      description:descriptionTask,
      status: false
    }

    context.setTasks([...context.task.newTask])
    context.setFilteredTasks([...context.tasks,newTask])

    txtTitle.current.value = ''
    txtDescription.current.value = ''

  }

  return (
  <form className='frm-task'>
    <fieldset>
      <label>Titulo de la tarea</label>
        <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='El:Aseo ambiente' type='text'/>
    </fieldset>
    <fieldset>
      <label>Descripcion de la tarea</label>
        <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-description' placeholder='El:Realizar aseo del ambiente' type='text'/>
    </fieldset>
    <button onChange={handleCreateTask} className='btn-new-task'>Crear nueva tarea</button>
  </form>
  )
}
