import { Outlet } from "react-router-dom"

function App() {


  return (
    <>
      <div className="flex h-full flex-col">
        <Header />
          <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
