import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { UseAuth } from "../components/context";
import { loginRequest } from "../api/auth";



export function Log(){
  const { register, handleSubmit } = useForm();
  const navigation =useNavigate()  
  const [captchaValue, setCaptchaValue] = useState(null);
  const { sigin, isAutentificated } = UseAuth();

  useEffect(() => {
    if (isAutentificated) navigation("/videos");
  }, [isAutentificated]);

 
  const inSub = handleSubmit(async (values) => {
    sigin(values)
    console.log(values)
    });

    function onChange(value) {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  }

    function handleLogin(data) {
    if (!captchaValue) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }
    console.log("Datos del formulario:", data);
  }

  /// Funciones de integracion con Re Catcha
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md mt-40 mx-130">
      <link href="/src/index.css" rel="stylesheet"></link>
      <form onSubmit={inSub}>
        <input
          type="text"
          {...register("email")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="email"
        />
        <input
          type="password"
          {...register("password")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Pass"
        />
       
        <ReCAPTCHA
          sitekey="6LfK4lMrAAAAAElrnGsqvpg4JKae9jZcS7hrMFSA"
          onChange={onChange}
        />
       
       
        <button
          type="submit"
          className="bg-zinc-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mx-25 my-20"
        >Iniciar
        </button>
      </form>
      <Link to="/">Regresar</Link>
    </div>
  );
}














