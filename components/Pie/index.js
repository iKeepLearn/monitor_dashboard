import React, { useState, useEffect } from 'react';
import Pie from '@ant-design/charts/lib/pie';
const DemoPie = () => {
  var data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 2,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: function formatter(v) {
          return ''.concat(v, ' \xA5');
        },
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: { textAlign: 'center' },
      autoRotate: false,
      content: '{value}',
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active' },
      { type: 'pie-statistic-active' },
    ],
  };
  return <Pie {...config} />;
};
export default DemoPie;