import React from 'react';
import {Link} from 'react-router-dom'

function Inicio() {
  const handlePropositoClick = () => {
    // Aquí puedes agregar la lógica para el botón "Propósito de Entrenamiento"
    
  };

  const handlePaquetesClick = () => {
    // Aquí puedes agregar la lógica para el botón "Paquetes"
    alert('Botón "Paquetes" clicado');
  };

  const handleInformacionClick = () => {
  //gym info por si algo
  };

  const handleUsuariosClick = () => {
    // Aquí puedes agregar la lógica para el botón "Usuarios"
   
  };

  const handleHorariosClick = () => {
    // Aquí puedes agregar la lógica para el botón "Horarios"
    alert('Botón "Horarios" clicado');
  };

  const handleCancelarClaseClick = () => {
    // Aquí puedes agregar la lógica para el botón "Cancelar Clase"
    alert('Botón "Cancelar Clase" clicado');
  };

  const handleBloquearUsuariosClick = () => {
    // Aquí puedes agregar la lógica para el botón "Bloquear Usuarios"
    alert('Botón "Bloquear Usuarios" clicado');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Página Principal</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/Proposito">

        <button
          onClick={handlePropositoClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Propósito de Entrenamiento
        </button>
        </Link>
        <button
          onClick={handlePaquetesClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Paquetes
        </button>
        <Link to="/Info">
        <button
          onClick={handleInformacionClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Información del Gimnasio
        </button>
        </Link >

        
        <button
          onClick={handleUsuariosClick}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Usuarios
        </button>
        
        
        <button
          onClick={handleHorariosClick}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Horarios
        </button>
        <button
          onClick={handleCancelarClaseClick}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Cancelar Clase
        </button>
        <button
          onClick={handleBloquearUsuariosClick}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Bloquear Usuarios
        </button>
        <Link to="/">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg"
        >
          Salir
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;