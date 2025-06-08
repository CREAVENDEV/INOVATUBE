import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ContextoProvider } from "./components/context";
import {Home} from './pages/homepage';
import {Log} from './pages/login';
import {VideosPage} from './pages/videosPage';
import {Registrer} from './pages/registrer';




function App(){
  return (
    <ContextoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loguin" element={<Log />} />
          <Route path="/registrer" element={<Registrer />} />

         
          <Route path="/videos" element={<VideosPage />} />
          
          
        </Routes>
      </BrowserRouter>
    </ContextoProvider>
  );
}

export default App;