import { RadialBar } from '@ant-design/plots';
const DemoPie = () => {
  const data = [
    {
      name: ' ',
      star: 297,
    },
    {
      name: '    ',
      star: 506,
    },
    {
      name: '  ',
      star: 805,
    },
    {
      name: '     ',
      star: 1100,
    },
  ];
  const config = {
    data,
    xField: 'name',
    yField: 'star',
    // maxAngle: 90, //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum) => {
        return {
          name: 'star数',
          value: datum.star,
        };
      },
    },
    colorField: 'star',
    color: ({ star }) => {
      if (star > 1000) {
        return '#9020E9';
      } else if (star > 800) {
        return '#54C2C1';
      }
      else if (star > 500) {
        return '#0F0F3F';
      }

      return '#F3BA2F';
    },
  };
  return <RadialBar {...config} />;
  };
  export default DemoPie;
  