import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}
export default App
