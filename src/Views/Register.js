import { useState } from "react";
import { useAuth } from '../context/AuthContext'

import { useNavigate } from "react-router-dom";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    empresa: "",
  });

  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value })


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password, user.name, user.lastName, user.empresa)
      console.log(user)
      navigate('/')
    } catch (error) {
      console.log(error.code)

      switch (error.code) {
        case 'auth/invalid-email':
          setError('Correo invalido');
          break;
        case 'auth/weak-password':
          setError('La contraseña debe ser de 6 caracteres como minimo');
          break;
        case 'auth/email-already-in-use':
          setError('El correo ya fue registrado')
          break;
        default:
          setError('Lo lamentamos, por el momento no disponemos de servicio ');
      }
      //setError(error.message)
    }
  }


  return (
    <section>
      <div className="contenedor">
        <h1>Registro</h1>
        <div className="contenedor-form">
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tucorreo@empresa.ltd"
              onChange={handleChange}
            />
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" onChange={handleChange} />
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              name="lastName"
              id="lastname"
              onChange={handleChange}
            />
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              name="empresa"
              id="empresa"
              onChange={handleChange}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="false"
              onChange={handleChange}
              placeholder="******"
            />
            <button className="btn-primario">Registro</button>
          </form>
        </div>
      </div>
    </section>
  );
}
