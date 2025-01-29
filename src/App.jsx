import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/header'
import Footer from './Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
