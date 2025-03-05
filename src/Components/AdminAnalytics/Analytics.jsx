import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts";
import "./Analytics.css";
export function Analytics() {
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
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="main2">
        <div className="nbrEquipe">
          <h3>Nombre d’équipes crées</h3>
          <div>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className="vra">
          <h3>Nombre de candidatures validées/refusées</h3>
          <div>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
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
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
