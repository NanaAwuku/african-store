import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className=' bg-primary py-12 text-white'>
      <div className=' container mx-auto'>
        <p className='text-white text-center'>
        Copyright @ {year} developed by Nana Awuku - All right reserved
        </p>
      </div>
    </footer>
  )
};

export default Footer;
