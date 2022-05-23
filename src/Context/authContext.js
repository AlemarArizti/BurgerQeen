import { createContext,useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,} from 'firebase/auth';
import {auth} from '../firebase';

export const authContext = createContext();


export const useAuth = () =>{
 const context= useContext(authContext)
 if(!context) throw new Error("There is not auth provider")
 return context;
}

export function AuthProvider ({children}){
    const[user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    /*Crear cuuenta*/
const signup = ( email, password) =>
createUserWithEmailAndPassword(auth, email, password)

/*Iniciar sesión*/
const login =(email, password) =>
    signInWithEmailAndPassword(auth, email, password);

    useEffect(() =>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
      },[])

      /*Cerrar sesión*/
    const logout = () => signOut(auth)

    return(
        <authContext.Provider value={{signup, login, logout, loading, user }}>
           {children}
        </authContext.Provider>
    )
}