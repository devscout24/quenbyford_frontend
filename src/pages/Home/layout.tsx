import FooterPage from "@/components/Footer"
import Navbar from "@/components/Header/_components/Navbar"
import { Outlet, ScrollRestoration } from "react-router-dom"
import JuanAIChat from "@/components/JuanAIChat"

const HomeLayout = () => {
  return (
    <div className="">
      <ScrollRestoration />
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <FooterPage/>
      <JuanAIChat />
    </div>
  )
}

export default HomeLayout
