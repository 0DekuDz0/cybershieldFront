import "./NavBar.css";
import Register from "../Register/Register";
import { useState } from "react";
export default function NavBar() {

    const [showRegister, setShowRegister] = useState("invisible");
    const element = document.getElementById("registerForm");



  return (
    <>
      <div className="nav">
        <div className="Logo">
          <h1>
            Cyber<span>Shield</span>
          </h1>
        </div>
        <div className="navLinks">
          <ul>
            <li><h3>Home</h3></li>
            <li><h3>Mentors</h3></li>
            <li><h3>Agenda</h3></li>
            <li><h3>Contact</h3></li>
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
