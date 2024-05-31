import { Outlet } from "react-router-dom"
import Header from "./components/global/Header/Header"

function App() {


  return (
    <>
      <div className="flex h-screen dark:bg-black flex-col">
        <Header />
          <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
