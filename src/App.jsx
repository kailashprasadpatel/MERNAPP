import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home";
import Signin from "./pages/signin";
import SignUp from "./pages/signUp";
import About from "./pages/about";
import Profile from "./pages/profile";

export default function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Home />}></Route>
      <Route  path="/signin" element={<Signin />}></Route>
      <Route  path="/signUp" element={<SignUp />}></Route>
      <Route  path="/about" element={<About />}></Route>
      <Route  path="/profile" element={<Profile />}></Route>

     </Routes>
    
    </BrowserRouter>
  )
}