import { useNavigate } from "react-router-dom";
import {useAuth} from "../Context/authContext"


export default function LogIn(){
 const {user} =useAuth();
  console.log(user); 
    
  
   const navigate = useNavigate();
   const handleSignIn = () =>{
    navigate('/SignIn')
    }
    return(
        <div className="App">
    
        <section>
       <form id="inputSingIn" >
       <input type="text" className="input" id="mail" name="email" placeholder='E-mail' ></input>
       <input type="password" className="input" id="passwordLogin" name="password" placeholder='Password'></input>
       </form>
       </section>

        <section id="buttonSect">
        <button className="buttonHome" id="login" >Login</button>
        <button id="cancelB" onClick={handleSignIn}>Sign In</button>
        </section>
 
       
 
     
        
     </div>
    )
}