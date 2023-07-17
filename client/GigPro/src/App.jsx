import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home';
import AddFreelancer from './Pages/AddFreelancer';
import MyFreeLancers from './Pages/MyFreelancers'
import Stream from './Pages/Stream'
import Manage from './Pages/Manage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='add' element={<AddFreelancer/>}/>
        <Route path='manage' element={<Manage/>}/>
        <Route path='stream' element={<Stream/>}/>
        <Route path='myFreelancer' element={<MyFreeLancers/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
