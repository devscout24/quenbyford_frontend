import FooterPage from "@/components/Footer"
import Navbar from "@/components/Header/_components/Navbar"
import { Outlet } from "react-router-dom"



const HomeLayout = () => {
  return (
    <div className="">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <FooterPage/>
    </div>
  )
}

export default HomeLayout
