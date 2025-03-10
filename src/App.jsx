import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Body from "./Body";
import Admin from "./pages/Admin/Dashboard/Admin";
import AdminAuth from "./pages/Admin/Auth/AdminAuth";
import ProtectedRoute from "./ProtectedRoute";
import { AdminDataProvider } from "./Context/AdminDataProvider";
function App() {
  console.log("App");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Admin/logIn" element={<AdminAuth />} />
          <Route
            path="/Admin/Dashboard"
            element={
              <ProtectedRoute
                element={
                  <AdminDataProvider>
                    <Admin />
                  </AdminDataProvider>
                }
              ></ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
