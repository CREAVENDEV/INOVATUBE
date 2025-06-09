
import { Micontexto } from "../components/context";
import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { useForm }  from "react-hook-form"
import { UseAuth } from "../components/context";
import YouTube from "react-youtube";
import { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyCIsThbJnY7SfbOBoleBlNORRYYLPcqm0w";
export function VideosPage() {
  
  const {register,handleSubmit,watch,formState:{errors}} = useForm()
  const { user } = useContext(Micontexto);
  const { sigin, isAutentificated } = UseAuth();
  const { SetAutentificated } = useContext(Micontexto);
   const [query, setQuery] = useState("Informatica");
 const [videos, setVideos] = useState([]);

  const salir =() =>{
    SetAutentificated(false)
  };
  
 const buscar=handleSubmit(async (values) => {
   console.log(values)
   })

  const fetchVideos = async () => {
  try {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=5&q=${query}&regionCode=MX&safeSearch=moderate&key=${API_KEY}`
    );
    setVideos(response.data.items);
  } catch (error) {
    console.error("Error al obtener videos:", error);
  }
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
      className="bg-zinc-700 text-white px-3 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mx-25 mt-10">Cerrar Sesión</button>
      </nav>

  <input
   type="text"
   value={query}
   onChange={(e) => setQuery(e.target.value)}
   placeholder="Buscar en YouTube..."
   className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mx-130 mt-15"
 />
 <button onClick={fetchVideos} className="bg-zinc-700 text-white px-8 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-10 mx-170">
   Buscar
 </button>
 <ul>
   {videos.map((video) => (
     <div >
     <li className="m-1" key={video.id.videoId}>{<YouTube className="m-1 p-20 w-40" videoId={video.id.videoId}/>}</li>
     </div>
   ))}
 </ul>

      <footer className="bg-gray-900 text-white p-6 text-center mt-150">
        <p>© 2025 INNOVATUBE - Todos los derechos reservados</p>
      </footer>

  </div>
  )
}