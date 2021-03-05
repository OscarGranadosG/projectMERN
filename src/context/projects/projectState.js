import React, {useReducer} from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT, GET_PROJECTS, ADD_PROJECT,VALIDATE_FORM, PROJECT_ACTUAL, DELETE_PROJECT } from '../../types';

import { v4 as uuidv4 } from 'uuid';

const ProjectState = props => {

    const projects = [
        { id : 1, name: 'Tienda virtual' },
        { id : 2, name: 'Eccommer' },
        { id : 3, name: 'Prueba' },
        { id : 4, name: 'Prueba2' }

    ]

    const initialState = {
        projects : [],
        form : false,
        errorForm : false,
        project: null
    }

    // Dispatch ára ejecutar acciones
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //funciones del crud
    const seeForm = () => {
        dispatch({
            type: FORM_PROJECT 
        })
    }

    //Obtener projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //Add new project
    const addProject = project => {
        project.id = uuidv4();

        //add project al state con dispatch
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //Valida el form 
    const seeError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    //selecciona el proyecto
    const selectProject = projectId => {
        dispatch({
            type:PROJECT_ACTUAL,
            payload: projectId
        })
    }

    //Elimina proyecto
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }



    return (
        <projectContext.Provider 
        value={{
            projects: state.projects,
            form: state.form,
            errorForm: state.errorForm,
            project: state.project,
            getProjects,
            seeForm,
            addProject,
            seeError,
            selectProject,
            deleteProject
        }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;
