import "./AgendaSection.css";
import Agenda from "./Agenda/Agenda";
export default function AgendaSection() {
  return (
    <>
      <div className="agendaSection" id="agenda">
        <div>
          <h3 className="sectionTitle">{`<Hackathon_agenda>`}</h3>
          <h1 className="mentorsTitle">
            Here's what you can <br></br>expect on D-Day
          </h1>
        </div>
        <Agenda></Agenda>
      </div>
      
    </>
  );
}
