import React from 'react';
import SideNavBar from '../components/sidenavbar/SideNavBar';
import SearchBar from '../components/searchbar/SearchBar';
import TablePR from '../components/table/table-pr/TablePR';

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <SearchBar />
      <div className="flex flex-1">
        <SideNavBar />
        <div className="flex-1 flex flex-col justify-top p-4 bg-slate-500 mt-20 ml-72 overflow-hidden">
          <div className="w-full h-full overflow-auto">
            <TablePR/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
