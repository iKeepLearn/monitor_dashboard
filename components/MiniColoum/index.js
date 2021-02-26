import TinyColumn from '@ant-design/charts/lib/tinyColumn';
const DemoTinyColumn = () => {
  var data = [274, 337, 81, 497, 666, 219, 269, 5, 6, 7, 87, 2, 3, 4, 5, 6];
  var config = {
    height: 40,
    autoFit: true,
    data: data,
    tooltip: {
      customContent: function customContent(x, data) {
        var _data$, _data$$data;
        return 'NO.'
          .concat(x, ': ')
          .concat(
            (_data$ = data[0]) === null || _data$ === void 0
              ? void 0
              : (_data$$data = _data$.data) === null || _data$$data === void 0
              ? void 0
              : _data$$data.y.toFixed(2),
          );
      },
    },
  };
  return <TinyColumn {...config} />;
};
export default DemoTinyColumn;