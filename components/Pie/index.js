import React, { useState, useEffect } from 'react';
import Pie from '@ant-design/charts/lib/pie';
import { getColor } from "../../utils/index.js"
const DemoPie = ({data}) => {
  
  let datasource = data.map((value, index)=> {
    return {...value, address:value.address.slice(0, 11).concat("....") }
  })
  datasource.sort((a, b)=>  b.number - a.number )
  var config = {
    data: datasource,
    appendPadding: 10,
    angleField: 'number',
    radius: 1,
    innerRadius: 0.64,
    colorField: "address",
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
        fontSize: data.length >= 20 ? "5" : data.length >= 10 ? "10" : 30,
      },
      autoRotate: false,
      content: "{value}",
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };
  return <Pie {...config} />;
};

export default DemoPie;