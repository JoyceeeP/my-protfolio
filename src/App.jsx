import  Home  from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {


  return (
    <>
       {/* <div className="w-full flex items-center justify-center p-4">
        <h1 className="text-[#4B164C]">Joycelyn Peneira</h1>
      </div> */}
      < Navbar />
      < Home />
      < About />
      < Services />
      < Contact />
      


    </>
    
  )
}

export default App
