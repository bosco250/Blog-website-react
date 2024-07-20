 import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Banner from './assets/components/Banner'
import Footer from './assets/components/Footer'
 function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default App