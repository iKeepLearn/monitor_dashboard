import React from "react";
import Head from "next/head";

import Dashboard from "../components/Dashboard";

import { getDashboardData } from "../utils";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>STX Mining Monitor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icon.png"
        />
      </Head>
      <Dashboard dashboardData={props.data} />
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await getDashboardData();
  return {
    props: { data },
  };
}

export default Home;
