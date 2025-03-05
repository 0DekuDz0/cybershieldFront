import "../AdminTableUserRow/AdminTableUserRow.css";
import { useState } from "react";

export function AdminTableTeamRow({ data }) {
    const [visible, setVisible] = useState(false);

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
                            <input type="text" value={data?.team_leader_id} />
                        </div>
                        <div className="info-row">
                            <h3>Team Name:</h3>
                            <input type="text" value={data?.team_name} />
                        </div>
                    </div>
                    <div className="one-info-row">
                        <h3>Project Name:</h3>
                        <input type="text" value={data?.team_project_name} />
                    </div>
                    <div className="one-info-row">
                        <h3>Project Description:</h3>
                        <input type="text" value={data?.team_project_description} />
                    </div>
                    <div className="one-info-row">
                        <h3>Project Links:</h3>
                        <input type="url" value={data?.team_project_links} />
                    </div>
                </div>
            )}
        </div>
    );
}
