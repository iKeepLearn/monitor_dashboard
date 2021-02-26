import TinyArea  from "@ant-design/charts/lib/tinyArea";
const DemoTinyArea = (props) => {
  var data = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192,
  ];
  var config = {
    height: 40,
    autoFit: true,
    data: data,
    smooth: true,
    areaStyle: { fill: '#d6e3fd' },
  };
  return <TinyArea {...config} />;
};
export default DemoTinyArea;