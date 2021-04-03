import React, { useState, useEffect } from "react";
import Pie from "@ant-design/charts/lib/pie";
import { getColor } from "../../utils/index.js";
const DemoPie = ({ data }) => {

  let datasource = data.map((value, index) => {
    return { ...value, address: value.address.slice(0, 11).concat("....") };
  });
  datasource.sort((a, b) => b.number - a.number);
  var config = {
    data: datasource,
    angleField: "number",
    radius: 1,
    innerRadius: 0.64,
    color: function color({ address }) {
      return getColor(address);
    },
    colorField: "address",
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
        fontSize: data.length >= 20 ? "10" : data.length >= 10 ? "15" : "20",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: {
        formatter: (datum) => {
          return (datum ? datum.address : 'Sum')
        }
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }, { type: 'pie-statistic-active' }],
  };
  return <Pie {...config} style={{ weight: '100%' }} />;
};

export default DemoPie;
