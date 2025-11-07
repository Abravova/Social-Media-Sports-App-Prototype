import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

// Page imports
import Layout from './pages/Layout';
import Root from './pages/Root';
import Games from './pages/Games';
import Stats from './pages/Stats';
import Social from './pages/Social';

function App() {
  return (
    <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Root />} />
        <Route path='/games' element={<Games />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/social' element={<Social />} />
      </Route>
    </Routes>
    </Router>
  )
}

export default App;