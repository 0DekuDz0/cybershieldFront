import "./Admin.css";
import { useState } from "react";
import * as React from "react";
import { Analytics } from "../../../Components/AdminAnalytics/analytics";
import AdminTableUser from "../../../Components/AdminTableUser/AdminTableUser";
import AdminTableTeam from "../../../Components/AdminTableTeam/AdminTableTeam";

export default function Admin() {
  const [src1, setSrc1] = useState("/analytics-01-orange.svg");
  const [src2, setSrc2] = useState("/user-list.svg");
  const [src3, setSrc3] = useState("/user-group.svg");

  return (
    <>
      <div className="adminSection">
        <div className="logo">
          <h1>CyberShield </h1>
        </div>
        <div className="adminPanel">
          <div className="adminSideBar">
            <div
              onClick={() => {
                setSrc1("/analytics-01-orange.svg");
                setSrc2("/user-list.svg");
                setSrc3("/user-group.svg");
              }}
            >
              <img src={src1} alt="analytics" />
            </div>
            <div
              onClick={() => {
                setSrc1("/analytics-01.svg");
                setSrc2("/user-list-orange.svg");
                setSrc3("/user-group.svg");
              }}
            >
              <img src={src2} alt="users" />
            </div>
            <div
              onClick={() => {
                setSrc1("/analytics-01.svg");
                setSrc2("/user-list.svg");
                setSrc3("/user-group-orange.svg");
              }}
            >
              <img src={src3} alt="teams" />
            </div>
          </div>
          <div className="adminMain">
            {src1 === "/analytics-01-orange.svg" ? (
              <Analytics />
            ) : src2 === "/user-list-orange.svg" ? (
              <AdminTableUser />
            ) : (
              <AdminTableTeam />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
