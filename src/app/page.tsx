"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

function Home() {

const [counter, setCounter] = useState(7)

//counter default = 15

const addValue =()=>{
  setCounter(counter + 1)
}

const removeValue =()=>{
  setCounter(counter - 1)
}

  return (
   <div className='grid grid-cols-3 bg-gradient-to-br from-black to-slate-600 w-screen h-screen   '> 
   <div className='flex items-center justify-center  w-full h-full col-start-2 col-end-3 mb-10  '>
   <Image src="/bismillah.png" alt="" width={200} height={100}  ></Image>
   </div>
   <div className='grid col-start-2 col-end-3 row-start-2 justify-center font-bold text-[12px] md:text-[20px] lg:text-[30px] text-gray-500 lg:mr-2'>Counter value: <span className='lg:ml-14 pl-10 text-amber-200'>{counter}</span></div>
   <div className='grid md:w-[200px] md:h-[50px] lg:h-[50px] w-[100px] h-[30px] text-[12px] md:text-[20px] lg:text-[30px] col-start-1 row-start-3 ml-3 sm:ml-14 lg:ml-15 font-bold text-amber-300 border-2 rounded-full border-yellow-400'>
   <button onClick={addValue} className=''>Add Value </button>
   </div>
   <br/>
   <div className='grid md:w-[200px] lg:w-[250px] md:h-[50px] lg:h-[50px] w-[100px] h-[30px] col-start-3 row-start-3 ml-4 sm:ml-14 lg:ml-20 text-[12px] md:text-[20px] lg:text-[30px] font-bold text-amber-300 border-2 rounded-full border-yellow-400'>
   <button onClick={removeValue} className=''>Remove Value </button>
   </div>
   
   
   </div>
  )
}

export default Home