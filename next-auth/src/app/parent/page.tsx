"use client";
import { useState } from "react";
import Child from "../../components/child";

function page() {
  const [data, setData] = useState();

  const handleData = (dat) => {
    setData(dat);
  };
  return (
    <div>
      <h1>Parent Component {data}</h1>
      <p>Data from Child: {data} </p>
      <Child onDataChange={handleData} />
    </div>
  );
}

export default page;
