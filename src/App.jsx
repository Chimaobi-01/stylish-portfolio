import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import Navbar from './components/navbar/Navbar'
import Themes from './components/themes/Themes'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
