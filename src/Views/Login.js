import { useState } from "react";
import { useAuth } from '../context/AuthContext'

import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",

  });

  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value })


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      console.log(user)
      navigate('/')
    } catch (error) {
      console.log(error.code)

      switch (error.code) {
        case 'auth/user-not-found':
          setError('Usuario no registrado');
          break;
        case 'auth/wrong-password':
          setError('Contraseña erronea');
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
        <h1>Login</h1>
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

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="false"
              onChange={handleChange}
              placeholder="******"
            />
            <button className="btn-primario">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}
