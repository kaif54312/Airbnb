
import { Route,Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './Pages/IndexPages.jsx'
import LoginPage from './Pages/LoginPages.jsx'
import Layout from './Layout.jsx'
import RegisterPage from './Pages/RegisterPages.jsx'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:5173'
function App() {
  
  return (
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element ={<IndexPage/>} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
    
  )
}

export default App

// className="w-6 h-6 relative top-1"