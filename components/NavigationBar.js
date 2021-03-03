import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-white-600 p-3 '>
      <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            
            <img src='workspace-logo.svg' alt='workspace'width="150" height="90"></img>
          </a>
        </Link> 
        <div className='origin-top-right right-5 mt-2 -mr-1 w-48'>
        <Link href='/'>
              <a id='headcomp' className='lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black '>
              Sign Up
              </a>
            </Link> 
            <Link href='/'>
              <a id='headcomp'className='lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black '>
               Login
              </a>
            </Link> 
      </div>     
	  
	  
        <button
        id='headcomp'
          className=' inline-flex p-4 hover:bg-yellow-600 rounded lg:hidden text-black ml-auto hover:text-black outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a id='headcomp' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black '>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a id='headcomp' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                Services
              </a>
            </Link>
            <Link href='/'>
              <a id='headcomp' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a id='headcomp' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};