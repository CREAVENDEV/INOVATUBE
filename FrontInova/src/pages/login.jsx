import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";

export function Log(){
    const { register, handleSubmit } = useForm();
    return (
      <div className="bg-zinc-800 max-w-md p-10 rounded-md mt-40 mx-130">
        
        <link href="/src/index.css" rel="stylesheet"></link>
        <form
          

        >
          <input
            type="text"
            
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          <input
            type="password"
            
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Pass"
          />
          <button
            type="submit"
            className="bg-zinc-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mx-25 my-20"
          >Iniciar</button>
        </form>
        <Link to="/">Regresar</Link>
      </div>
    );
}














