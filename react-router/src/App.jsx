import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Services from './Components/Services'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import User from './Components/User'
import ErrorPage from './Components/ErrorPage'
import BootNavbar from './Components/BootNavbar'

function App() {

  return (
    <>
        <Router>
          <BootNavbar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/student/:name" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer/>
        </Router>
    </>
  )
}

export default App
