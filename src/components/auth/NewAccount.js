import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NewAccount = () => {

    //state para iniciar sesion
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const { name, email, password, confirm_password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value 
        })
    }

    //onSubmit funcion
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos vacios

        //password minimo de 6 caracteres 

        //password sean iguales

        //pasar al action
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value = {name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value = {email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value = {password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirm_password">Confirmar password</label>
                        <input 
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Repite tu password"
                            value = {confirm_password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;
