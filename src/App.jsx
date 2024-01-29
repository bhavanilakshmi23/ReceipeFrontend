import React, { useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from './components/Signin'
import Signup from './components/Signup'
import ReceipeList from "./components/ReceipeList"
import AddReceipes from "./components/AddReceipes"
import EditReceipes from "./components/EditReceipes"
import Home from "./components/Home"





function App() {
  const [receipes, setReceipes] = useState([])

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/receipelist" element={<ReceipeList/>} />
        <Route path="/receipes/AddReceipes" element={<AddReceipes setReceipes={setReceipes}/>}/>
      <Route path="/receipes/EditReceipes/:id" element={<EditReceipes />}/>
      
      </Routes>

      </BrowserRouter>
 
  )
}

    
 
export default App

