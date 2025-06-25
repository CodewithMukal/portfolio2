import React from 'react'

export const SideBar = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900'>
            <div className='text-2xl font-bold text-gray-800 dark:text-gray-200'>SideBar</div>
            <ul className='mt-4 space-y-2'>
            <li className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer'>Home</li>
            <li className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer'>About</li>
            <li className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer'>Projects</li>
            <li className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}
