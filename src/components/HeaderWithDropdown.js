'use client';

import { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const HeaderWithDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <div className="relative dropdown-trigger">
        <div
          className="flex items-center border rounded-full px-2 py-1 hover:shadow-md cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FaBars className="mr-2" />
          <FaUserCircle />
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
            <ul className="py-2">
              
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="/login"> Login for creatinf a new blog</a>
                  </li>
                  
             
            
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderWithDropdown;
