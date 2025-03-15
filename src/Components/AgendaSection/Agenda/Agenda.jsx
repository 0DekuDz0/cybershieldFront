import { useEffect, useState } from "react";
import AgendaRow from "./AgendaRow/AgendaRow";
import "./Agenda.css";

export default function Agenda() {
  const [currentDay, setCurrentDay] = useState(0); 

  const Days = [
    [
      { place: "CyberSpace Entry", time: "17h-18h", description: "<Check_In>" },
      {
        place: "CyberSpace Hall",
        time: "18h-19h",
        description: "<Opening_ceremony>",
      },
      {
        place: "CyberSpace Hall",
        time: "19h-21h",
        description: "<Hackathon_start>",
      },
      { place: "CyberSpace Canteen", time: "21h-22h", description: "<Break>" },
      { place: "CyberSpace Hall", time: "22h-00h", description: "<Hackathon>" },
    ],
    [
      { place: "CyberSpace Hall", time: "00h-01h", description: "<Hackathon>" },
      { place: "CyberSpace Canteen", time: "01h-02h", description: "<Break>" },
      { place: "CyberSpace Hall", time: "02h-08h", description: "<Hackathon>" },
      { place: "CyberSpace Canteen", time: "08h-09h", description: "<Break>" },
      { place: "CyberSpace Hall", time: "09h-12h", description: "<Hackathon>" },
      { place: "CyberSpace Canteen", time: "12h-14h", description: "<Break>" },
      { place: "CyberSpace Hall", time: "14h-17h", description: "<Hackathon>" },
      { place: "CyberSpace Canteen", time: "17h-19h", description: "<Break>" },
      { place: "CyberSpace Hall", time: "19h-21h", description: "<Hackathon>" },
      { place: "CyberSpace Canteen", time: "21h-00h", description: "<Break>" },
    ],
    [
      { place: "CyberSpace Hall", time: "00h-01h", description: "<Hackathon>" },
      { place: "CyberSpace Canteen", time: "01h-02h", description: "<Break>" },
      { place: "CyberSpace Hall", time: "02h-08h", description: "<Hackathon>" },
      { place: "CyberSpace Hall", time: "08h-09h", description: "<Break>" },
      { place: "CyberSpace Hall", time: "09h-12h", description: "<Hackathon>" },
      {
        place: "CyberSpace Canteen",
        time: "12h-16h",
        description: "<Presentation>",
      },
      {
        place: "CyberSpace Hall",
        time: "16h-17h",
        description: "<Closing_ceremony>",
      },
    ],
  ];

  const nextDay = () => {
    setCurrentDay((prev) => (prev + 1) % Days.length); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextDay();
    }, 10000);
    return () => clearInterval(interval);
  },[]);


  return (
    <div className="agenda">
      <div className="day-section">
        <div className="day">
          <h2>{`Day ${currentDay+ 1}`}</h2>
        </div>
        <div className="agendaTable">
          {Days[currentDay].map((agenda, i) => (
            <AgendaRow
              key={i}
              place={agenda.place}
              time={agenda.time}
              description={agenda.description}
            />
          ))}
        </div>
      </div>
      <div className="pointContainer">
      {Days.map((_, index) => (
          <div key={index} className={`point ${index === currentDay ? "pointActive" : ""}`}></div>
        ))}
      </div>
    </div>
  );
}
