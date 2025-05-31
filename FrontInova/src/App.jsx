import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {VideosPage} from './pages/videosPage';
import {VideosForm} from './pages/videosForm';

function App(){
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/Videos" element={<VideosPage />} />
        <Route path="/Formularios" element={<VideosForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;