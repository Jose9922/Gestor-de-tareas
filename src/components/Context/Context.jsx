import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const TaskContext = createContext()

const tsk =[
  {id:uuidv4(), title:'Tarea de ejermplo 1', descrition:'Descripcion pendiente',status:false},
  {id:uuidv4(), title:'Tarea de ejermplo 2', descrition:'Descripcion pendiente',status:true},
  {id:uuidv4(), title:'Tarea de ejermplo 3', descrition:'Descripcion pendiente',status:false},
  {id:uuidv4(), title:'Tarea de ejermplo 4', descrition:'Descripcion pendiente',status:true}
]

export const TasksProvider = (children) => {

  const [tasks, setTasks] = useState(tsk)
  const [filteredTasks, setFilteredTasks]= useState(tsk)
  const [pendingTasks, setPendingTasks] = useState(0)
  const [doneTasks, setDoneTasks] = useState(0);


  //funcion para actualizar el estado de la tarea
  const updateTaskStatus = (taslid, newStatus) => {
    setTasks(prevTasks => 
      prevTasks.map(tas =>
        task.id === taskId ? { ... task, status: newStatus}:task)
    );
  }

  return (
  <taskContext.Provider value={
    {tasks,
    setTasks,
    pendingTasks,
    setPendingTasks,
    doneTasks,
    setDoneTasks,
    isChecked,
    setIsChecked,
    updateTaskStatus,
    filteredTasks, 
    setFilteredTasks}}>

  </taskContext.Provider>
  )  
}
