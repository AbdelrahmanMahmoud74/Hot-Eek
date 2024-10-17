// Layout.js
import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='root-layout'>
      <Header />
      <main className='w-full'>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
