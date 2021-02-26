import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

import CurrentStatusRow from '../components/currentStatusRow'
import MinerTable from '../components/minerTable'
import WinnerPie from '../components/winnerPie'
import RR from '../components/RR'
import BurnFeeArea from '../components/burnFeeArea'

const Home = () => {
  
  return (<Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <CurrentStatusRow/>
        <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
            >
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <MinerTable/>
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <WinnerPie/>
              </Col>
        </Row>
        <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
            >
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <BurnFeeArea/>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <RR/>
            </Col>

        </Row>
        
        
      </div>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>Daemon Technologies ©2021 Mining Monitor</Footer>
  </Layout>);
};
export default Home;