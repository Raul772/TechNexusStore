import { Outlet } from "react-router-dom"
import Header from "./components/global/Header/Header"
import Footer from "./components/global/Footer/Footer"

function App() {


  return (
    <>
      <div className="flex min-h-screen justify-between dark:bg-black flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
