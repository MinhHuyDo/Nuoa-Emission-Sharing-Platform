import React, { useState, useEffect, useRef } from 'react';
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation } from 'react-router-dom';

function SideNavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const subMenuPaths = [
    '/my-published-pcfs',
    '/my-published-pcfs/new-pcf',
    '/incoming-requests',
    '/my-published-pcfs/pcf-detail',
    '/my-published-pcfs/update-pcf'
  ];

  const isSubMenuInitiallyOpen = subMenuPaths.includes(currentPath);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(isSubMenuInitiallyOpen);
  const [isIconChanged, setIsIconChanged] = useState(isSubMenuInitiallyOpen);

  const subMenuRef = useRef(null);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setIsIconChanged(!isIconChanged);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        if (!subMenuPaths.includes(currentPath)) {
          setIsSubMenuOpen(false);
          setIsIconChanged(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [currentPath]);

  useEffect(() => {
    if (subMenuPaths.includes(currentPath)) {
      setIsSubMenuOpen(true);
      setIsIconChanged(true);
    } else {
      setIsSubMenuOpen(false);
      setIsIconChanged(false);
    }
  }, [currentPath]);

  const getNavItemClasses = (path) => {
    return `text-2xl font-medium flex items-center p-2 rounded-lg hover:bg-gray-200 ${currentPath === path ? 'bg-gray-200' : ''}`;
  };

  const getSubNavItemClasses = (paths) => {
    return `text-xl font-medium flex items-center p-2 rounded-lg hover:bg-gray-200 ${paths.includes(currentPath) ? 'bg-gray-200' : ''}`;
  };

  return (
    <div className="fixed top-0 left-0 w-72 h-full overflow-x-hidden bg-white border-r border-black shadow-lg">
      <nav className="flex flex-col h-full">
        {/* Sidebar - Brand */}
        <a className="h-20 flex items-center justify-center" href="/">
          <img
            src="/assets/logo/nuoa-logo.jpg"
            alt="Brand Logo"
            className="max-h-full max-w-full object-contain"
          />
        </a>

        <ul className="flex flex-col space-y-4 mt-4">
          {/* Nav Item - Home */}
          <li className="mx-4">
            <a className={getNavItemClasses('/')} href="/">
              <i className="px-3 fa-solid fa-house w-1/4"></i>
              <span>Home</span>
            </a>
          </li>

          {/* Nav Item - My PCFs */}
          <li className="mx-4" ref={subMenuRef}>
            <div
              className={`text-2xl font-medium flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer`}
              onClick={handleSubMenuToggle}
            >
              <i className={`px-3 w-1/4 ${isIconChanged ? 'fa-regular fa-folder-open' : 'fa-solid fa-folder'}`}></i>
              <span>My PCFs</span>

              <i className={`ml-auto transition-transform ${isSubMenuOpen ? 'rotate-0' : 'rotate-90'}`}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </i>
            </div>
            {isSubMenuOpen && (
              <ul className="flex flex-col space-y-2">
                <li>
                  <a className={getSubNavItemClasses([
                    '/my-published-pcfs',
                    '/my-published-pcfs/new-pcf',
                    '/my-published-pcfs/pcf-detail',
                    '/my-published-pcfs/update-pcf'
                  ])} href="/my-published-pcfs">
                    <i className="px-4 fa-regular fa-circle fa-2xs w-1/4"></i>
                    <span>My Published PCFs</span>
                  </a>
                </li>

                <li>
                  <a className={getSubNavItemClasses(['/incoming-requests'])} href="/incoming-requests">
                    <i className="px-4 fa-regular fa-circle fa-2xs w-1/4"></i>
                    <span>Incoming Requests</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Nav Item - Browse PCFs */}
          <li className="mx-4">
            <a className={getNavItemClasses('/browse-pcfs')} href="/browse-pcfs">
              <i className="px-3 fa-solid fa-magnifying-glass w-1/4"></i>
              <span>Browse PCFs</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNavBar;
