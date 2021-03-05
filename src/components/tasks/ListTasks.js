import React, {Fragment, useContext} from 'react'
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTasks = () => {

    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    //validar projecto seleccionado 
    if(!project)  return <h2>Selecciona un proyecto</h2>

    //array destructuring para extrar project actual
    const [projectActual] = project

    const tasksProject = [
        {name: 'Ekegir plataforma', estado:true},
        {name: 'Ekegir colores', estado:false},
        {name: 'Ekegir pagos', estado:false},
        {name: 'Ekegir hostinf', estado:true}
    ]

    //Elimina proyecto
    const onClickDelete = () => {
        deleteProject(projectActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto {projectActual.name}</h2>
            <ul className="listado-tareas">
                {tasksProject.length === 0
                    ? (
                        <li className="tarea">
                            <p>No hay tareas</p>
                        </li>
                    ) 
                    : tasksProject.map(task=>(
                        <Task 
                            task = {task}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick = {onClickDelete}
            >Eliminar proyecto &times;
            </button>
        </Fragment>  
        
    );
}
 
export default ListTasks;