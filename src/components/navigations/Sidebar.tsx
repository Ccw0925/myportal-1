import React, { useState } from "react";

const Nav: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav
      className={`transition-width relative flex flex-col bg-gray-900 duration-500 ${
        collapsed ? "w-6" : "w-64"
      }`}
    >
      <div
        className={`flex h-16 items-center justify-center border-b border-gray-800 ${
          collapsed ? "hidden" : ""
        }`}
      >
        <span className="text-2xl font-bold text-white">MySmart Portal</span>
      </div>
      <div className={`flex-1 overflow-y-auto ${collapsed ? "hidden" : ""}`}>
        <ul className="p-4">
          <li className="mb-4">
            <a href="#" className="text-gray-200 hover:text-white">
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-200 hover:text-white">
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-200 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button
        className="absolute right-[-10px] top-[10%] rounded-full bg-[#2D3748] text-gray-400 hover:text-white"
        onClick={handleCollapseToggle}
      >
        {collapsed ? (
          <div className="flex h-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right h-6 w-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span className="sr-only">Expand</span>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left h-6 w-6"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span className="sr-only">Collapse</span>
          </div>
        )}
      </button>
    </nav>
  );
};

export default Nav;
