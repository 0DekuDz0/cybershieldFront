import { AdminTableTeamRow } from "../AdminTableTeamRow/AdminTableTeamRow";
import "../AdminTableUser/AdminTableUser.css";
import { useState, useEffect } from "react";
export default function AdminTableTeam() {
  const [teamsData, setTeamsData] = useState([]);

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

  
      async function getTeams(){
        try{
            const API_URL = import.meta.env.REACT_APP_BACKEND_URI;
            const token = getCookie("CyberShieldToken");
            console.log(token);
            const res = await fetch(
                `${API_URL}/api/get_team_all/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",

                }
            );
            if(res.ok){
                const data = await res.json();
                setTeamsData(data.teams);
                console.log(data);
            }
        }catch(err){
          console.log(err);
        }
      }
  
      useEffect(()=>{
        getTeams();
      },[])

    // const usersData = [{
    //     "id": 1,
    //     "teamName": "Alpha Coders",
    //     "members": 5,
    //     "teamLeader": "John Doe",
    //     "projectName": "AI Chatbot",
    //     "description": "https://www.alphacoders.com/project/ai-chatbot",
    //     "github": "https://github.com/alphacoders/ai-chatbot"
    //   },
    //   {
    //     "id": 2,
    //     "teamName": "Beta Builders",
    //     "members": 4,
    //     "teamLeader": "Jane Smith",
    //     "projectName": "Cyber Defense",
    //     "description": "https://www.betabuilders.com/project/cyber-defense",
    //     "github": "https://github.com/betabuilders/cyber-defense"
    //   },
    //   {
    //     "id": 3,
    //     "teamName": "Gamma Gurus",
    //     "members": 6,
    //     "teamLeader": "Alice Brown",
    //     "projectName": "ML Image Recognition",
    //     "description": "https://www.gammagurus.com/project/ml-image-recognition",
    //     "github": "https://github.com/gammagurus/ml-image-recognition"
    //   },
    //   {
    //     "id": 4,
    //     "teamName": "Delta Developers",
    //     "members": 3,
    //     "teamLeader": "Michael Johnson",
    //     "projectName": "Cloud Management System",
    //     "description": "https://www.deltadevs.com/project/cloud-management",
    //     "github": "https://github.com/deltadevs/cloud-management"
    //   },
    //   {
    //     "id": 5,
    //     "teamName": "Epsilon Engineers",
    //     "members": 7,
    //     "teamLeader": "Sarah White",
    //     "projectName": "IoT Smart Home",
    //     "description": "https://www.epsilonengineers.com/project/iot-smart-home",
    //     "github": "https://github.com/epsilonengineers/iot-smart-home"
    //   },
    //   {
    //     "id": 6,
    //     "teamName": "Zeta Innovators",
    //     "members": 5,
    //     "teamLeader": "David Green",
    //     "projectName": "Blockchain Voting System",
    //     "description": "https://www.zetainnovators.com/project/blockchain-voting",
    //     "github": "https://github.com/zetainnovators/blockchain-voting"
    //   },
    //   {
    //     "id": 7,
    //     "teamName": "Theta Thinkers",
    //     "members": 8,
    //     "teamLeader": "Olivia Martinez",
    //     "projectName": "Virtual Reality Learning",
    //     "description": "https://www.thetathinkers.com/project/vr-learning",
    //     "github": "https://github.com/thetathinkers/vr-learning"
    //   },
    //   {
    //     "id": 8,
    //     "teamName": "Lambda Legends",
    //     "members": 4,
    //     "teamLeader": "Ethan Carter",
    //     "projectName": "Automated Trading Bot",
    //     "description": "https://www.lambdalegends.com/project/trading-bot",
    //     "github": "https://github.com/lambdalegends/trading-bot"
    //   },
    //   {
    //     "id": 9,
    //     "teamName": "Omega Architects",
    //     "members": 6,
    //     "teamLeader": "Sophia Williams",
    //     "projectName": "AI-Powered Design Assistant",
    //     "description": "https://www.omegaarchitects.com/project/design-assistant",
    //     "github": "https://github.com/omegaarchitects/design-assistant"
    //   },
    //   {
    //     "id": 10,
    //     "teamName": "Sigma Coders",
    //     "members": 5,
    //     "teamLeader": "Liam Johnson",
    //     "projectName": "Cybersecurity Threat Analyzer",
    //     "description": "https://www.sigmacoders.com/project/threat-analyzer",
    //     "github": "https://github.com/sigmacoders/threat-analyzer"
    //   }];
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