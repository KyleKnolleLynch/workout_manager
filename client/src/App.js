import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App