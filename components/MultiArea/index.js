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
    slider: {
      start: 0.1,
      end: 0.9,
    },
  };
  return <Area {...config} />;
};


export default DemoArea;