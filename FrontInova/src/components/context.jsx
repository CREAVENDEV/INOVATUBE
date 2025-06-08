import {useState,useContext,createContext} from 'react'
import { registerrequest, loginRequest } from "../api/auth";

export const Micontexto=createContext();

export const UseAuth = () =>{
    const contex = useContext(Micontexto)
    if (!contex) {
        throw new Error("Error de Autorizacion")
    }
    return contex;
}

export const ContextoProvider = ({children}) =>{
    const [user,userState] = useState(null)
    const [isAutentificated,SetAutentificated] =useState(false)
    const [errors,setError] = useState(null)

    const Sigup = async (user) =>{
        try {
          const res = await registerrequest(user);
          
          alert("¡Registro exitoso!");
          userState(user);
          SetAutentificated(true)
        } catch{
          alert("Error de Captura") 
        }   
    }

    const sigin = async (user) => {
      try{
        const res = await loginRequest(user);
        userState(user);
        SetAutentificated(true);
      }catch{
        alert("Usuario Incorrecto");

      }  
    };

    const closer = async (user) => {
        userState(user);
        SetAutentificated(false);
      
    };


    return (
      <Micontexto.Provider value={{ user, Sigup, sigin,closer, isAutentificated }}>
        {children}
      </Micontexto.Provider>
    );
}