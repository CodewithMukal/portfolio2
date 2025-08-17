import React from 'react'

export const Interest = () => {
  return (
    <div className='max-w-[1380px] w-full mt-10 flex flex-col md:flex-row gap-4  dark:text-white mx-auto'>
        <div className='w-full pl-[30px] border-b-[1px] md:border-b-0 border-black dark:border-white py-6 flex flex-col gap-[32px] font-["Inria_Sans"]'>
            <h1 className='text-4xl font-[Inter] font-semibold'>Interests</h1>
            <div>
                <ul className='text-[18px] flex flex-col gap-[32px] list-disc'>
                    <li>Frontend Development</li>
                    <li>Game Development</li>
                    <li>UI/UX</li>
                    <li>Machine Learning</li>
                    <li>Core Comp. Science</li>
                    <li>IOT</li>
                    <li id='skills'>Problem Solving</li>
                </ul>
            </div>
        </div>
        <div className='w-full pl-[30px] flex flex-col gap-[32px] py-6 font-["Inria_Sans"] border-b-[1px] md:border-x-[1px] md:border-b-0 border-black dark:border-white'>
            <h1 className='text-4xl font-[Inter] font-semibold'>Clubs</h1>
            <div>
                <ul className='text-[18px] flex flex-col gap-[32px] list-disc'>
                    <li>Google Developer Groups on Campus (GDGC)</li>
                    <li>FinNEST (Finance Club)</li>
                    <li>Institute's Innovation Council (IIC)</li>
                    <li>Vortex NITJ (Gaming Club)</li>
                </ul>
            </div>
        </div>
        <div className='w-full pl-[30px] flex flex-col gap-[32px] py-6 font-["Inria_Sans"]'>
            <h1 className='text-4xl font-[Inter] font-semibold'>Currently</h1>
            <div>
                <ul className='list-disc text-[18px] flex flex-col gap-[32px]'>
                    <li>
                        <h1 className='font-bold'>
                            C++
                        </h1>
                        <p className='font-[Inter] text-[14px]'>{"->"} Object Oriented Programming</p>
                        <p className='font-[Inter] mt-[5px] text-[14px]'>{"->"} Future plans include building Notepad, Physics Engine and 3D Renderer</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
