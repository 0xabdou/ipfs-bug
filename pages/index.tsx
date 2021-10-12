import { create } from "ipfs-http-client";
import type { NextPage } from "next";
import { useEffect } from "react";

const client = create({ url: "https://ipfs.infura.io:5001/api/v01" });

const Home: NextPage = () => {
  const testAdd = async () => {
    const added = await client.add("TEST");
    console.log(added);
  };

  useEffect(() => {}, []);

  return <button onClick={testAdd}>TEST ADD</button>;
};

export default Home;
