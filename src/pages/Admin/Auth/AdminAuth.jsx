import "./AdminAuth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAuth() {

    const [admin_email, setAdminEmail] = useState("");
    const [admin_password, setAdminPassword] = useState("");
    const navigate = useNavigate();

    async function submitForm(e) {
        e.preventDefault();
        try {
            const API_URL = import.meta.env.VITE_BACKEND_URI;

            const res = await fetch(
                `${API_URL}/api/login/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        admin_email: admin_email,
                        admin_password: admin_password,
                    }),
                    credentials: "include",
                }
            );
            if(res.ok){
                const data = await res.json();
                navigate("/Admin/Dashboard"); 
            }
        } catch (err) {
            console.log(err);
        };
    }
    return(
        <>
            <div className="adminAuth">
                <div className="logIn">
                    <h1>Log In</h1>
                    <form onSubmit={(e)=>{submitForm(e)}}>
                        <input type="text" placeholder="Username"  onChange={(e)=>{setAdminEmail(e.target.value)}}/>
                        <input type="password" placeholder="Password" onChange={(e)=>{setAdminPassword(e.target.value)}}/>
                        <button type="submit" >Log In</button>
                    </form>
                </div>
            </div>
        </>
    )
}