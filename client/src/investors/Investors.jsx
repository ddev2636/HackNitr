import React, { useEffect } from "react";

const Investors = () => {
  const getInvestors = async () => {
    const response = await fetch(`http://localhost:5001/investor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getInvestors();
  }, []);
  return <div>Investors</div>;
};

export default Investors;
