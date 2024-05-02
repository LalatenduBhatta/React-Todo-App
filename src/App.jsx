import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TodoMain from './components/TodoMain'
import { TodoContext } from './context/TodoContext'


function App() {
  const [dark, setDark] = useState(false)
  return (
    <>
      <TodoContext>
        <Navbar dark={dark} setDark={setDark} />
        <TodoMain dark={dark} />
      </TodoContext>
    </>
  )
}

export default App