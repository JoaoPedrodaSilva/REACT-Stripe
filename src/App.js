import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Hero from "./Hero"
import Submenu from "./Submenu"

function App() {
  return (
    <main className="app">
      <Navbar />     
      <Sidebar />
      <Hero />
      <Submenu />
    </main>
  )
}

export default App