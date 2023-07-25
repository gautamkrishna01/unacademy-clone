import React from 'react';
import img from '../asset/logo.svg';
const Navbar = () => {
  return (
    <>
      <div className='flex justify-center h-[50px] bg-white w-[100%] items-center my-4 sticky top-0 '>
        <div className='flex justify-between w-full max-w-[1300px]'>
          <div className='left'>
            <img src={img} />
          </div>
          <div className='flex gap-6'>
            <button className='px-[40px] py-[10px] rounded-md bg-white text-[#4C6C88] border border-black  font-bold'>
              Login
            </button>
            <button className='px-[40px] py-[10px]  text-white rounded-md bg-[#3C4953]  border border-black  font-bold'>
              Join for free
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
