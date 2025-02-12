

import './App.css'
import LoginPage from './pages/Login';
import Homepage from './pages/Home';
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
   
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  
    </>
  )
}

export default App
