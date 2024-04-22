import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import Verification from './Components/Verification';
import Destinations from './Components/Destinations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/verification' element={<Verification/>}/>
        <Route path='/destination' element={<Destinations/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
