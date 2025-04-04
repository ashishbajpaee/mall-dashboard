
import React from 'react';
import Chart from 'react-apexcharts';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  const data = [...PyramidData].reverse();
  const series = data.map(item => item.y);
  const labels = data.map(item => item.x);

  const options = {
    chart: {
      type: 'funnel',
      background: currentMode === 'Dark' ? '#33373E' : '#fff'
    },
    plotOptions: {
      funnel: {
        curve: 'smooth',
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '14px',
            colors: ['#fff']
          }
        }
      }
    },
    labels: labels,
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: currentMode === 'Dark' ? '#fff' : '#000'
      }
    },
    tooltip: {
      enabled: true,
      theme: currentMode === 'Dark' ? 'dark' : 'light'
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.seriesIndex] + ': ' + val;
      }
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <Chart options={options} series={series} type="funnel" height={400} />
      </div>
    </div>
  );
};

export default Pyramid;
