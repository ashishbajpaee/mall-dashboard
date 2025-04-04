
import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24 p-4">
     
      <div className="flex flex-wrap gap-40 justify-center mb-6">
        <button
          className="text-white px-10 py-3 rounded-lg shadow-md"
          style={{ backgroundColor: currentColor }}
        >
          Transactions: {`45`}
        </button>
        <button
          className="text-white px-10 py-3 rounded-lg shadow-md"
          style={{ backgroundColor: currentColor }}
        >
          Active Users :  {`45`}
        </button>
        <button
          className="text-white px-10 py-3 rounded-lg shadow-md"
          style={{ backgroundColor: currentColor }}
        >
          Total Revenue : {`45`}
        </button>
      </div>

      <div className="bg-white mt-20 dark:bg-secondary-dark-bg p-6 rounded-2xl shadow-md w-[600px] h-[500px] ml-80 text-center border border-gray-300 dark:border-gray-600">
  <h2 className="text-2xl font-semibold mb-4">Check Receipt Generation</h2>
  <p className="text-gray-600 dark:text-gray-300">
    View and verify generated receipts from recent transactions here.
  </p>
       
      </div>
    </div>
  );
};

export default Ecommerce;
