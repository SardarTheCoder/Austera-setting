import React from 'react'
import logo from "./Image/Group.png"
const Navbar = () => {
  return (
     <>
     <div className="parent flex gap-6 p-5 content-centers">
        <div className="child1 flex flex-col">
            <img src={logo}/>
            <p className="font-bold font-serif">astera</p>
            
        </div>
        <div className="child2">
          <h1 className='text-4xl  font-semibold mt-2 font-serif'>Settings</h1>
        </div>
     </div>

     <nav className='mt-8'>
        <ul className='flex gap-3 text-xl text-zinc-500 font-bold p-5'>
            <li className="list-none  hover:text-purple-800
              hover:underline decoration-purple-800">
                Home
                </li>
            <li className="list-none hover:text-purple-800
             hover:underline decoration-purple-800">
                Discover
                </li>
            <li className="list-none hover:text-purple-800
             hover:underline decoration-purple-800">
                Collection
                </li>
            <li className="list-none hover:text-purple-800
             hover:underline decoration-purple-800">
                Catalogs
                </li>
            <li className="list-none hover:text-purple-800 
            hover:underline decoration-purple-800 ">
                Contact Us
                </li>
           
        </ul>
        <hr className='bg-gray-600 w-full'/>
     </nav>


    </>
  )
}

export default Navbar