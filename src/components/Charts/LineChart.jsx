
import React from 'react';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { lineCustomSeries } from '../../data/dummy';

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div style={{ width: '100%', height: 420, background: currentMode === 'Dark' ? '#33373E' : '#33373E', padding: '1rem', borderRadius: '8px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart data={lineCustomSeries}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" stroke={currentMode === 'Dark' ? '#fff' : '#000'} />
          <YAxis stroke={currentMode === 'Dark' ? '#fff' : '#000'} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} dot={false} />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
