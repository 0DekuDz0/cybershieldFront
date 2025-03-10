import "../AdminTableUserRow/AdminTableUserRow.css";
import { useState } from "react";

export function AdminTableTeamRow({ data }) {
    const [visible, setVisible] = useState(false);

    const [team_leader_id, setTeam_leader_id] = useState(data.team_leader_id || "");
    const [team_name, setTeam_name] = useState(data.team_name || "");
    const [team_project_name, setTeam_project_name] = useState(data.team_project_name || "");
    const [team_project_description, setTeam_project_description] = useState(data.team_project_description || "");
    const [team_project_links, setTeam_project_links] = useState(data.team_project_links || "");

    return (
        <div className={`tableRow ${visible ? "tableRow-visible" : "tableRow-invisible"}`}>
            <div className="description">
                <h3 className="id">{data?.team_id}</h3>
                <h3 className="name">{data?.team_name}</h3>
                <h3 className="email">{data?.members}</h3>
                <div className="more" onClick={() => setVisible(!visible)}>
                    <img src="/Polygon.svg" alt="more icon" className={`${visible ? "rotation" : ""}`}/>
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
                            <input type="text" value={team_name} onChange={(e)=>{setTeam_name(e.target.value)}} />
                        </div>
                    </div>
                    <div className="one-info-row">
                        <h3>Project Name:</h3>
                        <input type="text" value={team_project_name}  onChange={(e)=>{setTeam_project_name(e.target.value)}}/>
                    </div>
                    <div className="one-info-row">
                        <h3>Project Description:</h3>
                        <input type="text" value={team_project_description} onChange={(e)=>{setTeam_project_description(e.target.value)}}/>
                    </div>
                    <div className="one-info-row">
                        <h3>Project Links:</h3>
                        <input type="url" value={team_project_links}  onChange={(e)=>{setTeam_project_links(e.target.value)}}/>
                    </div>
                    <div className="info-row">
                            <button className="info-row-team">
                                <h3>Update</h3>
                            </button>
                            <button className="info-row-team">
                                 <h3>Refuse</h3> 
                            </button>
                        </div>
                </div>
            )}
        </div>
    );
}
