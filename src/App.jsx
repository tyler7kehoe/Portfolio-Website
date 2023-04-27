// use npm run dev to start
import { useState } from 'react'
import './css/Home.css'
import { Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { About } from './components/About'
import Header from './components/Header'



function App() {
  // to add a new route, import the component above and create path below.
  return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </>
  );
}

export default App
