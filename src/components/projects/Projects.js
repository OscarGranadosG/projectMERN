import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra'
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';


const Projects = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTask />
                    <div className="contenedor-tareas">
                        <ListTasks />
                    </div>        
                </main>
            </div>
        </div>
    );
}
 
export default Projects;