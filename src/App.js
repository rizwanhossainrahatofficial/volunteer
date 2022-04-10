import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import RegisteredEvent from './components/RegisteredEvent/RegisteredEvent';
import Admin from './components/Admin/Admin';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div >
      
    
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/event" element={<RegisteredEvent />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />  
        </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
