import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import OtherProjects from './pages/OtherProjects'
import TechSwitchProjects from './pages/TechSwitchProjects'
import './App.css'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techswitch-projects" element={<TechSwitchProjects/>} />
        <Route path="/other-projects" element={<OtherProjects />} />
      </Routes>
    </Router>
  )
}

export default App
