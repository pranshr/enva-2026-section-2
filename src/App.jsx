import About from "./Components/About";
import Events from "./Components/Events";


function App() {

  return (
    <div className="bg-[#010101] flex flex-col items-center">
      <About />
      <div className="border-b-1 border-gray-800 w-full"></div>
      <Events />
    </div>
  )
}

export default App
