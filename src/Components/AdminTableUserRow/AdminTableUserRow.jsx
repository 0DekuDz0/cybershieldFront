import "./AdminTableUserRow.css";
import { useState } from "react";

export function AdminTableUserRow({ data }) {
    const [visible, setVisible] = useState(false);

    return (
        <div className={`tableRow ${visible ? "tableRow-visible" : "tableRow-invisible"}`}>
            <div className="description">
                <h3 className="id">{data?.participant_id}</h3>
                <h3 className="name">{data?.participant_name}</h3>
                <h3 className="email">{data?.participant_email}</h3>
                <h3 className="status">{data?.participant_status}</h3>
                <div className="more" onClick={() => setVisible(!visible)}>
                    <img src="/Polygon.svg" alt="more icon" className={`${visible ? "rotation" : ""}`}/>
                </div>
            </div>
            {visible && (
                <div className={`info ${visible ? "info-visible" : "info-invisible"}`}>
                    <div className="two-info-row">
                        <div className="info-row">
                            <h3>Phone Number:</h3>
                            <input type="number" value={data?.participant_phone} />
                        </div>
                        <div className="info-row">
                            <h3>Date of Birth:</h3>
                            <input type="date" value={data?.participant_dateOfBirth} />
                        </div>
                    </div>
                    <div className="one-info-row">
                        <h3>Skills:</h3>
                        <input type="text" value={data?.participant_skills} />
                    </div>
                    <div className="one-info-row">
                        <h3>LinkedIn:</h3>
                        <input type="url" value={data?.participant_linkedin} />
                    </div>
                    <div className="one-info-row">
                        <h3>Github:</h3>
                        <input type="url" value={data?.participant_github} />
                    </div>
                    <div className="one-info-row">
                        <h3>Portfolio:</h3>
                        <input type="url" value={data?.participant_portfolio} />
                    </div>
                    <div className="two-info-row">
                        <div className="info-row">
                            <h3>Already Participated in Hackathon:</h3>
                            {data?.participant_haveParticipated ? <h2>Yes</h2> : <h2>No</h2>}
                        </div>
                        <div className="info-row">
                            <h3>Previous Experience:</h3>
                            <input type="text" value={data?.participant_previousExperience} />
                        </div>
                    </div>
                    <div className="two-info-row">
                        <div className="info-row">
                            <h3>Team:</h3>
                            <input type="number" value={data?.participant_team_id} />
                        </div>
                        <div className="info-row">
                            <button>
                                <h3>Update</h3>
                            </button>
                            <button>
                                {data?.participant_status === "Accepted" ? <h3>Refuse</h3> : <h3>Accept</h3>}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
