

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { ChartsHeader } from '../../components';
import { 
  colorMappingData, 
  ColorMappingPrimaryXAxis, 
  ColorMappingPrimaryYAxis, 
  rangeColorMapping 
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();
  const data = colorMappingData[0]; // Assumes an array of objects with keys: 'x' and 'y'

  // Function to determine the fill color based on the y-value using rangeColorMapping.
  const getFillColor = (value) => {
    let fillColor = '#8884d8'; // Default color
    rangeColorMapping.forEach((range) => {
      if (value >= range.start && value <= range.end) {
        fillColor = range.color;
      }
    });
    return fillColor;
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={ColorMappingPrimaryXAxis?.dataKey || 'x'}
              stroke={currentMode === 'Dark' ? '#fff' : '#000'}
              {...ColorMappingPrimaryXAxis}
            />
            <YAxis
              stroke={currentMode === 'Dark' ? '#fff' : '#000'}
              {...ColorMappingPrimaryYAxis}
            />
            <Tooltip contentStyle={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }} />
            <Legend />
            <Bar dataKey="y" label={{ position: 'top' }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getFillColor(entry.y)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ColorMapping;
