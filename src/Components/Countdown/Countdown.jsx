import { useState } from "react";
import "./Countdown.css";
export default function Countdown() {

    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return(
        <>
            <div className="countdown">
            <div className="countdownHeader">
                <h3 className="sectionTitle">{`<Hackathon_date>`}</h3>
                <h1 className="countdownTitle">Countdown</h1>
            </div>
            <div  className="countdownContainer"> 
                <div>
                    <h1 className="time">{months}</h1>
                    <h3>Months</h3>
                </div>
                <div>
                    <h1 className="time">{days}</h1>
                    <h3>Days</h3>
                </div>
                <div>
                    <h1 className="time">{hours}</h1>
                    <h3>Hours</h3>
                </div>
                <div>
                    <h1 className="time">{minutes}</h1>
                    <h3>Minutes</h3>
                </div>
                <div>
                    <h1 className="time">{seconds}</h1>
                    <h3>Seconds</h3>
                </div>
            </div>
            </div>
        </>
    )
}
