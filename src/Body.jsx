import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import AgendaSection from "./Components/AgendaSection/AgendaSection";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Mentors from "./Components/Mentors/Mentors";
import Countdown from "./Components/Countdown/Countdown";

export default function Body() {
  return (
    <>
      <div className="body">
        <NavBar />
        <Home />
        <Countdown />
        <Mentors/>
        <AgendaSection />
        <Contact/>
        <Footer />
      </div>
    </>
  );
}
