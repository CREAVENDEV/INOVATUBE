import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Home} from './pages/homepage';
import {Log} from './pages/login';
import {VideosPage} from './pages/videosPage';
import {Registrer} from './pages/registrer';
/*import {AppYT} from './components/Apiyoutube'*/



function App(){
  return ( 
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loguin" element={<Log/>}/>
        <Route path="/registrer" element={<Registrer/>} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;