
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CreateAccount, Payment } from './pages';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/Home" element = {<Home/>}/>
          <Route path = "/CreateAccount" element = {<CreateAccount/>}/>
          <Route path = "/Payment" element = {<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;