import React, { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width}, ${y + height} Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  let state = 1;
  // const [data, setData] = useState(
  //   JSON.parse(localStorage.getItem("readBook"))
  // );

  const data = JSON.parse(localStorage.getItem("readBook"));

  if (String(localStorage.getItem("readBook")) === "null") {
    state = 0;
  }

  return (
    <div>
      {state === 1 ? <Graph data={data} /> : <NoBookReaded></NoBookReaded>}
    </div>
  );
}

function NoBookReaded() {
  return (
    <div className="text-red-500 h-[50vh] flex items-center justify-center font-bold text-4xl lg:text-5xl text-center">
      Sorry! There is no book that you have read yet!
    </div>
  );
}

function Graph({ data }) {
  return (
    <BarChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      className="mx-auto my-6 md:my-12"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar
        dataKey="totalPages"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
}

App.demoUrl = "https://codesandbox.io/s/bar-chart-with-customized-shape-dusth";
