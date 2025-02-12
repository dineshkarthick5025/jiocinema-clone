import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './assets/pages/Home'
function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/home' element={<Home/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
