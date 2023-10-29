import { Auth } from './config';
import { createContext, useContet, useContext } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './config'

export const authContext = createContext();

export const useAuth=()=>{
   const context= useContext(authContext)
   return context;
}

export function AuthProvider({children}){

    const signup=(correo, pass)=>createUserWithEmailAndPassword(auth, correo,pass);

    const login=(correo,pass)=>signInWithEmailAndPassword(auth,correo,pass)

    return<authContext.Provider value={{signup,login}}>{children}</authContext.Provider>;
}

