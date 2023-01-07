import React, { useEffect } from "react";

const Startups = () => {
  const getStartups = async () => {
    const response = await fetch(`http://localhost:5001/startup`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getStartups();
  }, []);
  return <div>Investors</div>;
};

export default Startups;
