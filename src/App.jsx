import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <div className='overflow-hidden'>
      {/* <Navbar/> */}
      <Homepage/>
    <Footer/>
    </div>
    </>
  )
}

export default App