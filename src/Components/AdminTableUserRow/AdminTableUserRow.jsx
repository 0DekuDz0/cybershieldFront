import "./AdminTableUserRow.css";
import { useState, useRef } from "react";
import Alert from "../Alert/Alert";

export function AdminTableUserRow({ data }) {
  const alertRef = useRef(null);

  const [visible, setVisible] = useState(false);

  const [participant_name, setParticipant_name] = useState(
    data.participant_name || ""
  );
  const [participant_email, setParticipant_email] = useState(
    data.participant_email || ""
  );
  const [participant_phone, setParticipant_phone] = useState(
    data.participant_phone || ""
  );
  const [participant_dateOfBirth, setParticipant_dateOfBirth] = useState(
    data.participant_dateOfBirth || ""
  );
  const [participant_skills, setParticipant_skills] = useState(
    data.participant_skills || ""
  );
  const [participant_linkedin, setParticipant_linkedin] = useState(
    data.participant_linkedin || ""
  );
  const [participant_github, setParticipant_github] = useState(
    data.participant_github || ""
  );
  const [participant_portfolio, setParticipant_portfolio] = useState(
    data.participant_portfolio || ""
  );
  const [participant_haveParticipated, setParticipant_haveParticipated] =
    useState(data.participant_haveParticipated || "");
  const [participant_team_id, setParticipant_team_id] = useState(
    data.participant_team_id || "No Team"
  );
  const [participant_status, setParticipant_status] = useState(
    data.participant_status || ""
  );

  async function accept() {
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URI;
      const res = await fetch(`${API_URL}/api/update_participant/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participant_id: data.participant_id,
          participant_status: "Accepted",
          participant_name: participant_name,
          participant_email: participant_email,
          participant_phone: participant_phone,
          participant_dateOfBirth: participant_dateOfBirth,
          participant_skills: participant_skills,
          participant_linkedin: participant_linkedin,
          participant_github: participant_github,
          participant_portfolio: participant_portfolio,
          participant_haveParticipated: Boolean(participant_haveParticipated),
          participant_team: participant_team_id,
        }),
        credentials: "include",
      });

      if (res.ok) {
        data.participant_status = "Accepted";
        alertRef.current("Participant Accepted");
        console.log("Participant Accepted", res);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function update() {
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URI;
      const res = await fetch(`${API_URL}/api/update_participant/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participant_id: data?.participant_id,
          participant_status: data?.participant_status,
          participant_name: participant_name,
          participant_email: participant_email,
          participant_phone: participant_phone,
          participant_dateOfBirth: participant_dateOfBirth,
          participant_skills: participant_skills,
          participant_linkedin: participant_linkedin,
          participant_github: participant_github,
          participant_portfolio: participant_portfolio,
          participant_haveParticipated: Boolean(participant_haveParticipated),
          participant_team: participant_team_id,
        }),
        credentials: "include",
      });

      if (res.ok) {
        data.participant_status = "Accepted";
        alertRef.current("Participant Updated");
        console.log("Participant Accepted", res);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteParticipant() {
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URI;
      const res = await fetch(`${API_URL}/api/delete_participant/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participant_id: data.participant_id,
        }),
        credentials: "include",
      });

      if (res.ok) {
        alertRef.current("Participant Deleted");

        console.log("Participant Deleted", res);
      } else {
        alertRef.current("Failed to delete participant");
        console.error("Failed to delete participant", res.status);
      }
    } catch (err) {
      alertRef.current("Error deleting participant");
      console.log("Error deleting participant:", err);
    }
  }

  return (
    <>
      <Alert showAlertRef={alertRef} />

      <div
        className={`tableRow ${
          visible ? "tableRow-visible" : "tableRow-invisible"
        }`}
      >
        <div className="description">
          <h3 className="id">{data?.participant_id}</h3>
          <h3 className="name">{data?.participant_name}</h3>
          <h3 className="email">{data?.participant_email}</h3>
          <h3 className="status">{data?.participant_status}</h3>
          <div className="more" onClick={() => setVisible(!visible)}>
            <img
              src="/Polygon.svg"
              alt="more icon"
              className={`${visible ? "rotation" : ""}`}
            />
          </div>
        </div>
        {visible && (
          <div
            className={`info ${visible ? "info-visible" : "info-invisible"}`}
          >
            <div className="two-info-row">
              <div className="info-row">
                <h3>Phone Number:</h3>
                <input
                  type="number"
                  value={participant_phone}
                  onChange={(e) => {
                    setParticipant_phone(e.target.value);
                  }}
                />
              </div>
              <div className="info-row">
                <h3>Date of Birth:</h3>
                <input
                  type="date"
                  value={participant_dateOfBirth}
                  onChange={(e) => {
                    setParticipant_dateOfBirth(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="one-info-row">
              <h3>Skills:</h3>
              <input
                type="text"
                value={participant_skills}
                onChange={(e) => {
                  setParticipant_skills(e.target.value);
                }}
              />
            </div>
            <div className="one-info-row">
              <h3>LinkedIn:</h3>
              <input
                type="url"
                value={participant_linkedin}
                onChange={(e) => {
                  setParticipant_linkedin(e.target.value);
                }}
              />
            </div>
            <div className="one-info-row">
              <h3>Github:</h3>
              <input
                type="url"
                value={participant_github}
                onChange={(e) => {
                  setParticipant_github(e.target.value);
                }}
              />
            </div>
            <div className="one-info-row">
              <h3>Portfolio:</h3>
              <input
                type="url"
                value={participant_portfolio}
                onChange={(e) => {
                  setParticipant_portfolio(e.target.value);
                }}
              />
            </div>
            <div className="two-info-row">
              <div className="info-row">
                <h3>Already Participated in Hackathon:</h3>
                {participant_haveParticipated ? <h2>Yes</h2> : <h2>No</h2>}
              </div>
              <div className="info-row">
                <h3>Team:</h3>
                <input
                  type="text"
                  value={participant_team_id}
                  onChange={(e) => {
                    setParticipant_team_id(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="two-info-row">
              <div className="info-row">
                <button>
                  <h3 onClick={update}>Update</h3>
                </button>
                <button>
                  <h3 onClick={deleteParticipant}>Refuse</h3>
                </button>
                {participant_status != "Accepted" && (
                  <button>
                    <h3 onClick={accept}>Accept</h3>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
