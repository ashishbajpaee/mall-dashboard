


import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

import { ChartsHeader } from '../../components';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const BarComponent = () => {
  const { currentMode } = useStateContext();

  // Combine data from multiple series into a single array.
  // Assuming each series has a dataSource array with objects, and all series share the same x-axis categories.
  const combinedData = [];
  if (barCustomSeries && barCustomSeries.length > 0) {
    // Use the x values from the first series
    barCustomSeries[0].dataSource.forEach((dataPoint, index) => {
      const combinedPoint = { x: dataPoint[barCustomSeries[0].xName] };
      barCustomSeries.forEach(series => {
        // For each series, add the y value keyed by series name
        combinedPoint[series.name] = series.dataSource[index] ? series.dataSource[index][series.yName] : null;
      });
      combinedData.push(combinedPoint);
    });
  }

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Sales" />
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              stroke={currentMode === 'Dark' ? '#fff' : '#000'}
              {...barPrimaryXAxis}
            />
            <YAxis stroke={currentMode === 'Dark' ? '#fff' : '#000'} {...barPrimaryYAxis} />
            <Tooltip contentStyle={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }} />
            <Legend />
            {barCustomSeries.map((series, index) => (
              <Bar
                key={index}
                dataKey={series.name}
                fill={series.fill}
                // Use stackId if you want the bars to stack
                stackId="a"
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarComponent;
