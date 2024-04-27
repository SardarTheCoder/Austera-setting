import React from 'react'
import UpImg from './UpImg'



const Section1 = () => {
  return (
    <>
    <div className="p-10 gap-3 ">

    <h2 className=" mt-4 text-3xl font-semibold ">Title for Home page:</h2>
    <h6 className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus culpa repellat at aliquam labore mod Minima doloribus culpa repellat at aliquam </h6>
     <div className='mt-10'>

    <h2 className="text-3xl font-semibold">Section 1:</h2>
    <h6 className="text-zinc-500">Updated desired photos and detail here  </h6>
     </div>



     <div className="mt-8 flex gap-28">
      <h2 className='text-2xl font-semibold'>Hero Section title:</h2>
      <input className='form-input border text-zinc-800 text-[25px] px-4 ml-28  text-xl border-zinc-600 h-[45px]
      hover:bg-gray-200 focus:outline-1 w-[300px] rounded-md' 
      type='text'></input>
       <input className='form-input border text-zinc-500 text-[25px] px-4   text-xl border-zinc-600 h-[45px]
      hover:bg-gray-200 focus:outline-1 w-[300px] rounded-md' 
      type='text'></input>
     </div>
       
       <div className="mt-20 flex content-center gap-28 p-5 ">
        <div className="text mt-8">
        <h2 className='text-2xl font-semibold'>Hero Image:</h2>
       <p className='text-zinc-600'>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.</p>
       
        </div>
        <UpImg/>

       </div>

           
       <hr className='w-[100%] mt-10 h-14'/>


    </div>
    </>
  )
}

export default Section1