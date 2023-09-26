import {Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import "./App.css";
import Sports from "./Pages/Sports";
import Cinema from "./Pages/Cinema";
import Finance from "./Pages/Finance";
import Science from "./Pages/Science";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import About from "./Pages/About";

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if(user){
          setAuthenticated(true);
        }else{
          setAuthenticated(false);
        }
        
      })
      return () => unsubscribe();
  }, [])

  return (
    <>
      
      <Routes >
        <Route path = "/" element = {<Landing authenticated={authenticated} />} />
        <Route path = "/signup"  element = { <Signup />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/sports" element={<Sports />} />
        <Route path = "/cinema" element={<Cinema/>} />
        <Route path = "/Finance" element={<Finance/>} />
        <Route path = "/Science" element={<Science/>} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  )
}

export default App
