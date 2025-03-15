import "./NavBar.css";
import Register from "../Register/Register";
import { useState } from "react";
export default function NavBar() {

    const [showRegister, setShowRegister] = useState("invisible");
    const element = document.getElementById("registerForm");
    const [showMenu, setShowMenu] = useState("invisible");


  return (
    <>
      <div className="nav">
        <div className="Logo">
          <h1>
            Cyber<span>Shield</span>
          </h1>
        </div>
        <div className="navLinksPhone">
            <div className="navLinksIcon" onClick={()=>{ showMenu === "invisible" ? setShowMenu("visible") : setShowMenu("invisible")}}>
                <img src="/menu-phone.svg" alt="menu icon" />
            </div>
            <ul className={`linksPhone-${showMenu}`}>
              <li><a href="#home"><h3>Home</h3></a></li>
              <li><a href="#mentors"><h3>Mentors</h3></a></li>
              <li><a href="#agenda"><h3>Agenda</h3></a></li>
              <li><a href="#contact"><h3>Contact</h3></a></li>
            </ul>
        </div>
        <div className="navLinks">
          <ul>
            <li><a href="#home"><h3>Home</h3></a></li>
            <li><a href="#mentors"><h3>Mentors</h3></a></li>
            <li><a href="#agenda"><h3>Agenda</h3></a></li>
            <li><a href="#contact"><h3>Contact</h3></a></li>
          </ul>
        </div>
        <div className="registerButton">
          <button  onClick={()=>{
            showRegister === "invisible" ? setShowRegister("visible") : setShowRegister("invisible")
          }}><h2>Register</h2></button>
        </div>
      </div>
      <div className={`registerForm-${showRegister}`} id="registerForm">
        <Register element={element}></Register>
      </div>
    </>
  );
}
