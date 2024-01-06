
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/Home" element = {<Home/>}/>
          <Route path = "/Login" element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;