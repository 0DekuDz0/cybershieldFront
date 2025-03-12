import { useEffect, useState, useMemo } from "react";
import { AdminTableUserRow } from "../AdminTableUserRow/AdminTableUserRow";
import "./AdminTableUser.css";
import { useAdminData } from "../../Context/AdminDataProvider";

export default function AdminTableUser() {
  const { usersData, fetchUsers } = useAdminData();
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("All");
  const userDataAccepted = useMemo(
    () =>
      usersData?.filter((data) => data.participant_status === "Accepted") || [],
    [usersData]
  );

  const userDataWaiting = useMemo(
    () =>
      usersData?.filter((data) => data.participant_status === "Pending") || [],
    [usersData]
  );

  return (
    <>
      <div className="AdminTableUser">
        <input
          type="search"
          name="userScearch"
          id="userScearch"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <div className="filter">
          <button
            onClick={() => setFilter("All")}
            style={{
              backgroundColor:
                filter === "All"
                  ? "var(--orange--color)"
                  : "var(--white--color)",
            }}
          >
            <h3>All</h3>
          </button>
          <button
            onClick={() => setFilter("Accepted")}
            style={{
              backgroundColor:
                filter === "Accepted"
                  ? "var(--orange--color)"
                  : "var(--white--color)",
            }}
          >
            <h3>Accepted</h3>
          </button>
          <button
            onClick={() => setFilter("Waiting")}
            style={{
              backgroundColor:
                filter === "Waiting"
                  ? "var(--orange--color)"
                  : "var(--white--color)",
            }}
          >
            <h3>Waiting</h3>
          </button>
        </div>
        <div className="table">
          <div className="header">
            <h3 className="id">id</h3>
            <h3 className="name">Full Name</h3>
            <h3 className="email">Email</h3>
            <h3 className="status">Status</h3>
            <h3 className="more"></h3>
          </div>
          <div className="rows">
            {(() => {
              let filteredData = [];

              if (filter === "All") {
                filteredData = usersData;
              } else if (filter === "Accepted") {
                filteredData = userDataAccepted;
              } else if (filter === "Waiting") {
                filteredData = userDataWaiting;
              }

              if (searchInput !== "") {
                filteredData = filteredData.filter((data) => {
                  return (
                    data?.participant_name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                    data?.participant_email
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                    data?.participant_id.toString().includes(searchInput)
                  );
                });
              }

              return filteredData?.map((data) => (
                <AdminTableUserRow key={data.participant_id} data={data} />
              ));
            })()}
          </div>
        </div>
      </div>
    </>
  );
}
