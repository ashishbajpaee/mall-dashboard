



import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  // Assuming `stackedCustomSeries` is an array of objects, e.g.:
  // [ { x: 'Jan', series1: 400, series2: 300 }, { x: 'Feb', series1: 500, series2: 200 }, ... ]
  const data = stackedCustomSeries;

  // Determine series keys (assuming the key for the category is 'x')
  const seriesKeys = data.length > 0 ? Object.keys(data[0]).filter(key => key !== 'x') : [];

  // Use provided colors if available; otherwise fallback to defaults
  const colors = (stackedPrimaryYAxis && stackedPrimaryYAxis.colors) || ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

  return (
    <div
      style={{
        width: width || '100%',
        height: height || 400,
        background: currentMode === 'Dark' ? '#33373E' : '#fff',
        padding: '1rem',
        borderRadius: '8px'
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={stackedPrimaryXAxis && stackedPrimaryXAxis.dataKey ? stackedPrimaryXAxis.dataKey : 'x'}
            stroke={currentMode === 'Dark' ? '#fff' : '#000'}
          />
          <YAxis stroke={currentMode === 'Dark' ? '#fff' : '#000'} />
          <Tooltip contentStyle={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }} />
          <Legend />
          {seriesKeys.map((key, index) => (
            <Bar key={key} dataKey={key} stackId="a" fill={colors[index % colors.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;
