import React from "react";

import Cards from "../components/Card";

export default function Home() {
  const [datas, setDatas] = React.useState([]);

  // async function getData() {
  //   const response = await fetch("http://localhost:3002/teams");
  //   const data = await response.json();
  //   setDatas(data);
  // }

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3002/teams");
      const data = await response.json();
      setDatas(data);
    }
    getData();
  }, []);

  return (
    <>
      {datas.map(data => (
        <Cards
          key={data.id}
          nationality={data.nationality}
          image={data.image}
          rosterid={data.rosterid}
        />
      ))}
    </>
  );
}
