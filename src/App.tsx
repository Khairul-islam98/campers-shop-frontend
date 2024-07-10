import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/navbar/Navbar"
import Footer from "./components/shared/footer/Footer"

function App() {


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
