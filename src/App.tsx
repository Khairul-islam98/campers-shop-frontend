import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/navbar/Navbar"

function App() {


  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  )
}

export default App
