import React from 'react';
import TinyLine from "@ant-design/charts/lib/tinyLine";

const CuTinyLine = ({ data }) => {
  var config = {
    height: 60,
    width: 300,
    autoFit: true,
    data,
    smooth: true,
  };
  return <TinyLine {...config} style={{ width: '100%' }} />;
};

export default CuTinyLine;
