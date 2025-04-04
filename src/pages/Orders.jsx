

import React from 'react';
import DataTable from 'react-data-table-component';
import { Header } from '../components';
import { ordersData, ordersGrid } from '../data/dummy';
import 'jspdf-autotable';

const Orders = () => {
  const columns = ordersGrid.map((col) => ({
    name: col.headerText,
    selector: (row) => row[col.field],
    sortable: true,
  }));

 

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Available" title="Products" />
      
    

      <DataTable
        columns={columns}
        data={ordersData}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default Orders;
