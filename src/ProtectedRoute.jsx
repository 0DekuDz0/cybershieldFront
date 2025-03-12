import { useEffect, useState, useCallback } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const checkAdminAuth = useCallback(async () => {
        const API_URL = import.meta.env.VITE_BACKEND_URI;

        try {
            const res = await fetch(`${API_URL}/api/check_admin_auth/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                setIsAuthenticated(data.authentication); 
            } else {
                setIsAuthenticated(false);
            }
        } catch (err) {
            console.error("Error checking admin auth:", err);
            setIsAuthenticated(false);
        }
    }, []);

    useEffect(() => {
        checkAdminAuth();
    }, [checkAdminAuth]);

    if (isAuthenticated === null) {
        return <div className="loaderContainer">
             <div className="loader"></div>
        </div>
    }

    return isAuthenticated ? element : <Navigate to="/Admin/logIn" />;
}
