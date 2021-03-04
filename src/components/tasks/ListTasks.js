import React, {Fragment} from 'react'
import Task from './Task';

const ListTasks = () => {

    const tasksProject = [
        {name: 'Ekegir plataforma', estado:true},
        {name: 'Ekegir colores', estado:false},
        {name: 'Ekegir pagos', estado:false},
        {name: 'Ekegir hostinf', estado:true}
    ]

    return (
        <Fragment>
            <h2>Proyecto</h2>
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
            >Eliminar proyecto &times;
            </button>
        </Fragment>  
        
    );
}
 
export default ListTasks;