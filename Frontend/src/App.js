import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleDog from "./components/SingleDog";
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
function App() {
  return (
    <>
      <Navbar />
      <div className="float-left">
      <button onClick={goToTop} className='z-20 fixed-bottom btn' style={{width:"50px",height:"50px"}}><BsFillArrowUpCircleFill className="fw-bolder" /></button>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
