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
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'YOUR_PROJECT_ID'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
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
