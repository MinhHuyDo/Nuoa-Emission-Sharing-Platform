import React from 'react';
import Sidenavbar from '../components/sidenavbar/Sidenavbar.jsx';
import Searchbar from '../components/searchbar/Searchbar.jsx';
import Table from '/src/components/table/Table.jsx';

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Searchbar />
      <div className="flex flex-1">
        <Sidenavbar />
        <div className="flex-1 flex flex-col justify-top p-4 bg-slate-500 mt-20 ml-72">
          <div className="w-full overflow-x-hidden">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

