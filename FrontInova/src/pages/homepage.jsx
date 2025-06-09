import {Link} from "react-router-dom"
import { Navbar } from "../components/navar";


export function Home(){
  
    return (
      <Navbar>
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
          <div className="text-lg font-bold">
          <ul className="flex gap-6">
            <li className="hover:text-gray-300"><Link to="/loguin">Acceder</Link> </li>
            <li className="hover:text-gray-300">
              <Link to={"/registrer"}>  Registrate aquí!</Link>
            </li>
          </ul>
          </div>
        </nav>
        <footer className="bg-gray-900 text-white p-6 text-center mt-150">
          <p>© 2025 Mi Página - Todos los derechos reservados</p>
        </footer>
      </Navbar>
    );
}