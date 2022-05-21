import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useAuth} from "../Context/authContext"

export default function SignIn(){
    const navigate = useNavigate();

    const[user, setUser] =useState({
        email: '', 
        password: '',
    });

    const {signup} = useAuth()

    const handleChange = ({target:{name, value}}) =>{
      setUser({...user,[name]: value})
    }
    const [error, setError]= useState();
    const handleSubmit = async e =>{
        e.preventDefault()
      try{
        await signup( user.email, user.password)
        navigate('/Menu')
      }catch(error){
        console.log(error.code);
        if(error.code === "auth/weak-password"){
          setError("La contraseña debe tener al menos 6 caracteres");
        }else if(error.code === "auth/invalid-email"){
          setError("El correo es invalido");
        }else if(error.code === "auth/email-already-in-use"){
          setError("Ese correo ya esta registrado");
        }}}

    
    const handleCancel = () =>{
        navigate('/')
        }
        
    return(
        <div >

       <section>
       <section className="errorSec">
          {error && <p className="error">{error}</p>}
          </section>
      
       <form id="inputSingIn">
       <input type="text" className="input" id="mailSignIn" name="email" placeholder='E-mail' onChange={handleChange} ></input>
       <input type="password" className="input" id="passwordSignIn" name="password" placeholder='Password' onChange={handleChange}></input> 
       </form>
       <section id="buttonSect">
       <button className="buttonHome" id="singIn"  onClick={handleSubmit}>Sing In</button>
       <button id="cancelB" onClick={handleCancel}>Cancelar</button>
       </section>
       </section>
   
    </div>
    )
}