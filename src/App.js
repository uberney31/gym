import './App.css';
import React from "react";
import Form from './components/Form';
import RegistroU from './components/RegistroU';
import Olvidar from './components/Olvidar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Inicio from './components/Inicio';
import InfoGym from './components/InfoGym';
import Proposito from "./components/Proposito";
import { AuthProvider } from './firebase/context';






function App() {
  return (
  
       <Router>
        <AuthProvider>
        <Routes>
              
              <Route path='/registro' element={<RegistroU/>}/>
              <Route path='/' element={<Form/>}/>
              <Route path='/Olvidaste' element={<Olvidar/>}/>
              <Route path='/Inicio' element={<Inicio/>}/>
              <Route path='/Info' element={<InfoGym/>}/>
              <Route path='/Proposito' element={<Proposito/>}/>

          </Routes>
        </AuthProvider>
           
        </Router>

      
        
  );
}

export default App;
