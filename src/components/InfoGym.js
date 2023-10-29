import React from 'react';
import {Link} from 'react-router-dom'

function GymInfoPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Información del Gimnasio</h1>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-12">
          <div className="md:w-1/2 p-6">
            <img
              src="https://media.istockphoto.com/id/1277242852/es/foto/sosteniendo-el-peso-y-sentado.jpg?s=2048x2048&w=is&k=20&c=d6u4PALh2Tq6t2KO5piAMv1tzdqy9o9rAO46v1-EAzU="
              alt="Imagen del gimnasio"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4">Horarios de Clases</h2>
            <ul className="list-disc pl-4">
              <li>Lunes: 8:00 AM - 10:00 PM</li>
              <li>Martes: 8:00 AM - 10:00 PM</li>
              <li>Miércoles: 8:00 AM - 10:00 PM</li>
              <li>Jueves: 8:00 AM - 10:00 PM</li>
              <li>Viernes: 8:00 AM - 10:00 PM</li>
              <li>Sábado: 9:00 AM - 7:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            Nuestro gimnasio ofrece una amplia variedad de clases de fitness, equipos de última generación y entrenadores profesionales para ayudarte a alcanzar tus objetivos de salud y bienestar.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
            ¡Únete a Nuestra Comunidad!
          </button>
          <Link to="/Inicio">
                        <button className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Devolverse</button>                      
                        </Link>
        </div>
      </div>
    </div>
  );
}

export default GymInfoPage;
