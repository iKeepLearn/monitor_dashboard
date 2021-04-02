import React, { useState, useEffect } from 'react';
import Line from '@ant-design/charts/lib/line';
let data = [
    {
      "Date": "2010-01",
      "scales": 1998
    },
    {
      "Date": "2010-02",
      "scales": 1850
    },
    {
      "Date": "2010-03",
      "scales": 1720
    },
    {
      "Date": "2010-04",
      "scales": 1818
    },
    {
      "Date": "2010-05",
      "scales": 1920
    },
    {
      "Date": "2010-06",
      "scales": 1802
    },
    {
      "Date": "2010-07",
      "scales": 1945
    },
    {
      "Date": "2010-08",
      "scales": 1856
    },
    {
      "Date": "2010-09",
      "scales": 2107
    },
    {
      "Date": "2010-10",
      "scales": 2140
    },
    {
      "Date": "2010-11",
      "scales": 2311
    },
    {
      "Date": "2010-12",
      "scales": 1972
    },
    {
      "Date": "2011-01",
      "scales": 1760
    },
    {
      "Date": "2011-02",
      "scales": 1824
    },
    {
      "Date": "2011-03",
      "scales": 1801
    },
    {
      "Date": "2011-04",
      "scales": 2001
    },
    {
      "Date": "2011-05",
      "scales": 1640
    },
    {
      "Date": "2011-06",
      "scales": 1502
    },
    {
      "Date": "2011-07",
      "scales": 1621
    },
    {
      "Date": "2011-08",
      "scales": 1480
    },
    {
      "Date": "2011-09",
      "scales": 1549
    },
    {
      "Date": "2011-10",
      "scales": 1390
    },
    {
      "Date": "2011-11",
      "scales": 1325
    },
    {
      "Date": "2011-12",
      "scales": 1250
    },
    {
      "Date": "2012-01",
      "scales": 1394
    },
    {
      "Date": "2012-02",
      "scales": 1406
    },
    {
      "Date": "2012-03",
      "scales": 1578
    },
    {
      "Date": "2012-04",
      "scales": 1465
    },
    {
      "Date": "2012-05",
      "scales": 1689
    },
    {
      "Date": "2012-06",
      "scales": 1755
    },
    {
      "Date": "2012-07",
      "scales": 1495
    },
    {
      "Date": "2012-08",
      "scales": 1508
    },
    {
      "Date": "2012-09",
      "scales": 1433
    },
    {
      "Date": "2012-10",
      "scales": 1344
    },
    {
      "Date": "2012-11",
      "scales": 1201
    },
    {
      "Date": "2012-12",
      "scales": 1065
    },
    {
      "Date": "2013-01",
      "scales": 1255
    },
    {
      "Date": "2013-02",
      "scales": 1429
    },
    {
      "Date": "2013-03",
      "scales": 1398
    },
    {
      "Date": "2013-04",
      "scales": 1678
    },
    {
      "Date": "2013-05",
      "scales": 1524
    },
    {
      "Date": "2013-06",
      "scales": 1688
    },
    {
      "Date": "2013-07",
      "scales": 1500
    },
    {
      "Date": "2013-08",
      "scales": 1670
    },
    {
      "Date": "2013-09",
      "scales": 1734
    },
    {
      "Date": "2013-10",
      "scales": 1699
    },
    {
      "Date": "2013-11",
      "scales": 1508
    },
    {
      "Date": "2013-12",
      "scales": 1680
    },
    {
      "Date": "2014-01",
      "scales": 1750
    },
    {
      "Date": "2014-02",
      "scales": 1602
    },
    {
      "Date": "2014-03",
      "scales": 1834
    },
    {
      "Date": "2014-04",
      "scales": 1722
    },
    {
      "Date": "2014-05",
      "scales": 1430
    },
    {
      "Date": "2014-06",
      "scales": 1280
    },
    {
      "Date": "2014-07",
      "scales": 1367
    },
    {
      "Date": "2014-08",
      "scales": 1155
    },
    {
      "Date": "2014-09",
      "scales": 1289
    },
    {
      "Date": "2014-10",
      "scales": 1104
    },
    {
      "Date": "2014-11",
      "scales": 1246
    },
    {
      "Date": "2014-12",
      "scales": 1098
    }
  ]
const DemoLine = () => {

  var config = {
    data: data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  };
  return <Line {...config} />;
};
export default DemoLine;