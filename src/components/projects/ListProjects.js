import React from 'react';
import Project from "./Project";

const ListProjects = () => {

    const projects = [
        {name: 'Tienda virtual'},
        {name: 'Eccommer'},
        {name: 'Prueba'},
    ]

    return (  
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project 
                    project = {project}
                />
            ))}
        </ul>
    );
}
 
export default ListProjects;