import React, { useState, useEffect } from 'react';
import Bar from '@ant-design/charts/lib/bar';
import { getColor } from "../../utils/index.js"

const DemoBar = ({data}) => {
  let datasource = data.map((value, index)=> {
    return {...value, address:value.address.slice(0, 11).concat("....") , RR: parseFloat(value.RR)}
  })
  datasource.sort((a, b)=>  b.RR - a.RR )
  var config = {
    data: datasource,
    xField: 'RR',
    yField: 'address',
    colorField: "address",
    color: function color(_ref) {
      return getColor(_ref.address);
    },
    legend: false,
  };
  return <Bar {...config} />;
};

export default DemoBar;