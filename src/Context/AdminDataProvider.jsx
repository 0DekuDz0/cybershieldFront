import { createContext, useContext, useState, useEffect, useRef } from "react";
import Alert from "../Components/Alert/Alert"; 

const AdminDataContext = createContext();

export function AdminDataProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [teamsData, setTeamsData] = useState([]);
  const [stat, setStat] = useState([]);
  const alertRef = useRef(null); 

  const API_URL = import.meta.env.VITE_BACKEND_URI;

  async function fetchStat() {
    try {
      const res = await fetch(`${API_URL}/api/get_stat/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setStat(data.stat);
      }
    } catch (err) {
      if(alertRef.current) alertRef.current("Error when fetching Stat");
      console.error("Error when fetching Stat:", err);
    }
  }

  async function fetchUsers() {
    try {
      const res = await fetch(`${API_URL}/api/get_participant_all/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setUsersData(data.participants);
      }
    } catch (error) {
      if(alertRef.current) alertRef.current("Error when fetching users");
      console.error("Erreur lors du chargement des utilisateurs:", error);
    }
  }

  async function fetchTeams() {
    try {
      const res = await fetch(`${API_URL}/api/get_team_all/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) throw new Error(`Error ${res.status} When fetching teams`);

      const { teams } = await res.json();

      const updatedTeams = await Promise.all(
        teams.map(async (team) => {
          try {
            const res2 = await fetch(
              `${API_URL}/api/get_participant_by_team/?team_id=${team.team_id}`,
              {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
              }
            );

            if (!res2.ok)
              throw new Error(`Error ${res2.status} For Team ${team.team_id}`);

            const { participants } = await res2.json();
            return { ...team, participants };
          } catch (error) {
            if(alertRef.current) alertRef.current(`Error in fetching data for team : ${team.team_id}: ${error}`);
            console.error(
              `Error in fetching data for team : ${team.team_id}:`,
              error
            );
            return { ...team, participants: [] };
          }
        })
      );

      setTeamsData(updatedTeams);
    } catch (err) {
      if(alertRef.current) alertRef.current("Error when fetching teams");
      console.error("Erreur lors du chargement des équipes:", err);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchTeams();
    fetchStat();
  }, []);

  return (
    <AdminDataContext.Provider
      value={{ usersData, fetchUsers, teamsData, fetchTeams, stat, fetchStat }}
    >
      <Alert showAlertRef={alertRef} />
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  return useContext(AdminDataContext);
}
