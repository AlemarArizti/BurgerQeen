import { useNavigate } from "react-router-dom"
import {useAuth} from "../Context/authContext"

export default function SignIn(){
    const navigate = useNavigate(); 
    const {logout}=useAuth()
   

   const handleLogout = async() =>{
     await logout() 
     navigate("/")
   }; 
    return(
        <div >
    <h1>Menu</h1>

  <button>Desayuno</button>
  <button>Almuerzo y Cena</button>

  <button onClick={handleLogout}>Log out</button>
    </div>

    
    )
}