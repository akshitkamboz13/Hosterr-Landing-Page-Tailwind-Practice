import React from 'react'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-amber-50 min-h-screen  pt-5 px-10 lg:p-20 lg:px-52"  >
      <Nav />
      <Body />
      <Footer />
    </div>
  )
}

export default App
