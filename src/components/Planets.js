import React from "react";
import { useQuery } from "react-query";
const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets");
    return res.json();
  };

  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);
  return (
    <div className="planets">
      <br></br>
      <div>Planets</div>
      {status === "error" && <div>Error Fetching Data</div>}
    </div>
  );
};

export default Planets;
