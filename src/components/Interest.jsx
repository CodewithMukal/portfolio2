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
                    <li>Problem Solving</li>
                </ul>
            </div>
        </div>
        <div className='w-full pl-[30px] flex flex-col gap-[32px] py-6 font-["Inria_Sans"] border-b-[1px] md:border-x-[1px] md:border-b-0 border-black dark:border-white'>
            <h1 className='text-4xl font-[Inter] font-semibold'>Clubs</h1>
            <div>
                <ul className='text-[18px] flex flex-col gap-[32px] list-disc'>
                    <li>Google Developer Groups on Campus (GDGC)</li>
                    <li>Indian Innovation Council (IIC)</li>
                    <li>Vortex NITJ (Gaming Club)</li>
                </ul>
            </div>
        </div>
        <div className='w-full pl-[30px] flex flex-col gap-[32px] py-6 font-["Inria_Sans"]'>
            <h1 className='text-4xl font-[Inter] font-semibold'>Currently Learning</h1>
            <div>
                <ul className='list-disc text-[18px] flex flex-col gap-[32px]'>
                    <li>
                        <h1 className='font-bold'>
                            WEB DEVELOPMENT
                        </h1>
                        <p className='font-[Inter] text-[14px]'>learning MERN stack and implementing in <br />real world applications.</p>
                        <p className='font-[Inter] mt-[5px] text-[14px]'>{"->"} building REST API's with NodeJS and <br /> Express</p>

                    </li>
                    <li>
                        <h1 className='font-bold'>
                            MACHINE LEARNING
                        </h1>
                        <p id='skills' className='font-[Inter] text-[14px]'>developing the basics of ML in Python <br />libraries like Pandas, Scikit Learn etc..</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}
