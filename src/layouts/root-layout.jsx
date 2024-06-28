import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 ">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default RootLayout
