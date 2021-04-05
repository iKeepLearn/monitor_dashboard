import React from "react";
import Head from "next/head"
import { Layout } from "antd";
import { Row, Col } from "antd";
const { Header, Content, Footer } = Layout;

import CurrentStatusRow from "../components/currentStatusRow";
import MinerTable from "../components/minerTable";
import WinnerPie from "../components/winnerPie";
import RR from "../components/RR";
import BurnFeeArea from "../components/burnFeeArea";
import PriceTag from "../components/PriceTag";
import { data } from "../utils/data"


const Home = (props) => {
  return (
    <>
      <Head>
        <title>STX Mining Monitor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icon.png" />
      </Head>
      <Layout>
        <Header
          style={{ position: "fixed", zIndex: 91, width: "100%", height: "5rem" }}
        >
          <div className="logo flex justify-between align-center" style={{ width: '100%' }}>
            <img src="/images/logo.png" className="logo_image"></img>
            <PriceTag price={props.data.price} />
          </div>

        </Header>
        <div className="header-bg"></div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", zIndex: 1, marginTop: -284 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <CurrentStatusRow data={props.data.currentStatus} />
            <Row
              gutter={24}
              style={{
                marginTop: 24,
              }}
            >
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <MinerTable data={props.data.minerTable} />
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <WinnerPie data={props.data.winnerPie} />
              </Col>
            </Row>
            <Row
              gutter={24}
              style={{
                marginTop: 24,
              }}
            >
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <BurnFeeArea data={props.data.burnFeeArea} />
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <RR data={props.data.winnerPie} />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Daemon Technologies ©2021 Mining Monitor
      </Footer>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  // const res = await fetch(`http://47.242.239.96:8889/monitorIntegrate`);
  // const data = await res.json();
  
  return {
    props: { data },
  };
}

export default Home;
