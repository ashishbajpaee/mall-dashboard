
import React from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  ErrorBar,
} from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

const date1 = new Date('2017, 1, 1');
const filteredData = financialChartData.filter((entry) => new Date(entry.x) >= date1);

const processedData = filteredData.map((entry) => {
  const { high, low } = entry;
  const mid = (high + low) / 2;
  return {
    ...entry,
    mid,
   
    error: [mid - low, high - mid],
  };
});

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="History" />
      <div className="w-full" style={{ background: currentMode === 'Dark' ? '#33373E' : '#fff' }}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={processedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              stroke={currentMode === 'Dark' ? '#fff' : '#000'}
              {...FinancialPrimaryXAxis}
            />
            <YAxis stroke={currentMode === 'Dark' ? '#fff' : '#000'} {...FinancialPrimaryYAxis} />
            <Tooltip contentStyle={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }} />
            <Legend />
            {/* Render a Line at the midpoint of the High-Low range */}
            <Line type="monotone" dataKey="mid" name="Apple Inc" stroke="#8884d8" strokeWidth={2} dot={false} />
            {/* Use ErrorBar to display the low/high range relative to the midpoint */} 
            <ErrorBar dataKey="error" width={4} strokeWidth={2} stroke="#8884d8" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financial;
