import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
