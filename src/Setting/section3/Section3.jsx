import React from 'react'
import TextEd from './TextEd3'



const Section3 = () => {
  return (
   
    <>
    <div className="p-10 gap-3 ">
 <div className='mt-8'>

<h2 className="text-3xl font-semibold">Section 2:</h2>
<h6 className="text-zinc-500">Updated desired photos and detail here  </h6>
 </div>



 <div className="mt-8 flex gap-28">
  <h2 className='text-2xl font-semibold'>Title:</h2>
  <input className='form-input border text-zinc-800 text-[25px] px-4 ml-28  text-xl border-zinc-600 h-[45px]
  hover:bg-gray-200 focus:outline-1 w-[300px] rounded-md' 
  type='text'></input>
   <input className='form-input border text-zinc-500 text-[25px] px-4   text-xl border-zinc-600 h-[45px]
  hover:bg-gray-200 focus:outline-1 w-[300px] rounded-md' 
  type='text'></input>
 </div>
   
   <div className="mt-12 flex content-center gap-20  ">
    <div className="text ">
    <h2 className='text-2xl font-semibold'>Bio:</h2>
   <p className='text-zinc-600'>Write a short instruction</p>
   </div>
        
    <TextEd/>

   </div>

   <div className=" flex content-center gap-20 ">
   <div className="text mt-3">
        <h2 className='text-2xl font-semibold'> Image:</h2>
       <p className='text-zinc-600'>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.</p>
       
        </div>
     

     
     </div>

       
   <hr className='w-[100%] mt-8 h-14'/>


  </div>

    </>
  )}


export default Section3