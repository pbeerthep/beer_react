import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chatpage from "./pages/Chatpage";

 function Main(){
    return (
        <>
        <h1>Main Page</h1>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/chatpage">Chatpage</Link>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/chatpage" element={<Chatpage/>} />

        </Routes>
        </>
    );
    
 }
 export default Main;