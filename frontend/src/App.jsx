import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import User from "./components/User"
import { useEffect, useState } from "react"
import { isWalletConnected } from "./components/Blockchains"

function App() {

const [loaded, setLoaded] = useState(false)

useEffect(() => {
  const loadData = async () => {
    console.log('Blockchain loaded');
    await isWalletConnected();
    setLoaded(true);
  };
  loadData();
}, []);
  return (
  
     <div className='min-h-screen'>
      <div
    className=" p-8 md:px-40 bg-blue-700"
    >
   {/* <Navbar/> */}
   <Hero />
   <User/>
    </div>
  </div>
  )
}

export default App
