/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../Context/authContext';
import '../Estilos/LogIn.css';
import Logo from '../Assets/Logo/logofull-white.svg';

export default function LogIn() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate('/Menu');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setError('La contraseña es incorrecta');
      } else if (error.code === 'auth/user-not-found') {
        setError('El correo es incorrecto');
      } else if (error.code === 'auth/invalid-email') {
        setError('El correo es incorrecto');
      }
    }
  };

  const navigate = useNavigate();
  /* const handleSignIn = () => {
    navigate('/SignIn');
  };
   <button type="button" id="SignInB" onClick={handleSignIn}>Sign In</button> */
  return (
    <section id="loginContainer">
      <section id="loginSection">
        <img src={Logo} alt="Logo" className="imgMenu" id="logoLogin" />
        <section id="errorSec">
          {error && <p className="error">{error}</p>}
        </section>
        <h1 id="welcome">Bienvenide</h1>
        <h2 id="welcomeText">Ingresa tus datos para acceder</h2>
        <form id="inputLogIn">
          <input type="text" className="input" id="mail" name="email" placeholder="E-mail" onChange={handleChange} />
          <input type="password" className="input" id="passwordLogin" name="password" placeholder="Password" onChange={handleChange} />
        </form>
        <button type="button" id="loginButton" onClick={handleSubmit}>Entrar</button>
      </section>
    </section>
  );
}
