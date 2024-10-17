import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#AC7B3C]  py-4 px-8 flex justify-between items-center">
      <div className="text-3xl font-bold ml-20 text-white">Hot Eek</div>
      <nav className="space-x-8">
        <Link to="/" className="text-white text-xl ">Home</Link>
        <Link to="category" className="text-white text-xl ">Categories</Link>
        <Link to="/about" className="text-white text-xl ">About Us</Link>
      </nav>
      <div className="flex space-x-6 items-center mr-20">
        <input 
          type="text" 
          placeholder="Search..." 
          className="border rounded-full py-1 px-4 text-sm focus:outline-none focus:border-blue-500"
        />
       <button className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5 6m2 7l1.5 6h9l1.5-6M16 16a1 1 0 100 2 1 1 0 000-2zM10 16a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
        </button>
        <button className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.28 0 4.01-1.72 4.01-3.98 0-2.26-1.73-4.02-4.01-4.02S8 6.74 8 9c0 2.28 1.73 3.98 4 3.98zM12 13c-3.27 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
