import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "2023.4.21.", Total: 0.0 },
  { date: "2023.4.22.", Total: 76.570732 },
  { date: "2023.4.23.", Total: 172.760446 },
  { date: "2023.4.24.", Total: 174.550446 },
  { date: "2023.4.25.", Total: 348.404785 },
  { date: "2023.4.26.", Total: 393.429057 },
  { date: "2023.4.27.", Total: 506.359057 },
  { date: "2023.4.28.", Total: 599.031178 },
  { date: "2023.4.29.", Total: 611.121178 },
  { date: "2023.4.30.", Total: 705.416412 },
  { date: "2023.5.1.", Total: 740.69649 },
  { date: "2023.5.2.", Total: 1132.556306 },
  { date: "2023.5.3.", Total: 1392.856306 },
  { date: "2023.5.4.", Total: 1401.856406 },
  { date: "2023.5.5.", Total: 1550.402296 },
  { date: "2023.5.6.", Total: 1716.544517 },
  { date: "2023.5.7.", Total: 1836.622138 },
  { date: "2023.5.8.", Total: 1938.956138 },
  { date: "2023.5.9.", Total: 1923.556138 },
  { date: "2023.5.10.", Total: 2043.776138 },
  { date: "2023.5.11.", Total: 2142.876138 },
  { date: "2023.5.12.", Total: 2338.239616 },
  { date: "2023.5.13.", Total: 2379.033372 },
  { date: "2023.5.14.", Total: 2451.791372 },
  { date: "2023.5.15.", Total: 2942.763372 },
  { date: "2023.5.16.", Total: 3552.539372 },
  { date: "2023.5.17.", Total: 3706.001372 },
  { date: "2023.5.18.", Total: 3817.600472 },
  { date: "2023.5.19.", Total: 3939.958472 },
  { date: "2023.5.20.", Total: 4233.403973 },
  { date: "2023.5.21.", Total: 5340.91081 },
  { date: "2023.5.22.", Total: 5437.09881 },
  { date: "2023.5.23.", Total: 5604.26281 },
  { date: "2023.5.24.", Total: 6297.48181 },
  { date: "2023.5.25.", Total: 6622.68181 },
  { date: "2023.5.26.", Total: 6621.10681 },
  { date: "2023.5.27.", Total: 7088.978984 },
  { date: "2023.5.28.", Total: 7093.358985 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        viewBox="0 0 36 36"
      >
        <Tooltip />
        <Line type="monotone" dataKey="Total" stroke="#222" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
