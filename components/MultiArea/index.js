import { Button } from 'antd';
import { Layout, Menu, Breadcrumb} from 'antd';
import Area  from "@ant-design/charts/lib/area";
import React, { useState, useEffect } from 'react';

const DemoArea = ({data}) => {
  var config = {
    data: data,
    xField: 'height',
    yField: 'burn_fee',
    seriesField: 'address',
    yAxis: {
      nice: true,
      line: { style: { stroke: "#e1e9ef" } },
      label:null
    },
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: { isArea: true },
      style:{
        backgroundColor: "#fff",
        marginTop: 20
      }
    },
  };
  return <Area {...config} />;
};


export default DemoArea;