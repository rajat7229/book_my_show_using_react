import React from 'react'
import Navbar from '../components/Navbar/Navbar.component';

const DefaultLayoutHoc = (Component) => ({ ...props }) => {
  return (
    <div>
        <Navbar />
        <Component {...props } />
        <div>footer</div>
        </div>
  );
};

export default DefaultLayoutHoc;