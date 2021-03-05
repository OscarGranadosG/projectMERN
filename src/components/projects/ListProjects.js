import React, { useContext, useEffect } from 'react';
import Project from "./Project";
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {

    //Extraer projects de state Initial
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
    }, [])

    //Revisar si projects tiene contenido
    if(projects.length===0) return <p>No hay proyectos, comienza creando uno</p>;

    

    return (  
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project
                    key = {project.id}
                    project = {project}
                />
            ))}
        </ul>
    );
}
 
export default ListProjects;