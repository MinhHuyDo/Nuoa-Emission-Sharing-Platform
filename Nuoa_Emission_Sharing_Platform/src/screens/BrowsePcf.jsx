import React from 'react';
import SideNavBar from '../components/sidenavbar/SideNavBar';
import SearchBar from '../components/searchbar/SearchBar';
import TableAP from '../components/table/table-ap/TableAP';

function Browsepcf() {
  return(
    <>
      <div className="flex flex-col h-screen">
        <SearchBar />
        <div className="flex flex-1">
          <SideNavBar />
          <div className="flex-1 flex flex-col justify-top p-4 bg-slate-500 mt-20 ml-72">
            <div className="w-full overflow-x-hidden">
              <TableAP />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Browsepcf;