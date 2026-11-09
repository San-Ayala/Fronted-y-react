
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navegar = useNavigate();

    function iniciarSesion() {
        if (correo == "" || contrasena == "") {
            alert("Complete todos los campos");
        } else {
            navegar("/dashboard");
        }
    }

    return (
        <div>
            <h1>Iniciar sesión</h1>

            <input
                type="email"
                placeholder="Ingrese su correo"
                onChange={(e) => setCorreo(e.target.value)}
            />

            <input
                type="password"
                placeholder="Ingrese su contraseña"
                onChange={(e) => setContrasena(e.target.value)}
            />

            <button onClick={iniciarSesion}>
                Ingresar
            </button>

            
        </div>);
}

export default Login;
