import { createContext, useContext, useState, useEffect } from "react";

const AdminDataContext = createContext(); 

export function AdminDataProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [teamsData, setTeamsData] = useState([]);
  const API_URL = import.meta.env.VITE_BACKEND_URI;

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
      console.error("Erreur lors du chargement des utilisateurs :", error);
    }
  }


        async function fetchTeams(){
        try{
            const API_URL = import.meta.env.VITE_BACKEND_URI;
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
            }
        }catch(err){
          console.log(err);
        }
      }


  useEffect(() => {
    fetchUsers();
    fetchTeams();
  }, []);

  return (
    <AdminDataContext.Provider value={{ usersData, fetchUsers, teamsData, fetchTeams }}>
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  return useContext(AdminDataContext);
}
