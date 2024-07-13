import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/navbar/Navbar"
import Footer from "./components/shared/footer/Footer"
import useBeforeUnload from "./hook/useBeforeUnload";

function App() {
  useBeforeUnload({ message: 'You have items in your cart. Are you sure you want to leave without completing your purchase?' });

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
