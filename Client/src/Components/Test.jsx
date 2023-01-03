import React from "react";
import { useEffect, useState } from "react";

function Test() {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return <div>
    {data.map((c) => c.quote)}
  </div>;
}

export default Test;
