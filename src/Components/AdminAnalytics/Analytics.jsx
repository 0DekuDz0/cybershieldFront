import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts";
import "./Analytics.css";
import { useAdminData } from "../../Context/AdminDataProvider";
export function Analytics() {
  const { stat, fetchStat } = useAdminData();

  console.log(
    stat,
    stat?.total_participants,
    stat?.total_teams,
    stat?.accepted_participants,
    stat?.refused_participants,
    stat?.all_participants
  );
  return (
    <>
      <div className="main1">
        <div className="graph">
          <div>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="nbrParticipants">
          <h3>Nombre total de participants inscrits</h3>
          <div>
            <h1>{stat?.total_participants}</h1>
          </div>
        </div>
      </div>
      <div className="main2">
        <div className="nbrEquipe">
          <h3>Nombre d’équipes crées</h3>
          <div>
            <h1>{stat?.total_teams}</h1>
          </div>
        </div>
        <div className="vra">
          <h3>Nombre de candidatures validées/refusées</h3>
          <div>
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: stat?.accepted_participants,
                      label: "Accepted Participants",
                      color: "#ff8000",
                    },
                    {
                      id: 1,
                      value: stat?.refused_participants,
                      label: "Refused Participants",
                      color: "#000000",
                    },
                  ],
                },
              ]}
              slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: 10,
                    fontWeight: "bold",
                  },
                },
              }}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className="tauxAcceptation">
          <h3>Taux d’acceptation</h3>
          <div>
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: stat?.all_participants,
                      label: "All Participants",
                      color: "#000000",
                    },
                    {
                      id: 1,
                      value: stat?.accepted_participants,
                      label: "Accepted Participants",
                      color: "#ff8000",
                    },
                  ],
                },
              ]}
              slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: 10,
                    fontWeight: "bold",
                  },
                },
              }}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
