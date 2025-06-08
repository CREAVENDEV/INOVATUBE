import {Link} from "react-router-dom"
import { useForm }  from "react-hook-form"
import { useState, useEffect } from "react";
import { UseAuth } from "../components/context";
import {useNavigate} from 'react-router-dom'

export function Registrer(){
    const {register,handleSubmit,watch,formState:{errors}} = useForm()
    const { Sigup, isAutentificated } = UseAuth();
    const navigation =useNavigate()
    
    useEffect(() => {
      if (isAutentificated) navigation("/videos")
    }, [isAutentificated])

    const password = watch("password"); /*Se usa para declarar el widget a evaluar */

    const onSub =handleSubmit( (values) => {
      console.log(values)
      Sigup(values)
    })
    
    return (
      <div className="bg-zinc-800 max-w-md p-10 rounded-md mt-40 mx-130">
        <h1>Registrece por favor</h1>
        <link href="/src/index.css" rel="stylesheet"></link>

        <form onSubmit={onSub}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />

          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Pass"
          />
          {errors.password && (
            <p className="w-full bg-red-700 text-white px-4 py-2 rounded-md my-2">
              {errors.password.message}
            </p>
          )}

          <input
            type="password"
            {...register("confirmPassword", {
              required: "Debes confirmar la contraseña",
              validate: (value) =>
                value === password || "Las Contraseñas no coinciden",
            })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Confirm Pass"
          />
          {errors.confirmPassword && (
            <p className="w-full bg-red-700 text-white px-4 py-2 rounded-md my-2">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-zinc-700 text-white px-3 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mx-25"
          >
            Registrar
          </button>
        </form>
        <Link to="/">Regresar</Link>
      </div>
    );
}