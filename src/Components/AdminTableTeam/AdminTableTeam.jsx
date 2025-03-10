import { AdminTableTeamRow } from "../AdminTableTeamRow/AdminTableTeamRow";
import "../AdminTableUser/AdminTableUser.css";
import { useState, useEffect } from "react";
import { useAdminData } from "../../Context/AdminDataProvider";
export default function AdminTableTeam() {

    const { teamsData } = useAdminData();

    return(
        <>
            <div className="AdminTableUser">
                <div className="filter">
                    <h1>Teams</h1>
                </div>
                <div className="table">
                    <div className="header">
                        <h3 className="id">id</h3>
                        <h3 className="name">Team Name</h3>
                        <h3 className="email">Members</h3>
                        <h3 className="more"> 
                        </h3>
                    </div>
                    <div className="rows">
                        {teamsData?.map((data) => (
                            <AdminTableTeamRow key={data.team_id} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}