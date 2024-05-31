import { Outlet } from "react-router-dom"
import Header from "./components/global/Header/Header"
import Footer from "./components/global/Footer/Footer"

function App() {


  return (
    <>
      <div className="flex min-h-screen dark:bg-black flex-col justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
