import { useState, useEffect } from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Experience from "./components/Slider/Experience";
import Content from "./components/content/languages/Content";
import Frameworks from "./components/content/frameworks/Frameworks";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import BottomNavigation from "./components/header/BottomNavigation";
import "./index.css"

export default function App() {
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth < 768);
    }
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
      <div>
        {responsive ? <BottomNavigation/> : <Header/>}
        <Main/>
        <About/>
        <Experience/>
        <Content/>
        <Frameworks/>
        <Contact/>
      </div>
  );
}