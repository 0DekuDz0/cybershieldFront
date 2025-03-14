import "../AdminTableUserRow/AdminTableUserRow.css";
import { useState,useRef } from "react";
import Alert from "../Alert/Alert"; 

export function AdminTableTeamRow({ data }) {
    const alertRef = useRef(null); 
    

  const [visible, setVisible] = useState(false);

  const [team_leader_id, setTeam_leader_id] = useState(
    data.team_leader_id || ""
  );
  const [team_name, setTeam_name] = useState(data.team_name || "");
  const [team_project_name, setTeam_project_name] = useState(
    data.team_project_name || ""
  );
  const [team_project_description, setTeam_project_description] = useState(
    data.team_project_description || ""
  );
  const [team_project_links, setTeam_project_links] = useState(
    data.team_project_links || ""
  );

  const [members, setMembers] = useState(data.participants || []);

  async function update() {
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URI;
      const res = await fetch(`${API_URL}/api/update_team/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team_id: data?.team_id,
          team_leader: team_leader_id,
          team_name: team_name,
          team_project_name: team_project_name,
          team_project_description: team_project_description,
          team_project_links: team_project_links,
        }),
        credentials: "include",
      });
      if (res.ok) {
        if (alertRef.current) {
            alertRef.current("Team Updated");
        }
        console.log("Team Updated", res);
      }
    } catch (err) {
        alertRef.current("Error when updating team ",err);
      console.log(err);
    }
  }

  async function deleteTeam() {
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URI;
      const res = await fetch(`${API_URL}/api/delete_team/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team_id: data?.team_id,
        }),
        credentials: "include",
      });
      if (res.ok) {
        alertRef.current("Team Deleted");
        console.log("Team Deleted", res);
      }
    } catch (err) {
        alertRef.current("Error when deleting team ",err);
      console.log(err);
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
        <h3 className="id">{data?.team_id}</h3>
        <h3 className="name">{data?.team_name}</h3>
        <h3 className="email">{data?.members}</h3>
        <div className="more" onClick={() => setVisible(!visible)}>
          <img
            src="/Polygon.svg"
            alt="more icon"
            className={`${visible ? "rotation" : ""}`}
          />
        </div>
      </div>
      {visible && (
        <div className={`info ${visible ? "info-visible" : "info-invisible"}`}>
          <div className="two-info-row">
            <div className="info-row">
              <h3>Team Leader Id:</h3>
              <input type="text" value={team_leader_id} />
            </div>
            <div className="info-row">
              <h3>Team Name:</h3>
              <input
                type="text"
                value={team_name}
                onChange={(e) => {
                  setTeam_name(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="one-info-row">
            <h3>Project Name:</h3>
            <input
              type="text"
              value={team_project_name}
              onChange={(e) => {
                setTeam_project_name(e.target.value);
              }}
            />
          </div>
          <div className="one-info-row">
            <h3>Project Description:</h3>
            <input
              type="text"
              value={team_project_description}
              onChange={(e) => {
                setTeam_project_description(e.target.value);
              }}
            />
          </div>
          <div className="one-info-row">
            <h3>Project Links:</h3>
            <input
              type="url"
              value={team_project_links}
              onChange={(e) => {
                setTeam_project_links(e.target.value);
              }}
            />
          </div>
          <div className="info-users">
            <div className="members">
              {members?.map((member) => (
                <>
                  <div className="member">
                    <h3 className="id">{member?.participant_id}</h3>
                    <h3 className="name">{member?.participant_name}</h3>
                    <h3 className="email">{member?.participant_email}</h3>
                    <h3 className="status">{member?.participant_status}</h3>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="info-row">
            <button className="info-row-team">
              <h3 onClick={update}>Update</h3>
            </button>
            <button className="info-row-team">
              <h3 onClick={deleteTeam}>Refuse</h3>
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
