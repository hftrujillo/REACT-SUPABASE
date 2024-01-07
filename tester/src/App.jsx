
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CreateAccount } from './pages';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/Home" element = {<Home/>}/>
          <Route path = "/CreateAccount" element = {<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;