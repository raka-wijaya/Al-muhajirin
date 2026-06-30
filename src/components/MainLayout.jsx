import Navbar from "./Navbar"
import ScrollToTop from "../components/ScrollToTop"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
        <ScrollToTop />
        <Navbar />
        <main>
            <Outlet />
        </main> 
    </>
  )
}

export default MainLayout