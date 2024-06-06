import React from 'react';
import Sidenavbar from '../components/sidenavbar/Sidenavbar.jsx'
import Searchbar from '../components/searchbar/Searchbar.jsx'

function Browsepcf() {
  return(
    <>
      <div className="flex flex-col h-screen">
        <Searchbar />
        <div className="flex flex-1">
          <Sidenavbar />
          <div className="flex-1 flex flex-col justify-top p-4 bg-slate-500 mt-20 ml-72">
            <div className="w-full overflow-x-hidden">

            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Browsepcf