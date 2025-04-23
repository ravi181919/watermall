import React from 'react'
import Home from './components/Home'
import Footer from './components/template/Footer'
const App = () => {
  return (
    <div className="dark:bg-black/85 bg-white/85 dark:text-white/85 text-black/85 lg:w-full">
      <Home />
      {/* <Footer /> */}
    </div>
  )
}

export default App

