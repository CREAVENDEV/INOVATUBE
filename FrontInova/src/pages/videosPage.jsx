
import { Link } from "react-router-dom";
import { Micontexto } from "../components/context";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../components/context";


export function VideosPage() {
  const { user } = useContext(Micontexto);
  const navigation = useNavigate();
  const { sigin, isAutentificated } = UseAuth();
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="text-lg font-bold">
          <ul className="flex gap-6">
            <li className="hover:text-gray-300">{"Nada"}</li>
          </ul>
        </div>
        <button
          type="submit"
          className="bg-zinc-700 text-white px-3 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 
          active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mx-1"
          
        >
          Cerrar Sesión
        </button>
      </nav>

      <footer className="bg-gray-900 text-white p-6 text-center mt-150">
        <p>© 2025 Mi Página - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
