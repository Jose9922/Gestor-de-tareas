import React, { useContext } from 'react';
import { Header } from '../../Layouts/Header/Header';
import color from '../../../images/color.jpeg';
import { Main } from '../../Layouts/Main/Main';
import { NewTask } from '../../NewTask/NewTask';
import { FilterTasks } from '../../FilterTasks/FilterTasks';
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks';
import { ItemTask } from '../../ItemTask/ItemTask';
import { TaskContext } from '../../Context/Context';
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks';

export const Home = () => {
  const context = useContext(TaskContext);

  if (!context || !Array.isArray(context.filteredTasks)) {
    return <p>Cargando tareas o no hay tareas disponibles...</p>; 
  }

  return (
    <>
      <Header>
        <div className='container-header1'>
          <div className='container-title'>
            <h1 className='title-header'>Gestor de tareas</h1>
          </div>
          <div className='container-img'>
            <img className='img-color' src={color} alt='Imagen de perfil' />
          </div>
        </div>
        <NewTask />
        <InfoTasks />
        <FilterTasks />
      </Header>
      <Main>
        <ContainerTasks>
          {
            context.filteredTasks.map((task) => (
              <ItemTask
                key={task.id}
                idTask={task.id}
                content={task.description}
                titleTask={task.title}
              />
            ))
          }
        </ContainerTasks>
      </Main>
    </>
  );
};
