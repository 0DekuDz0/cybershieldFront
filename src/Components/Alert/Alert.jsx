import { useState } from "react";
import "./Alert.css";
export default function Alert({ showAlertRef }) {
  const [visibilityAlert, setVisibilityAlert] = useState(false);
  const [message, setMessage] = useState("");

  function showAlert(newMessage) {
    console.log("showAlert", newMessage);
    setMessage(newMessage);
    setVisibilityAlert(true);

    setTimeout(() => {
      setVisibilityAlert(false); // Hide alert after 3 seconds
    }, 3000);
  }

  showAlertRef.current = showAlert;

  return (
    <>
      <div
        className="alerte"
        style={{ display: visibilityAlert ? "flex" : "none" }}
      >
        <h1>Message</h1>
        <div className="alerte-content">{message}</div>
      </div>
    </>
  );
}
