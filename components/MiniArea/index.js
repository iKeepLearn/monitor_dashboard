import TinyArea from "@ant-design/charts/lib/tinyArea";
const DemoTinyArea = ({ data }) => {
  var config = {
    height: 40,
    autoFit: true,
    data,
    smooth: true,
    areaStyle: { fill: '#d6e3fd' },
  };
  return <TinyArea {...config} />;
};
export default DemoTinyArea;