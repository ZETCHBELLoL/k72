import React from 'react'
import { Link, Links, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agency from './pages/Agency.jsx'
import Work from './pages/Work.jsx'

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </div>
  )
}

export default App