import { useEffect,useState } from "react";
import { AdminTableUserRow } from "../AdminTableUserRow/AdminTableUserRow";
import "./AdminTableUser.css";

export default function AdminTableUser(){
    const [usersData, setUserData] = useState([]);

    async function getUsers(){
      try{
          const API_URL = "http://127.0.0.1:8000";
          
          const res = await fetch(
              `${API_URL}/api/get_participant_all/`,
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
              setUserData(data.participants);
              console.log(data);
          }
      }catch(err){
        console.log(err);
      }
    }

    useEffect(()=>{
      getUsers();
    },[])

    // const usersData = [
    //     {
    //       "id": 1,
    //       "name": "Alice Johnson",
    //       "email": "alice.johnson@example.com",
    //       "status": "Pending",
    //       "phoneNumber": "1234567890",
    //       "dateOfBirth": "1995-08-15",
    //       "skills": "JavaScript, React, Node.js",
    //       "linkedin": "https://www.linkedin.com/in/alicejohnson",
    //       "github": "https://github.com/alicejohnson",
    //       "portfolio": "https://alicejohnson.dev",
    //       "haveParticipated": true,
    //       "previousExperience": "Frontend Developer at XYZ Corp",
    //       "team": 2
    //     },
    //     {
    //       "id": 2,
    //       "name": "Bob Williams",
    //       "email": "bob.williams@example.com",
    //       "status": "Accepted",
    //       "phoneNumber": "9876543210",
    //       "dateOfBirth": "1998-04-22",
    //       "skills": "Python, Django, Machine Learning",
    //       "linkedin": "https://www.linkedin.com/in/bobwilliams",
    //       "github": "https://github.com/bobwilliams",
    //       "portfolio": "https://bobwilliams.dev",
    //       "haveParticipated": false,
    //       "previousExperience": "Data Scientist at ABC Ltd",
    //       "team": 3
    //     },
    //     {
    //       "id": 3,
    //       "name": "Charlie Brown",
    //       "email": "charlie.brown@example.com",
    //       "status": "Refused",
    //       "phoneNumber": "1122334455",
    //       "dateOfBirth": "1997-06-10",
    //       "skills": "Java, Spring Boot, PostgreSQL",
    //       "linkedin": "https://www.linkedin.com/in/charliebrown",
    //       "github": "https://github.com/charliebrown",
    //       "portfolio": "https://charliebrown.dev",
    //       "haveParticipated": true,
    //       "previousExperience": "Backend Engineer at DEF Ltd",
    //       "team": 1
    //     },
    //     {
    //       "id": 4,
    //       "name": "David Smith",
    //       "email": "david.smith@example.com",
    //       "status": "Accepted",
    //       "phoneNumber": "5566778899",
    //       "dateOfBirth": "1996-12-05",
    //       "skills": "C++, Embedded Systems, IoT",
    //       "linkedin": "https://www.linkedin.com/in/davidsmith",
    //       "github": "https://github.com/davidsmith",
    //       "portfolio": "https://davidsmith.dev",
    //       "haveParticipated": false,
    //       "previousExperience": "Firmware Engineer at GHI Ltd",
    //       "team": 4
    //     },
    //     {
    //       "id": 5,
    //       "name": "Emma Wilson",
    //       "email": "emma.wilson@example.com",
    //       "status": "Pending",
    //       "phoneNumber": "6677889900",
    //       "dateOfBirth": "1999-01-30",
    //       "skills": "UI/UX Design, Figma, HTML/CSS",
    //       "linkedin": "https://www.linkedin.com/in/emmawilson",
    //       "github": "https://github.com/emmawilson",
    //       "portfolio": "https://emmawilson.design",
    //       "haveParticipated": true,
    //       "previousExperience": "UI Designer at JKL Ltd",
    //       "team": 5
    //     }
    //   ];
    

    return(
        <>
            <div className="AdminTableUser">
                <div className="filter">
                    <button><h3>All</h3></button>
                    <button><h3>Accepted</h3></button>
                    <button><h3>Waiting</h3></button>
                </div>
                <div className="table">
                    <div className="header">
                        <h3 className="id">id</h3>
                        <h3 className="name">Full Name</h3>
                        <h3 className="email">Email</h3>
                        <h3 className="status">Status</h3>
                        <h3 className="more"> 
                        </h3>
                    </div>
                    <div className="rows">
                        {usersData?.map((data) => (
                            <AdminTableUserRow key={data.participant_id} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}