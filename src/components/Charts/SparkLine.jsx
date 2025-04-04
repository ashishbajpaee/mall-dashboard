

import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <div id={id} style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip formatter={(value, name, props) => [`${props.payload.x} : data ${value}`, name]} />
          <Line type={type || "monotone"} dataKey="yval" stroke={currentColor} strokeWidth={2} dot={{ r: 2.5, fill: currentColor }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
