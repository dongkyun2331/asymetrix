import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2023.4.21.", Total: 0.0 },
  { date: "2023.4.22.", Total: 76.570732 },
  { date: "2023.4.23.", Total: 172.760446 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        viewBox="0 0 36 36"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" dataKey="Total" stroke="#222" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
