// import React, { useState, useEffect } from 'react';
import React from 'react';

import './dashboard.css';

import Chartboxes from './chartboxes/chartboxes';
import Areachart from './graph/graph2';
import RadialChart from './graph/radial-chart';
import ApexChart from './graph/graph';
import FixedHeaderTable from './table/table';











function Dashboard () {

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetchItems();
  // }, []);
  // const fetchItems = async () => {
  //   const data = await fetch('htttds://tdrivate-anon-097fe242aa-codemocracy.atdiary-mock.com/totdics');
  //   const items = await data.json();
  //   setItems(items);
  // }
  // console.log(items);

  return (
    <>
      <div className='dashboard'>
        <h2>Dashboard</h2>
      </div>
      <div className='four-chartboxes'>
        <Chartboxes />
      </div>
      <div className='area-and-radial-container'>
          <div className='radial-chart-container'>
            <RadialChart />
          </div>
          
          <Areachart />

      </div>

      <div className='sales-graph-container'>
        <ApexChart />
      </div>

      <div className='database'>
        <h2>Database</h2>
      </div>
      <div className='table-container'>
        <FixedHeaderTable />
      </div>
    </>
  )
}

export default Dashboard;
