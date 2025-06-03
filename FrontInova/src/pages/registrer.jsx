import {Link} from "react-router-dom"
import { useForm }  from "react-hook-form"

import {registerrequest} from '../api/auth'

export function Registrer(){
    const {register,handleSubmit} = useForm()
    return (
      <div className="bg-zinc-800 max-w-md p-10 rounded-md mt-40 mx-130">
        <h1>Registrece por favor</h1>
        <link href="/src/index.css" rel="stylesheet"></link>

        <form
          onSubmit={handleSubmit(async (values) => {
            console.log(values);
            const res = await registerrequest(values);
            console.log(res);
          })}
        >
          <input
            type="text"
            {...register("nombre", { required: true })}
            className="w-full bg-zinc-700  text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Pass"
          />

          <input
            type="email"
            {...register("correo", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />

          <button
            type="submit"
            className="bg-zinc-700 text-white px-3 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mx-25"
          >
            Registrar
          </button>
        </form>
        <Link
          
          to="/"
        >Regresar
        </Link>
      </div>
    );
}