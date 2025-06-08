
import { Micontexto } from "../components/context";
import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "../components/context";



export function VideosPage() {
  const { user } = useContext(Micontexto);
  const { sigin, isAutentificated } = UseAuth();
  const { SetAutentificated } = useContext(Micontexto);
  

  const salir =() =>{
    
    SetAutentificated(false)
};

  
  if(!isAutentificated) return <Navigate to={'/loguin'} replace/>
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="text-lg font-bold">
          <ul className="flex gap-6">
            <li className="hover:text-gray-300">{user.email}</li>
          </ul>
        </div>
      <button type="sumit" onClick={salir}
      className="bg-zinc-700 text-white px-3 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mx-25">Cerrar Sesión</button>
      </nav>

      <footer className="bg-gray-900 text-white p-6 text-center mt-150">
        <p>© 2025 Mi Página - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
