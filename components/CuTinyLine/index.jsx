import React, { useState, useEffect } from 'react';
import  TinyLine  from "@ant-design/charts/lib/tinyLine";

const CuTinyLine = ({ data }) => {
  var config = {
    height: 60,
    width: 300,
    autoFit: true,
    data: data,
    smooth: true,
    
  };
  return <TinyLine {...config} />;
};

export default CuTinyLine;
