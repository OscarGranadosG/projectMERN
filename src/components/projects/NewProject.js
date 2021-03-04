import React, {Fragment, useState} from 'react';

const NewProject = () => {

    //State para crear projecto
    const [project, setproject] = useState({
        name: ''
    });

    //extraer el valor name
    const { name } = project;

    //Lee contenidos cambios del input
    const onChangeProject = e => {
        setproject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    // Cuando se envia el proyecto 
    const onSubmitProject = e => {
        e.preventDefault();

        //validar proyecto

        //agregar state

        //reiniciar el form
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
            Nuevo proyecto           
            </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit = {onSubmitProject}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="name"
                    value ={name}
                    onChange = {onChangeProject}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form>
        </Fragment>  
        
    );
}
 
export default NewProject;